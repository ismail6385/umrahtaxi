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
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { MapPin, Phone, User, Clock, Car, Mail, ArrowRight, ArrowLeft, Check, Users, Briefcase, Wallet, ChevronsUpDown, Search, Calendar as CalendarIcon } from 'lucide-react';
import { supabase, vehicles, type BookingData } from '@/lib/supabase';
import { getPrice } from '@/lib/pricing';
import { countryCodes } from '@/data/countryCodes';
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

const POPULAR_ROUTES = [
    { id: 'custom', label: 'Custom Location (Enter below)' },
    { id: 'jeddah-makkah', from: 'Jeddah Airport', to: 'Makkah Hotel', label: 'Jeddah Airport → Makkah' },
    { id: 'makkah-madinah-hotel', from: 'Makkah Hotel', to: 'Madinah Hotel', label: 'Makkah → Madinah Hotel' },
    { id: 'makkah-madinah-badr-ziyarat', from: 'Makkah', to: 'Madinah (via Badr Ziyarat)', label: 'Makkah → Madinah (via Baddar Ziyarat)' },
    { id: 'makkah-ziyarat-tour', from: 'Makkah Hotel', to: 'Makkah Ziyarat Tour', label: 'Makkah Ziyarat Tour' },
    { id: 'madinah-hotel-airport', from: 'Madinah Hotel', to: 'Madinah Airport', label: 'Madinah Hotel → Jeddah Airport' },
    { id: 'madinah-ziyarat-tour', from: 'Madinah Hotel', to: 'Madinah Ziyarat Tour', label: 'Madinah Ziyarat Tour' },
    { id: 'madinah-hotel-train', from: 'Madinah Hotel', to: 'Madinah Train Station', label: 'Madinah Hotel → Train Station' },
    { id: 'madinah-hotel-jeddah-airport', from: 'Madinah Hotel', to: 'Jeddah Airport', label: 'Madinah Hotel → Jeddah Airport' },
    { id: 'makkah-hotel-train', from: 'Makkah Hotel', to: 'Makkah Train Station', label: 'Makkah Hotel → Train Station' },
    { id: 'makkah-hotel-jeddah-airport', from: 'Makkah Hotel', to: 'Jeddah Airport', label: 'Makkah Hotel → Jeddah Airport' },
];

interface BookingFormProps {
    variant?: 'default' | 'hero';
}

export default function BookingForm({ variant = 'default' }: BookingFormProps) {
    const isHero = variant === 'hero';

    // Dynamic Styles based on variant
    const containerClasses = isHero
        ? "bg-transparent w-full max-w-full mx-auto relative text-left"
        : "bg-white border border-gray-200 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl w-full max-w-2xl mx-auto relative overflow-hidden text-left";

    const textPrimary = isHero ? "text-white" : "text-gray-900";
    const textSecondary = isHero ? "text-neutral-300" : "text-gray-600";
    const inputBg = isHero ? "bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:bg-black/50 focus:border-amber-500 rounded-none text-sm sm:text-base" : "bg-gray-50 border-gray-300 text-gray-900 focus:border-primary focus:bg-white rounded-lg sm:rounded-xl text-sm sm:text-base";
    const labelColor = isHero ? "text-neutral-200" : "text-gray-700";
    const iconColor = isHero ? "text-neutral-400" : "text-gray-400";

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
    const [countryCode, setCountryCode] = useState('+966');
    const [open, setOpen] = useState(false);

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
                ...prev,
                special_requests: prev.special_requests ? `${prev.special_requests}. Service: ${serviceParam}` : `Service: ${serviceParam}`
            }));
        }
    }, [searchParams]);

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
            const fullPhoneNumber = `${countryCode}${formData.customer_phone}`;

            // Generate unique confirmation token
            const confirmationToken = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;

            const finalFormData = {
                ...formData,
                customer_phone: fullPhoneNumber,
                confirmation_token: confirmationToken,
                special_requests: calculatedPrice
                    ? `${formData.special_requests ? formData.special_requests + '. ' : ''}Quoted Price: SAR ${calculatedPrice}`
                    : formData.special_requests
            };

            const { data, error } = await supabase
                .from('bookings')
                .insert([finalFormData])
                .select();

            if (error) throw error;
            console.log('Booking saved successfully:', data[0]);

            try {
                await fetch('/api/send-booking-emails', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        booking: data[0],
                        price: calculatedPrice,
                        confirmationToken
                    })
                });
            } catch (emailError) {
                console.error('Email sending failed (booking still saved):', emailError);
            }

            setSuccess(true);
            setStep(4);
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
        <div className={containerClasses}>
            {/* Progress Bar */}
            <div className={`mb-4 sm:mb-6 md:mb-8 ${isHero ? 'mb-5 lg:mb-6' : ''}`}>
                <div className={`flex justify-between items-center mb-2 sm:mb-3 md:mb-4 ${isHero ? 'px-0' : 'px-1'}`}>
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center flex-1">
                            <div className={`${isHero ? 'w-8 h-8 lg:w-9 lg:h-9' : 'w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10'} rounded-full flex items-center justify-center ${isHero ? 'text-sm lg:text-base' : 'text-xs sm:text-sm md:text-base'} font-bold transition-all flex-shrink-0 ${step >= s ? (isHero ? 'bg-amber-500 text-black' : 'bg-amber-500 text-black') : (isHero ? 'bg-white/10 text-white/50' : 'bg-gray-200 text-gray-500')
                                }`}>
                                {step > s ? <Check className={`${isHero ? 'w-3.5 h-3.5 lg:w-4 lg:h-4' : 'w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5'}`} /> : s}
                            </div>
                            {s < 3 && (
                                <div className={`h-[2px] flex-1 ${isHero ? 'mx-1 lg:mx-2' : 'mx-1 sm:mx-2'} transition-all ${step > s ? (isHero ? 'bg-amber-500' : 'bg-amber-500') : (isHero ? 'bg-white/20' : 'bg-gray-200')
                                    }`} />
                            )}
                        </div>
                    ))}
                </div>
                <div className={`text-center ${isHero ? '' : 'px-2'}`}>
                    <h3 className={`${isHero ? 'text-sm lg:text-base' : 'text-sm sm:text-base md:text-lg lg:text-xl'} font-bold ${textPrimary} font-serif`}>
                        {step === 1 && 'Your Contact Details'}
                        {step === 2 && 'Trip Information'}
                        {step === 3 && 'Confirm Booking'}
                        {step === 4 && 'Booking Confirmed!'}
                    </h3>
                </div>
            </div>

            <form onSubmit={handleSubmit} className={`space-y-3 sm:space-y-4 ${isHero ? 'lg:space-y-4' : ''}`}>
                {/* Step 1: User Details */}
                {step === 1 && (
                    <div className={`${isHero ? 'space-y-3 sm:space-y-4' : 'space-y-4 sm:space-y-5'} animate-fade-in-up`}>
                        <div className="relative group/input">
                            <User className={`absolute left-3 top-2.5 sm:top-3.5 ${isHero ? 'lg:top-3.5' : ''} w-4 h-4 sm:w-5 sm:h-5 ${iconColor} transition-colors z-10`} />
                            <Input
                                name="customer_name"
                                placeholder="Full Name *"
                                required
                                value={formData.customer_name}
                                className={`${isHero ? 'pl-10 lg:pl-12 h-11 lg:h-12' : 'pl-10 sm:pl-12 h-11 sm:h-12'} text-sm sm:text-base ${inputBg}`}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="relative group/input">
                            <Mail className={`absolute left-3 top-2.5 sm:top-3.5 ${isHero ? 'lg:top-3.5' : ''} w-4 h-4 sm:w-5 sm:h-5 ${iconColor} transition-colors z-10`} />
                            <Input
                                name="customer_email"
                                type="email"
                                placeholder="Email Address *"
                                required
                                value={formData.customer_email}
                                className={`${isHero ? 'pl-10 lg:pl-12 h-11 lg:h-12' : 'pl-10 sm:pl-12 h-11 sm:h-12'} text-sm sm:text-base ${inputBg}`}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                            <div className="relative group/input">
                                <h4 className={`${isHero ? 'text-xs lg:text-sm' : 'text-xs sm:text-sm'} font-medium ${labelColor} mb-1.5 sm:mb-2 ml-1`}>Enter country where you are coming from</h4>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className={`w-full ${isHero ? 'h-11 lg:h-12' : 'h-11 sm:h-12'} justify-between font-normal px-3 ${isHero ? 'text-sm lg:text-base' : 'text-sm sm:text-base'} ${inputBg} hover:${isHero ? 'bg-white/20' : 'bg-gray-100'}`}
                                        >
                                            {countryCode ? (
                                                <span className={`flex items-center truncate ${isHero ? 'text-xs lg:text-sm' : 'text-xs sm:text-sm'}`}>
                                                    <span className={`mr-2 ${isHero ? 'text-base lg:text-lg' : 'text-base sm:text-lg'}`}>{countryCodes.find((c) => c.code === countryCode)?.flag}</span>
                                                    <span className="truncate">{countryCodes.find((c) => c.code === countryCode)?.country}</span>
                                                </span>
                                            ) : (
                                                <span className={isHero ? 'text-xs lg:text-sm' : 'text-xs sm:text-sm'}>Select country...</span>
                                            )}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[--radix-popover-trigger-width] p-0 max-h-[300px] z-50" align="start">
                                        <Command>
                                            <CommandInput placeholder="Search country..." className="text-sm" />
                                            <CommandList>
                                                <CommandEmpty>No country found.</CommandEmpty>
                                                <CommandGroup>
                                                    {countryCodes.map((country) => (
                                                        <CommandItem
                                                            key={country.country}
                                                            value={country.country}
                                                            onSelect={(currentValue) => {
                                                                const found = countryCodes.find((c) => c.country.toLowerCase() === currentValue.toLowerCase());
                                                                if (found) {
                                                                    setCountryCode(found.code);
                                                                }
                                                                setOpen(false);
                                                            }}
                                                            className="text-sm"
                                                        >
                                                            <Check className={cn("mr-2 h-4 w-4", countryCode === country.code ? "opacity-100" : "opacity-0")} />
                                                            <span className="mr-2 text-base">{country.flag}</span>
                                                            <span className="flex-1 truncate">{country.country}</span>
                                                            <span className="ml-auto text-muted-foreground text-xs">{country.code}</span>
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="relative group/input">
                                <h4 className={`${isHero ? 'text-xs lg:text-sm' : 'text-xs sm:text-sm'} font-medium ${labelColor} mb-1.5 sm:mb-2 ml-1`}>WhatsApp Number</h4>
                                <div className="flex">
                                    <div className={`${isHero ? 'h-11 lg:h-12' : 'h-11 sm:h-12'} flex items-center justify-center ${isHero ? 'px-2 lg:px-3' : 'px-2 sm:px-3 md:px-4'} font-mono ${isHero ? 'text-xs lg:text-sm' : 'text-xs sm:text-sm'} ${isHero ? 'min-w-[65px] lg:min-w-[75px]' : 'min-w-[65px] sm:min-w-[75px] md:min-w-[85px]'} gap-1 border border-r-0 ${isHero ? 'bg-white/5 border-white/20 text-neutral-300 rounded-l-none' : 'bg-gray-100 border-gray-300 text-gray-500 rounded-l-lg sm:rounded-l-xl'}`}>
                                        <Phone className={`w-3 h-3 sm:w-4 sm:h-4 ${iconColor} shrink-0`} />
                                        <span className="truncate">{countryCode}</span>
                                    </div>
                                    <Input
                                        name="customer_phone"
                                        type="tel"
                                        placeholder="Number *"
                                        required
                                        value={formData.customer_phone}
                                        className={`pl-3 sm:pl-4 ${isHero ? 'h-11 lg:h-12' : 'h-11 sm:h-12'} text-sm sm:text-base ${inputBg} !rounded-l-none border-l-0 flex-1`}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <Button
                            type="button"
                            onClick={nextStep}
                            className={`w-full bg-amber-500 hover:bg-amber-600 text-black font-bold ${isHero ? 'h-11 lg:h-12 text-sm lg:text-base' : 'py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg'} rounded-none shadow-lg transition-transform hover:scale-[1.02] mt-2`}
                        >
                            Continue <ArrowRight className={`${isHero ? 'w-4 h-4' : 'w-4 h-4 sm:w-5 sm:h-5'} ml-2`} />
                        </Button>
                    </div>
                )}

                {/* Step 2: Trip Details & Vehicle Selection */}
                {step === 2 && (
                    <div className={`${isHero ? 'space-y-3 sm:space-y-4' : 'space-y-4 sm:space-y-5'} animate-fade-in-up`}>

                        {/* Quick Route Selection */}
                        <div className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-dashed ${isHero ? 'bg-white/5 border-white/10' : 'bg-gray-50/50 border-gray-200'}`}>
                            <label className={`text-xs sm:text-sm font-semibold ml-1 sm:ml-2 mb-1.5 sm:mb-2 block ${labelColor}`}>Quick Select Route (Optional)</label>
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
                                <SelectTrigger className={`w-full h-11 sm:h-12 text-sm sm:text-base ${inputBg}`}>
                                    <SelectValue placeholder="Select a popular route..." />
                                </SelectTrigger>
                                <SelectContent className="z-50">
                                    {POPULAR_ROUTES.map((route) => (
                                        <SelectItem key={route.id} value={route.id} className="text-sm">
                                            {route.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="relative group/input">
                                <MapPin className={`absolute left-3 top-2.5 sm:top-3.5 w-4 h-4 sm:w-5 sm:h-5 ${iconColor} z-10`} />
                                <Input
                                    name="pickup_location"
                                    placeholder="Pickup Location *"
                                    required
                                    value={formData.pickup_location}
                                    className={`pl-10 sm:pl-12 h-11 sm:h-12 text-sm sm:text-base ${inputBg}`}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="relative group/input">
                                <MapPin className={`absolute left-3 top-2.5 sm:top-3.5 w-4 h-4 sm:w-5 sm:h-5 ${iconColor} z-10`} />
                                <Input
                                    name="destination"
                                    placeholder="Destination *"
                                    required
                                    value={formData.destination}
                                    className={`pl-10 sm:pl-12 h-11 sm:h-12 text-sm sm:text-base ${inputBg}`}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Vehicle Selection - under route */}
                        <div className="space-y-2">
                            <h4 className={`text-xs sm:text-sm font-bold ${textPrimary}`}>Choose Your Vehicle *</h4>
                            <Select
                                value={formData.vehicle_type || undefined}
                                onValueChange={(value) => {
                                    const vehicle = vehicles.find(v => v.name === value);
                                    if (vehicle) selectVehicle(vehicle);
                                }}
                            >
                                <SelectTrigger className={`w-full h-11 sm:h-12 text-sm sm:text-base ${inputBg}`}>
                                    <SelectValue placeholder="Select vehicle type..." />
                                </SelectTrigger>
                                <SelectContent className="z-50">
                                    {vehicles.map((vehicle) => (
                                        <SelectItem key={vehicle.name} value={vehicle.name} className="text-sm">
                                            {vehicle.name} — {vehicle.passengers} pax
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Passenger count */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="relative group/input">
                                <Users className={`absolute left-3 top-2.5 sm:top-3.5 w-4 h-4 sm:w-5 sm:h-5 ${iconColor} z-10`} />
                                <Input
                                    name="passengers"
                                    type="number"
                                    min={1}
                                    max={50}
                                    placeholder="Number of Passengers *"
                                    required
                                    value={formData.passengers}
                                    className={`pl-10 sm:pl-12 h-11 sm:h-12 text-sm sm:text-base ${inputBg}`}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Date & time */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="relative group/input flex flex-col gap-1.5">
                                <label className={`text-xs sm:text-sm font-semibold ml-1 ${labelColor}`}>Pickup Date</label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                `w-full h-11 sm:h-12 justify-start text-left font-normal text-sm sm:text-base ${inputBg} hover:${isHero ? 'bg-white/20' : 'bg-gray-100'}`,
                                                !formData.pickup_date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4 opacity-50 shrink-0" />
                                            <span className="truncate">
                                                {formData.pickup_date ? (
                                                    format(new Date(formData.pickup_date), "PPP")
                                                ) : (
                                                    "Pick a date"
                                                )}
                                            </span>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 z-50" align="start">
                                        <CalendarComponent
                                            mode="single"
                                            selected={formData.pickup_date ? new Date(formData.pickup_date) : undefined}
                                            onSelect={(date) => {
                                                if (date) {
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        pickup_date: format(date, "yyyy-MM-dd")
                                                    }));
                                                }
                                            }}
                                            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="relative group/input flex flex-col gap-1.5">
                                <label className={`text-xs sm:text-sm font-semibold ml-1 ${labelColor}`}>Pickup Time</label>
                                <Select
                                    value={formData.pickup_time}
                                    onValueChange={(value) =>
                                        setFormData(prev => ({ ...prev, pickup_time: value }))
                                    }
                                >
                                    <SelectTrigger className={`w-full h-11 sm:h-12 text-sm sm:text-base ${inputBg}`}>
                                        <div className="flex items-center">
                                            <Clock className="mr-2 h-4 w-4 opacity-50 shrink-0" />
                                            <SelectValue placeholder="Select time" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent className="max-h-[300px] z-50">
                                        {Array.from({ length: 48 }).map((_, i) => {
                                            const hour = Math.floor(i / 2);
                                            const minute = i % 2 === 0 ? '00' : '30';
                                            const timeString = `${hour.toString().padStart(2, '0')}:${minute}`;
                                            const date = new Date();
                                            date.setHours(hour);
                                            date.setMinutes(parseInt(minute));
                                            return (
                                                <SelectItem key={timeString} value={timeString} className="text-sm">
                                                    {format(date, "h:mm a")}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                            <Button
                                type="button"
                                onClick={prevStep}
                                variant="outline"
                                className={`flex-1 ${isHero ? 'h-11 lg:h-12 text-sm lg:text-base' : 'py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg'} rounded-none border border-white/20`}
                            >
                                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" /> Back
                            </Button>
                            <Button
                                type="button"
                                onClick={nextStep}
                                className={`flex-1 bg-amber-500 hover:bg-amber-600 text-black font-bold ${isHero ? 'h-11 lg:h-12 text-sm lg:text-base' : 'py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg'} rounded-none`}
                            >
                                Continue <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
                            </Button>
                        </div>
                    </div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                    <div className={`${isHero ? 'space-y-3 sm:space-y-4' : 'space-y-4 sm:space-y-5'} animate-fade-in-up`}>
                        <div className={`rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 border ${isHero ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-100'}`}>
                            <h4 className={`font-bold text-base sm:text-lg mb-3 sm:mb-4 ${textPrimary}`}>Booking Summary</h4>

                            <div className={`space-y-2 text-xs sm:text-sm ${textSecondary}`}>
                                <div className="flex justify-between items-start gap-2">
                                    <span className="shrink-0">Name:</span>
                                    <span className={`font-semibold text-right break-words ${textPrimary}`}>{formData.customer_name}</span>
                                </div>
                                <div className="flex justify-between items-start gap-2">
                                    <span className="shrink-0">Phone:</span>
                                    <span className={`font-semibold text-right break-all ${textPrimary}`} dir="ltr">{countryCode} {formData.customer_phone}</span>
                                </div>
                                <div className={`border-t my-2 sm:my-3 ${isHero ? 'border-white/10' : 'border-gray-200'}`}></div>
                                <div className="flex justify-between items-start gap-2">
                                    <span className="shrink-0">From:</span>
                                    <span className={`font-semibold text-right break-words ${textPrimary}`}>{formData.pickup_location}</span>
                                </div>
                                <div className="flex justify-between items-start gap-2">
                                    <span className="shrink-0">To:</span>
                                    <span className={`font-semibold text-right break-words ${textPrimary}`}>{formData.destination}</span>
                                </div>
                                <div className="flex justify-between items-start gap-2">
                                    <span className="shrink-0">Vehicle:</span>
                                    <span className={`font-semibold text-right break-words ${textPrimary}`}>{formData.vehicle_type}</span>
                                </div>

                                <div className={`border-t my-2 sm:my-3 ${isHero ? 'border-white/10' : 'border-gray-200'}`}></div>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
                                    <span className="text-amber-500 font-bold flex items-center text-sm sm:text-base">
                                        <Wallet className="w-4 h-4 mr-2 shrink-0" /> Total Price:
                                    </span>
                                    <span className={`font-bold text-base sm:text-lg ${textPrimary}`}>
                                        {calculatedPrice ? `SAR ${calculatedPrice}` : 'Calculated upon confirmation'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                            <Button
                                type="button"
                                onClick={prevStep}
                                variant="outline"
                                className={`flex-1 ${isHero ? 'h-11 lg:h-12 text-sm lg:text-base' : 'py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg'} rounded-none border-white/20`}
                                disabled={loading}
                            >
                                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" /> Back
                            </Button>
                            <Button
                                type="submit"
                                className={`flex-1 bg-amber-500 hover:bg-amber-600 text-black font-bold ${isHero ? 'h-11 lg:h-12 text-sm lg:text-base' : 'py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg'} rounded-none`}
                                disabled={loading}
                            >
                                {loading ? 'Booking...' : 'Confirm Booking'} <Check className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
                            </Button>
                        </div>
                    </div>
                )}

                {/* Step 4: Success */}
                {step === 4 && success && (
                    <div className="text-center space-y-4 sm:space-y-6 animate-fade-in-up py-6 sm:py-8 px-2">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto">
                            <Check className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold ${textPrimary} px-2`}>Booking Confirmed!</h3>
                        <p className={`text-sm sm:text-base ${textSecondary} px-2 sm:px-4`}>
                            Thank you for choosing Umrah Taxi. We've sent a confirmation email to <strong className="break-all">{formData.customer_email}</strong>.
                        </p>
                        <Button
                            type="button"
                            onClick={() => {
                                setStep(1);
                                setSuccess(false);
                                setCalculatedPrice(null);
                                setCountryCode('+966');
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
                            className={`bg-amber-500 hover:bg-amber-600 text-black font-bold ${isHero ? 'h-11 lg:h-12 px-6 lg:px-8 text-sm lg:text-base' : 'py-3 sm:py-3.5 md:py-4 px-4 sm:px-6 md:px-8 text-sm sm:text-base'} rounded-none mx-2`}
                        >
                            Make Another Booking
                        </Button>
                    </div>
                )}
            </form>
        </div>
    );
}
