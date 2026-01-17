import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function InfoButton({ info }) {
    const [isOpen, setIsOpen] = useState(false);
    const tooltipRef = useRef(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    if (!info) return null;

    return (
        <div className="relative inline-block ml-2 pointer-events-auto" ref={tooltipRef}>
            <button
                type="button"
                className={cn(
                    "text-slate-400 hover:text-[var(--color-primary)] transition-colors p-1 rounded-full",
                    isOpen && "text-[var(--color-primary)] bg-blue-50"
                )}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Information"
            >
                <HelpCircle size={16} />
            </button>

            {isOpen && (
                <div className="absolute z-50 w-72 p-4 mt-2 -left-32 sm:left-auto sm:right-0 bg-white rounded-lg shadow-xl border border-slate-200 text-left animate-in fade-in zoom-in-95 duration-200">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
                    >
                        <X size={14} />
                    </button>

                    <h4 className="font-semibold text-[var(--color-primary)] mb-2 flex items-center gap-2">
                        <HelpCircle size={14} />
                        Guide Médical
                    </h4>

                    <div className="text-sm text-slate-600 space-y-2">
                        {info.description && (
                            <p><strong>Définition :</strong> {info.description}</p>
                        )}
                        {info.exam && (
                            <div className="mt-2 p-2 bg-slate-50 rounded border border-slate-100">
                                <p className="font-medium text-slate-700 text-xs uppercase mb-1">Protocole d'examen :</p>
                                <p>{info.exam}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
