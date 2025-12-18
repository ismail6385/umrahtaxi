"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Calendar, MapPin, Phone, User, Clock, Car, Mail, ArrowRight, ArrowLeft, Check, Users, Briefcase, Wallet } from 'lucide-react';
import { supabase, vehicles, type BookingData } from '@/lib/supabase';
import { getPrice } from '@/lib/pricing';

const POPULAR_ROUTES = [
    { id: 'custom', label: 'Custom Location (Enter below)' },
    // Core intercity routes
    { id: 'jeddah-makkah', from: 'Jeddah Airport', to: 'Makkah Hotel', label: 'Jeddah Airport → Makkah' },
    { id: 'makkah-madinah-hotel', from: 'Makkah Hotel', to: 'Madinah Hotel', label: 'Makkah → Madinah Hotel' },
    { id: 'makkah-madinah-badr-ziyarat', from: 'Makkah', to: 'Madinah (via Badr Ziyarat)', label: 'Makkah → Madinah (via Baddar Ziyarat)' },
    { id: 'makkah-ziyarat-tour', from: 'Makkah Hotel', to: 'Makkah Ziyarat Tour', label: 'Makkah Ziyarat Tour' },
    { id: 'madinah-hotel-airport', from: 'Madinah Hotel', to: 'Madinah Airport', label: 'Madinah Hotel → Madinah Airport' },
    { id: 'madinah-ziyarat-tour', from: 'Madinah Hotel', to: 'Madinah Ziyarat Tour', label: 'Madinah Ziyarat Tour' },
    { id: 'madinah-hotel-train', from: 'Madinah Hotel', to: 'Madinah Train Station', label: 'Madinah Hotel → Train Station' },
    { id: 'madinah-hotel-jeddah-airport', from: 'Madinah Hotel', to: 'Jeddah Airport', label: 'Madinah Hotel → Jeddah Airport' },
    { id: 'makkah-hotel-train', from: 'Makkah Hotel', to: 'Makkah Train Station', label: 'Makkah Hotel → Train Station' },
    { id: 'makkah-hotel-jeddah-airport', from: 'Makkah Hotel', to: 'Jeddah Airport', label: 'Makkah Hotel → Jeddah Airport' },
];

export default function BookingForm() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

    const [formData, setFormData] = useState<BookingData>({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        pickup_location: '',
        destination: '',
        pickup_date: '',
        pickup_time: '',
        vehicle_type: '',
        vehicle_image: '',
        passengers: 1,
        luggage: 0,
        special_requests: '',
        status: 'pending'
    });

    const searchParams = useSearchParams();

    useEffect(() => {
        const vehicleParam = searchParams.get('vehicle');
        const serviceParam = searchParams.get('service');

        if (vehicleParam) {
            const selectedVehicle = vehicles.find(v => v.name === vehicleParam);
            if (selectedVehicle) {
                setFormData(prev => ({
                    ...prev,
                    vehicle_type: selectedVehicle.name,
                    vehicle_image: selectedVehicle.image,
                    passengers: selectedVehicle.passengers,
                    luggage: selectedVehicle.luggage
                }));
            }
        }

        if (serviceParam) {
            setFormData(prev => ({
                ...prev, // Keep existing fields
                special_requests: prev.special_requests ? `${prev.special_requests}. Service: ${serviceParam}` : `Service: ${serviceParam}`
            }));
            // If service implies a location (e.g. Airport), we could pre-fill pickup/dropoff too but text is simpler
        }
    }, [searchParams]);

    // Calculate price whenever relevant fields change
    useEffect(() => {
        if (formData.pickup_location && formData.destination && formData.vehicle_type) {
            const price = getPrice(formData.pickup_location, formData.destination, formData.vehicle_type);
            setCalculatedPrice(price);
        } else {
            setCalculatedPrice(null);
        }
    }, [formData.pickup_location, formData.destination, formData.vehicle_type]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Convert numeric fields to numbers
        const numericFields = ['passengers', 'luggage'];
        setFormData(prev => ({
            ...prev,
            [name]: numericFields.includes(name) ? Number(value) || 0 : value
        }));
    };

    const selectVehicle = (vehicle: typeof vehicles[0]) => {
        setFormData({
            ...formData,
            vehicle_type: vehicle.name,
            vehicle_image: vehicle.image,
            passengers: vehicle.passengers,
            luggage: vehicle.luggage
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Include price in special requests if calculated, so it's saved in DB
            const finalFormData = {
                ...formData,
                special_requests: calculatedPrice
                    ? `${formData.special_requests ? formData.special_requests + '. ' : ''}Quoted Price: SAR ${calculatedPrice}`
                    : formData.special_requests
            };

            // Save to Supabase
            const { data, error } = await supabase
                .from('bookings')
                .insert([finalFormData])
                .select();

            if (error) throw error;

            console.log('Booking saved successfully:', data[0]);

            // Send emails (non-blocking - don't fail booking if emails fail)
            try {
                const emailResponse = await fetch('/api/send-booking-emails', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        booking: data[0],
                        price: calculatedPrice // Pass explicitly to API
                    })
                });

                if (!emailResponse.ok) {
                    const errorData = await emailResponse.json().catch(() => ({}));
                    console.error('Email API error:', {
                        status: emailResponse.status,
                        statusText: emailResponse.statusText,
                        error: errorData
                    });
                    // Log full error details
                    console.error('Full error details:', JSON.stringify(errorData, null, 2));
                } else {
                    const result = await emailResponse.json();
                    console.log('Emails sent successfully:', result);
                }
            } catch (emailError) {
                console.error('Email sending failed (booking still saved):', emailError);
            }

            setSuccess(true);
            setStep(4); // Success step
        } catch (error) {
            console.error('Error:', error);
            alert('Booking failed. Please try again or contact us directly.');
        } finally {
            setLoading(false);
        }
    };

    const nextStep = () => {
        if (step === 1 && (!formData.customer_name || !formData.customer_email || !formData.customer_phone)) {
            alert('Please fill all required fields');
            return;
        }
        if (step === 2 && (!formData.pickup_location || !formData.destination || !formData.pickup_date || !formData.pickup_time || !formData.vehicle_type)) {
            alert('Please fill all required fields and select a vehicle');
            return;
        }
        setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    return (
        <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-3xl shadow-xl w-full max-w-2xl mx-auto relative overflow-hidden">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? 'bg-primary text-black' : 'bg-gray-200 text-gray-500'
                                }`}>
                                {step > s ? <Check className="w-5 h-5" /> : s}
                            </div>
                            {s < 3 && (
                                <div className={`h-1 w-12 sm:w-20 mx-2 transition-all ${step > s ? 'bg-primary' : 'bg-gray-200'
                                    }`} />
                            )}
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900">
                        {step === 1 && 'Your Details'}
                        {step === 2 && 'Trip & Vehicle'}
                        {step === 3 && 'Confirm Booking'}
                        {step === 4 && 'Booking Confirmed!'}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                        {step === 1 && 'Tell us about yourself'}
                        {step === 2 && 'Where and when do you need a ride?'}
                        {step === 3 && 'Review and confirm your booking'}
                        {step === 4 && 'We\'ll contact you shortly'}
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Step 1: User Details */}
                {step === 1 && (
                    <div className="space-y-5 animate-fade-in-up">
                        <div className="relative group/input">
                            <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                            <Input
                                name="customer_name"
                                placeholder="Full Name *"
                                required
                                value={formData.customer_name}
                                className="pl-10 h-12 bg-gray-50 border-gray-300 text-gray-900 focus:border-primary focus:bg-white transition-all rounded-xl"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="relative group/input">
                            <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                            <Input
                                name="customer_email"
                                type="email"
                                placeholder="Email Address *"
                                required
                                value={formData.customer_email}
                                className="pl-10 h-12 bg-gray-50 border-gray-300 text-gray-900 focus:border-primary focus:bg-white transition-all rounded-xl"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="relative group/input">
                            <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                            <Input
                                name="customer_phone"
                                type="tel"
                                placeholder="Phone Number (WhatsApp) *"
                                required
                                value={formData.customer_phone}
                                className="pl-10 h-12 bg-gray-50 border-gray-300 text-gray-900 focus:border-primary focus:bg-white transition-all rounded-xl"
                                onChange={handleChange}
                            />
                        </div>

                        <Button
                            type="button"
                            onClick={nextStep}
                            className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-6 text-lg rounded-xl"
                        >
                            Continue <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                )}

                {/* Step 2: Trip Details & Vehicle Selection */}
                {step === 2 && (
                    <div className="space-y-5 animate-fade-in-up">

                        {/* Quick Route Selection */}
                        <div className="bg-gray-50/50 p-2 rounded-xl border border-dashed border-gray-200">
                            <label className="text-xs font-semibold text-gray-500 ml-2 mb-1 block">Quick Select Route (Optional)</label>
                            <Select onValueChange={(value) => {
                                if (value === 'custom') {
                                    setFormData(prev => ({ ...prev, pickup_location: '', destination: '' }));
                                } else {
                                    const route = POPULAR_ROUTES.find(r => r.id === value);
                                    if (route) {
                                        setFormData(prev => ({
                                            ...prev,
                                            pickup_location: route.from || '',
                                            destination: route.to || ''
                                        }));
                                    }
                                }
                            }}>
                                <SelectTrigger className="w-full bg-white border-gray-200">
                                    <SelectValue placeholder="Select a popular route..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {POPULAR_ROUTES.map((route) => (
                                        <SelectItem key={route.id} value={route.id}>
                                            {route.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-1">
                            <p className="text-xs text-center text-gray-400">- OR Enter Custom Locations -</p>
                        </div>

                        {/* Route fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative group/input">
                                <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                                <Input
                                    name="pickup_location"
                                    placeholder="Pickup Location *"
                                    required
                                    value={formData.pickup_location}
                                    className="pl-10 h-12 bg-gray-50 border-gray-300 text-gray-900 focus:border-primary focus:bg-white transition-all rounded-xl"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="relative group/input">
                                <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                                <Input
                                    name="destination"
                                    placeholder="Destination *"
                                    required
                                    value={formData.destination}
                                    className="pl-10 h-12 bg-gray-50 border-gray-300 text-gray-900 focus:border-primary focus:bg-white transition-all rounded-xl"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Vehicle Selection - under route */}
                        <div className="space-y-3">
                            <h4 className="text-lg font-bold text-gray-900">Choose Your Vehicle *</h4>
                            <Select
                                value={formData.vehicle_type || undefined}
                                onValueChange={(value) => {
                                    const vehicle = vehicles.find(v => v.name === value);
                                    if (vehicle) {
                                        selectVehicle(vehicle);
                                    }
                                }}
                            >
                                <SelectTrigger className="w-full bg-white border-gray-200">
                                    <SelectValue placeholder="Select vehicle type..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {vehicles.map((vehicle) => (
                                        <SelectItem key={vehicle.name} value={vehicle.name}>
                                            {vehicle.name} — {vehicle.passengers} pax, {vehicle.luggage} luggage
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {formData.vehicle_type && (
                                <p className="text-xs text-gray-600">
                                    Selected: <span className="font-semibold text-gray-900">{formData.vehicle_type}</span>
                                </p>
                            )}
                        </div>

                        {/* Passenger count */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative group/input">
                                <Users className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                                <Input
                                    name="passengers"
                                    type="number"
                                    min={1}
                                    max={50}
                                    placeholder="Number of Passengers *"
                                    required
                                    value={formData.passengers}
                                    className="pl-10 h-12 bg-gray-50 border-gray-300 text-gray-900 focus:border-primary focus:bg-white transition-all rounded-xl"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Date & time */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative group/input">
                                <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                                <Input
                                    name="pickup_date"
                                    type="date"
                                    required
                                    value={formData.pickup_date}
                                    className="pl-10 h-12 bg-gray-50 border-gray-300 text-gray-900 focus:border-primary focus:bg-white transition-all rounded-xl"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="relative group/input">
                                <Clock className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                                <Input
                                    name="pickup_time"
                                    type="time"
                                    required
                                    value={formData.pickup_time}
                                    className="pl-10 h-12 bg-gray-50 border-gray-300 text-gray-900 focus:border-primary focus:bg-white transition-all rounded-xl"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button
                                type="button"
                                onClick={prevStep}
                                variant="outline"
                                className="flex-1 py-6 text-lg rounded-xl"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" /> Back
                            </Button>
                            <Button
                                type="button"
                                onClick={nextStep}
                                className="flex-1 bg-primary hover:bg-primary/90 text-black font-bold py-6 text-lg rounded-xl"
                            >
                                Continue <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                    <div className="space-y-5 animate-fade-in-up">
                        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                            <h4 className="font-bold text-lg text-gray-900 mb-4">Booking Summary</h4>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Name:</span>
                                    <span className="font-semibold text-gray-900">{formData.customer_name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Email:</span>
                                    <span className="font-semibold text-gray-900">{formData.customer_email}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Phone:</span>
                                    <span className="font-semibold text-gray-900">{formData.customer_phone}</span>
                                </div>
                                <div className="border-t border-gray-200 my-3"></div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">From:</span>
                                    <span className="font-semibold text-gray-900">{formData.pickup_location}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">To:</span>
                                    <span className="font-semibold text-gray-900">{formData.destination}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Date & Time:</span>
                                    <span className="font-semibold text-gray-900">{formData.pickup_date} at {formData.pickup_time}</span>
                                </div>
                                <div className="border-t border-gray-200 my-3"></div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Vehicle:</span>
                                    <span className="font-semibold text-gray-900">{formData.vehicle_type}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Capacity:</span>
                                    <span className="font-semibold text-gray-900">{formData.passengers} passengers, {formData.luggage} luggage</span>
                                </div>

                                <div className="border-t border-gray-200 my-3"></div>
                                <div className="flex justify-between items-center bg-primary/10 p-3 rounded-lg border border-primary/20">
                                    <span className="text-gray-800 font-bold flex items-center">
                                        <Wallet className="w-4 h-4 mr-2" /> Total Price:
                                    </span>
                                    <span className="font-bold text-lg text-black">
                                        {calculatedPrice ? `SAR ${calculatedPrice}` : 'Calculated upon confirmation'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button
                                type="button"
                                onClick={prevStep}
                                variant="outline"
                                className="flex-1 py-6 text-lg rounded-xl"
                                disabled={loading}
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" /> Back
                            </Button>
                            <Button
                                type="submit"
                                className="flex-1 bg-primary hover:bg-primary/90 text-black font-bold py-6 text-lg rounded-xl"
                                disabled={loading}
                            >
                                {loading ? 'Booking...' : 'Confirm Booking'} <Check className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </div>
                )}

                {/* Step 4: Success */}
                {step === 4 && success && (
                    <div className="text-center space-y-6 animate-fade-in-up py-8">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                            <Check className="w-10 h-10 text-black" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h3>
                        <p className="text-gray-600">
                            Thank you for choosing Taxi Service KSA. We've sent a confirmation email to <strong>{formData.customer_email}</strong>.
                            Our team will contact you shortly to confirm your booking.
                        </p>
                        <Button
                            type="button"
                            onClick={() => {
                                setStep(1);
                                setSuccess(false);
                                setCalculatedPrice(null);
                                setFormData({
                                    customer_name: '',
                                    customer_email: '',
                                    customer_phone: '',
                                    pickup_location: '',
                                    destination: '',
                                    pickup_date: '',
                                    pickup_time: '',
                                    vehicle_type: '',
                                    vehicle_image: '',
                                    passengers: 1,
                                    luggage: 0,
                                    special_requests: '',
                                    status: 'pending'
                                });
                            }}
                            className="bg-primary hover:bg-primary/90 text-black font-bold py-4 px-8 rounded-xl"
                        >
                            Make Another Booking
                        </Button>
                    </div>
                )}
            </form>
        </div>
    );
}
