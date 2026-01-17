import React, { useState } from 'react';
import { useWizard } from '../../context/WizardContext';
import { analyzeNeurologicalData } from '../../utils/geminiService';
import { Sparkles, Loader2, AlertCircle, Save, CheckCircle } from 'lucide-react';
import './AnalysisSection.css';

export default function AnalysisSection() {
    const {
        formData,
        steps,
        analysisResult,
        setAnalysisResult,
        isAnalyzing,
        setIsAnalyzing,
        analysisError,
        setAnalysisError
    } = useWizard();

    const [isSaved, setIsSaved] = useState(false);

    const handleAnalyze = async () => {
        setIsAnalyzing(true);
        setAnalysisError(null);
        setAnalysisResult(null);
        setIsSaved(false);

        try {
            const result = await analyzeNeurologicalData(formData, steps);
            setAnalysisResult(result);
        } catch (error) {
            setAnalysisError(error.message);
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleSave = () => {
        // Here we could persist to database or localStorage if needed
        // For now, we'll just show a success state
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    return (
        <section className="analysis-section page-break-inside-avoid">
            <div className="analysis-header">
                <h2 className="analysis-title">Analyse Intelligence Artificielle</h2>
                {!analysisResult && !isAnalyzing && (
                    <button
                        onClick={handleAnalyze}
                        className="btn btn-primary btn-ai no-print"
                    >
                        <Sparkles size={18} />
                        Analyser avec Gemini IA
                    </button>
                )}
            </div>

            {isAnalyzing && (
                <div className="analysis-loading">
                    <Loader2 className="animate-spin" size={32} />
                    <p>Analyse des symptômes en cours par Gemini IA...</p>
                </div>
            )}

            {analysisError && (
                <div className="analysis-error">
                    <AlertCircle size={20} />
                    <p>{analysisError}</p>
                    <button onClick={handleAnalyze} className="btn-retry">Réessayer</button>
                </div>
            )}

            {analysisResult && (
                <div className="analysis-results">
                    <div className="analysis-content">
                        {/* Render markdown-like content. For simplicity, we split by lines or use a simple parser */}
                        {analysisResult.split('\n').map((line, index) => {
                            if (line.startsWith('###') || line.startsWith('**')) {
                                return <h3 key={index} className="analysis-subtitle">{line.replace(/###|\*\*/g, '').trim()}</h3>;
                            }
                            if (line.startsWith('1.') || line.startsWith('2.') || line.startsWith('3.')) {
                                return <h4 key={index} className="analysis-section-heading">{line.trim()}</h4>;
                            }
                            if (line.trim() === '') return <br key={index} />;
                            return <p key={index} className="analysis-paragraph">{line}</p>;
                        })}
                    </div>

                    <div className="analysis-footer no-print">
                        <button
                            onClick={handleAnalyze}
                            className="btn btn-secondary btn-sm"
                            disabled={isAnalyzing}
                        >
                            <Sparkles size={16} />
                            Nouvelle Analyse
                        </button>
                        <button
                            onClick={handleSave}
                            className={`btn btn-primary btn-sm ${isSaved ? 'success' : ''}`}
                        >
                            {isSaved ? <CheckCircle size={16} /> : <Save size={16} />}
                            {isSaved ? 'Enregistré' : 'Sauvegarder l\'analyse'}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
