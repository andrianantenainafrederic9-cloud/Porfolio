export type Language = 'fr' | 'en' | 'de';

export interface TranslatedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  architecture?: {
    frontend?: string;
    backend?: string;
    database?: string;
    devops?: string;
  };
  imagePlaceholderText: string;
}

export interface TranslatedEducation {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  topics: string[];
}

export interface SkillItemTranslation {
  name: string;
  badge: string;
}

export interface SkillGroupTranslation {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItemTranslation[];
}

export interface Translations {
  personalInfo: {
    headline: string;
    status: string;
    institution: string;
    university: string;
    location: string;
    specialties: string[];
    aboutMe: string[];
  };
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    education: string;
    qualities: string;
    contact: string;
    downloadCV: string;
    quoteBtn: string;
  };
  hero: {
    statusBadge: string;
    greeting: string;
    im: string;
    shortBio: string;
    availableBadge: string;
    photoStatus: string;
    exploreProjects: string;
    requestQuote: string;
    previewCV: string;
    followMe: string;
    systemOnline: string;
    tickerItems: string[];
    pillars: {
      title: string;
      subtitle: string;
    }[];
  };
  about: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    profilePresentation: string;
    bioParagraphs: string[];
    studyLevel: string;
    keyDomains: string;
    projectPillars: string;
    motivation: string;
    pillarsTitle: string;
    pillars: {
      title: string;
      desc: string;
    }[];
    highlightBadges: string[];
  };
  skills: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    masteredBadge: string;
    techCountSuffix: string;
    groups: SkillGroupTranslation[];
  };
  projects: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    all: string;
    fullstack: string;
    backendWeb: string;
    dataScienceAI: string;
    detailsArchitecture: string;
    githubLink: string;
    modalClose: string;
    modalGithub: string;
    archStackTitle: string;
    keyHighlightsTitle: string;
    technologiesTitle: string;
    items: TranslatedProject[];
  };
  education: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    currentBadge: string;
    majorCourses: string;
    items: TranslatedEducation[];
  };
  qualities: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    qualitiesTitle: string;
    languagesTitle: string;
    qualitiesList: {
      title: string;
      desc: string;
    }[];
    languagesList: {
      name: string;
      level: string;
      proficiency: string;
      details: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    emailDirect: string;
    phoneWhatsapp: string;
    location: string;
    socialTitle: string;
    formTitle: string;
    successMessage: string;
    successSub: string;
    section1: string;
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    phone: string;
    company: string;
    companyPlaceholder: string;
    role: string;
    rolePlaceholder: string;
    section2: string;
    section3: string;
    section3Sub: string;
    section4Budget: string;
    section4Timeline: string;
    section4State: string;
    section5Description: string;
    section5Sub: string;
    section5Placeholder: string;
    section6Attachments: string;
    section6Placeholder: string;
    section6ContactMethod: string;
    section7Additional: string;
    section7Placeholder: string;
    termsCheckbox: string;
    replyGuarantee: string;
    submitBtn: string;
    submittingBtn: string;
    copyTooltip: string;
    projectTypes: string[];
    services: string[];
    budgetOptions: string[];
    timelineOptions: string[];
    projectStates: string[];
    contactMethods: string[];
    errors: {
      fullNameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      descRequired: string;
      descMinLength: string;
      termsRequired: string;
    };
  };
  footer: {
    copyright: string;
    quickLinks: string;
    social: string;
    backToTop: string;
    locationLabel: string;
  };
  cvModal: {
    title: string;
    downloadBtn: string;
    downloadTitle: string;
    openPdfBtn: string;
    openPdfTitle: string;
    printBtn: string;
    closeBtn: string;
    officialResumeLabel: string;
    degreeLevel: string;
    contactTitle: string;
    location: string;
    qualitiesTitle: string;
    qualities: string[];
    interestsTitle: string;
    interests: string[];
    tagline: string;
    profileTitle: string;
    profileText: string;
    skillsTitle: string;
    skillsFrontendLabel: string;
    skillsFrontendList: string;
    skillsBackendLabel: string;
    skillsBackendList: string;
    skillsDatabasesLabel: string;
    skillsDatabasesList: string;
    skillsDataAILabel: string;
    skillsDataAIList: string;
    skillsMobileLabel: string;
    skillsMobileList: string;
    skillsDevOpsLabel: string;
    skillsDevOpsList: string;
    projectsTitle: string;
    projects: {
      title: string;
      stack: string;
      bullets: string[];
    }[];
    educationTitle: string;
    educationItems: {
      degree: string;
      school?: string;
      period?: string;
    }[];
    languagesTitle: string;
    languages: {
      name: string;
      level: string;
    }[];
    locationFooter: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    personalInfo: {
      headline: 'Data Science • Intelligence Artificielle • Full-Stack Development • Data Engineering',
      status: 'Étudiant en Master 1 (Gouvernance et Ingénierie des Données)',
      institution: "École Nationale de l'Informatique (ENI)",
      university: 'Université de Fianarantsoa, Madagascar',
      location: 'Antananarivo, Madagascar',
      specialties: [
        'Data Science & IA',
        'Full-Stack Web (React & FastAPI)',
        'Data Engineering & ETL',
        'Gouvernance des Données (GID)',
      ],
      aboutMe: [
        "Je suis étudiant en informatique, actuellement en Master 1 Gouvernance et Ingénierie des Données à l'École Nationale de l'Informatique (ENI), Université de Fianarantsoa, Madagascar.",
        "Mes centres d'intérêt se situent au croisement de la Data Science, de l'Intelligence Artificielle, du Développement Full-Stack et de la Data Engineering.",
        "J'ai acquis une solide expérience à travers des projets académiques et personnels couvrant le développement frontend et backend, la gestion de bases de données, le traitement de données volumineuses, l'architecture ETL et le déploiement d'applications web conteneurisées.",
        "Curieux, rigoureux et autonome, j'aime concevoir des solutions logicielles robustes, explorer la donnée pour en extraire des insights stratégiques, et relever des défis techniques innovants.",
      ],
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      education: 'Formation',
      qualities: 'Atouts & Langues',
      contact: 'Contact & Devis',
      downloadCV: 'Télécharger CV',
      quoteBtn: 'Devis / Contact',
    },
    hero: {
      statusBadge: 'Master 1 • Gouvernance & Ingénierie des Données (ENI)',
      greeting: 'Bonjour, je suis',
      im: 'Bonjour, je suis',
      shortBio: "Étudiant à l'École Nationale de l'Informatique (ENI), Université de Fianarantsoa. Passionné par la conception de systèmes logiciels full-stack performants, le traitement et la gouvernance de données, et le déploiement d’intelligences artificielles.",
      availableBadge: 'Disponible pour opportunités, stages & projets',
      photoStatus: 'Disponible',
      exploreProjects: 'Explorer mes Projets',
      requestQuote: 'Demander un devis',
      previewCV: 'Aperçu CV',
      followMe: 'Suivez-moi :',
      systemOnline: 'SYS: EN LIGNE',
      tickerItems: [
        'SYS: EN LIGNE',
        'ANDRIANANTENAINA FRÉDERIC',
        'M1 GOUVERNANCE & INGÉNIERIE DES DONNÉES (ENI)',
        'DATA SCIENCE • IA • MACHINE LEARNING',
        'FULL-STACK: REACT • TYPESCRIPT • FASTAPI',
        'ETL PIPELINES • SQL • DOCKER • PYTHON',
        'ENI FIANARANTSOA • MADAGASCAR',
      ],
      pillars: [
        { title: 'Data Analyst', subtitle: 'SQL / BI / Pandas' },
        { title: 'Data Engineer', subtitle: 'ETL / Airflow / Spark' },
        { title: 'Full-Stack Dev', subtitle: 'React & FastAPI' },
        { title: 'Gouvernance GID', subtitle: 'Qualité & MDM' },
      ],
    },
    about: {
      badge: 'À propos de moi',
      title: 'Parcours Académique &',
      highlight: 'Profil Professionnel',
      subtitle: "Découvrez mon histoire, ma formation à l'ENI et ma vision pour l'ingénierie des données et le développement logiciel.",
      profilePresentation: 'Présentation du profil',
      bioParagraphs: [
        "Je suis étudiant en informatique, actuellement en Master 1 Gouvernance et Ingénierie des Données à l'École Nationale de l'Informatique (ENI), Université de Fianarantsoa, Madagascar.",
        "Mes centres d'intérêt se situent au croisement de la Data Science, de l'Intelligence Artificielle, du Développement Full-Stack et de la Data Engineering.",
        "J'ai acquis une solide expérience à travers des projets académiques et personnels couvrant le développement frontend et backend, la gestion de bases de données, le traitement de données volumineuses, l'architecture ETL et le déploiement d'applications web conteneurisées.",
        "Curieux, rigoureux et autonome, j'aime concevoir des solutions logicielles robustes, explorer la donnée pour en extraire des insights stratégiques, et relever des défis techniques innovants.",
      ],
      studyLevel: "Niveau d'études",
      keyDomains: 'Pôles Clés',
      projectPillars: 'Piliers Projets',
      motivation: 'Motivation',
      pillarsTitle: "Pôles d'ingénierie privilégiés",
      pillars: [
        {
          title: 'Data Science & IA',
          desc: 'Préparation, analyse exploratoire (EDA), modélisation et visualisation avancée avec Python, Pandas, NumPy et Matplotlib.',
        },
        {
          title: 'Full-Stack Development',
          desc: 'Architecture découplée avec interfaces réactives en React/TypeScript et APIs robustes avec FastAPI ou Django.',
        },
        {
          title: 'Data Engineering & SGBD',
          desc: 'Modélisation relationnelle (MySQL, PostgreSQL, MariaDB), requêtes optimisées, pipelines ETL et persistance SQLite/NoSQL.',
        },
        {
          title: 'Gouvernance & Qualité (GID)',
          desc: 'Architecture Data Warehouse, gestion de la qualité des données, Data Lineage, Catalogues et intégrité du patrimoine informationnel.',
        },
      ],
      highlightBadges: ['Master 1 GID', 'ENI Fianarantsoa', 'Curiosité & Rigueur', 'Résolution de problèmes'],
    },
    skills: {
      badge: 'Boîte à Outils Complète',
      title: 'Mes',
      highlight: 'Compétences',
      subtitle: "Une boîte à outils complète, choisie pour construire des produits solides, du prototype au passage à l'échelle.",
      masteredBadge: 'compétences maîtrisées',
      techCountSuffix: 'techs',
      groups: [
        {
          id: 'frontend',
          title: 'Front-End',
          subtitle: 'Interfaces modernes, réactives & design system',
          skills: [
            { name: 'React.js', badge: 'Bibliothèque UI' },
            { name: 'Next.js', badge: 'SSR / Full-Stack' },
            { name: 'Vue.js', badge: 'Framework UI' },
            { name: 'TypeScript', badge: 'Typage strict' },
            { name: 'Tailwind CSS', badge: 'Design System' },
            { name: 'Shadcn/ui', badge: 'Composants modernes' },
            { name: 'Material UI', badge: 'Component Library' },
            { name: 'Framer Motion', badge: 'Animations' },
            { name: 'jQuery / GSAP', badge: 'DOM & Micro-interactions' },
          ],
        },
        {
          id: 'backend',
          title: 'Back-End',
          subtitle: 'Architectures d’API, micro-frameworks & services',
          skills: [
            { name: 'Node.js', badge: 'Runtime JavaScript' },
            { name: 'Express.js', badge: 'Serveur API' },
            { name: 'PHP / Laravel', badge: 'Web MVC' },
            { name: 'Python (Flask)', badge: 'Micro-framework' },
            { name: 'FastAPI', badge: 'API Asynchrone' },
            { name: 'API REST & GraphQL', badge: 'Architecture d’API' },
            { name: 'WebSocket', badge: 'Temps réel' },
          ],
        },
        {
          id: 'databases',
          title: 'Bases de données & Outils',
          subtitle: 'SGBD, conteneurisation, modélisation & DevOps',
          skills: [
            { name: 'SQL', badge: 'Langage relationnel' },
            { name: 'MySQL', badge: 'SGBDR' },
            { name: 'PostgreSQL', badge: 'SGBD Avancé' },
            { name: 'MongoDB', badge: 'NoSQL Document' },
            { name: 'SQLite', badge: 'SGBD Embarqué' },
            { name: 'ETL', badge: 'Pipelines de flux' },
            { name: 'UML / Merise', badge: 'Conception logicielle' },
            { name: 'Git & GitHub', badge: 'Versionnement' },
            { name: 'Docker', badge: 'Conteneurisation' },
            { name: 'Agile / Scrum', badge: 'Méthodologie' },
            { name: 'Python, R, Excel', badge: 'Analyse & Calcul' },
          ],
        },
        {
          id: 'data-analyst',
          title: 'Data Analyst',
          subtitle: 'Statistiques, dashboards décisionnels & analyse exploratoire',
          skills: [
            { name: 'Excel Avancé', badge: 'RECHERCHEX, INDEX/EQUIV, TCD, Power Query' },
            { name: 'SQL Analytique', badge: 'JOIN, GROUP BY, HAVING, Sous-requêtes' },
            { name: 'Window Functions SQL', badge: 'ROW_NUMBER, RANK, LAG, LEAD' },
            { name: 'Python Data Stack', badge: 'Pandas, NumPy, Matplotlib, Seaborn' },
            { name: 'Power BI & DAX', badge: 'Dashboards, Modélisation, KPIs' },
            { name: 'Statistiques descriptives', badge: 'Moyenne, variance, corrélation' },
            { name: 'Analyse Exploratoire (EDA)', badge: 'Détection d’anomalies & patterns' },
            { name: 'Business Intelligence', badge: 'Analyse des ventes, tendances' },
          ],
        },
        {
          id: 'data-engineer',
          title: 'Data Engineer',
          subtitle: 'Pipelines massifs, entrepôts, streaming & orchestration',
          skills: [
            { name: 'Pipelines ETL / ELT', badge: 'Extraction, transformation, chargement' },
            { name: 'Data Warehouse', badge: 'Modélisation dimensionnelle (faits/dimensions)' },
            { name: 'Data Lake & Lakehouse', badge: 'Stockage brut & distribué' },
            { name: 'Apache Spark / PySpark', badge: 'Traitement distribué Big Data' },
            { name: 'Apache Airflow', badge: 'Orchestration & scheduling' },
            { name: 'dbt', badge: 'Transformation dans l’entrepôt' },
            { name: 'Formats Big Data', badge: 'Parquet, Avro, JSON, CSV' },
            { name: 'Streaming avec Kafka', badge: 'Flux en temps réel' },
            { name: 'Cloud Data (GCP / AWS)', badge: 'BigQuery, S3, Cloud Storage' },
            { name: 'Scripts Python & Bash', badge: 'Automatisation systèmes' },
          ],
        },
        {
          id: 'gid',
          title: 'Gouvernance & GID',
          subtitle: 'Qualité, catalogues, traçabilité & intégrité du patrimoine',
          skills: [
            { name: 'Modélisation MCD, MLD, MPD', badge: 'Merise & Normalisation' },
            { name: 'Data Governance Framework', badge: 'Politiques, rôles & règles' },
            { name: 'Data Quality Management', badge: 'Exactitude, complétude, unicité' },
            { name: 'Data Catalog & Dictionnaire', badge: 'Inventaire des actifs de données' },
            { name: 'Data Lineage & Traçabilité', badge: 'Suivi de bout en bout des flux' },
            { name: 'Data Profiling', badge: 'Audit de structure & intégrité' },
            { name: 'Master Data Management (MDM)', badge: 'Référentiels maîtres' },
            { name: 'Sécurité & Data Privacy', badge: 'Chiffrement, RBAC, conformité' },
            { name: 'Documentation Data', badge: 'Documentation technique & métier' },
          ],
        },
        {
          id: 'aiml',
          title: 'IA & Machine Learning',
          subtitle: 'Modélisation statistique, apprentissage & modèles prédictifs',
          skills: [
            { name: 'Scikit-Learn', badge: 'Régression, Classification, Clustering' },
            { name: 'Modélisation Churn & Scoring', badge: 'Algorithmes prédictifs' },
            { name: 'NLP & Traitement de texte', badge: 'Notions fondamentales' },
            { name: 'Intégration d’APIs LLM', badge: 'Agents & Prompts structurés' },
          ],
        },
      ],
    },
    projects: {
      badge: 'Réalisations Concrètes',
      title: 'Projets Académiques &',
      highlight: 'Travaux Pratiques',
      subtitle: 'Des solutions logicielles et analytiques complètes basées strictement sur mon parcours académique et mes compétences réelles.',
      all: 'Tous les projets',
      fullstack: 'Full-Stack',
      backendWeb: 'Backend / Web',
      dataScienceAI: 'Data Science & IA',
      detailsArchitecture: 'Détails & Architecture',
      githubLink: 'Voir le dépôt GitHub',
      modalClose: 'Fermer',
      modalGithub: 'Voir sur GitHub',
      archStackTitle: 'Architecture & Stack Technique',
      keyHighlightsTitle: 'Points forts techniques & Implémentation',
      technologiesTitle: 'Technologies mobilisées',
      items: [
        {
          id: 'web-management-app',
          title: 'Application Web de Gestion',
          category: 'Full-Stack',
          description: "Application web complète avec architecture découplée Frontend/Backend, API REST haute performance avec FastAPI et conteneurisation Docker.",
          longDescription: `Conception et développement d'une solution de gestion d'entreprise moderne. Le projet s'appuie sur une séparation stricte des responsabilités entre une interface utilisateur dynamique en React et une API REST performante propulsée par FastAPI. 
Les données relationnelles sont modélisées et persistées sous MySQL. L'ensemble de la pile technique (client, API et base de données) est encapsulé dans des conteneurs Docker pour garantir une portabilité et un déploiement reproductible.`,
          technologies: ['React', 'FastAPI', 'MySQL', 'Docker', 'REST API', 'TypeScript'],
          highlights: [
            'Architecture moderne Frontend (React) / Backend (FastAPI)',
            'Développement d’API RESTful avec sérialisation stricte et documentation Swagger automatique',
            'Modélisation, normalisation et requêtage relationnel avec MySQL',
            'Orchestration et conteneurisation des services via Docker & Docker Compose',
          ],
          architecture: {
            frontend: 'React.js + Tailwind CSS (Single Page Application réactive)',
            backend: 'FastAPI (Python asynchrone, validation Pydantic, routes REST)',
            database: 'MySQL (Tables relationnelles, clés étrangères, indexation)',
            devops: 'Docker (Dockerfile multi-stage et orchestration Docker Compose)',
          },
          imagePlaceholderText: 'React · FastAPI · MySQL · Docker',
        },
        {
          id: 'task-management-app',
          title: 'Application de Gestion de Tâches',
          category: 'Backend / Web',
          description: "Application web de suivi et de gestion de tâches développée en Python/Django, incluant formulaires dynamiques, persistance et opérations CRUD complètes.",
          longDescription: `Développement d'une application robuste de gestion de projets et de flux de travail (To-Do, En cours, Terminé). 
Réalisée avec le framework Python Django, l'application met en œuvre une architecture MVC/MVT rigoureuse avec gestion des sessions, validation des formulaires côté serveur, persistance relationnelle avec SQLite et MySQL, et sécurité intégrée contre les failles CSRF/XSS.`,
          technologies: ['Python', 'Django', 'SQLite', 'MySQL', 'CRUD', 'Formulaires Django'],
          highlights: [
            'Implémentation du pattern Modèle-Vue-Template (MVT) de Django',
            'Création et validation robuste de formulaires web dynamiques',
            'Persistance et gestion des données avec SQLite (développement) et MySQL (production)',
            'Couverture complète des opérations CRUD (Create, Read, Update, Delete) avec contrôle d’accès',
          ],
          architecture: {
            frontend: 'Templates Django avec composants interactifs et CSS personnalisé',
            backend: 'Django ORM, Vues génériques basées sur les classes, routage d’URL',
            database: 'SQLite pour le prototypage rapide / MySQL pour la persistance',
            devops: 'Environnements virtuels Python (venv) & Git',
          },
          imagePlaceholderText: 'Python · Django · SQLite / MySQL',
        },
        {
          id: 'data-science-analytics',
          title: 'Projets Data Science & Analytics',
          category: 'Data Science & IA',
          description: "Pipeline d'analyse de données: collecte, préparation, manipulation, analyse exploratoire (EDA) et visualisation avancée avec Python, Pandas et NumPy.",
          longDescription: `Réalisation de projets d'ingénierie et d'analyse exploratoire des données (EDA) sur des jeux de données réels (segmentation client, analyse comportementale, métriques de churn).
Mise en œuvre de pipelines de nettoyage, de traitement des valeurs manquantes, de normalisation, d'analyse statistique descriptive et d'extraction de visualisations informatives avec la stack scientifique Python.`,
          technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA', 'Scikit-Learn'],
          highlights: [
            'Nettoyage approfondi, traitement des valeurs aberrantes et formatage structuré des données',
            'Manipulation avancée des DataFrames et calculs matriciels vectorisés avec Pandas et NumPy',
            'Analyse exploratoire des données (EDA) et identification de corrélations statistiques',
            'Conception de graphiques explicatifs et tableaux de bord avec Matplotlib',
          ],
          architecture: {
            frontend: 'Notebooks interactifs (Jupyter) & visualisations graphiques',
            backend: 'Python 3.x, scripts d’automatisation ETL et modélisation',
            database: 'Fichiers CSV volumineux, exportations SQL et pipelines de données',
            devops: 'WSL, Git, environnements scientifiques Python',
          },
          imagePlaceholderText: 'Python · Pandas · NumPy · Matplotlib',
        },
      ],
    },
    education: {
      badge: 'Cursus Académique',
      title: 'Formation &',
      highlight: 'Diplômes Universitaires',
      subtitle: "Mon parcours universitaire rigoureux à l'École Nationale de l'Informatique (ENI) et à l'Université de Fianarantsoa.",
      currentBadge: 'En cours',
      majorCourses: 'Enseignements majeurs :',
      items: [
        {
          id: 'master-1',
          degree: 'Master 1 – Gouvernance et Ingénierie des Données (GID)',
          institution: "École Nationale de l'Informatique (ENI)",
          location: 'Fianarantsoa, Madagascar',
          period: '2025 – Présent',
          current: true,
          description: "Formation de haut niveau axée sur l'architecture des systèmes d'information, la gestion et la gouvernance des données volumineuses, l'intelligence artificielle et l'ingénierie logicielle avancée.",
          topics: [
            'Gouvernance des données, Qualité & MDM',
            'Ingénierie des données, Pipelines ETL/ELT & Big Data',
            'Intelligence Artificielle & Machine Learning appliqué',
            'Architectures distribuées, Data Warehouse & Lakehouse',
          ],
        },
        {
          id: 'licence-cs',
          degree: 'Licence en Informatique',
          institution: 'Université de Fianarantsoa',
          location: 'Fianarantsoa, Madagascar',
          period: '2022 – 2024',
          current: false,
          description: "Acquisition des fondements théoriques et pratiques de l'informatique: algorithmique complexe, structures de données, programmation orientée objet, conception logicielle et modélisation de bases de données relationnelles.",
          topics: [
            'Algorithmique & Structures de données',
            'Génie logiciel & Modélisation UML / Merise',
            'Programmation Web & Bases de données SQL',
            'Réseaux informatiques & Systèmes d’exploitation',
          ],
        },
        {
          id: 'baccalaureat',
          degree: 'Baccalauréat Général (Séries D, C, S)',
          institution: 'Enseignement Secondaire Général',
          location: 'Madagascar',
          period: '2020, 2021, 2022',
          current: false,
          description: 'Solide parcours scientifique mettant l’accent sur les mathématiques appliquées, les sciences physiques et le raisonnement analytique.',
          topics: [
            'Mathématiques fondamentales & Algèbre',
            'Sciences physiques & Raisonnement scientifique',
            'Logique et esprit de synthèse',
          ],
        },
      ],
    },
    qualities: {
      badge: 'Atouts & Communication',
      title: 'Qualités Professionnelles &',
      highlight: 'Maîtrise Linguistique',
      subtitle: 'Au-delà des compétences techniques, les valeurs méthodologiques et les capacités de communication qui guident mes collaborations.',
      qualitiesTitle: 'Qualités Professionnelles & Méthodologie',
      languagesTitle: 'Langues Pratiquées',
      qualitiesList: [
        { title: 'Esprit analytique', desc: 'Capacité à décomposer des problèmes complexes en étapes logiques et structurées.' },
        { title: 'Rigueur & Précision', desc: 'Attention portée aux détails, typage strict et respect des bonnes pratiques architecturales.' },
        { title: 'Curiosité intellectuelle', desc: 'Envie constante de comprendre le fonctionnement profond des frameworks et des algorithmes.' },
        { title: 'Autonomie', desc: 'Capacité à rechercher des solutions, documenter et mener des projets de bout en bout.' },
        { title: 'Travail en équipe', desc: 'Collaboration fluide via Git/GitHub, partage de connaissances et écoute constructive.' },
        { title: 'Apprentissage continu', desc: 'Veille technologique active et adaptation rapide aux nouveaux outils et paradigmes.' },
      ],
      languagesList: [
        { name: 'Malgache', level: 'Langue maternelle', proficiency: 'Native', details: 'Expression orale et écrite fluide et naturelle.' },
        { name: 'Français', level: 'Courant & Professionnel', proficiency: 'Courant', details: 'Maîtrise approfondie des contextes académiques, techniques et professionnels.' },
        { name: 'Anglais', level: 'Intermédiaire & Technique', proficiency: 'Intermédiaire', details: 'Lecture de documentation technique, conception, rédaction et communication.' },
        { name: 'Allemand', level: 'Notions de base', proficiency: 'Débutant', details: 'Compréhension élémentaire et apprentissage actif.' },
      ],
    },
    contact: {
      badge: 'Démarrons un Projet',
      title: 'Demande de Projet &',
      highlight: 'Contact Direct',
      subtitle: 'Remplissez ce formulaire détaillé pour obtenir une proposition adaptée ou un devis précis. Réponse sous 24 h.',
      emailDirect: 'E-mail Direct',
      phoneWhatsapp: 'Téléphone / WhatsApp',
      location: 'Localisation',
      socialTitle: 'Réseaux Professionnels',
      formTitle: 'Envoyer ma demande de projet',
      successMessage: 'Votre client de messagerie a été ouvert avec votre demande complète !',
      successSub: 'Vous pouvez également envoyer un message WhatsApp directement à :',
      section1: '1. Vos Informations',
      fullName: 'Nom complet',
      fullNamePlaceholder: 'Ex : Jean Dupont',
      email: 'Adresse e-mail',
      phone: 'Téléphone / WhatsApp',
      company: 'Entreprise / Organisation',
      companyPlaceholder: 'Société / Startup / Particulier',
      role: 'Fonction / Profession',
      rolePlaceholder: 'Ex : Responsable Projet / Directeur',
      section2: '2. Type de Projet',
      section3: '3. Services Souhaités',
      section3Sub: 'Sélectionnez un ou plusieurs services :',
      section4Budget: 'Budget estimé',
      section4Timeline: 'Délai souhaité',
      section4State: 'État du projet',
      section5Description: 'Description du projet',
      section5Sub: 'Objectifs, fonctionnalités attendues, besoins spécifiques, contraintes techniques et résultats souhaités.',
      section5Placeholder: 'Détaillez ici votre vision et vos attentes...',
      section6Attachments: 'Pièces jointes (Lien Drive, Figma, Docs)',
      section6Placeholder: 'Lien vers cahier des charges, maquette ou captures...',
      section6ContactMethod: 'Moyen de contact préféré',
      section7Additional: 'Informations complémentaires (Optionnel)',
      section7Placeholder: 'Disponibilités pour un appel, précisions...',
      termsCheckbox: 'J\'accepte que les informations saisies soient utilisées pour me recontacter concernant ce projet.',
      replyGuarantee: '⚡ Réponse sous 24 h · Vos informations restent strictement confidentielles.',
      submitBtn: 'Envoyer ma demande de projet',
      submittingBtn: 'Préparation en cours...',
      copyTooltip: 'Copier l\'adresse email',
      projectTypes: [
        'Site web vitrine',
        'Application web sur mesure',
        'Application mobile',
        'E-commerce / Marketplace',
        'Data Analysis & Business Intelligence',
        'Data Science & Intelligence Artificielle',
        'Data Engineering & Ingénierie des Données',
        'Base de données & Migration',
        'Automatisation de processus & Pipelines',
        'API & Intégration logicielle',
        'Refonte & Maintenance technique',
        'Autre projet innovant',
      ],
      services: [
        'Développement frontend (React, TS)',
        'Développement backend (FastAPI, Flask)',
        'Développement full-stack complet',
        'Analyse et visualisation des données (Pandas, BI)',
        'Conception et modélisation de bases de données',
        'Développement de pipelines ETL / ELT',
        'Machine Learning & IA appliquée',
        'Conteneurisation Docker & Déploiement',
        'Gouvernance & Qualité des données (GID)',
      ],
      budgetOptions: [
        'Moins de 100 000 Ar (< 25 €)',
        '100 000 – 300 000 Ar (25 – 70 €)',
        '300 000 – 500 000 Ar (70 – 115 €)',
        '500 000 – 1 000 000 Ar (115 – 230 €)',
        'Plus de 1 000 000 Ar (> 230 €)',
        'À discuter / Flexible',
      ],
      timelineOptions: [
        'Urgent (moins de 2 semaines)',
        '1 mois',
        '2 – 3 mois',
        'Plus de 3 mois',
        'Flexible',
      ],
      projectStates: [
        'Idée initiale',
        'Besoin défini',
        'Cahier des charges disponible',
        'Maquette / Prototype disponible',
        'Projet en cours d’amélioration',
      ],
      contactMethods: ['E-mail', 'Téléphone', 'WhatsApp'],
      errors: {
        fullNameRequired: 'Le nom complet est obligatoire.',
        emailRequired: "L'adresse e-mail est obligatoire.",
        emailInvalid: 'Format d’adresse e-mail invalide.',
        descRequired: 'La description du projet est obligatoire.',
        descMinLength: 'Veuillez détailler votre projet (au moins 15 caractères).',
        termsRequired: 'Vous devez accepter la clause pour soumettre.',
      },
    },
    footer: {
      copyright: 'Conçu avec rigueur et passion.',
      quickLinks: 'Navigation',
      social: 'Réseaux & Contact',
      backToTop: 'Haut de page',
      locationLabel: 'Localisation :',
    },
    cvModal: {
      title: 'Curriculum Vitae',
      downloadBtn: 'Télécharger PDF',
      downloadTitle: 'Télécharger le fichier PDF original',
      openPdfBtn: 'Ouvrir PDF',
      openPdfTitle: 'Ouvrir le PDF dans un nouvel onglet',
      printBtn: 'Imprimer / PDF',
      closeBtn: 'Fermer',
      officialResumeLabel: 'ANDRIANANTENAINA Fréderic • CV Officiel',
      degreeLevel: 'M1 — GOUVERNANCE & INGÉNIERIE DES DONNÉES',
      contactTitle: 'CONTACT',
      location: 'Antananarivo, Madagascar',
      qualitiesTitle: 'QUALITÉS',
      qualities: [
        'Esprit analytique',
        'Rigueur',
        'Curiosité',
        'Autonomie',
        'Travail en équipe',
        'Apprentissage continu',
      ],
      interestsTitle: "CENTRES D'INTÉRÊT",
      interests: ['Voyage', 'Vélo', 'Football', 'Guitare'],
      tagline: 'Data Science • Intelligence Artificielle • Full-Stack Development • Data Engineering',
      profileTitle: 'PROFIL PERSONNEL',
      profileText:
        "Étudiant en Master 1 Gouvernance et Ingénierie des Données à l'École Nationale de l'Informatique, issu d'une formation en informatique et passionné par le développement logiciel, la Data Science et l'Intelligence Artificielle. Profil polyvalent avec des compétences en développement Frontend et Backend, bases de données, développement mobile et traitement des données. Curieux, rigoureux et motivé, je souhaite contribuer à des projets innovants et développer mes compétences dans un environnement professionnel.",
      skillsTitle: 'COMPÉTENCES TECHNIQUES',
      skillsFrontendLabel: 'Frontend',
      skillsFrontendList: 'HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Vue.js, Tailwind CSS, Bootstrap',
      skillsBackendLabel: 'Backend',
      skillsBackendList: 'Python, Django, FastAPI, Java, PHP, Node.js, Express.js, REST API, Authentification',
      skillsDatabasesLabel: 'Bases de données',
      skillsDatabasesList: 'MySQL, MariaDB, PostgreSQL, SQLite, MongoDB, Modélisation des données, CRUD',
      skillsDataAILabel: 'Data Science & IA',
      skillsDataAIList: 'Python, Pandas, NumPy, Matplotlib, Machine Learning, EDA, Intelligence Artificielle, NLP, LLM',
      skillsMobileLabel: 'Mobile',
      skillsMobileList: "Dart, Flutter, Material Design, API REST, Gestion d'état",
      skillsDevOpsLabel: 'DevOps & Outils',
      skillsDevOpsList: 'Git, GitHub, GitLab, Docker, Linux, WSL, Postman, VS Code, PyCharm, npm, Vite',
      projectsTitle: 'PROJETS ACADÉMIQUES',
      projects: [
        {
          title: 'Application Web de Gestion',
          stack: 'React • FastAPI • MySQL • Docker',
          bullets: [
            "Développement d'une application web avec architecture Frontend/Backend.",
            "Création d'une API REST avec FastAPI.",
            'Gestion des données avec MySQL.',
            "Conteneurisation de l'application avec Docker.",
          ],
        },
        {
          title: 'Application de Gestion de Tâches',
          stack: 'Python • Django • SQLite/MySQL',
          bullets: [
            "Développement d'une application web de gestion des tâches.",
            'Création de formulaires et gestion des données avec Django.',
            'Mise en place des opérations CRUD.',
          ],
        },
        {
          title: 'Projets Data Science',
          stack: 'Python • Pandas • NumPy',
          bullets: [
            'Préparation et manipulation des données.',
            'Analyse exploratoire et visualisation des données.',
            "Utilisation de Python pour l'analyse et le traitement des données.",
          ],
        },
      ],
      educationTitle: 'FORMATION',
      educationItems: [
        {
          degree: 'Master 1 — Gouvernance et Ingénierie des Données',
          school: "École Nationale de l'Informatique",
          period: '2025 – Présent',
        },
        {
          degree: 'Licence en Informatique',
          school: 'Université de Fianarantsoa',
        },
        {
          degree: 'Baccalauréat général — Série D,C,S',
          period: '2020, 2021, 2022',
        },
      ],
      languagesTitle: 'LANGUES',
      languages: [
        { name: 'Malagasy', level: 'Langue maternelle' },
        { name: 'Français', level: 'Intermédiaire' },
        { name: 'Anglais', level: 'Moyen' },
      ],
      locationFooter: 'Antananarivo, Madagascar • M1 GID ENI',
    },
  },

  en: {
    personalInfo: {
      headline: 'Data Science • Artificial Intelligence • Full-Stack Development • Data Engineering',
      status: "Master 1 Student in Data Governance & Data Engineering",
      institution: "National School of Computer Science (ENI)",
      university: 'University of Fianarantsoa, Madagascar',
      location: 'Antananarivo, Madagascar',
      specialties: [
        'Data Science & AI',
        'Full-Stack Web (React & FastAPI)',
        'Data Engineering & ETL',
        'Data Governance (GID)',
      ],
      aboutMe: [
        "I am a Computer Science student currently pursuing a Master's degree in Data Governance and Data Engineering at the National School of Computer Science (ENI), University of Fianarantsoa, Madagascar.",
        "My interests lie at the intersection of Data Science, Artificial Intelligence, Full-Stack Development, and Data Engineering.",
        "I have experience working on academic and personal projects involving frontend and backend development, database management, data processing, ETL pipelines, and containerized web application development.",
        "Curious, rigorous, and autonomous, I enjoy designing robust software solutions, exploring data to extract strategic insights, and tackling innovative technical challenges.",
      ],
    },
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      qualities: 'Strengths & Languages',
      contact: 'Contact & Quote',
      downloadCV: 'Download CV',
      quoteBtn: 'Get a Quote',
    },
    hero: {
      statusBadge: 'Master 1 • Data Governance & Data Engineering (ENI)',
      greeting: 'Hello, I am',
      im: 'Hello, I am',
      shortBio: "Master's student at the National School of Computer Science (ENI), University of Fianarantsoa. Passionate about building high-performance full-stack applications, processing and governing complex data, and deploying artificial intelligence models.",
      availableBadge: 'Available for opportunities, internships & projects',
      photoStatus: 'Available',
      exploreProjects: 'Explore My Projects',
      requestQuote: 'Request a Quote',
      previewCV: 'View Resume',
      followMe: 'Follow Me:',
      systemOnline: 'SYS: ONLINE',
      tickerItems: [
        'SYS: ONLINE',
        'ANDRIANANTENAINA FRÉDERIC',
        'M1 DATA GOVERNANCE & DATA ENGINEERING (ENI)',
        'DATA SCIENCE • AI • MACHINE LEARNING',
        'FULL-STACK: REACT • TYPESCRIPT • FASTAPI',
        'ETL PIPELINES • SQL • DOCKER • PYTHON',
        'ENI FIANARANTSOA • MADAGASCAR',
      ],
      pillars: [
        { title: 'Data Analyst', subtitle: 'SQL / BI / Pandas' },
        { title: 'Data Engineer', subtitle: 'ETL / Airflow / Spark' },
        { title: 'Full-Stack Dev', subtitle: 'React & FastAPI' },
        { title: 'Data Governance GID', subtitle: 'Data Quality & MDM' },
      ],
    },
    about: {
      badge: 'About Me',
      title: 'Academic Background &',
      highlight: 'Professional Profile',
      subtitle: "Discover my journey, my curriculum at ENI, and my vision for data engineering and software development.",
      profilePresentation: 'Profile Presentation',
      bioParagraphs: [
        "I am a Computer Science student currently pursuing a Master's degree in Data Governance and Data Engineering at the National School of Computer Science (ENI), University of Fianarantsoa, Madagascar.",
        "My interests lie at the intersection of Data Science, Artificial Intelligence, Full-Stack Development, and Data Engineering.",
        "I have experience working on academic and personal projects involving frontend and backend development, database management, data processing, ETL pipelines, and containerized web application development.",
        "Curious, rigorous, and autonomous, I enjoy designing robust software solutions, exploring data to extract strategic insights, and tackling innovative technical challenges.",
      ],
      studyLevel: 'Degree Level',
      keyDomains: 'Key Domains',
      projectPillars: 'Project Pillars',
      motivation: 'Dedication',
      pillarsTitle: 'Preferred Engineering Disciplines',
      pillars: [
        {
          title: 'Data Science & AI',
          desc: 'Data wrangling, exploratory data analysis (EDA), modeling and advanced visualization using Python, Pandas, NumPy, and Matplotlib.',
        },
        {
          title: 'Full-Stack Development',
          desc: 'Decoupled web architecture with reactive user interfaces in React/TypeScript and robust APIs powered by FastAPI or Django.',
        },
        {
          title: 'Data Engineering & DBMS',
          desc: 'Relational modeling (MySQL, PostgreSQL, MariaDB), optimized queries, automated ETL pipelines, and SQLite/NoSQL persistence.',
        },
        {
          title: 'Governance & Quality (GID)',
          desc: 'Data Warehouse architecture, data quality management, lineage tracking, metadata catalogs, and informational asset security.',
        },
      ],
      highlightBadges: ['Master 1 GID', 'ENI Fianarantsoa', 'Curiosity & Rigor', 'Problem Solving'],
    },
    skills: {
      badge: 'Complete Toolbox',
      title: 'My',
      highlight: 'Skills & Expertise',
      subtitle: 'A comprehensive technical toolkit curated to build solid products, from initial prototype to production scale.',
      masteredBadge: 'mastered skills',
      techCountSuffix: 'techs',
      groups: [
        {
          id: 'frontend',
          title: 'Front-End',
          subtitle: 'Modern, reactive interfaces & design systems',
          skills: [
            { name: 'React.js', badge: 'UI Library' },
            { name: 'Next.js', badge: 'SSR / Full-Stack' },
            { name: 'Vue.js', badge: 'UI Framework' },
            { name: 'TypeScript', badge: 'Strict Typing' },
            { name: 'Tailwind CSS', badge: 'Design System' },
            { name: 'Shadcn/ui', badge: 'Modern Components' },
            { name: 'Material UI', badge: 'Component Library' },
            { name: 'Framer Motion', badge: 'Animations' },
            { name: 'jQuery / GSAP', badge: 'DOM & Micro-interactions' },
          ],
        },
        {
          id: 'backend',
          title: 'Back-End',
          subtitle: 'API architecture, micro-frameworks & services',
          skills: [
            { name: 'Node.js', badge: 'JavaScript Runtime' },
            { name: 'Express.js', badge: 'API Server' },
            { name: 'PHP / Laravel', badge: 'Web MVC' },
            { name: 'Python (Flask)', badge: 'Micro-framework' },
            { name: 'FastAPI', badge: 'Asynchronous API' },
            { name: 'API REST & GraphQL', badge: 'API Architecture' },
            { name: 'WebSocket', badge: 'Real-Time' },
          ],
        },
        {
          id: 'databases',
          title: 'Databases & Tools',
          subtitle: 'DBMS, containerization, modeling & DevOps',
          skills: [
            { name: 'SQL', badge: 'Relational Query Language' },
            { name: 'MySQL', badge: 'RDBMS' },
            { name: 'PostgreSQL', badge: 'Advanced RDBMS' },
            { name: 'MongoDB', badge: 'Document NoSQL' },
            { name: 'SQLite', badge: 'Embedded DBMS' },
            { name: 'ETL', badge: 'Data Pipelines' },
            { name: 'UML / Merise', badge: 'Software Modeling' },
            { name: 'Git & GitHub', badge: 'Version Control' },
            { name: 'Docker', badge: 'Containerization' },
            { name: 'Agile / Scrum', badge: 'Methodology' },
            { name: 'Python, R, Excel', badge: 'Analysis & Computing' },
          ],
        },
        {
          id: 'data-analyst',
          title: 'Data Analyst',
          subtitle: 'Statistics, decision dashboards & exploratory analysis',
          skills: [
            { name: 'Advanced Excel', badge: 'XLOOKUP, INDEX/MATCH, Pivot, Power Query' },
            { name: 'Analytical SQL', badge: 'JOIN, GROUP BY, HAVING, Subqueries' },
            { name: 'SQL Window Functions', badge: 'ROW_NUMBER, RANK, LAG, LEAD' },
            { name: 'Python Data Stack', badge: 'Pandas, NumPy, Matplotlib, Seaborn' },
            { name: 'Power BI & DAX', badge: 'Dashboards, Modeling, KPIs' },
            { name: 'Descriptive Statistics', badge: 'Mean, Variance, Correlation' },
            { name: 'Exploratory Analysis (EDA)', badge: 'Anomaly & Pattern Detection' },
            { name: 'Business Intelligence', badge: 'Sales & Trend Analysis' },
          ],
        },
        {
          id: 'data-engineer',
          title: 'Data Engineer',
          subtitle: 'Big data pipelines, warehouses, streaming & orchestration',
          skills: [
            { name: 'ETL / ELT Pipelines', badge: 'Extraction, Transformation, Loading' },
            { name: 'Data Warehouse', badge: 'Dimensional Modeling (Facts/Dimensions)' },
            { name: 'Data Lake & Lakehouse', badge: 'Raw & Distributed Storage' },
            { name: 'Apache Spark / PySpark', badge: 'Distributed Big Data Processing' },
            { name: 'Apache Airflow', badge: 'Orchestration & Scheduling' },
            { name: 'dbt', badge: 'In-Warehouse Transformation' },
            { name: 'Big Data Formats', badge: 'Parquet, Avro, JSON, CSV' },
            { name: 'Kafka Streaming', badge: 'Real-Time Event Streaming' },
            { name: 'Cloud Data (GCP / AWS)', badge: 'BigQuery, S3, Cloud Storage' },
            { name: 'Python & Bash Scripting', badge: 'System Automation' },
          ],
        },
        {
          id: 'gid',
          title: 'Governance & GID',
          subtitle: 'Data quality, catalogs, lineage & enterprise integrity',
          skills: [
            { name: 'Conceptual Modeling (MCD/MLD/MPD)', badge: 'Merise & Normalization' },
            { name: 'Data Governance Framework', badge: 'Policies, Roles & Rules' },
            { name: 'Data Quality Management', badge: 'Accuracy, Completeness, Uniqueness' },
            { name: 'Data Catalog & Dictionary', badge: 'Data Asset Inventory' },
            { name: 'Data Lineage & Traceability', badge: 'End-to-End Pipeline Tracking' },
            { name: 'Data Profiling', badge: 'Structure & Integrity Auditing' },
            { name: 'Master Data Management (MDM)', badge: 'Master Data Repositories' },
            { name: 'Security & Data Privacy', badge: 'Encryption, RBAC, Compliance' },
            { name: 'Data Documentation', badge: 'Technical & Business Metadata' },
          ],
        },
        {
          id: 'aiml',
          title: 'AI & Machine Learning',
          subtitle: 'Statistical modeling, learning & predictive systems',
          skills: [
            { name: 'Scikit-Learn', badge: 'Regression, Classification, Clustering' },
            { name: 'Churn & Scoring Models', badge: 'Predictive Algorithms' },
            { name: 'NLP & Text Processing', badge: 'Core Fundamentals' },
            { name: 'LLM API Integration', badge: 'Agents & Structured Prompts' },
          ],
        },
      ],
    },
    projects: {
      badge: 'Concrete Achievements',
      title: 'Academic Projects &',
      highlight: 'Practical Works',
      subtitle: 'Complete software and data solutions built strictly on my academic curriculum and verified competencies.',
      all: 'All Projects',
      fullstack: 'Full-Stack',
      backendWeb: 'Backend / Web',
      dataScienceAI: 'Data Science & AI',
      detailsArchitecture: 'Details & Architecture',
      githubLink: 'View GitHub Repository',
      modalClose: 'Close',
      modalGithub: 'View on GitHub',
      archStackTitle: 'Architecture & Tech Stack',
      keyHighlightsTitle: 'Technical Highlights & Implementation',
      technologiesTitle: 'Utilized Technologies',
      items: [
        {
          id: 'web-management-app',
          title: 'Enterprise Management Web App',
          category: 'Full-Stack',
          description: 'Comprehensive web application featuring a decoupled Frontend/Backend architecture, high-performance REST API with FastAPI, and Docker containerization.',
          longDescription: `Design and development of a modern business management solution. Built upon strict separation of concerns between a reactive React user interface and an asynchronous FastAPI REST backend. 
Relational data is normalized and persisted in MySQL. The entire technical stack (client, API, and database) is containerized with Docker to ensure consistency and reproducible deployments.`,
          technologies: ['React', 'FastAPI', 'MySQL', 'Docker', 'REST API', 'TypeScript'],
          highlights: [
            'Modern decoupled Frontend (React) / Backend (FastAPI) architecture',
            'RESTful API development with strict Pydantic validation and auto-generated Swagger docs',
            'Relational data modeling, schema normalization, and querying with MySQL',
            'Service orchestration and multi-container lifecycle management via Docker Compose',
          ],
          architecture: {
            frontend: 'React.js + Tailwind CSS (Reactive Single Page Application)',
            backend: 'FastAPI (Asynchronous Python, Pydantic validation, REST endpoints)',
            database: 'MySQL (Relational schemas, foreign keys, indexing)',
            devops: 'Docker (Multi-stage Dockerfile and Docker Compose orchestration)',
          },
          imagePlaceholderText: 'React · FastAPI · MySQL · Docker',
        },
        {
          id: 'task-management-app',
          title: 'Task & Workflow Management App',
          category: 'Backend / Web',
          description: 'Task and project tracking web application built with Python/Django, featuring dynamic form validation, relational persistence, and full CRUD operations.',
          longDescription: `Development of a robust workflow and task tracking platform (To-Do, In Progress, Completed). 
Engineered with the Python Django framework, the project implements a clean MVC/MVT architecture with session management, server-side validation, relational persistence across SQLite and MySQL, and built-in protection against CSRF/XSS vulnerabilities.`,
          technologies: ['Python', 'Django', 'SQLite', 'MySQL', 'CRUD', 'Django Forms'],
          highlights: [
            'Implementation of Django Model-View-Template (MVT) pattern',
            'Robust form handling, custom validators, and dynamic rendering',
            'Data persistence across SQLite (development) and MySQL (production)',
            'Comprehensive CRUD (Create, Read, Update, Delete) coverage with role access control',
          ],
          architecture: {
            frontend: 'Django Templates with customized responsive CSS components',
            backend: 'Django ORM, Class-based Views, URL routing system',
            database: 'SQLite for rapid prototyping / MySQL for relational persistence',
            devops: 'Python virtual environments (venv) & Git version control',
          },
          imagePlaceholderText: 'Python · Django · SQLite / MySQL',
        },
        {
          id: 'data-science-analytics',
          title: 'Data Science & Analytics Projects',
          category: 'Data Science & IA',
          description: 'End-to-end data processing and analytics pipeline: data ingestion, preparation, exploratory data analysis (EDA), and advanced visualization using Python, Pandas, and NumPy.',
          longDescription: `Execution of data engineering and exploratory data analysis (EDA) pipelines on real-world datasets (customer segmentation, behavioral metrics, and churn prediction).
Implemented automated workflows for data cleansing, imputation of missing values, statistical normalization, and generation of insightful visual charts using Python's scientific ecosystem.`,
          technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA', 'Scikit-Learn'],
          highlights: [
            'In-depth data cleaning, outlier treatment, and structured formatting',
            'Advanced DataFrame manipulation and vectorized matrix calculations with Pandas & NumPy',
            'Exploratory data analysis (EDA) and identification of key statistical correlations',
            'Creation of publication-quality explanatory charts and dashboards with Matplotlib',
          ],
          architecture: {
            frontend: 'Interactive Jupyter Notebooks & graphical visualizations',
            backend: 'Python 3.x, automated ETL scripts, statistical modeling',
            database: 'Large CSV datasets, SQL exports, and structured data pipelines',
            devops: 'WSL, Git, isolated scientific Python environments',
          },
          imagePlaceholderText: 'Python · Pandas · NumPy · Matplotlib',
        },
      ],
    },
    education: {
      badge: 'Academic Journey',
      title: 'Education &',
      highlight: 'University Degrees',
      subtitle: 'My rigorous university training at the National School of Computer Science (ENI) and the University of Fianarantsoa.',
      currentBadge: 'In Progress',
      majorCourses: 'Major Coursework:',
      items: [
        {
          id: 'master-1',
          degree: 'Master 1 – Data Governance & Data Engineering (GID)',
          institution: 'National School of Computer Science (ENI)',
          location: 'Fianarantsoa, Madagascar',
          period: '2025 – Present',
          current: true,
          description: 'Advanced graduate program focused on information systems architecture, big data management, data governance, artificial intelligence, and enterprise software engineering.',
          topics: [
            'Data Governance, Data Quality & MDM',
            'Data Engineering, ETL/ELT Pipelines & Big Data',
            'Applied Artificial Intelligence & Machine Learning',
            'Distributed Architectures, Data Warehouse & Lakehouse',
          ],
        },
        {
          id: 'licence-cs',
          degree: "Bachelor's Degree in Computer Science",
          institution: 'University of Fianarantsoa',
          location: 'Fianarantsoa, Madagascar',
          period: '2022 – 2024',
          current: false,
          description: 'Mastery of theoretical and applied computer science foundations: advanced algorithms, data structures, object-oriented programming, software engineering, and relational database modeling.',
          topics: [
            'Algorithms & Advanced Data Structures',
            'Software Engineering & UML / Merise Modeling',
            'Web Programming & SQL Relational Databases',
            'Computer Networks & Operating Systems',
          ],
        },
        {
          id: 'baccalaureat',
          degree: 'Scientific Baccalaureate (Series D, C, S)',
          institution: 'General Secondary Education',
          location: 'Madagascar',
          period: '2020, 2021, 2022',
          current: false,
          description: 'Rigorous scientific foundation with emphasis on applied mathematics, physics, and logical analytical problem-solving.',
          topics: [
            'Fundamental Mathematics & Linear Algebra',
            'Physical Sciences & Scientific Reasoning',
            'Formal Logic & Critical Thinking',
          ],
        },
      ],
    },
    qualities: {
      badge: 'Strengths & Communication',
      title: 'Professional Strengths &',
      highlight: 'Language Proficiency',
      subtitle: 'Beyond technical competence, the methodological mindset and interpersonal communication skills that guide my collaborations.',
      qualitiesTitle: 'Methodological & Professional Strengths',
      languagesTitle: 'Language Skills',
      qualitiesList: [
        { title: 'Analytical Mindset', desc: 'Ability to deconstruct complex technical challenges into structured, actionable logical steps.' },
        { title: 'Precision & Rigor', desc: 'Meticulous attention to detail, strict type safety, and uncompromising adherence to best practices.' },
        { title: 'Intellectual Curiosity', desc: 'Relentless drive to understand the inner mechanics of frameworks, algorithms, and architectures.' },
        { title: 'Autonomy', desc: 'Proactive problem solver capable of researching, documenting, and executing projects from inception to completion.' },
        { title: 'Team Collaboration', desc: 'Seamless teamwork via Git/GitHub, structured knowledge sharing, and constructive technical feedback.' },
        { title: 'Continuous Learning', desc: 'Active technology monitoring and rapid mastery of emerging frameworks, tools, and paradigms.' },
      ],
      languagesList: [
        { name: 'Malagasy', level: 'Native Language', proficiency: 'Native', details: 'Natural and fluent written and spoken communication.' },
        { name: 'French', level: 'Fluent & Professional', proficiency: 'Fluent', details: 'Comprehensive mastery across academic, professional, and technical environments.' },
        { name: 'English', level: 'Intermediate & Technical', proficiency: 'Intermediate', details: 'Reading technical specifications, documentation, architectural design, and communication.' },
        { name: 'German', level: 'Elementary Skills', proficiency: 'Beginner', details: 'Basic understanding and active ongoing learning.' },
      ],
    },
    contact: {
      badge: 'Start a Project',
      title: 'Project Inquiry &',
      highlight: 'Direct Contact',
      subtitle: 'Fill out this inquiry form to receive a tailored solution or quotation. Guaranteed response within 24 hours.',
      emailDirect: 'Direct Email',
      phoneWhatsapp: 'Phone / WhatsApp',
      location: 'Location',
      socialTitle: 'Professional Networks',
      formTitle: 'Submit Project Inquiry',
      successMessage: 'Your email client has been launched with your inquiry pre-filled!',
      successSub: 'You can also reach out directly via WhatsApp:',
      section1: '1. Contact Details',
      fullName: 'Full Name',
      fullNamePlaceholder: 'e.g. John Doe',
      email: 'Email Address',
      phone: 'Phone / WhatsApp',
      company: 'Company / Organization',
      companyPlaceholder: 'Company / Startup / Individual',
      role: 'Position / Role',
      rolePlaceholder: 'e.g. Project Lead / Founder',
      section2: '2. Project Type',
      section3: '3. Desired Services',
      section3Sub: 'Select one or more services:',
      section4Budget: 'Estimated Budget',
      section4Timeline: 'Target Timeline',
      section4State: 'Project Stage',
      section5Description: 'Project Description',
      section5Sub: 'Goals, expected features, specific requirements, technical constraints, and desired outcomes.',
      section5Placeholder: 'Detail your project vision and requirements here...',
      section6Attachments: 'Attachments (Drive, Figma, Docs Link)',
      section6Placeholder: 'Link to specifications, mockups, or screenshots...',
      section6ContactMethod: 'Preferred Contact Method',
      section7Additional: 'Additional Notes (Optional)',
      section7Placeholder: 'Availability for calls, extra specifications...',
      termsCheckbox: 'I agree that my submitted information may be processed to contact me regarding this project.',
      replyGuarantee: '⚡ Response within 24 hours · Your information is kept strictly confidential.',
      submitBtn: 'Submit Project Inquiry',
      submittingBtn: 'Preparing email...',
      copyTooltip: 'Copy email address',
      projectTypes: [
        'Showcase Website',
        'Custom Web Application',
        'Mobile Application',
        'E-commerce / Marketplace',
        'Data Analysis & Business Intelligence',
        'Data Science & Artificial Intelligence',
        'Data Engineering & Pipelines',
        'Database Design & Migration',
        'Process Automation & Workflows',
        'API & Software Integration',
        'Redesign & Maintenance',
        'Other Innovative Project',
      ],
      services: [
        'Frontend Development (React, TS)',
        'Backend Development (FastAPI, Flask)',
        'Full-Stack Web Development',
        'Data Analysis & Visualization (Pandas, BI)',
        'Database Design & Modeling',
        'ETL / ELT Pipeline Engineering',
        'Machine Learning & Applied AI',
        'Docker Containerization & Deployment',
        'Data Governance & Quality (GID)',
      ],
      budgetOptions: [
        'Under 100,000 MGA (< $25)',
        '100,000 – 300,000 MGA ($25 – $70)',
        '300,000 – 500,000 MGA ($70 – $115)',
        '500,000 – 1,000,000 MGA ($115 – $230)',
        'Over 1,000,000 MGA (> $230)',
        'To discuss / Flexible',
      ],
      timelineOptions: [
        'Urgent (under 2 weeks)',
        '1 month',
        '2 – 3 months',
        'Over 3 months',
        'Flexible',
      ],
      projectStates: [
        'Initial concept',
        'Defined requirements',
        'Specification document ready',
        'Mockup / Prototype available',
        'Existing project to improve',
      ],
      contactMethods: ['Email', 'Phone', 'WhatsApp'],
      errors: {
        fullNameRequired: 'Full name is required.',
        emailRequired: 'Email address is required.',
        emailInvalid: 'Invalid email address format.',
        descRequired: 'Project description is required.',
        descMinLength: 'Please provide more details (at least 15 characters).',
        termsRequired: 'You must accept the terms to submit.',
      },
    },
    footer: {
      copyright: 'Built with rigor, precision, and passion.',
      quickLinks: 'Navigation',
      social: 'Connect & Contact',
      backToTop: 'Back to Top',
      locationLabel: 'Location:',
    },
    cvModal: {
      title: 'Curriculum Vitae',
      downloadBtn: 'Download PDF',
      downloadTitle: 'Download authentic PDF resume',
      openPdfBtn: 'Open PDF',
      openPdfTitle: 'Open PDF in a new tab',
      printBtn: 'Print / Save PDF',
      closeBtn: 'Close',
      officialResumeLabel: 'ANDRIANANTENAINA Fréderic • Official Resume',
      degreeLevel: 'M1 — DATA GOVERNANCE & ENGINEERING',
      contactTitle: 'CONTACT',
      location: 'Antananarivo, Madagascar',
      qualitiesTitle: 'KEY STRENGTHS',
      qualities: [
        'Analytical mindset',
        'Rigor & Precision',
        'Intellectual curiosity',
        'Autonomy & Proactivity',
        'Team collaboration',
        'Continuous learning',
      ],
      interestsTitle: 'INTERESTS & HOBBIES',
      interests: ['Travel & Exploration', 'Cycling', 'Football (Soccer)', 'Acoustic Guitar'],
      tagline: 'Data Science • Artificial Intelligence • Full-Stack Development • Data Engineering',
      profileTitle: 'PROFESSIONAL PROFILE',
      profileText:
        'Master 1 student in Data Governance and Engineering at the National School of Computer Science (ENI), holding a solid computer science background and deeply passionate about software engineering, Data Science, and Artificial Intelligence. Versatile profile with proven skills across Frontend and Backend development, databases, mobile engineering, and data processing. Curious, rigorous, and highly motivated, eager to contribute to innovative projects and thrive in an agile professional environment.',
      skillsTitle: 'TECHNICAL SKILLS',
      skillsFrontendLabel: 'Frontend',
      skillsFrontendList: 'HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Vue.js, Tailwind CSS, Bootstrap',
      skillsBackendLabel: 'Backend',
      skillsBackendList: 'Python, Django, FastAPI, Java, PHP, Node.js, Express.js, REST APIs, Authentication',
      skillsDatabasesLabel: 'Databases',
      skillsDatabasesList: 'MySQL, MariaDB, PostgreSQL, SQLite, MongoDB, Data Modeling, CRUD',
      skillsDataAILabel: 'Data Science & AI',
      skillsDataAIList: 'Python, Pandas, NumPy, Matplotlib, Machine Learning, EDA, Artificial Intelligence, NLP, LLM',
      skillsMobileLabel: 'Mobile',
      skillsMobileList: 'Dart, Flutter, Material Design, REST API, State Management',
      skillsDevOpsLabel: 'DevOps & Tools',
      skillsDevOpsList: 'Git, GitHub, GitLab, Docker, Linux, WSL, Postman, VS Code, PyCharm, npm, Vite',
      projectsTitle: 'ACADEMIC PROJECTS',
      projects: [
        {
          title: 'Management Web Application',
          stack: 'React • FastAPI • MySQL • Docker',
          bullets: [
            'Development of a web application with decoupled Frontend/Backend architecture.',
            'Building a high-performance REST API with FastAPI.',
            'Relational database management and indexing with MySQL.',
            'Application containerization and environment orchestration with Docker.',
          ],
        },
        {
          title: 'Task Management Application',
          stack: 'Python • Django • SQLite/MySQL',
          bullets: [
            'Development of a web application for task tracking and team workflow.',
            'Form handling, input validation, and data management with Django.',
            'Implementation of complete CRUD operations and database persistence.',
          ],
        },
        {
          title: 'Data Science Projects',
          stack: 'Python • Pandas • NumPy',
          bullets: [
            'Data cleansing, transformation, and preprocessing pipelines.',
            'Exploratory Data Analysis (EDA) and interactive statistical visualisations.',
            'Leveraging Python ecosystem for data mining, processing, and insights.',
          ],
        },
      ],
      educationTitle: 'EDUCATION',
      educationItems: [
        {
          degree: 'Master 1 — Data Governance & Data Engineering',
          school: 'National School of Computer Science (ENI)',
          period: '2025 – Present',
        },
        {
          degree: "Bachelor's Degree in Computer Science",
          school: 'University of Fianarantsoa',
        },
        {
          degree: 'General Baccalaureate — Scientific Series (D, C, S)',
          period: '2020, 2021, 2022',
        },
      ],
      languagesTitle: 'LANGUAGES',
      languages: [
        { name: 'Malagasy', level: 'Native language' },
        { name: 'French', level: 'Professional / Intermediate' },
        { name: 'English', level: 'Intermediate' },
      ],
      locationFooter: 'Antananarivo, Madagascar • M1 GID ENI',
    },
  },

  de: {
    personalInfo: {
      headline: 'Data Science • Künstliche Intelligenz • Full-Stack-Entwicklung • Data Engineering',
      status: 'Master-1-Student in Data Governance & Data Engineering',
      institution: 'Nationale Hochschule für Informatik (ENI)',
      university: 'Universität Fianarantsoa, Madagaskar',
      location: 'Antananarivo, Madagaskar',
      specialties: [
        'Data Science & KI',
        'Full-Stack Web (React & FastAPI)',
        'Data Engineering & ETL',
        'Data Governance (GID)',
      ],
      aboutMe: [
        "Ich bin Informatik-Student im Master 1 für Data Governance und Data Engineering an der Nationalen Hochschule für Informatik (ENI), Universität Fianarantsoa, Madagaskar.",
        "Meine Schwerpunkte liegen an der Schnittstelle von Data Science, künstlicher Intelligenz, Full-Stack-Webentwicklung und Data Engineering.",
        "Ich verfüge über fundierte praktische Erfahrung aus universitären und eigenständigen Projekten in den Bereichen Frontend- und Backend-Entwicklung, Datenbankarchitektur, Big-Data-Verarbeitung, ETL-Pipelines und containerisierte Bereitstellung.",
        "Neugierig, analytisch und zielorientiert konzipiere ich skalierbare Softwarelösungen, analysiere Daten zur Gewinnung strategischer Erkenntnisse und löse anspruchsvolle technische Herausforderungen.",
      ],
    },
    nav: {
      home: 'Startseite',
      about: 'Über mich',
      skills: 'Kompetenzen',
      projects: 'Projekte',
      education: 'Ausbildung',
      qualities: 'Stärken & Sprachen',
      contact: 'Kontakt & Angebot',
      downloadCV: 'Lebenslauf (CV)',
      quoteBtn: 'Projekt anfragen',
    },
    hero: {
      statusBadge: 'Master 1 • Data Governance & Data Engineering (ENI)',
      greeting: 'Hallo, ich bin',
      im: 'Hallo, ich bin',
      shortBio: "Master-Student an der Nationalen Hochschule für Informatik (ENI), Universität Fianarantsoa. Begeistert von der Entwicklung performanter Full-Stack-Lösungen, strukturierter Daten-Governance und moderner künstlicher Intelligenz.",
      availableBadge: 'Verfügbar für Projekte, Praktika & Einstieg',
      photoStatus: 'Verfügbar',
      exploreProjects: 'Projekte ansehen',
      requestQuote: 'Angebot anfordern',
      previewCV: 'Lebenslauf ansehen',
      followMe: 'Folgen Sie mir:',
      systemOnline: 'SYS: ONLINE',
      tickerItems: [
        'SYS: ONLINE',
        'ANDRIANANTENAINA FRÉDERIC',
        'M1 DATA GOVERNANCE & ENGINEERING (ENI)',
        'DATA SCIENCE • KI • MACHINE LEARNING',
        'FULL-STACK: REACT • TYPESCRIPT • FASTAPI',
        'ETL PIPELINES • SQL • DOCKER • PYTHON',
        'ENI FIANARANTSOA • MADAGASKAR',
      ],
      pillars: [
        { title: 'Data Analyst', subtitle: 'SQL / BI / Pandas' },
        { title: 'Data Engineer', subtitle: 'ETL / Airflow / Spark' },
        { title: 'Full-Stack Dev', subtitle: 'React & FastAPI' },
        { title: 'Data Governance GID', subtitle: 'Datenqualität & MDM' },
      ],
    },
    about: {
      badge: 'Über mich',
      title: 'Akademischer Werdegang &',
      highlight: 'Fachliches Profil',
      subtitle: 'Erfahren Sie mehr über meinen universitären Hintergrund an der ENI und meine Vision für Datenarchitekturen und Softwareentwicklung.',
      profilePresentation: 'Profilübersicht',
      bioParagraphs: [
        "Ich bin Informatik-Student im Master 1 für Data Governance und Data Engineering an der Nationalen Hochschule für Informatik (ENI), Universität Fianarantsoa, Madagaskar.",
        "Meine Schwerpunkte liegen an der Schnittstelle von Data Science, künstlicher Intelligenz, Full-Stack-Webentwicklung und Data Engineering.",
        "Ich verfüge über fundierte praktische Erfahrung aus universitären und eigenständigen Projekten in den Bereichen Frontend- und Backend-Entwicklung, Datenbankarchitektur, Big-Data-Verarbeitung, ETL-Pipelines und containerisierte Bereitstellung.",
        "Neugierig, analytisch und zielorientiert konzipiere ich skalierbare Softwarelösungen, analysiere Daten zur Gewinnung strategischer Erkenntnisse und löse anspruchsvolle technische Herausforderungen.",
      ],
      studyLevel: 'Studienabschluss',
      keyDomains: 'Kernbereiche',
      projectPillars: 'Projektsäulen',
      motivation: 'Engagement',
      pillarsTitle: 'Schwerpunkt-Disziplinen',
      pillars: [
        {
          title: 'Data Science & KI',
          desc: 'Datenbereinigung, explorative Datenanalyse (EDA), statistische Modellierung und Visualisierung mit Python, Pandas, NumPy und Matplotlib.',
        },
        {
          title: 'Full-Stack-Entwicklung',
          desc: 'Moderne Webarchitektur mit responsiven Oberflächen in React/TypeScript und hochperformanten APIs mit FastAPI oder Django.',
        },
        {
          title: 'Data Engineering & DBMS',
          desc: 'Relationale Modellierung (MySQL, PostgreSQL, MariaDB), performante SQL-Abfragen, ETL-Pipelines und Persistenz mit SQLite/NoSQL.',
        },
        {
          title: 'Governance & Qualität (GID)',
          desc: 'Data-Warehouse-Architektur, Stammdatenmanagement (MDM), Data Lineage, Datenkataloge und Informationssicherheit.',
        },
      ],
      highlightBadges: ['Master 1 GID', 'ENI Fianarantsoa', 'Neugier & Präzision', 'Problemlösungskompetenz'],
    },
    skills: {
      badge: 'Technischer Werkzeugkasten',
      title: 'Meine',
      highlight: 'Kernkompetenzen',
      subtitle: 'Ein professionell strukturiertes Technologie-Portfolio, optimiert für verlässliche Software- und Datenprojekte.',
      masteredBadge: 'beherrschte Technologien',
      techCountSuffix: 'Techs',
      groups: [
        {
          id: 'frontend',
          title: 'Front-End',
          subtitle: 'Moderne, reaktive Benutzeroberflächen & Design-Systeme',
          skills: [
            { name: 'React.js', badge: 'UI-Bibliothek' },
            { name: 'Next.js', badge: 'SSR / Full-Stack' },
            { name: 'Vue.js', badge: 'UI-Framework' },
            { name: 'TypeScript', badge: 'Strikte Typisierung' },
            { name: 'Tailwind CSS', badge: 'Design-System' },
            { name: 'Shadcn/ui', badge: 'Moderne UI-Komponenten' },
            { name: 'Material UI', badge: 'Komponenten-Bibliothek' },
            { name: 'Framer Motion', badge: 'UI-Animationen' },
            { name: 'jQuery / GSAP', badge: 'DOM & Interaktionen' },
          ],
        },
        {
          id: 'backend',
          title: 'Back-End',
          subtitle: 'API-Architekturen, Microframeworks & Services',
          skills: [
            { name: 'Node.js', badge: 'JavaScript-Laufzeitumgebung' },
            { name: 'Express.js', badge: 'API-Server' },
            { name: 'PHP / Laravel', badge: 'Web-MVC' },
            { name: 'Python (Flask)', badge: 'Micro-Framework' },
            { name: 'FastAPI', badge: 'Asynchrone API' },
            { name: 'API REST & GraphQL', badge: 'API-Architektur' },
            { name: 'WebSocket', badge: 'Echtzeit-Kommunikation' },
          ],
        },
        {
          id: 'databases',
          title: 'Datenbanken & Tools',
          subtitle: 'DBMS, Containerisierung, Modellierung & DevOps',
          skills: [
            { name: 'SQL', badge: 'Relationale Abfragesprache' },
            { name: 'MySQL', badge: 'RDBMS' },
            { name: 'PostgreSQL', badge: 'Erweitertes RDBMS' },
            { name: 'MongoDB', badge: 'Dokumenten-NoSQL' },
            { name: 'SQLite', badge: 'Eingebettetes DBMS' },
            { name: 'ETL', badge: 'Datenfluss-Pipelines' },
            { name: 'UML / Merise', badge: 'Software-Entwurf' },
            { name: 'Git & GitHub', badge: 'Versionskontrolle' },
            { name: 'Docker', badge: 'Containerisierung' },
            { name: 'Agile / Scrum', badge: 'Projektmethodik' },
            { name: 'Python, R, Excel', badge: 'Analyse & Berechnung' },
          ],
        },
        {
          id: 'data-analyst',
          title: 'Data Analyst',
          subtitle: 'Statistiken, Dashboards & explorative Analyse',
          skills: [
            { name: 'Excel für Fortgeschrittene', badge: 'XVERWEIS, INDEX/VERGLEICH, Pivot, Power Query' },
            { name: 'Analytisches SQL', badge: 'JOIN, GROUP BY, HAVING, Unterabfragen' },
            { name: 'SQL Window Functions', badge: 'ROW_NUMBER, RANK, LAG, LEAD' },
            { name: 'Python Data Stack', badge: 'Pandas, NumPy, Matplotlib, Seaborn' },
            { name: 'Power BI & DAX', badge: 'Dashboards, Datenmodellierung, KPIs' },
            { name: 'Deskriptive Statistik', badge: 'Mittelwert, Varianz, Korrelation' },
            { name: 'Explorative Analyse (EDA)', badge: 'Muster- & Anomalieerkennung' },
            { name: 'Business Intelligence', badge: 'Umsatz- & Trendanalysen' },
          ],
        },
        {
          id: 'data-engineer',
          title: 'Data Engineer',
          subtitle: 'Große Pipelines, Warehouses, Streaming & Orchestrierung',
          skills: [
            { name: 'ETL / ELT Pipelines', badge: 'Extrahierung, Transformation, Laden' },
            { name: 'Data Warehouse', badge: 'Dimensionale Modellierung (Fakten/Dimensionen)' },
            { name: 'Data Lake & Lakehouse', badge: 'Roh- & verteilte Speicherung' },
            { name: 'Apache Spark / PySpark', badge: 'Verteilte Big-Data-Verarbeitung' },
            { name: 'Apache Airflow', badge: 'Orchestrierung & Ablaufplanung' },
            { name: 'dbt', badge: 'Transformation im Warehouse' },
            { name: 'Big-Data-Formate', badge: 'Parquet, Avro, JSON, CSV' },
            { name: 'Kafka Streaming', badge: 'Echtzeit-Eventstreaming' },
            { name: 'Cloud Data (GCP / AWS)', badge: 'BigQuery, S3, Cloud Storage' },
            { name: 'Python & Bash Skripte', badge: 'Systemautomatisierung' },
          ],
        },
        {
          id: 'gid',
          title: 'Data Governance & GID',
          subtitle: 'Datenqualität, Kataloge, Lineage & Datenintegrität',
          skills: [
            { name: 'MCD / MLD / MPD Modellierung', badge: 'Merise & Normalisierung' },
            { name: 'Data Governance Framework', badge: 'Richtlinien, Rollen & Regeln' },
            { name: 'Data Quality Management', badge: 'Genauigkeit, Vollständigkeit, Eindeutigkeit' },
            { name: 'Data Catalog & Datenwörterbuch', badge: 'Inventar der Datenbestände' },
            { name: 'Data Lineage & Rückverfolgbarkeit', badge: 'Ende-zu-Ende-Pipeline-Tracking' },
            { name: 'Data Profiling', badge: 'Struktur- & Integritätsprüfung' },
            { name: 'Master Data Management (MDM)', badge: 'Stammdaten-Referenzsysteme' },
            { name: 'Datensicherheit & Datenschutz', badge: 'Verschlüsselung, RBAC, Compliance' },
            { name: 'Datendokumentation', badge: 'Technische & fachliche Metadaten' },
          ],
        },
        {
          id: 'aiml',
          title: 'KI & Machine Learning',
          subtitle: 'Statistische Modelle, Training & Vorhersagesysteme',
          skills: [
            { name: 'Scikit-Learn', badge: 'Regression, Klassifikation, Clustering' },
            { name: 'Churn- & Scoring-Modelle', badge: 'Prädiktive Algorithmen' },
            { name: 'NLP & Textverarbeitung', badge: 'Grundlegende Konzepte' },
            { name: 'LLM-API-Integration', badge: 'Agenten & strukturierte Prompts' },
          ],
        },
      ],
    },
    projects: {
      badge: 'Praxiserprobte Arbeiten',
      title: 'Akademische Projekte &',
      highlight: 'Praxisprojekte',
      subtitle: 'Vollständige Software- und Datenlösungen, basierend auf meinem universitären Werdegang.',
      all: 'Alle Projekte',
      fullstack: 'Full-Stack',
      backendWeb: 'Backend / Web',
      dataScienceAI: 'Data Science & KI',
      detailsArchitecture: 'Details & Architektur',
      githubLink: 'GitHub-Repository ansehen',
      modalClose: 'Schließen',
      modalGithub: 'Auf GitHub ansehen',
      archStackTitle: 'Architektur & Tech-Stack',
      keyHighlightsTitle: 'Technische Highlights & Umsetzung',
      technologiesTitle: 'Eingesetzte Technologien',
      items: [
        {
          id: 'web-management-app',
          title: 'Unternehmens-Management Web-App',
          category: 'Full-Stack',
          description: 'Vollständige Webanwendung mit entkoppelter Frontend/Backend-Architektur, leistungsstarker REST-API mit FastAPI und Docker-Containerisierung.',
          longDescription: `Entwicklung einer modernen Unternehmensverwaltungslösung. Konzipiert auf einer klaren Trennung zwischen einer dynamischen Benutzeroberfläche in React und einem schnellen, asynchronen FastAPI-Backend. 
Die relationalen Daten werden in MySQL strukturiert und persistiert. Der gesamte Stack (Client, API und Datenbank) ist in Docker-Container gekapselt, um höchste Portabilität zu gewährleisten.`,
          technologies: ['React', 'FastAPI', 'MySQL', 'Docker', 'REST API', 'TypeScript'],
          highlights: [
            'Moderne entkoppelte Architektur: Frontend (React) / Backend (FastAPI)',
            'RESTful-API-Entwicklung mit Pydantic-Validierung und automatischer Swagger-Dokumentation',
            'Relationale Modellierung, Normalisierung und strukturierte Abfragen mit MySQL',
            'Dienstorchestrierung und Multi-Container-Verwaltung mit Docker Compose',
          ],
          architecture: {
            frontend: 'React.js + Tailwind CSS (Responsive Single Page Application)',
            backend: 'FastAPI (Asynchrones Python, Pydantic-Typisierung, REST-Endpunkte)',
            database: 'MySQL (Relationale Schemata, Fremdschlüssel, Indexierung)',
            devops: 'Docker (Multi-Stage Dockerfile und Docker Compose)',
          },
          imagePlaceholderText: 'React · FastAPI · MySQL · Docker',
        },
        {
          id: 'task-management-app',
          title: 'Aufgaben- & Workflow-Management-App',
          category: 'Backend / Web',
          description: 'Webanwendung zur Aufgabenverwaltung in Python/Django mit dynamischen Formularen, relationaler Persistenz und vollständigen CRUD-Operationen.',
          longDescription: `Entwicklung einer robusten Plattform zur Workflow- und Aufgabenverfolgung (To-Do, In Bearbeitung, Erledigt). 
Umgesetzt mit dem Python Django Framework nach dem bewährten MVC/MVT-Muster mit Session-Management, serverseitiger Formularvalidierung, relationaler Persistenz in SQLite/MySQL und integrierter Absicherung gegen CSRF/XSS.`,
          technologies: ['Python', 'Django', 'SQLite', 'MySQL', 'CRUD', 'Django Forms'],
          highlights: [
            'Implementierung des Django Model-View-Template (MVT) Entwurfsmusters',
            'Robuste serverseitige Formularverarbeitung und dynamische Validierung',
            'Datenpersistenz mit SQLite (Entwicklung) und MySQL (Produktion)',
            'Vollständige CRUD-Funktionalität (Erstellen, Lesen, Aktualisieren, Löschen) mit Zugriffskontrolle',
          ],
          architecture: {
            frontend: 'Django-Templates mit maßgeschneiderten interaktiven UI-Elementen',
            backend: 'Django ORM, Class-based Views, URL-Routing',
            database: 'SQLite für schnelles Prototyping / MySQL für persistente Datenhaltung',
            devops: 'Virtuelle Python-Umgebungen (venv) & Git-Versionskontrolle',
          },
          imagePlaceholderText: 'Python · Django · SQLite / MySQL',
        },
        {
          id: 'data-science-analytics',
          title: 'Data Science & Analytics Projekte',
          category: 'Data Science & IA',
          description: 'Ende-zu-Ende-Pipeline für Datenanalyse: Datenerfassung, Bereinigung, explorative Datenanalyse (EDA) und Visualisierung mit Python, Pandas und NumPy.',
          longDescription: `Durchführung von Data-Engineering- und explorativen Datenanalyse-Projekten (EDA) anhand realer Datensätze (Kundensegmentierung, Verhaltensmuster, Abwanderungsrisiko).
Implementierung von Bereinigungs-Pipelines, Imputation fehlender Werte, deskriptiver Statistik und aussagekräftigen Visualisierungen mit dem wissenschaftlichen Python-Ecosystem.`,
          technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA', 'Scikit-Learn'],
          highlights: [
            'Gründliche Datenbereinigung, Ausreißerbehandlung und strukturierte Formatierung',
            'Fortgeschrittene DataFrame-Manipulation und vektorisierte Berechnungen mit Pandas & NumPy',
            'Explorative Datenanalyse (EDA) und Ermittlung statistischer Korrelationen',
            'Erstellung publikationsreifer Grafiken und Analyse-Dashboards mit Matplotlib',
          ],
          architecture: {
            frontend: 'Interaktive Jupyter Notebooks & grafische Visualisierungen',
            backend: 'Python 3.x, automatisierte ETL-Skripte, statistische Modellierung',
            database: 'Große CSV-Dateien, SQL-Exporte und Daten-Pipelines',
            devops: 'WSL, Git, isolierte wissenschaftliche Python-Umgebungen',
          },
          imagePlaceholderText: 'Python · Pandas · NumPy · Matplotlib',
        },
      ],
    },
    education: {
      badge: 'Akademischer Bildungsweg',
      title: 'Ausbildung &',
      highlight: 'Universitäre Abschlüsse',
      subtitle: 'Mein universitärer Werdegang an der Nationalen Hochschule für Informatik (ENI) und Universität Fianarantsoa.',
      currentBadge: 'Laufend',
      majorCourses: 'Studienschwerpunkte:',
      items: [
        {
          id: 'master-1',
          degree: 'Master 1 – Data Governance & Data Engineering (GID)',
          institution: 'Nationale Hochschule für Informatik (ENI)',
          location: 'Fianarantsoa, Madagaskar',
          period: '2025 – Heute',
          current: true,
          description: 'Universitäres Masterstudium mit Fokus auf Informationssystemarchitektur, Big-Data-Governance, verteilte Datenbanken, künstliche Intelligenz und moderne Softwaretechnik.',
          topics: [
            'Data Governance, Datenqualität & Stammdatenmanagement (MDM)',
            'Data Engineering, ETL/ELT-Pipelines & Big Data',
            'Angewandte künstliche Intelligenz & Machine Learning',
            'Verteilte Architekturen, Data Warehouse & Lakehouse',
          ],
        },
        {
          id: 'licence-cs',
          degree: 'Bachelor in Informatik',
          institution: 'Universität Fianarantsoa',
          location: 'Fianarantsoa, Madagaskar',
          period: '2022 – 2024',
          current: false,
          description: 'Fundierte Informatikausbildung in Theorie und Praxis: komplexe Algorithmen, Datenstrukturen, objektorientierte Programmierung, Softwaremodellierung und relationale Datenbanken.',
          topics: [
            'Algorithmen & Fortgeschrittene Datenstrukturen',
            'Software-Engineering & UML / Merise Modellierung',
            'Webprogrammierung & relationale SQL-Datenbanken',
            'Rechnernetze & Betriebssysteme',
          ],
        },
        {
          id: 'baccalaureat',
          degree: 'Allgemeine Hochschulreife / Abitur (Sektion D, C, S)',
          institution: 'Allgemeinbildende Sekundarstufe',
          location: 'Madagascar',
          period: '2020, 2021, 2022',
          current: false,
          description: 'Mathematisch-naturwissenschaftlicher Zweig mit Schwerpunkt auf angewandter Mathematik, Physik und analytischer Problemlösung.',
          topics: [
            'Höhere Mathematik & Lineare Algebra',
            'Physikalische Naturwissenschaften & Forschungsmethodik',
            'Formale Logik & analytisches Denken',
          ],
        },
      ],
    },
    qualities: {
      badge: 'Stärken & Kommunikation',
      title: 'Persönliche Stärken &',
      highlight: 'Sprachkenntnisse',
      subtitle: 'Methodische Werte und sprachliche Kompetenzen, die eine erfolgreiche Zusammenarbeit sichern.',
      qualitiesTitle: 'Arbeitsweise & Methodische Stärken',
      languagesTitle: 'Sprachkenntnisse',
      qualitiesList: [
        { title: 'Analytisches Denken', desc: 'Fähigkeit, komplexe Probleme strukturiert in logische Einzelschritte zu zerlegen.' },
        { title: 'Präzision & Sorgfalt', desc: 'Sorgfältiger Blick fürs Detail, strenge Typisierung und hohe Code-Qualität.' },
        { title: 'Wissbegierde', desc: 'Stetiger Antrieb, die Funktionsweise moderner Architekturen und Algorithmen zu verstehen.' },
        { title: 'Eigenständigkeit', desc: 'Hohe Selbstständigkeit bei der Lösungsfindung und zielgerichteten Projektumsetzung.' },
        { title: 'Teamfähigkeit', desc: 'Reibungslose Zusammenarbeit über Git/GitHub, Wissensaustausch und konstruktives Feedback.' },
        { title: 'Kontinuierliches Lernen', desc: 'Aktives Technologie-Monitoring und schnelle Einarbeitung in neue Frameworks.' },
      ],
      languagesList: [
        { name: 'Madagassisch', level: 'Muttersprache', proficiency: 'Muttersprache', details: 'Fließend in Wort und Schrift.' },
        { name: 'Französisch', level: 'Fließend & Verhandlungssicher', proficiency: 'Fließend', details: 'Sicherer Einsatz in akademischen und beruflichen Kontexten.' },
        { name: 'Englisch', level: 'Mittelstufe & Fachsprache', proficiency: 'Mittelstufe', details: 'Lesen technischer Dokumentationen, Architekturkonzeption und Kommunikation.' },
        { name: 'Deutsch', level: 'Grundkenntnisse', proficiency: 'Grundkenntnisse', details: 'Basisverständnis und aktive Vertiefung.' },
      ],
    },
    contact: {
      badge: 'Projekt starten',
      title: 'Projektanfrage &',
      highlight: 'Direkter Kontakt',
      subtitle: 'Senden Sie mir Ihre Anfrage für eine gezielte Lösung oder ein Angebot. Antwort innerhalb von 24 Stunden.',
      emailDirect: 'Direkte E-Mail',
      phoneWhatsapp: 'Telefon / WhatsApp',
      location: 'Standort',
      socialTitle: 'Berufliche Netzwerke',
      formTitle: 'Projektanfrage absenden',
      successMessage: 'Ihr E-Mail-Programm wurde mit den vorausgefüllten Daten geöffnet!',
      successSub: 'Sie können mich auch direkt per WhatsApp kontaktieren:',
      section1: '1. Ihre Kontaktdaten',
      fullName: 'Vollständiger Name',
      fullNamePlaceholder: 'z.B. Max Mustermann',
      email: 'E-Mail-Adresse',
      phone: 'Telefon / WhatsApp',
      company: 'Unternehmen / Organisation',
      companyPlaceholder: 'Firma / Startup / Privatperson',
      role: 'Position / Funktion',
      rolePlaceholder: 'z.B. Projektleiter / Gründer',
      section2: '2. Art des Projekts',
      section3: '3. Gewünschte Leistungen',
      section3Sub: 'Wählen Sie eine oder mehrere Leistungen aus:',
      section4Budget: 'Geschätztes Budget',
      section4Timeline: 'Gewünschter Zeitrahmen',
      section4State: 'Projektstatus',
      section5Description: 'Projektbeschreibung',
      section5Sub: 'Ziele, geplante Funktionen, technische Anforderungen und gewünschte Ergebnisse.',
      section5Placeholder: 'Beschreiben Sie hier Ihr Vorhaben...',
      section6Attachments: 'Anhänge (Link zu Drive, Figma, Docs)',
      section6Placeholder: 'Link zu Lastenheft, Design oder Mockups...',
      section6ContactMethod: 'Bevorzugter Kontaktweg',
      section7Additional: 'Zusätzliche Informationen (Optional)',
      section7Placeholder: 'Verfügbarkeit für Telefonat, Details...',
      termsCheckbox: 'Ich stimme zu, dass meine Angaben zur Kontaktaufnahme bzgl. dieses Projekts verarbeitet werden.',
      replyGuarantee: '⚡ Antwort binnen 24 Stunden · Ihre Daten werden streng vertraulich behandelt.',
      submitBtn: 'Projektanfrage absenden',
      submittingBtn: 'Wird vorbereitet...',
      copyTooltip: 'E-Mail-Adresse kopieren',
      projectTypes: [
        'Unternehmens-Website',
        'Individuelle Webanwendung',
        'Mobile App',
        'E-Commerce / Online-Shop',
        'Data Analytics & Business Intelligence',
        'Data Science & Künstliche Intelligenz',
        'Data Engineering & Pipelines',
        'Datenbankdesign & Migration',
        'Prozessautomatisierung & Workflows',
        'API & Software-Integration',
        'Relaunch & Wartung',
        'Sonstiges innovatives Vorhaben',
      ],
      services: [
        'Frontend-Entwicklung (React, TS)',
        'Backend-Entwicklung (FastAPI, Flask)',
        'Full-Stack Webentwicklung',
        'Datenanalyse & Visualisierung (Pandas, BI)',
        'Datenbankdesign & Modellierung',
        'ETL / ELT Pipeline-Entwicklung',
        'Machine Learning & Angewandte KI',
        'Docker-Containerisierung & Deployment',
        'Data Governance & Datenqualität (GID)',
      ],
      budgetOptions: [
        'Unter 100.000 MGA (< 25 €)',
        '100.000 – 300.000 MGA (25 – 70 €)',
        '300.000 – 500.000 MGA (70 – 115 €)',
        '500.000 – 1.000.000 MGA (115 – 230 €)',
        'Über 1.000.000 MGA (> 230 €)',
        'Nach Vereinbarung / Flexibel',
      ],
      timelineOptions: [
        'Dringend (unter 2 Wochen)',
        '1 Monat',
        '2 – 3 Monate',
        'Mehr als 3 Monate',
        'Flexibel',
      ],
      projectStates: [
        'Erste Idee',
        'Bedarf definiert',
        'Lastenheft vorhanden',
        'Wireframe / Mockup vorhanden',
        'Laufendes Projekt zur Optimierung',
      ],
      contactMethods: ['E-Mail', 'Telefon', 'WhatsApp'],
      errors: {
        fullNameRequired: 'Vollständiger Name ist erforderlich.',
        emailRequired: 'E-Mail-Adresse ist erforderlich.',
        emailInvalid: 'Ungültiges E-Mail-Format.',
        descRequired: 'Projektbeschreibung ist erforderlich.',
        descMinLength: 'Bitte mindestens 15 Zeichen angeben.',
        termsRequired: 'Sie müssen die Vereinbarung akzeptieren.',
      },
    },
    footer: {
      copyright: 'Mit Präzision, Sorgfalt und Leidenschaft entwickelt.',
      quickLinks: 'Navigation',
      social: 'Netzwerke & Kontakt',
      backToTop: 'Nach oben',
      locationLabel: 'Standort:',
    },
    cvModal: {
      title: 'Curriculum Vitae',
      downloadBtn: 'PDF herunterladen',
      downloadTitle: 'Originale PDF-Lebenslauf herunterladen',
      openPdfBtn: 'PDF öffnen',
      openPdfTitle: 'PDF in neuem Tab öffnen',
      printBtn: 'Drucken / PDF',
      closeBtn: 'Schließen',
      officialResumeLabel: 'ANDRIANANTENAINA Fréderic • Offizieller Lebenslauf',
      degreeLevel: 'M1 — DATEN-GOVERNANCE & DATA ENGINEERING',
      contactTitle: 'KONTAKT',
      location: 'Antananarivo, Madagaskar',
      qualitiesTitle: 'STÄRKEN',
      qualities: [
        'Analytisches Denkvermögen',
        'Sorgfalt & Gründlichkeit',
        'Wissbegierde & Neugier',
        'Selbstständigkeit',
        'Teamfähigkeit',
        'Kontinuierliche Lernbereitschaft',
      ],
      interestsTitle: 'INTERESSEN & HOBBYS',
      interests: ['Reisen & Kulturen', 'Radfahren', 'Fußball', 'Gitarre'],
      tagline: 'Data Science • Künstliche Intelligenz • Full-Stack-Entwicklung • Data Engineering',
      profileTitle: 'PERSÖNLICHES PROFIL',
      profileText:
        'Master-1-Student für Daten-Governance und Data Engineering an der Nationalen Hochschule für Informatik (ENI) mit fundierter Informatik-Ausbildung und großer Begeisterung für Softwareentwicklung, Data Science und Künstliche Intelligenz. Vielseitiges Profil mit fundierten Kenntnissen in Frontend- und Backend-Entwicklung, Datenbanken, mobilen Anwendungen und Datenverarbeitung. Neugierig, gewissenhaft und hochmotiviert, um an innovativen Projekten mitzuwirken und Praxiserfahrung in einem professionellen Umfeld zu vertiefen.',
      skillsTitle: 'TECHNISCHE FÄHIGKEITEN',
      skillsFrontendLabel: 'Frontend',
      skillsFrontendList: 'HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Vue.js, Tailwind CSS, Bootstrap',
      skillsBackendLabel: 'Backend',
      skillsBackendList: 'Python, Django, FastAPI, Java, PHP, Node.js, Express.js, REST-APIs, Authentifizierung',
      skillsDatabasesLabel: 'Datenbanken',
      skillsDatabasesList: 'MySQL, MariaDB, PostgreSQL, SQLite, MongoDB, Datenmodellierung, CRUD',
      skillsDataAILabel: 'Data Science & KI',
      skillsDataAIList: 'Python, Pandas, NumPy, Matplotlib, Machine Learning, EDA, Künstliche Intelligenz, NLP, LLM',
      skillsMobileLabel: 'Mobile',
      skillsMobileList: 'Dart, Flutter, Material Design, REST-API, State Management',
      skillsDevOpsLabel: 'DevOps & Werkzeuge',
      skillsDevOpsList: 'Git, GitHub, GitLab, Docker, Linux, WSL, Postman, VS Code, PyCharm, npm, Vite',
      projectsTitle: 'AKADEMISCHE PROJEKTE',
      projects: [
        {
          title: 'Webbasierte Management-Anwendung',
          stack: 'React • FastAPI • MySQL • Docker',
          bullets: [
            'Entwicklung einer Webanwendung mit entkoppelter Frontend/Backend-Architektur.',
            'Erstellung einer leistungsstarken REST-API mit FastAPI.',
            'Datenbankverwaltung und Optimierung mit MySQL.',
            'Containerisierung und Bereitstellung der Anwendung mit Docker.',
          ],
        },
        {
          title: 'Aufgabenverwaltungs-Anwendung',
          stack: 'Python • Django • SQLite/MySQL',
          bullets: [
            'Entwicklung einer Webanwendung zur Aufgabenverfolgung und Workflow-Steuerung.',
            'Erstellung von Formularen, Eingabevalidierung und Datenverwaltung mit Django.',
            'Implementierung vollständiger CRUD-Operationen und Datenpersistenz.',
          ],
        },
        {
          title: 'Data-Science-Projekte',
          stack: 'Python • Pandas • NumPy',
          bullets: [
            'Datenaufbereitung, Bereinigung und Vorverarbeitung strukturierter Daten.',
            'Explorative Datenanalyse (EDA) und aussagekräftige statistische Visualisierung.',
            'Einsatz des Python-Ökosystems für Datenanalyse und Informationsextraktion.',
          ],
        },
      ],
      educationTitle: 'AUSBILDUNG',
      educationItems: [
        {
          degree: 'Master 1 — Daten-Governance & Data Engineering',
          school: 'Nationale Hochschule für Informatik (ENI)',
          period: '2025 – Heute',
        },
        {
          degree: 'Bachelor in Informatik',
          school: 'Universität Fianarantsoa',
        },
        {
          degree: 'Allgemeines Abitur / Baccalauréat — Wissenschaftlicher Zweig (D, C, S)',
          period: '2020, 2021, 2022',
        },
      ],
      languagesTitle: 'SPRACHEN',
      languages: [
        { name: 'Madagassisch', level: 'Muttersprache' },
        { name: 'Französisch', level: 'Fließend / Gute Kenntnisse' },
        { name: 'Englisch', level: 'Mittelstufe / Konversationssicher' },
      ],
      locationFooter: 'Antananarivo, Madagaskar • M1 GID ENI',
    },
  },
};
