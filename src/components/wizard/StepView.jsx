import React, { useEffect } from 'react';
import { useWizard } from '../../context/WizardContext';
import InfoButton from '../ui/InfoButton';
import '../ui/Form.css';
import './Wizard.css';

const ScaleInput = ({ value, onChange, min, max, labels }) => {
    const range = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }

    return (
        <div className="flex gap-2">
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {range.map((val) => (
                    <button
                        key={val}
                        className={`btn ${value === val ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ minWidth: '40px', padding: '0.5rem' }}
                        onClick={() => onChange(val)}
                    >
                        {val}
                    </button>
                ))}
            </div>
            {labels && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{labels[min]}</span>
                    <span>{labels[max]}</span>
                </div>
            )}
        </div>
    );
};

const RadioStatus = ({ value, onChange }) => {
    const statuses = [
        { value: 'normal', label: 'Normal', color: 'var(--color-success)' },
        { value: 'abnormal', label: 'Anormal', color: 'var(--color-error)' },
        { value: 'not_tested', label: 'Non testé', color: 'var(--color-text-muted)' }
    ];

    return (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
            {statuses.map((status) => (
                <button
                    key={status.value}
                    onClick={() => onChange(status.value)}
                    className={`btn`}
                    style={{
                        borderColor: value === status.value ? status.color : 'var(--color-border)',
                        backgroundColor: value === status.value ? status.color : 'white',
                        color: value === status.value ? 'white' : 'var(--color-text-main)',
                        fontSize: '0.8rem',
                        padding: '0.25rem 0.75rem'
                    }}
                >
                    {status.label}
                </button>
            ))}
        </div>
    );
};

export default function StepView({ step }) {
    const { formData, updateFormData } = useWizard();

    // Auto-calculate BMI
    useEffect(() => {
        if (formData.poids && formData.taille) {
            const p = parseFloat(formData.poids);
            const t = parseFloat(formData.taille);
            if (p > 0 && t > 0) {
                // BMI = kg / m^2
                // Handle cases where comma is used instead of dot
                const bmi = (p / (t * t)).toFixed(2);
                if (formData.bmi !== bmi) {
                    updateFormData('bmi', bmi);
                }
            }
        }
    }, [formData.poids, formData.taille, updateFormData, formData.bmi]);

    if (!step) return null;

    const renderField = (question) => {
        const value = formData[question.id] || '';

        const commonProps = {
            id: question.id,
            className: question.type === 'textarea' ? 'form-textarea' : 'form-input',
            value: value,
            onChange: (e) => updateFormData(question.id, e.target.value),
            placeholder: question.placeholder
        };

        switch (question.type) {
            case 'text':
            case 'number':
            case 'date':
            case 'datetime-local':
                return <input type={question.type} {...commonProps} />;

            case 'textarea':
                return <textarea {...commonProps} />;

            case 'checkbox_group':
                // Value is array
                const selectedValues = Array.isArray(value) ? value : [];
                const toggleValue = (val) => {
                    if (selectedValues.includes(val)) {
                        updateFormData(question.id, selectedValues.filter(v => v !== val));
                    } else {
                        updateFormData(question.id, [...selectedValues, val]);
                    }
                };
                return (
                    <div className="options-group">
                        {question.options.map(opt => (
                            <div
                                key={opt.value}
                                className={`option-card ${selectedValues.includes(opt.value) ? 'selected' : ''}`}
                                onClick={() => toggleValue(opt.value)}
                            >
                                <div
                                    className="option-input"
                                    style={{
                                        backgroundColor: selectedValues.includes(opt.value) ? 'var(--color-accent)' : 'white',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: '4px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}
                                >
                                    {selectedValues.includes(opt.value) && (
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    )}
                                </div>
                                <span>{opt.label}</span>
                            </div>
                        ))}
                    </div>
                );

            case 'radio':
                return (
                    <div className="options-group">
                        {question.options.map(opt => (
                            <div
                                key={opt.value}
                                className={`option-card ${value === opt.value ? 'selected' : ''}`}
                                onClick={() => updateFormData(question.id, opt.value)}
                            >
                                <div
                                    className="option-input"
                                    style={{
                                        borderRadius: '50%',
                                        border: value === opt.value ? '5px solid var(--color-accent)' : '1px solid var(--color-border)',
                                    }}
                                />
                                <span>{opt.label}</span>
                            </div>
                        ))}
                    </div>
                );

            case 'scale':
                return (
                    <ScaleInput
                        value={value !== '' ? value : question.defaultValue}
                        onChange={(val) => updateFormData(question.id, val)}
                        min={question.min}
                        max={question.max}
                        labels={question.labels}
                    />
                );

            case 'radio_status':
                return (
                    <RadioStatus
                        value={value}
                        onChange={(val) => updateFormData(question.id, val)}
                    />
                );

            case 'header':
                return null; // Header is handled in the main loop
            default:
                return <div>Unknown field type: {question.type}</div>;
        }
    };

    return (
        <div className="wizard-container fade-in">
            <h2 className="wizard-title">{step.title}</h2>

            <div className="wizard-fields">
                {step.questions.map(question => (
                    <div key={question.id} className={question.type === 'header' ? 'mt-8 mb-4' : 'form-group'}>
                        {question.type === 'header' ? (
                            <h3 className="text-lg font-bold text-slate-800 border-b pb-2">{question.label}</h3>
                        ) : (
                            <>
                                <label className="form-label flex items-center" htmlFor={question.id}>
                                    {question.label}
                                    {question.required && <span className="required ml-1">*</span>}
                                    {question.info && <InfoButton info={question.info} />}
                                </label>
                                {question.helperText && (
                                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                                        {question.helperText}
                                    </p>
                                )}
                                {renderField(question)}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
