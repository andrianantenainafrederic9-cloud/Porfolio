# Portfolio Professionnel — ANDRIANANTENAINA Fréderic

> **Data Science • Intelligence Artificielle • Full-Stack Development • Data Engineering**  
> Étudiant en Master 1 — Gouvernance et Ingénierie des Données (GID), École Nationale de l'Informatique (ENI), Université de Fianarantsoa, Madagascar.

---

## 🚀 Présentation du Projet

Ce projet est un portfolio professionnel pour développeur et data scientist, conçu et architecturé selon les plus hauts standards du développement frontend moderne :

- **Framework & Rendu** : React 18, TypeScript (mode strict), Vite
- **Styling & Design System** : Tailwind CSS (Dark Premium Navy `#080D19`, Glassmorphism, Glow accents)
- **Animations & Micro-interactions** : Framer Motion (staggered entrance, scroll-triggered reveals, modal animations)
- **Icônes** : Lucide React
- **Typographie** : Inter & JetBrains Mono (Google Fonts)

---

## 📁 Architecture du Code (`src/`)

```
portfolio/
├── public/
│   └── favicon.svg               # Favicon SVG monogramme AF moderne
├── src/
│   ├── animations/
│   │   └── variants.ts           # Variantes centralisées Framer Motion
│   ├── assets/                   # Ressources statiques
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Barre de navigation sticky + active section + menu mobile
│   │   │   └── Footer.tsx        # Footer complet avec liens sociaux et retour en haut
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Section d'accueil avec texte animé, CTA, monogramme AF
│   │   │   ├── About.tsx         # Présentation bilingue FR/EN, parcours ENI, statistiques
│   │   │   ├── Skills.tsx        # Filtres interactifs par catégorie, recherche temps réel
│   │   │   ├── Projects.tsx      # Cartes projets académiques réels + Modale d'architecture
│   │   │   ├── Education.tsx     # Timeline académique (Master 1 GID ENI, Licence, Bac)
│   │   │   ├── QualitiesAndLanguages.tsx # Qualités, langues avec barres de niveau, loisirs
│   │   │   └── Contact.tsx       # Coordonnées, copie 1-clic de l'email, formulaire validé
│   │   └── ui/
│   │       ├── Badge.tsx         # Badges réutilisables (primary, cyan, neutral)
│   │       ├── Button.tsx        # Boutons réutilisables avec gradients et états hover
│   │       ├── Card.tsx          # Conteneurs glassmorphism avec bordures lumineuses
│   │       ├── Modal.tsx         # Modale accessible avec verrouillage de scroll
│   │       └── SectionHeading.tsx# En-têtes de section standardisés
│   ├── data/
│   │   └── portfolioData.ts      # Données réelles extraites fidèlement du CV
│   ├── hooks/
│   │   ├── useActiveSection.ts   # Détection de la section visible au scroll
│   │   └── useScrollDirection.ts # Gestion du masquage/affichage de la navbar
│   ├── types/
│   │   └── index.ts              # Typage TypeScript strict pour toutes les entités
│   ├── utils/
│   │   └── cn.ts                 # Fusion propre des classes Tailwind (clsx + twMerge)
│   ├── App.tsx                   # Point d'intégration principal
│   ├── main.tsx                  # Montage React DOM
│   └── index.css                 # Directives Tailwind, scrollbar personnalisée, effets glow
├── index.html                    # SEO, balises OpenGraph, Google Fonts
├── package.json                  # Dépendances et scripts de build
├── postcss.config.js             # Configuration PostCSS
├── tailwind.config.js            # Configuration du thème Dark Premium
├── tsconfig.json                 # Configuration TypeScript stricte avec alias `@/`
├── vercel.json                   # Configuration de déploiement Vercel
└── vite.config.ts                # Configuration Vite avec alias `@`
```

---

## 🛠️ Installation & Démarrage en local

### 1. Prérequis
- Node.js version 18 ou supérieure
- npm ou pnpm

### 2. Démarrer le serveur de développement
```bash
cd portfolio
npm install
npm run dev
```
L'application sera accessible sur `http://localhost:3000`.

### 3. Compiler pour la production
```bash
npm run build
```
Le dossier `dist/` généré est prêt à être déployé sur n'importe quel CDN ou hébergeur statique.

---

## 🌐 Déploiement sur Vercel

1. Pousser le dossier `portfolio` sur votre compte GitHub (`https://github.com/andrianantenainafrederic9-cloud`).
2. Rendez-vous sur [vercel.com](https://vercel.com) et importez votre dépôt.
3. Configurez le **Root Directory** sur `portfolio` (ou la racine si vous avez placé le contenu à la racine du dépôt).
4. Vercel détecte automatiquement Vite et exécute `npm run build`. Le fichier `vercel.json` inclus s'occupe de la réécriture des URLs.
