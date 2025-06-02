'use client';
import { useEffect, useState, useMemo, useRef } from 'react';

export default function Name() {
    const name = useMemo(() => 'Muhammed Riswan', []);
    const [visibleLetters, setVisibleLetters] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (hasAnimated.current) return;

        const interval = setInterval(() => {
            setVisibleLetters((prev) => {
                if (prev >= name.length) {
                    clearInterval(interval);
                    hasAnimated.current = true;
                    return prev;
                }
                return prev + 1;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [name]);

    return (
        <div className="bg-zinc-950 h-32 flex items-center justify-center">
            <h1 className="text-white text-xl md:text-4xl font-underdog font-bold tracking-wide flex space-x-1 saira_mol">
                {name.split('').map((char, index) => (
                    <span
                        key={index}
                        className={`inline-block transition-transform duration-300 ease-out ${
                            index < visibleLetters ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
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