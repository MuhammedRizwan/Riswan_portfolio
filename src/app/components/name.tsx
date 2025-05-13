'use client';
import { useEffect, useState, useMemo } from 'react';

export default function Name() {
    const name = useMemo(() => 'Muhammed Riswan', []);
    const [visibleLetters, setVisibleLetters] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleLetters((prev) => {
                if (prev >= name.length) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [name]);

    return (
        <div className="bg-zinc-950 h-32 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold tracking-wide flex space-x-1">
                {name.split('').map((char, index) => (
                    <span
                        key={index}
                        className={`inline-block transition-transform duration-300 ease-out ${index < visibleLetters ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                            }`}
                        style={{ transitionDelay: `${index * 50}ms` }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </h1>
        </div>
    );
}

