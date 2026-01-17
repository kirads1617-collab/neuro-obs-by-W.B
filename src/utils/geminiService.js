import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const analyzeNeurologicalData = async (formData, steps) => {
    if (!API_KEY || API_KEY === 'your_gemini_api_key_here') {
        throw new Error("Clé API Gemini manquante. Veuillez configurer VITE_GEMINI_API_KEY dans votre fichier .env.");
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Construct the prompt
    let observationSummary = "Observation Neurologique :\n\n";

    steps.forEach(step => {
        observationSummary += `### ${step.title}\n`;
        step.questions.forEach(q => {
            const value = formData[q.id];
            if (value !== undefined && value !== '' && value !== null) {
                let displayValue = value;
                if (q.type === 'checkbox_group' && Array.isArray(value)) {
                    displayValue = value.map(v => {
                        const opt = q.options?.find(o => o.value === v);
                        return opt ? opt.label : v;
                    }).join(', ');
                } else if (q.type === 'radio' || q.type === 'radio_status') {
                    const opt = q.options?.find(o => o.value === value);
                    displayValue = opt ? opt.label : value;
                }
                observationSummary += `- ${q.label} : ${displayValue}\n`;
            }
        });
        observationSummary += "\n";
    });

    const prompt = `
    Tu es un assistant expert en neurologie. Analyse l'observation neurologique suivante et fournis une analyse structurée en français.
    
    L'analyse doit comporter trois sections distinctes :
    1. **Synthèse des Symptômes** : Résume les points clés de l'observation.
    2. **Identification des Syndromes** : Identifie les syndromes neurologiques potentiels (ex: syndrome pyramidal, syndrome cérébelleux, etc.).
    3. **Diagnostics Différentiels** : Propose des hypothèses diagnostiques basées sur les données fournies.

    Structure ta réponse en utilisant du Markdown avec des titres clairs pour chaque section.
    
    Voici l'observation :
    ${observationSummary}
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw new Error("Une erreur est survenue lors de l'analyse avec l'IA. Veuillez vérifier votre connexion ou votre clé API.");
    }
};
