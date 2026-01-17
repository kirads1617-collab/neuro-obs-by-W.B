import React from 'react';
import { UserPlus, History } from 'lucide-react';
import { useWizard } from '../../context/WizardContext';
import logo from '../../assets/logo.png';
import './LandingPage.css';

export default function LandingPage({ onStart }) {
    const { formData, resetWizard, isLoaded } = useWizard();

    // Check if there is any saved data
    const hasSavedData = isLoaded && Object.keys(formData).length > 0;

    const handleNewSafe = () => {
        if (hasSavedData) {
            if (window.confirm('Commencer un nouveau patient effacera la session actuelle. Continuer ?')) {
                resetWizard();
                onStart();
            }
        } else {
            resetWizard(); // Ensure clean slate
            onStart();
        }
    };

    const handleResume = () => {
        onStart();
    };

    // Show loading state while checking localStorage
    if (!isLoaded) return <div className="landing-page loading">Chargement...</div>;

    return (
        <div className="landing-page">
            <div className="landing-container">
                <div className="landing-header">
                    <img src={logo} alt="NeuroObs" className="landing-logo" />
                    <h1 className="landing-title">NeuroObs</h1>
                    <p className="landing-subtitle">Application d'Observation Neurologique Interactive</p>
                </div>

                <div className="landing-actions">
                    <button onClick={handleNewSafe} className="action-card new-patient">
                        <div className="icon-wrapper">
                            <UserPlus size={40} />
                        </div>
                        <div className="text-wrapper">
                            <span className="action-title">Nouveau Patient</span>
                            <span className="action-desc">Commencer une nouvelle session d'observation</span>
                        </div>
                    </button>

                    {hasSavedData && (
                        <button onClick={handleResume} className="action-card resume-patient">
                            <div className="icon-wrapper">
                                <History size={40} />
                            </div>
                            <div className="text-wrapper">
                                <span className="action-title">Continuer</span>
                                <span className="action-desc">Reprendre la session existante</span>
                            </div>
                        </button>
                    )}
                </div>

                <div className="landing-footer">
                    <p>© {new Date().getFullYear()} NeuroObs by wail</p>
                </div>
            </div>
        </div>
    );
}
