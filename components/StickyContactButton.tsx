"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, X } from 'lucide-react';
import BookingForm from './BookingForm';

export default function StickyContactButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sticky Button */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
                <Button
                    onClick={() => setIsOpen(true)}
                    className="h-auto py-4 px-1 rounded-l-lg rounded-r-none bg-primary text-black hover:bg-yellow-400 shadow-lg flex flex-col items-center gap-2 transition-transform hover:-translate-x-1"
                >
                    <MessageSquare className="w-5 h-5" />
                    <span className="writing-mode-vertical text-xs font-bold tracking-wider uppercase" style={{ writingMode: 'vertical-rl' }}>
                        Book Now
                    </span>
                </Button>
            </div>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div
                        className="absolute inset-0"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    <div className="relative w-full max-w-md animate-in zoom-in-95 duration-200">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute -top-12 right-0 text-white hover:bg-white/20 rounded-full"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </Button>

                        <BookingForm />
                    </div>
                </div>
            )}
        </>
    );
}
