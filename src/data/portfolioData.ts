import {
  PersonalInfo,
  SkillItem,
  ProjectItem,
  EducationItem,
  LanguageItem,
  QualityItem,
} from '../types';

export const personalInfo: PersonalInfo = {
  fullName: 'ANDRIANANTENAINA Fréderic',
  headline: 'Data Science • Intelligence Artificielle • Full-Stack Development • Data Engineering',
  status: 'Étudiant en Master 1 (Gouvernance et Ingénierie des Données)',
  institution: "École Nationale de l'Informatique (ENI)",
  university: 'Université de Fianarantsoa, Madagascar',
  location: 'Antananarivo, Madagascar',
  email: 'andrianantenainafrederic9@gmail.com',
  phone: '+261 38 59 000 80',
  github: 'https://github.com/andrianantenainafrederic9-cloud',
  githubUsername: 'andrianantenainafrederic9-cloud',
  linkedin: 'https://www.linkedin.com/in/andrianantenaina-frederic-101789309/',
  aboutMeFr: `Je suis étudiant en informatique, actuellement en Master 1 Gouvernance et Ingénierie des Données à l'École Nationale de l'Informatique (ENI), Université de Fianarantsoa, Madagascar.

Mes centres d'intérêt se situent au croisement de la Data Science, de l'Intelligence Artificielle, du Développement Full-Stack et de la Data Engineering.

J'ai acquis une solide expérience à travers des projets académiques et personnels couvrant le développement frontend et backend, la gestion de bases de données, le traitement de données volumineuses, l'architecture ETL et le déploiement d'applications web conteneurisées.

Curieux, rigoureux et autonome, j'aime concevoir des solutions logicielles robustes, explorer la donnée pour en extraire des insights stratégiques, et relever des défis techniques innovants.`,
  aboutMeEn: `I am a Computer Science student currently pursuing a Master's degree in Data Governance and Data Engineering at the National School of Computer Science (ENI), University of Fianarantsoa, Madagascar.

My interests lie at the intersection of Data Science, Artificial Intelligence, Full-Stack Development, and Data Engineering.

I have experience working on academic and personal projects involving frontend and backend development, database management, data processing, ETL pipelines, and web application development.

I enjoy building software solutions, exploring data, solving technical problems, and learning new technologies. I am curious, rigorous, autonomous, and motivated to continuously improve my technical skills while contributing to innovative projects.`,
  specialties: [
    'Data Science & IA',
    'Full-Stack Web (React & FastAPI)',
    'Data Engineering & ETL (Airflow, Spark)',
    'Gouvernance & Qualité des Données (GID)',
  ],
};

export const skillsData: SkillItem[] = [
  // 1. Front-End (9 compétences)
  { name: 'React.js', category: 'Front-End', badge: 'Library UI' },
  { name: 'Next.js', category: 'Front-End', badge: 'SSR / Full-Stack' },
  { name: 'Vue.js', category: 'Front-End', badge: 'Framework UI' },
  { name: 'TypeScript', category: 'Front-End', badge: 'Typage strict' },
  { name: 'Tailwind CSS', category: 'Front-End', badge: 'Design System' },
  { name: 'Shadcn/ui', category: 'Front-End', badge: 'Composants modernes' },
  { name: 'Material UI', category: 'Front-End', badge: 'Component Library' },
  { name: 'Framer Motion', category: 'Front-End', badge: 'Animations' },
  { name: 'jQuery / GSAP', category: 'Front-End', badge: 'DOM & Micro-interactions' },

  // 2. Back-End (7 compétences)
  { name: 'Node.js', category: 'Back-End', badge: 'Runtime JavaScript' },
  { name: 'Express.js', category: 'Back-End', badge: 'Serveur API' },
  { name: 'PHP / Laravel', category: 'Back-End', badge: 'Web MVC' },
  { name: 'Python (Flask)', category: 'Back-End', badge: 'Micro-framework' },
  { name: 'FastAPI', category: 'Back-End', badge: 'API Asynchrone' },
  { name: 'API REST & GraphQL', category: 'Back-End', badge: 'Architecture d’API' },
  { name: 'WebSocket', category: 'Back-End', badge: 'Temps réel' },

  // 3. Bases de données & Outils (11 compétences)
  { name: 'SQL', category: 'Bases de données & Outils', badge: 'Langage relationnel' },
  { name: 'MySQL', category: 'Bases de données & Outils', badge: 'SGBDR' },
  { name: 'PostgreSQL', category: 'Bases de données & Outils', badge: 'SGBD Avancé' },
  { name: 'MongoDB', category: 'Bases de données & Outils', badge: 'NoSQL Document' },
  { name: 'SQLite', category: 'Bases de données & Outils', badge: 'SGBD Embarqué' },
  { name: 'ETL', category: 'Bases de données & Outils', badge: 'Pipelines de flux' },
  { name: 'UML / Merise', category: 'Bases de données & Outils', badge: 'Conception logicielle' },
  { name: 'Git & GitHub', category: 'Bases de données & Outils', badge: 'Versionnement' },
  { name: 'Docker', category: 'Bases de données & Outils', badge: 'Conteneurisation' },
  { name: 'Agile / Scrum', category: 'Bases de données & Outils', badge: 'Méthodologie' },
  { name: 'Python, R, Excel', category: 'Bases de données & Outils', badge: 'Analyse & Calcul' },

  // 4. Data Analyst (Compétences analytiques & BI)
  { name: 'Excel Avancé', category: 'Data Analyst', badge: 'RECHERCHEX, INDEX/EQUIV, TCD, Power Query' },
  { name: 'SQL Analytique', category: 'Data Analyst', badge: 'JOIN, GROUP BY, HAVING, Sous-requêtes' },
  { name: 'Window Functions SQL', category: 'Data Analyst', badge: 'ROW_NUMBER, RANK, LAG, LEAD' },
  { name: 'Python Data Stack', category: 'Data Analyst', badge: 'Pandas, NumPy, Matplotlib, Seaborn' },
  { name: 'Power BI & DAX', category: 'Data Analyst', badge: 'Dashboards, Modélisation, KPIs' },
  { name: 'Statistiques descriptives', category: 'Data Analyst', badge: 'Moyenne, variance, corrélation' },
  { name: 'Analyse Exploratoire (EDA)', category: 'Data Analyst', badge: 'Détection d’anomalies & patterns' },
  { name: 'Business Intelligence', category: 'Data Analyst', badge: 'Analyse des ventes, tendances' },

  // 5. Data Engineer (Infrastructures & Pipelines)
  { name: 'Pipelines ETL / ELT', category: 'Data Engineer', badge: 'Extraction, transformation, chargement' },
  { name: 'Data Warehouse', category: 'Data Engineer', badge: 'Modélisation dimensionnelle (faits/dimensions)' },
  { name: 'Data Lake & Lakehouse', category: 'Data Engineer', badge: 'Stockage brut & distribué' },
  { name: 'Apache Spark / PySpark', category: 'Data Engineer', badge: 'Traitement distribué Big Data' },
  { name: 'Apache Airflow', category: 'Data Engineer', badge: 'Orchestration & scheduling' },
  { name: 'dbt', category: 'Data Engineer', badge: 'Transformation dans l’entrepôt' },
  { name: 'Formats Big Data', category: 'Data Engineer', badge: 'Parquet, Avro, JSON, CSV' },
  { name: 'Streaming avec Kafka', category: 'Data Engineer', badge: 'Flux en temps réel' },
  { name: 'Cloud Data (GCP / AWS)', category: 'Data Engineer', badge: 'BigQuery, S3, Cloud Storage' },
  { name: 'Scripts Python & Bash', category: 'Data Engineer', badge: 'Automatisation systèmes' },

  // 6. Ingénierie & Gouvernance des Données (GID)
  { name: 'Modélisation MCD, MLD, MPD', category: 'Gouvernance & GID', badge: 'Merise & Normalisation' },
  { name: 'Data Governance Framework', category: 'Gouvernance & GID', badge: 'Politiques, rôles & règles' },
  { name: 'Data Quality Management', category: 'Gouvernance & GID', badge: 'Exactitude, complétude, unicité' },
  { name: 'Data Catalog & Dictionnaire', category: 'Gouvernance & GID', badge: 'Inventaire des actifs de données' },
  { name: 'Data Lineage & Traçabilité', category: 'Gouvernance & GID', badge: 'Suivi de bout en bout des flux' },
  { name: 'Data Profiling', category: 'Gouvernance & GID', badge: 'Audit de structure & intégrité' },
  { name: 'Master Data Management (MDM)', category: 'Gouvernance & GID', badge: 'Référentiels maîtres' },
  { name: 'Sécurité & Data Privacy', category: 'Gouvernance & GID', badge: 'Chiffrement, RBAC, conformité' },
  { name: 'Documentation Data', category: 'Gouvernance & GID', badge: 'Documentation technique & métier' },

  // 7. IA & Machine Learning
  { name: 'Scikit-Learn', category: 'IA & Machine Learning', badge: 'Régression, Classification, Clustering' },
  { name: 'Modélisation Churn & Scoring', category: 'IA & Machine Learning', badge: 'Algorithmes prédictifs' },
  { name: 'NLP & Traitement de texte', category: 'IA & Machine Learning', badge: 'Notions fondamentales' },
  { name: 'Intégration d’APIs LLM', category: 'IA & Machine Learning', badge: 'Agents & Prompts structurés' },
];

export const projectsData: ProjectItem[] = [
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
];

export const educationData: EducationItem[] = [
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
];

export const languagesData: LanguageItem[] = [
  {
    name: 'Malgache',
    level: 'Langue maternelle',
    proficiency: 'Native',
    percentage: 100,
    flag: '🇲🇬',
    details: 'Expression orale et écrite fluide et naturelle.',
  },
  {
    name: 'Français',
    level: 'Courant & Professionnel',
    proficiency: 'Courant',
    percentage: 90,
    flag: '🇫🇷',
    details: 'Maîtrise approfondie des contextes académiques, techniques et professionnels.',
  },
  {
    name: 'Anglais',
    level: 'Intermédiaire & Technique',
    proficiency: 'Intermédiaire',
    percentage: 75,
    flag: '🇬🇧',
    details: 'Lecture de documentation technique, conception, rédaction et communication.',
  },
  {
    name: 'Allemand',
    level: 'Notions fondamentales & Débutant',
    proficiency: 'Notions',
    percentage: 40,
    flag: '🇩🇪',
    details: 'Compréhension de base et apprentissage en cours.',
  },
];

export const qualitiesData: QualityItem[] = [
  {
    title: 'Esprit analytique',
    description: 'Capacité à décomposer des problèmes complexes en sous-composants abordables et logiques.',
    iconName: 'Brain',
  },
  {
    title: 'Rigueur',
    description: 'Attention méticuleuse aux détails, au typage strict, à la cohérence et à la qualité du code.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Curiosité',
    description: 'Volonté constante de comprendre le fonctionnement interne des technologies et des modèles.',
    iconName: 'Sparkles',
  },
  {
    title: 'Autonomie',
    description: 'Aptitude à rechercher des solutions, structurer son travail et avancer avec efficience.',
    iconName: 'Compass',
  },
  {
    title: 'Travail en équipe',
    description: 'Aisance pour collaborer via Git/GitHub, partager des connaissances et écouter les retours.',
    iconName: 'Users',
  },
  {
    title: 'Apprentissage continu',
    description: 'Veille technologique active et adaptation rapide aux nouveaux outils et architectures.',
    iconName: 'GraduationCap',
  },
];
