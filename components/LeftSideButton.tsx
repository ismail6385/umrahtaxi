"use client";

import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useState } from 'react';

export default function LeftSideButton() {
    const [showMsg, setShowMsg] = useState(false);

    const handleClick = () => {
        // Use a custom toast or simple alert, or just show it on the UI
        // User asked: "jab button pr click kr Anam ap great hai waow"
        // I'll make it show a nice little popup or just alert for simplicity as requested, 
        // but a nice UI element is better. Let's do a small popup bubble next to it.
        setShowMsg(!showMsg);

        // Also trigger an alert as a fallback/immediate feedback if they expect that
        // alert("Anam ap great hai waow"); 
        // Actually, let's just show the message in a nice bubble.
    };

    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
            <Button
                onClick={handleClick}
                className="h-auto py-4 px-1 rounded-r-lg rounded-l-none bg-pink-500 text-white hover:bg-pink-600 shadow-lg flex flex-col items-center gap-2 transition-transform hover:translate-x-1"
            >
                <Heart className="w-5 h-5 fill-current animate-pulse" />
                <span className="writing-mode-vertical text-xs font-bold tracking-wider uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    Click Me
                </span>
            </Button>

            {showMsg && (
                <div className="ml-4 bg-white text-pink-600 px-6 py-4 rounded-2xl shadow-xl border-2 border-pink-100 animate-in slide-in-from-left-5 duration-300 relative">
                    <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 w-4 h-4 bg-white border-l-2 border-b-2 border-pink-100 transform rotate-45"></div>
                    <p className="text-lg font-bold whitespace-nowrap">Anam ap great hai waow ✨</p>
                </div>
            )}
        </div>
    );
}
