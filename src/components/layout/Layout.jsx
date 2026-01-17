import React, { useState } from 'react';
import { useWizard } from '../../context/WizardContext';
import { cn } from '../../utils/cn';
import { Menu, X, CheckCircle2, Circle, FileText, ChevronLeft } from 'lucide-react';
import logo from '../../assets/logo.png';
import './Layout.css';

export default function Layout({ children }) {
    const { steps, currentStepIndex, goToStep } = useWizard();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const isSummaryView = currentStepIndex === steps.length;

    const handleStepClick = (stepId, index) => {
        if (isSummaryView) {
            // content not rendered, need to switch back
            goToStep(index);
            // Scroll will happen automatically due to Wizard.jsx render, 
            // but we might need to target the specific ID after render.
            // For simplicity, just switching view is enough, user can scroll.
            // Or we can try to find element after delay.
            setTimeout(() => {
                const el = document.getElementById(stepId);
                el?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const el = document.getElementById(stepId);
            el?.scrollIntoView({ behavior: 'smooth' });
        }

        if (window.innerWidth < 768) setIsSidebarOpen(false);
    };

    const handleSummaryClick = () => {
        goToStep(steps.length);
        if (window.innerWidth < 768) setIsSidebarOpen(false);
    };

    return (
        <div className="layout">
            {/* Sidebar */}
            <aside className={cn("layout__sidebar", isSidebarOpen && "open")}>
                <div className="sidebar__header">
                    <div className="sidebar__title">
                        <img src={logo} alt="Logo" className="icon-brand" style={{ height: '40px', objectFit: 'contain' }} />
                        <span>NeuroObs by wail</span>
                    </div>
                </div>

                <nav className="sidebar__nav">
                    {/* Return to list button if in summary */}
                    {isSummaryView && (
                        <button
                            onClick={() => goToStep(0)}
                            className="step-item mb-4 text-[var(--color-primary)] font-bold bg-blue-50"
                        >
                            <ChevronLeft size={18} />
                            <span>Retour à la liste</span>
                        </button>
                    )}

                    {steps.map((step, index) => (
                        <button
                            key={step.id}
                            onClick={() => handleStepClick(step.id, index)}
                            className={cn(
                                "step-item",
                                !isSummaryView && currentStepIndex === index && "active",
                                !isSummaryView && "hover:bg-slate-100" // Simple hover effect
                            )}
                        >
                            <Circle size={18} className={cn(
                                "transition-colors",
                                currentStepIndex === index ? "text-blue-500 fill-blue-500" : "text-slate-400"
                            )} />
                            <span className="text-left">{step.title}</span>
                        </button>
                    ))}

                    <div className="my-2 border-t border-slate-200"></div>

                    <button
                        onClick={handleSummaryClick}
                        className={cn(
                            "step-item",
                            isSummaryView && "active"
                        )}
                    >
                        <FileText size={18} className={isSummaryView ? "text-blue-500" : "text-slate-400"} />
                        <span>Rapport & Conclusion</span>
                    </button>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="layout__content">
                <header className="layout__header shadow-sm print:hidden">
                    <div className="flex items-center gap-3">
                        <button
                            className="header__toggle"
                            onClick={toggleSidebar}
                            aria-label="Toggle Menu"
                        >
                            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {!isSummaryView && (
                            <div className="header__step-square">
                                {currentStepIndex + 1}
                            </div>
                        )}
                        {isSummaryView && (
                            <div className="header__step-square summary">
                                <FileText size={16} />
                            </div>
                        )}
                    </div>

                    <div className="header__title">
                        {isSummaryView ? 'Rapport Final' : (steps[currentStepIndex]?.title || 'Saisie Observation')}
                    </div>
                </header>

                <main className="layout__main scroll-smooth">
                    {children}
                </main>

                {/* Overlay for mobile sidebar */}
                {isSidebarOpen && (
                    <div
                        className="overlay"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}
            </div>
        </div>
    );
}
