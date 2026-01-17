import React, { createContext, useContext, useState, useEffect } from 'react';
import { STEPS_CONFIG } from '../data/steps-config';

const WizardContext = createContext();

const STORAGE_KEY = 'neuro_obs_data';

export function WizardProvider({ children }) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [formData, setFormData] = useState({});

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setFormData(parsed.formData || {});
                setCurrentStepIndex(parsed.currentStepIndex || 0);
            } catch (e) {
                console.error('Failed to load saved data', e);
            }
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            formData,
            currentStepIndex
        }));
    }, [formData, currentStepIndex]);

    const currentStep = STEPS_CONFIG[currentStepIndex];
    // Note: We allow currentStepIndex to be equal to steps.length (Summary View)
    const isLastStep = currentStepIndex === STEPS_CONFIG.length - 1;
    const isFirstStep = currentStepIndex === 0;

    const updateFormData = (fieldId, value) => {
        setFormData(prev => ({
            ...prev,
            [fieldId]: value
        }));
    };

    const checkStepValidity = (index = currentStepIndex) => {
        const step = STEPS_CONFIG[index];
        if (!step) return true;

        // Check required fields
        for (const question of step.questions) {
            if (question.required) {
                const value = formData[question.id];
                if (value === undefined || value === '' || value === null) {
                    return false;
                }
            }
        }
        return true;
    };

    const goToNextStep = () => {
        // Allow going one step past the config length (which is the Summary view)
        if (currentStepIndex < STEPS_CONFIG.length) {
            setCurrentStepIndex(prev => prev + 1);
            window.scrollTo(0, 0);
        }
    };

    const goToPreviousStep = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(prev => prev - 1);
            window.scrollTo(0, 0);
        }
    };

    const goToStep = (index) => {
        if (index >= 0 && index <= STEPS_CONFIG.length) {
            setCurrentStepIndex(index);
            window.scrollTo(0, 0);
        }
    };

    const resetWizard = () => {
        setFormData({});
        setCurrentStepIndex(0);
        localStorage.removeItem(STORAGE_KEY);
    };

    const value = {
        steps: STEPS_CONFIG,
        currentStepIndex,
        currentStep,
        formData,
        updateFormData,
        goToNextStep,
        goToPreviousStep,
        goToStep,
        resetWizard,
        isLastStep, // This means last INPUT step
        isFirstStep,
        checkStepValidity
    };

    return (
        <WizardContext.Provider value={value}>
            {children}
        </WizardContext.Provider>
    );
}

export function useWizard() {
    const context = useContext(WizardContext);
    if (!context) {
        throw new Error('useWizard must be used within a WizardProvider');
    }
    return context;
}
