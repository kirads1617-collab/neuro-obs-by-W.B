import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useWizard } from '../../context/WizardContext';
import '../ui/Form.css';
import './Wizard.css';

export default function WizardControls() {
    const {
        goToNextStep,
        goToPreviousStep,
        checkStepValidity,
        isFirstStep,
        isLastStep
    } = useWizard();

    const handleNext = () => {
        if (checkStepValidity()) {
            goToNextStep();
        } else {
            alert("Veuillez remplir les champs obligatoires.");
        }
    };

    return (
        <div className="wizard-controls">
            <button
                onClick={goToPreviousStep}
                disabled={isFirstStep}
                className="btn btn-secondary"
            >
                <ArrowLeft size={18} />
                Précédent
            </button>

            <button
                onClick={handleNext}
                className="btn btn-primary"
            >
                {isLastStep ? 'Terminer' : 'Suivant'}
                <ArrowRight size={18} />
            </button>
        </div>
    );
}
