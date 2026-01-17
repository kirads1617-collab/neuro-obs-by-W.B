export const STEPS_CONFIG = [
    // PAGE 1 : IDENTIFICATION ET HOSPITALISATION
    {
        id: 'step_1_ident',
        title: 'Identification',
        questions: [
            { id: 'h_admin', type: 'header', label: 'Informations Administratives' },
            { id: 'nom_prenom', label: 'Nom et Prénom', type: 'text' },
            { id: 'num_dossier', label: 'Numéro du dossier', type: 'text' },
            { id: 'age', label: 'Âge', type: 'number' },
            { id: 'sexe', label: 'Sexe', type: 'radio', options: [{ value: 'F', label: 'Femme' }, { value: 'H', label: 'Homme' }] },
            { id: 'lateralite', label: 'Latéralité', type: 'radio', options: [{ value: 'D', label: 'Droitier(e)' }, { value: 'G', label: 'Gaucher(e)' }] },
            { id: 'date_admission', label: 'Date d\'admission', type: 'date' },
            { id: 'date_naissance', label: 'Date de naissance', type: 'date' },
            { id: 'unite', label: 'Unité d\'hospitalisation', type: 'radio', options: [{ value: 'hommes', label: 'Hommes' }, { value: 'femmes', label: 'Femmes' }, { value: 'urgences', label: 'Urgences Neuro' }] },
            { id: 'lieu_naissance', label: 'Lieu de naissance', type: 'text' },
            { id: 'consanguinite', label: 'Consanguinité', type: 'radio', options: [{ value: 'non', label: 'Non' }, { value: '1', label: '1er degré' }, { value: '2', label: '2ème degré' }, { value: '3', label: '3ème degré' }] },
            { id: 'etat_civil', label: 'État Civil', type: 'radio', options: [{ value: 'celib', label: 'Célibataire' }, { value: 'marie', label: 'Marié(e)' }, { value: 'divorce', label: 'Divorcé(e)' }, { value: 'veuf', label: 'Veuf(ve)' }] },
            { id: 'nb_enfants', label: 'Nombre d\'enfants', type: 'number' },
            { id: 'gyneco_obs', label: 'Pour les femmes (G/P/C/ABRT)', type: 'text', placeholder: 'ex: G2 P2 C0 A0' },
            { id: 'adresse', label: 'Adresse complète', type: 'textarea' },
            { id: 'wilaya_pays', label: 'Wilaya et Pays', type: 'text' },
            { id: 'tel', label: 'N° de Téléphone', type: 'text' },
            { id: 'instruction', label: 'Niveau d\'instruction', type: 'text' },
            { id: 'profession', label: 'Profession', type: 'text' },
            { id: 'medecin_traitant', label: 'Médecin traitant', type: 'text' },
            { id: 'resident_garde', label: 'Résident de garde', type: 'text' },
            { id: 'resident_service', label: 'Résident du service', type: 'text' },
            { id: 'date_sortie', label: 'Date de sortie (à la fin)', type: 'date' },
            { id: 'diag_sortie', label: 'Diagnostic de sortie (à la fin)', type: 'textarea' },

            { id: 'h_motif', type: 'header', label: 'Motif & Histoire' },
            { id: 'motif_hosp', label: 'Motif d\'hospitalisation (Plainte principale)', type: 'textarea' },
            { id: 'mode_debut', label: 'Mode de début', type: 'radio', options: [{ value: 'brutal', label: 'Brutal' }, { value: 'aigu', label: 'Aigu' }, { value: 'progressif', label: 'Progressif' }] },
            { id: 'date_debut_symptomes', label: 'Date/Heure début symptômes', type: 'datetime-local' },
            { id: 'debut_non_precise', label: 'Début non précisé', type: 'checkbox_group', options: [{ value: 'oui', label: 'Oui' }] },
            { id: 'date_arrivee', label: 'Date/Heure arrivée patient', type: 'datetime-local' },
            { id: 'delai_prise_charge', label: 'Délai de prise en charge (h:min)', type: 'text' },
        ]
    },

    // PAGE 2 : ANAMNÈSE
    {
        id: 'step_2_anamnese',
        title: 'Anamnèse',
        questions: [
            { id: 'h_atcd', type: 'header', label: 'Antécédents' },
            { id: 'atcd_personnels', label: 'Personnels (Médicaux, Chirurgicaux, Toxiques)', type: 'textarea' },
            { id: 'atcd_familiaux', label: 'Familiaux', type: 'textarea' },
            { id: 'h_hdm', type: 'header', label: 'Histoire de la Maladie' },
            { id: 'hdm', label: 'Description détaillée', type: 'textarea', rows: 8, placeholder: 'Évolution des symptômes...' },
        ]
    },

    // PAGE 3 : STATUT GÉNÉRAL ET NEURO (Partie 1)
    {
        id: 'step_3_general_neuro',
        title: 'Statut Général & Conscience',
        questions: [
            { id: 'h_statut_general', type: 'header', label: 'I - Statut Général' },
            { id: 'poids', label: 'Poids (kg)', type: 'number' },
            { id: 'taille', label: 'Taille (m)', type: 'number', placeholder: 'ex: 1.75' },
            { id: 'bmi', label: 'BMI (Auto)', type: 'text', readOnly: true },
            { id: 'tour_taille', label: 'Tour de taille (cm)', type: 'number' },
            { id: 'amaigrissement', label: 'Amaigrissement (kg, depuis...)', type: 'text' },

            { id: 'etat_general', label: 'État général', type: 'radio', options: [{ value: 'bon', label: 'Bon' }, { value: 'moyen', label: 'Moyen' }, { value: 'altere', label: 'Altéré' }] },
            { id: 'digestif', label: 'Nausées / Vomissements', type: 'radio', options: [{ value: 'oui', label: 'Oui' }, { value: 'non', label: 'Non' }] },
            { id: 'coloration', label: 'Coloration', type: 'radio', options: [{ value: 'bonne', label: 'Bonne' }, { value: 'cyanose', label: 'Cyanose' }, { value: 'paleur', label: 'Pâleur' }, { value: 'ictere', label: 'Ictère' }, { value: 'subictere', label: 'Sub-ictère' }] },

            { id: 'respiration_type', label: 'Respiration', type: 'radio', options: [{ value: 'eupneique', label: 'Eupnéique' }, { value: 'bradypnee', label: 'Bradypnée' }, { value: 'polypnee', label: 'Polypnée' }] },
            { id: 'fr_resp', label: 'Fréquence Respiratoire (c/min)', type: 'number' },

            { id: 'temperature', label: 'Température', type: 'radio', options: [{ value: 'apyretique', label: 'Apyrétique' }, { value: 'fievre', label: 'Fièvre' }, { value: 'sueurs', label: 'Sueurs' }] },
            { id: 'temp_val', label: 'Si fièvre, T°C', type: 'number' },

            { id: 'ta', label: 'TA (mmHg)', type: 'text' },
            { id: 'pouls', label: 'Pouls', type: 'text' },
            { id: 'fc', label: 'FC (Btm/min)', type: 'number' },

            {
                id: 'signes_specifiques', label: 'Signes Spécifiques (Cocher si présent)', type: 'checkbox_group', options: [
                    { value: 'hemorragique', label: 'Syndrome hémorragique' },
                    { value: 'deshydratation', label: 'Signes de déshydratation' },
                    { value: 'tumoral', label: 'Syndromes tumoraux' },
                    { value: 'adp', label: 'Adénopathies' },
                    { value: 'spm', label: 'Splénomégalie' },
                    { value: 'hpm', label: 'Hépatomégalie' }
                ]
            },

            { id: 'h_neuro_conscience', type: 'header', label: 'II - Examen Neuro (A. Conscience)' },
            { id: 'conscience', label: 'Conscience', type: 'radio', options: [{ value: 'conscient', label: 'Conscient' }, { value: 'cooperant', label: 'Coopérant' }, { value: 'obnubile', label: 'Obnubilé' }, { value: 'somnolent', label: 'Somnolent' }] },
            { id: 'coma_stade', label: 'Coma (Si applicable)', type: 'radio', options: [{ value: 'I', label: 'I - Vigile' }, { value: 'II', label: 'II - Léger' }, { value: 'III', label: 'III - Profond' }, { value: 'IV', label: 'IV - Mort cérébrale' }] },
            {
                id: 'gcs', label: 'Score de Glasgow (/15)', type: 'scale', min: 3, max: 15, defaultValue: 15,
                info: {
                    description: "Le score de Glasgow (GCS) évalue l'état de conscience.",
                    exam: "Évaluer :\n1. Ouverture des yeux (1-4)\n2. Réponse verbale (1-5)\n3. Réponse motrice (1-6)\n\nScore Total = Y + V + M"
                }
            },

            {
                id: 'reflexes_tc', label: 'Réflexes du Tronc Cérébral', type: 'checkbox_group', options: [
                    { value: 'fronto_orb', label: 'Fronto-orbiculaire' },
                    { value: 'rpm', label: 'RPM' },
                    { value: 'oculo_card', label: 'Oculo-cardiaque' },
                    { value: 'oculo_ceph_v', label: 'Oculo-céphalique V' },
                    { value: 'oculo_ceph_h', label: 'Oculo-céphalique H' }
                ]
            },

            {
                id: 'respi_anormale', label: 'Respiration Anormale', type: 'checkbox_group', options: [
                    { value: 'kussmaul', label: 'Kussmaul' }, { value: 'neurogene', label: 'Neurogène centrale' },
                    { value: 'ataxique', label: 'Ataxique' }, { value: 'cheyne', label: 'Cheyne-Stokes' },
                    { value: 'apneustique', label: 'Apneustique' }, { value: 'gasping', label: 'Gasping' }
                ]
            },

            {
                id: 'orientation', label: 'Orientation', type: 'checkbox_group', options: [
                    { value: 'ts_bonne', label: 'T-S Bonne' }, { value: 'ts_desoriente', label: 'T-S Désorienté' },
                    { value: 'pers_bonne', label: 'Pers. Bonne' }, { value: 'pers_desoriente', label: 'Pers. Désorienté' }
                ]
            },

            { id: 'h_neuro_cognitif', type: 'header', label: 'II - Examen Neuro (B. Cognitif)' },
            { id: 'mmse', label: 'MMSE (/30)', type: 'number' },
            {
                id: 'langage', label: 'Langage', type: 'checkbox_group', options: [
                    { value: 'normal', label: 'Normal' },
                    { value: 'aphasie_exp', label: 'Aphasie Expression' }, { value: 'aphasie_comp', label: 'Aphasie Compréhension' }, { value: 'aphasie_mixte', label: 'Aphasie Mixte' }, { value: 'mutisme', label: 'Mutisme' },
                    { value: 'dysarthrie_para', label: 'Dys. Paralytique' }, { value: 'dysarthrie_cereb', label: 'Dys. Cérébelleuse' }, { value: 'dysarthrie_hypo', label: 'Dys. Hypokinétique' }, { value: 'dysarthrie_spas', label: 'Dys. Spastique' }
                ]
            },
            { id: 'praxie', label: 'Praxie', type: 'text', placeholder: 'Normale ou Type...' },
            { id: 'gnosie', label: 'Gnosie', type: 'text', placeholder: 'Normale ou Type...' },
            { id: 'memoire', label: 'Mémoire', type: 'checkbox_group', options: [{ value: 'normale', label: 'Normale' }, { value: 'antero', label: 'Amnisté Antérograde' }, { value: 'ictus', label: 'Ictus' }, { value: 'autre', label: 'Autre' }] },
            { id: 'sommeil', label: 'Sommeil', type: 'checkbox_group', options: [{ value: 'normal', label: 'Normal' }, { value: 'insomnie', label: 'Insomnie' }, { value: 'hypersomnie', label: 'Hypersomnie' }, { value: 'sahs', label: 'SAHS' }] },
        ]
    },

    // PAGE 3 (End) & 4 : TETE ET COU & NC
    {
        id: 'step_4_tetecou_nc',
        title: 'Tête, Cou & NC',
        questions: [
            { id: 'h_tete_cou', type: 'header', label: 'C - Tête et Cou (Céphalées)' },
            { id: 'cephalee_type', label: 'Type', type: 'radio', options: [{ value: 'aigue', label: 'Aiguë' }, { value: 'brutale', label: 'Brutale' }, { value: 'prog', label: 'Rapidement progressive' }, { value: 'chronique', label: 'Chronique' }] },
            { id: 'cephalee_caractere', label: 'Caractère', type: 'checkbox_group', options: [{ value: 'etaux', label: 'Étaux' }, { value: 'broiement', label: 'Broiement' }, { value: 'brulure', label: 'Brûlure' }, { value: 'decharge', label: 'Décharge' }, { value: 'pesanteur', label: 'Pesanteur' }, { value: 'poignard', label: 'Poignard' }, { value: 'pulsatile', label: 'Pulsatile' }] },
            { id: 'cephalee_siege', label: 'Siège', type: 'checkbox_group', options: [{ value: 'casque', label: 'En casque' }, { value: 'localisee', label: 'Localisée' }, { value: 'bascule', label: 'À bascule' }] },
            { id: 'cephalee_intensite', label: 'Intensité', type: 'radio', options: [{ value: 'legere', label: 'Légère' }, { value: 'moderee', label: 'Modérée' }, { value: 'severe', label: 'Sévère' }, { value: 'tres_severe', label: 'Très sévère' }] },
            { id: 'cephalee_details', label: 'Détails (Durée, Fréq, Irrad, Facteurs)', type: 'textarea' },
            { id: 'cephalee_signes', label: 'Signes d\'accompagnement', type: 'text' },
            { id: 'malf_deform', label: 'Malformation/Déformation', type: 'text' },
            { id: 'signes_meninges', label: 'Signes méningés/cervicaux', type: 'checkbox_group', options: [{ value: 'raideur', label: 'Raideur nuque' }, { value: 'torticollis', label: 'Torticollis' }, { value: 'lhermitte', label: 'Lhermitte' }, { value: 'archaiques', label: 'Réflexes archaïques' }] },

            { id: 'h_nc', type: 'header', label: 'Examen des Paires Crâniennes' },
            { id: 'nc_1', label: 'I (Olfactif)', type: 'radio', options: [{ value: 'normal', label: 'Normal' }, { value: 'hyposmie', label: 'Hyposmie' }, { value: 'anosmie', label: 'Anosmie' }] },

            { id: 'nc_2_ac', label: 'II - Acuité', type: 'radio', options: [{ value: 'normal', label: 'Normal' }, { value: 'bav', label: 'BAV' }, { value: 'amaurose', label: 'Amaurose' }] },
            { id: 'nc_2_cv', label: 'II - Champ Visuel', type: 'radio', options: [{ value: 'normal', label: 'Normal' }, { value: 'scotome', label: 'Scotome' }, { value: 'hemianopsie', label: 'Hémianopsie' }, { value: 'hlh', label: 'HLH' }] },
            { id: 'nc_2_fo', label: 'II - Fond d\'œil', type: 'checkbox_group', options: [{ value: 'oedeme', label: 'Œdème papillaire' }, { value: 'paleur', label: 'Pâleur' }, { value: 'retino', label: 'Rétinopathie' }] },

            { id: 'nc_oculo_regard', label: 'III, IV, VI - Regard Primaire', type: 'checkbox_group', options: [{ value: 'normal', label: 'Normal' }, { value: 'strabisme', label: 'Strabisme' }, { value: 'ptosis', label: 'Ptosis' }] },
            { id: 'nc_oculo_mouv', label: 'Mouvements isolés (Limité)', type: 'checkbox_group', options: [{ value: 'dr', label: 'Droite' }, { value: 'gch', label: 'Gauche' }, { value: 'haut', label: 'Haut' }, { value: 'bas', label: 'Bas' }] },
            { id: 'nc_pupilles', label: 'Pupilles', type: 'checkbox_group', options: [{ value: 'iso', label: 'Isocores' }, { value: 'semimyd', label: 'Semi-mydriase' }, { value: 'myd', label: 'Mydriase' }, { value: 'myos', label: 'Myosis' }] },
            { id: 'nc_rpm', label: 'RPM', type: 'checkbox_group', options: [{ value: 'dir_aboli', label: 'Direct Aboli' }, { value: 'sen_aboli', label: 'Consensuel Aboli' }, { value: 'accom_aboli', label: 'Acccomodation Abolie' }] },
            { id: 'nc_ophtalmo', label: 'Ophtalmoplégie', type: 'text' },

            { id: 'nc_5_sens', label: 'V - Sensitif', type: 'checkbox_group', options: [{ value: 'paresthesies', label: 'Paresthésies' }, { value: 'douleurs', label: 'Douleurs' }, { value: 'hypoesth', label: 'Hypoesthésie' }, { value: 'anesthesie', label: 'Anesthésie' }] },
            { id: 'nc_5_mot', label: 'V - Moteur', type: 'checkbox_group', options: [{ value: 'deficit', label: 'Déficit' }, { value: 'amyotrophie', label: 'Amyotrophie' }] },
            { id: 'nc_5_ref', label: 'V - Réflexes', type: 'checkbox_group', options: [{ value: 'corn_aboli', label: 'Cornéen Aboli' }, { value: 'naso_aboli', label: 'Naso-palp Aboli' }, { value: 'naso_exag', label: 'Naso-palp Exagéré' }] },

            { id: 'nc_7', label: 'VII (Facial)', type: 'radio', options: [{ value: 'normal', label: 'Normal' }, { value: 'pfc', label: 'PFC' }, { value: 'pfp', label: 'PFP' }] },

            { id: 'nc_8', label: 'VIII (Cochléo-Vestib.)', type: 'checkbox_group', options: [{ value: 'surdite', label: 'Surdité' }, { value: 'hypo', label: 'Hypoacousie' }, { value: 'acouph', label: 'Acouphènes' }, { value: 'vertige', label: 'Vertige' }, { value: 'nystagmus', label: 'Nystagmus' }] },

            { id: 'nc_mixtes', label: 'IX, X, XI (Mixtes)', type: 'checkbox_group', options: [{ value: 'dysphonie', label: 'Dysphonie' }, { value: 'dysphagie', label: 'Dysphagie' }, { value: 'ref_velo_aboli', label: 'R. Vélo-palatin Aboli' }, { value: 'ref_nausee_aboli', label: 'R. Nauséeux Aboli' }] },
            { id: 'nc_11_ext', label: 'XI (Spinal ext.)', type: 'checkbox_group', options: [{ value: 'trap', label: 'Déficit Trapèze' }, { value: 'scm', label: 'Déficit SCM' }] },
            { id: 'nc_12', label: 'XII (Hypoglosse)', type: 'checkbox_group', options: [{ value: 'atrophie', label: 'Atrophie' }, { value: 'fascic', label: 'Fasciculations' }, { value: 'limit', label: 'Limitation' }] },
        ]
    },

    // PAGE 5 : MEMBRES SUPERIEURS
    {
        id: 'step_5_ms',
        title: 'Membres Supérieurs',
        questions: [
            { id: 'h_ms_insp', type: 'header', label: 'Inspection' },
            { id: 'ms_tremblement', label: 'Tremblements', type: 'checkbox_group', options: [{ value: 'repos', label: 'Repos' }, { value: 'attitude', label: 'Attitude' }, { value: 'action', label: 'Action' }] },
            { id: 'ms_anormaux', label: 'Mouv. Anormaux', type: 'checkbox_group', options: [{ value: 'ballisme', label: 'Ballisme' }, { value: 'choree', label: 'Chorée' }, { value: 'athetose', label: 'Athétose' }, { value: 'dystonie', label: 'Dystonie' }] },

            { id: 'h_ms_mot', type: 'header', label: 'Motricité' },
            { id: 'ms_barre', label: 'Épreuve de Barré', type: 'checkbox_group', options: [{ value: 'paralysie', label: 'Paralysie' }, { value: 'paresie', label: 'Parésie' }, { value: 'chute', label: 'Chute' }, { value: 'pronation', label: 'Pronation' }, { value: 'garcin', label: 'Main de Garcin' }] },
            { id: 'ms_test_prox_d', label: 'Testing Proximal Droit (/5)', type: 'scale', min: 0, max: 5, defaultValue: 5 },
            { id: 'ms_test_prox_g', label: 'Testing Proximal Gauche (/5)', type: 'scale', min: 0, max: 5, defaultValue: 5 },
            { id: 'ms_test_dist_d', label: 'Testing Distal Droit (/5)', type: 'scale', min: 0, max: 5, defaultValue: 5 },
            { id: 'ms_test_dist_g', label: 'Testing Distal Gauche (/5)', type: 'scale', min: 0, max: 5, defaultValue: 5 },

            { id: 'ms_tonus', label: 'Tonus', type: 'checkbox_group', options: [{ value: 'normal', label: 'Normal' }, { value: 'hypo', label: 'Hypotonie' }, { value: 'hyper_spast', label: 'Hypertonie Spastique' }, { value: 'hyper_plast', label: 'Hypertonie Plastique' }, { value: 'roue', label: 'Roue dentée' }] },

            { id: 'ms_rot', type: 'header', label: 'ROT (Réflexes)' },
            { id: 'rot_c5', label: 'Bicipital (C5)', type: 'radio', options: [{ value: 'aboli', label: 'Aboli' }, { value: 'diminue', label: 'Diminué' }, { value: 'normal', label: 'Normal' }, { value: 'vif', label: 'Vif' }, { value: 'exagere', label: 'Exagéré' }] },
            { id: 'rot_c6', label: 'Stylo-radial (C6)', type: 'radio', options: [{ value: 'aboli', label: 'Aboli' }, { value: 'diminue', label: 'Diminué' }, { value: 'normal', label: 'Normal' }, { value: 'vif', label: 'Vif' }, { value: 'exagere', label: 'Exagéré' }] },
            { id: 'rot_c7', label: 'Tricipital (C7)', type: 'radio', options: [{ value: 'aboli', label: 'Aboli' }, { value: 'diminue', label: 'Diminué' }, { value: 'normal', label: 'Normal' }, { value: 'vif', label: 'Vif' }, { value: 'exagere', label: 'Exagéré' }] },
            { id: 'rot_c8', label: 'Cubito-pronateur (C8)', type: 'radio', options: [{ value: 'aboli', label: 'Aboli' }, { value: 'diminue', label: 'Diminué' }, { value: 'normal', label: 'Normal' }, { value: 'vif', label: 'Vif' }, { value: 'exagere', label: 'Exagéré' }] },

            { id: 'ms_hoffman', label: 'Signe de Hoffman', type: 'radio', options: [{ value: 'absent', label: 'Absent' }, { value: 'present', label: 'Présent' }] },
            { id: 'ms_idio', label: 'Réponse idiomusculaire', type: 'radio', options: [{ value: 'presente', label: 'Présente' }, { value: 'absente', label: 'Absente' }] },
            { id: 'ms_trophique', label: 'Troubles trophiques', type: 'checkbox_group', options: [{ value: 'amyotrophie', label: 'Amyotrophie' }, { value: 'fascic', label: 'Fasciculations' }] },

            { id: 'h_ms_sens', type: 'header', label: 'Sensibilité' },
            { id: 'ms_sens_fonc', label: 'Douleurs/Paresthésies (DN4)', type: 'text' },
            { id: 'ms_sens_obj', label: 'Superficielle', type: 'checkbox_group', options: [{ value: 'normal', label: 'Normale' }, { value: 'hypo', label: 'Hypoesthésie' }, { value: 'anesth', label: 'Anesthésie (Thermo/Tactile)' }] },
            { id: 'ms_sens_prof', label: 'Profonde', type: 'checkbox_group', options: [{ value: 'normal', label: 'Normale' }, { value: 'pall', label: 'Pallesthésie' }, { value: 'stereo', label: 'Stéréognosie' }, { value: 'graph', label: 'Graphesthésie' }] },

            { id: 'h_ms_coord', type: 'header', label: 'Coordination' },
            { id: 'ms_coord', label: 'Signes', type: 'checkbox_group', options: [{ value: 'dysmetrie', label: 'Dysmétrie' }, { value: 'dyschron', label: 'Dyschronométrie' }, { value: 'adiado', label: 'Adiadococinésie' }, { value: 'dysgraphie', label: 'Dysgraphie' }] },
        ]
    },

    // PAGE 6 : TRONC
    {
        id: 'step_6_tronc',
        title: 'Tronc & Sphincters',
        questions: [
            { id: 'h_tronc_insp', type: 'header', label: 'Inspection & Palpation' },
            { id: 'tronc_insp', label: 'Inspection', type: 'checkbox_group', options: [{ value: 'normal', label: 'Normale' }, { value: 'cyphose', label: 'Cyphose' }, { value: 'scoliose', label: 'Scoliose' }] },
            { id: 'tronc_ampl', label: 'Ampliation Thoracique', type: 'radio', options: [{ value: 'normale', label: 'Normale' }, { value: 'faible', label: 'Faible' }, { value: 'inefficace', label: 'Inefficace' }] },
            { id: 'tronc_couch_assis', label: 'Couché -> Assis', type: 'radio', options: [{ value: 'possible', label: 'Possible' }, { value: 'impossible', label: 'Impossible' }, { value: 'asynergie', label: 'Asynergie Babinski' }] },

            { id: 'h_rca', type: 'header', label: 'RCA (Réflexes Cutanés Abdominaux)' },
            { id: 'rca_sup', label: 'Sup (T6-T8)', type: 'radio', options: [{ value: 'present', label: 'Présent' }, { value: 'aboli', label: 'Aboli' }] },
            { id: 'rca_moy', label: 'Moy (T8-T10)', type: 'radio', options: [{ value: 'present', label: 'Présent' }, { value: 'aboli', label: 'Aboli' }] },
            { id: 'rca_inf', label: 'Inf (T10-T12)', type: 'radio', options: [{ value: 'present', label: 'Présent' }, { value: 'aboli', label: 'Aboli' }] },

            { id: 'h_tronc_sens', type: 'header', label: 'Sensibilité Tronc' },
            { id: 'tronc_sens_sup', label: 'Superficielle', type: 'text', placeholder: 'Hypo/Anesthésie, Niveau...' },
            { id: 'tronc_sens_prof', label: 'Profonde', type: 'radio', options: [{ value: 'normale', label: 'Normale' }, { value: 'hypo', label: 'Hypopallesthésie' }, { value: 'apall', label: 'Apallesthésie' }] },

            { id: 'h_sphincter', type: 'header', label: 'Vésico-Sphinctérien' },
            { id: 'vesico_fct', label: 'Fonction', type: 'checkbox_group', options: [{ value: 'normale', label: 'Normale' }, { value: 'retention', label: 'Rétention' }, { value: 'incontinence', label: 'Incontinence' }, { value: 'vessie_front', label: 'Vessie Frontale' }, { value: 'brulures', label: 'Brûlures' }] },
            { id: 'ref_perineaux', label: 'Réflexes Périnéaux (Anal, Bulbo...)', type: 'radio', options: [{ value: 'present', label: 'Présents' }, { value: 'aboli', label: 'Abolis' }] },
            { id: 'sens_perinee', label: 'Sensibilité Périnéale (Selle)', type: 'checkbox_group', options: [{ value: 'normale', label: 'Normale' }, { value: 'hypo', label: 'Hypoesthésie' }, { value: 'anesth', label: 'Anesthésie' }, { value: 'hyper', label: 'Hyperesthésie' }] },
        ]
    },

    // PAGE 7 : MEMBRES INFERIEURS
    {
        id: 'step_7_mi',
        title: 'Membres Inférieurs',
        questions: [
            { id: 'h_mi_insp', type: 'header', label: 'Inspection' },
            { id: 'mi_tremblement', label: 'Tremblements', type: 'checkbox_group', options: [{ value: 'repos', label: 'Repos' }, { value: 'attitude', label: 'Attitude' }, { value: 'action', label: 'Action' }] },
            { id: 'mi_anormaux', label: 'Mouv. Anormaux', type: 'checkbox_group', options: [{ value: 'ballisme', label: 'Ballisme' }, { value: 'choree', label: 'Chorée' }, { value: 'athetose', label: 'Athétose' }, { value: 'dystonie', label: 'Dystonie' }] },

            { id: 'h_mi_mot', type: 'header', label: 'Motricité' },
            {
                id: 'mi_mingazzini', label: 'Mingazzini', type: 'radio', options: [{ value: 'normal', label: 'Normal' }, { value: 'oscillation', label: 'Oscillation' }, { value: 'chute', label: 'Chute' }],
                info: {
                    description: "Manœuvre de Mingazzini pour évaluer le déficit moteur des membres inférieurs.",
                    exam: "Patient en décubitus dorsal. Cuisses à la verticale, jambes à l'horizontale (angle droit). Maintenir la position yeux fermés."
                }
            },
            { id: 'mi_barre', label: 'Barré', type: 'radio', options: [{ value: 'normal', label: 'Normal' }, { value: 'chute', label: 'Chute' }] },
            { id: 'mi_test_prox_d', label: 'Testing Proximal Droit (/5)', type: 'scale', min: 0, max: 5, defaultValue: 5 },
            { id: 'mi_test_prox_g', label: 'Testing Proximal Gauche (/5)', type: 'scale', min: 0, max: 5, defaultValue: 5 },
            { id: 'mi_test_dist_d', label: 'Testing Distal Droit (/5)', type: 'scale', min: 0, max: 5, defaultValue: 5 },
            { id: 'mi_test_dist_g', label: 'Testing Distal Gauche (/5)', type: 'scale', min: 0, max: 5, defaultValue: 5 },

            { id: 'mi_tonus', label: 'Tonus', type: 'checkbox_group', options: [{ value: 'normal', label: 'Normal' }, { value: 'hypo', label: 'Hypotonie' }, { value: 'hyper_spast', label: 'Hyper (Spastique)' }, { value: 'hyper_plast', label: 'Hyper (Plastique)' }] },

            { id: 'mi_rot', type: 'header', label: 'ROT' },
            { id: 'rot_l4', label: 'Rotulien (L4)', type: 'radio', options: [{ value: 'aboli', label: 'Aboli' }, { value: 'diminue', label: 'Diminué' }, { value: 'normal', label: 'Normal' }, { value: 'vif', label: 'Vif' }, { value: 'exagere', label: 'Exagéré' }, { value: 'pendulaire', label: 'Pendulaire' }] },
            { id: 'rot_s1', label: 'Achilléen (S1)', type: 'radio', options: [{ value: 'aboli', label: 'Aboli' }, { value: 'diminue', label: 'Diminué' }, { value: 'normal', label: 'Normal' }, { value: 'vif', label: 'Vif' }, { value: 'exagere', label: 'Exagéré' }] },

            {
                id: 'rcp', label: 'RCP (Babinski)', type: 'radio', options: [{ value: 'flexion', label: 'Flexion (Normal)' }, { value: 'indifferent', label: 'Indifférent' }, { value: 'extension', label: 'Extension (Babinski)' }],
                info: {
                    description: "Le Réflexe Cutané Plantaire (RCP) recherche le signe de Babinski, signe d'atteinte pyramidale.",
                    exam: "Stimuler le bord externe de la plante du pied du talon vers les orteils.\n- Normal : Flexion des orteils\n- Babinski : Extension lente du gros orteil"
                }
            },

            { id: 'h_mi_sens', type: 'header', label: 'Sensibilité' },
            { id: 'mi_sens_obj', label: 'Superficielle', type: 'checkbox_group', options: [{ value: 'normal', label: 'Normale' }, { value: 'hypo', label: 'Hypoesthésie' }, { value: 'anesth', label: 'Anesthésie' }] },
            { id: 'mi_sens_prof', label: 'Profonde', type: 'checkbox_group', options: [{ value: 'normal', label: 'Normale' }, { value: 'pall', label: 'Pallesthésie' }, { value: 'stereo', label: 'Stéréognosie' }, { value: 'talon_genou', label: 'Talon-Genou (Ataxie)' }] },
        ]
    },

    // PAGE 8 : STATION DEBOUT ET MARCHE
    {
        id: 'step_8_marche',
        title: 'Marche',
        questions: [
            { id: 'h_debout', type: 'header', label: 'Station Debout' },
            { id: 'debout_signes', label: 'Signes', type: 'checkbox_group', options: [{ value: 'oscillation', label: 'Oscillations' }, { value: 'danse', label: 'Danse des tendons' }, { value: 'poly_elargi', label: 'Elargissement Polygone' }] },
            { id: 'romberg', label: 'Romberg', type: 'radio', options: [{ value: 'negatif', label: 'Négatif' }, { value: 'classique', label: 'Classique (+ Fermeture yeux)' }, { value: 'labyrinthique', label: 'Labyrinthique' }] },
            { id: 'deviation_index', label: 'Déviation index', type: 'radio', options: [{ value: 'non', label: 'Non' }, { value: 'oui', label: 'Oui' }] },
            { id: 'signes_myo', label: 'Signes Myopathiques', type: 'checkbox_group', options: [{ value: 'gowers', label: 'Gowers' }, { value: 'tabouret', label: 'Tabouret' }] },

            { id: 'h_marche', type: 'header', label: 'Marche' },
            {
                id: 'type_marche', label: 'Type', type: 'checkbox_group', options: [
                    { value: 'normale', label: 'Normale' },
                    { value: 'ebrieuse', label: 'Ébrieuse' },
                    { value: 'fauchage', label: 'Fauchage' },
                    { value: 'steppage', label: 'Steppage' },
                    { value: 'dandinante', label: 'Dandinante' },
                    { value: 'talonnante', label: 'Talonnante' },
                    { value: 'petits_pas', label: 'Petits pas' },
                    { value: 'freezing', label: 'Freezing' },
                    { value: 'apraxie', label: 'Apraxie' }
                ]
            },
            { id: 'aide_marche', label: 'Aide nécessaire', type: 'radio', options: [{ value: 'non', label: 'Non' }, { value: 'unilat', label: 'Unilatérale' }, { value: 'bilat', label: 'Bilatérale' }, { value: 'impossible', label: 'Impossible' }] },
        ]
    },

    // PAGE 9 : CONCLUSION
    {
        id: 'step_9_cl',
        title: 'Conclusion',
        questions: [
            { id: 'resume', label: 'Résumé de l\'observation', type: 'textarea', rows: 6 },
            { id: 'syndromes', label: 'Regroupement Syndromique', type: 'textarea', rows: 4 },
            { id: 'diag_topo', label: 'Diagnostic Topographique', type: 'textarea', rows: 4 },
            { id: 'conclusion_finale', label: 'Conclusion Diagnostic Finale', type: 'textarea', rows: 6 },
        ]
    }
];
