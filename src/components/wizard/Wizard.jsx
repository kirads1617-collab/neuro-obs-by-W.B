import React, { useEffect } from 'react';
import { useWizard } from '../../context/WizardContext';
import StepView from './StepView';
import SummaryView from '../summary/SummaryView';
import { FileText } from 'lucide-react';
import './Wizard.css';

export default function Wizard() {
    const { currentStepIndex, steps, goToStep } = useWizard();

    // If index is equal to length, we show the summary
    const isSummary = currentStepIndex === steps.length;

    // Scroll to top when switching to summary
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [isSummary]);

    if (isSummary) {
        return (
            <div className="wizard-wrapper">
                <SummaryView />
            </div>
        );
    }

    return (
        <div className="wizard-wrapper">
            <div className="infinity-scroll-container space-y-12 pb-20">
                {steps.map((step, index) => (
                    <section
                        key={step.id}
                        id={step.id}
                        className="scroll-mt-24" // Offset for fixed header
                    >
                        <StepView step={step} />
                        {index < steps.length - 1 && (
                            <hr className="my-8 border-slate-200" />
                        )}
                    </section>
                ))}

                <div className="flex justify-center mt-12 mb-12">
                    <button
                        onClick={() => goToStep(steps.length)}
                        className="btn btn-primary btn-lg pulse-animation"
                        style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}
                    >
                        <FileText size={24} className="mr-2" />
                        Générer le Rapport
                    </button>
                </div>
            </div>
        </div>
    );
}
