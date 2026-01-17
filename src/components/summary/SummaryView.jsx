import React, { useMemo } from 'react';
import { useWizard } from '../../context/WizardContext';
import { Printer, RefreshCw } from 'lucide-react';
import '../ui/Form.css';
import './Summary.css';

export default function SummaryView() {
    const { formData, resetWizard, steps } = useWizard();

    const formatDate = () => new Date().toLocaleDateString('fr-FR', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });

    const handlePrint = () => {
        window.print();
    };

    const renderValue = (question) => {
        const value = formData[question.id];

        if (value === undefined || value === '' || value === null) {
            return <span className="text-muted">Non renseigné</span>;
        }

        if (question.type === 'checkbox_group') {
            if (!Array.isArray(value) || value.length === 0) return <span className="text-muted">Aucun</span>;
            const labels = value.map(v => {
                const opt = question.options?.find(o => o.value === v);
                return opt ? opt.label : v;
            });
            return labels.join(', ');
        }

        if (question.type === 'radio' || question.type === 'radio_status') {
            const opt = question.options?.find(o => o.value === value);
            return opt ? opt.label : value;
        }

        if (question.type === 'scale') {
            const label = question.labels?.[value] || '';
            return <span>{value} {label ? `(${label})` : ''}</span>;
        }

        return value;
    };

    // Helper to group questions by their preceding header
    const groupQuestionsByHeader = (questions) => {
        const groups = [];
        let currentGroup = { title: null, questions: [] };

        questions.forEach(q => {
            if (q.type === 'header') {
                if (currentGroup.questions.length > 0) {
                    groups.push(currentGroup);
                }
                currentGroup = { title: q.label, questions: [] };
            } else {
                currentGroup.questions.push(q);
            }
        });

        // Push the last group
        if (currentGroup.questions.length > 0) {
            groups.push(currentGroup);
        }

        return groups;
    };

    return (
        <div className="summary-container">

            {/* Header */}
            <div className="summary-header">
                <h1 className="summary-main-title">Observation Neurologique</h1>
                <p className="summary-date">Généré le {formatDate()}</p>
            </div>

            <div className="summary-content">
                {steps.map((step, index) => {
                    const groups = groupQuestionsByHeader(step.questions);

                    return (
                        <section key={step.id} className="summary-section page-break-inside-avoid">
                            {/* Step Title */}
                            <h2 className="summary-section-title">
                                {step.title}
                            </h2>

                            {groups.map((group, gIndex) => (
                                <div key={gIndex} className="summary-group mb-6">
                                    {group.title && (
                                        <h3 className="summary-subsection-title">{group.title}</h3>
                                    )}

                                    <table className="summary-table">
                                        <tbody>
                                            {group.questions.map(q => (
                                                <tr key={q.id}>
                                                    <td className="summary-label-cell">
                                                        {q.label}
                                                    </td>
                                                    <td className="summary-value-cell">
                                                        {renderValue(q)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </section>
                    );
                })}
            </div>

            {/* Footer Actions */}
            <div className="summary-actions no-print">
                <button
                    onClick={handlePrint}
                    className="btn btn-primary"
                >
                    <Printer size={18} />
                    Imprimer / PDF
                </button>

                <button
                    onClick={() => {
                        if (confirm('Tout effacer et recommencer ?')) resetWizard();
                    }}
                    className="btn btn-secondary danger"
                >
                    <RefreshCw size={18} />
                    Nouveau Patient
                </button>
            </div>

        </div>
    );
}
