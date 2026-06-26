export type Cat = 'saas' | 'ai' | 'ops' | 'mobile' | 'product';

export const CAT_LABEL: Record<Cat, { fr: string; en: string }> = {
  saas: { fr: 'SaaS vertical', en: 'Vertical SaaS' },
  ai: { fr: 'IA & conformité', en: 'AI & compliance' },
  ops: { fr: 'Plateforme & ops', en: 'Platform & ops' },
  mobile: { fr: 'Mobile', en: 'Mobile' },
  product: { fr: 'Produit & WebGL', en: 'Product & WebGL' },
};

export interface Proof { problem: string; built: string; proof: string; }
export interface Project {
  name: string;
  cat: Cat;
  repo?: string;            // github.com/santana64/<repo>
  selected?: boolean;       // shown as a full proof card
  blurb: { fr: string; en: string };
  proof?: { fr: Proof; en: Proof };
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    name: 'ChantierDevis', cat: 'saas', repo: 'chantierdevis', selected: true,
    blurb: {
      fr: "SaaS BTP : devis, marges, TVA, PDF, conversion devis→facture et suivi des statuts.",
      en: "Construction SaaS: quotes, margins, VAT, PDF, quote→invoice conversion and status tracking.",
    },
    proof: {
      fr: {
        problem: "Les artisans du BTP perdent du temps et de la marge sur des devis manuels, souvent faux sur la TVA et les marges.",
        built: "SaaS complet : devis pro (marges, TVA, remises), conversion devis accepté → facture, PDF imprimable côté serveur, auth maison, rate-limiting, abonnement Stripe.",
        proof: "Le projet le plus mature du portefeuille — 52 commits, génération PDF serveur, facturation Stripe câblée, logique métier testée (Vitest).",
      },
      en: {
        problem: "Tradespeople lose time and margin on manual quotes that are often wrong on VAT and margins.",
        built: "Full SaaS: pro quotes (margins, VAT, discounts), accepted-quote → invoice conversion, server-side printable PDF, custom auth, rate-limiting, Stripe subscription.",
        proof: "The most mature project in the portfolio — 52 commits, server PDF generation, Stripe billing wired, domain logic tested (Vitest).",
      },
    },
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'pdf-lib', 'Vitest'],
  },
  {
    name: 'SignalCore V8', cat: 'ops', selected: true,
    blurb: {
      fr: "War room opérationnelle B2B : 29 entités, moteur de scoring TDD, pipeline, multi-tenant strict.",
      en: "B2B operational war room: 29 entities, TDD scoring engine, pipeline, strict multi-tenancy.",
    },
    proof: {
      fr: {
        problem: "Les équipes commerciales B2B pilotent leur acquisition à travers une dizaine d'outils dispersés, sans vue unique ni priorisation.",
        built: "Une « war room » : 29 entités modélisées (Drizzle + RLS), moteur de scoring pur développé en TDD, pipeline commercial, génération de briefs, revues hebdo, exports CSV.",
        proof: "31 commits, isolation multi-tenant stricte par workspace, couverture e2e Playwright, schéma à 29 entités avec contraintes d'intégrité.",
      },
      en: {
        problem: "B2B sales teams run acquisition across a dozen scattered tools, with no single view and no prioritisation.",
        built: "A war room: 29 modeled entities (Drizzle + RLS), a pure scoring engine built test-first, sales pipeline, brief generation, weekly reviews, CSV exports.",
        proof: "31 commits, strict per-workspace multi-tenant isolation, Playwright e2e coverage, a 29-entity schema with integrity constraints.",
      },
    },
    tags: ['Next.js 15', 'React 19', 'Drizzle', 'PostgreSQL', 'Supabase', 'Playwright', 'CI'],
  },
  {
    name: 'QualiPilot', cat: 'saas', repo: 'qualipilot', selected: true,
    blurb: {
      fr: "Management qualité ISO 9001/14001 & HACCP : audits, non-conformités, PDCA, analyse IA.",
      en: "ISO 9001/14001 & HACCP quality management: audits, non-conformities, PDCA, AI analysis.",
    },
    proof: {
      fr: {
        problem: "Les PME industrielles croulent sous la paperasse qualité ISO/HACCP — audits, non-conformités, plans d'action éparpillés.",
        built: "Cockpit qualité : référentiels personnalisables, workflow de non-conformités, plans d'action PDCA, KPI temps réel, analyse IA des non-conformités (Claude API), rapports PDF.",
        proof: "33 commits, monitoring production via Sentry, stockage documents (Vercel Blob), rapports PDF d'audit générés côté serveur.",
      },
      en: {
        problem: "Industrial SMEs drown in ISO/HACCP quality paperwork — audits, non-conformities and action plans scattered everywhere.",
        built: "A quality cockpit: customizable frameworks, non-conformity workflow, PDCA action plans, real-time KPIs, AI analysis of non-conformities (Claude API), PDF reports.",
        proof: "33 commits, production monitoring via Sentry, document storage (Vercel Blob), server-generated audit PDF reports.",
      },
    },
    tags: ['Next.js 14', 'Prisma', 'Stripe', 'Claude API', 'Sentry', 'Vercel Blob', 'PDFKit'],
  },
  {
    name: 'BailFlow', cat: 'saas', repo: 'bailflow',
    blurb: { fr: "Gestion des loyers impayés pour bailleurs privés : actions traçables, courriers prudents, échéances.", en: "Unpaid-rent management for private landlords: traceable actions, cautious letters, deadlines." },
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'PDFKit'],
  },
  {
    name: 'RGE Pilot', cat: 'saas', repo: 'rge-pilot',
    blurb: { fr: "Cockpit pour artisans RGE : qualifications, preuves, attestations, dossiers chantier, échéances.", en: "Cockpit for RGE renovation pros: qualifications, evidence, certificates, site files, deadlines." },
    tags: ['Next.js', 'Prisma', 'Stripe', 'Puppeteer', 'R2 / S3'],
  },
  {
    name: 'AutoPilot URSSAF', cat: 'saas', repo: 'autopilot-urssaf',
    blurb: { fr: "SaaS auto-entrepreneurs : CA encaissé, prévision des cotisations, seuils micro/TVA, déclarations.", en: "Freelancer SaaS: cash-in revenue, charge forecasting, micro/VAT thresholds, declarations." },
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Server Actions'],
  },
  {
    name: 'AutoNet', cat: 'saas', repo: 'autonet',
    blurb: { fr: "Cashflow-first pour auto-entrepreneurs : combien garder après réserve URSSAF, impôt et coussin.", en: "Cashflow-first for freelancers: how much to keep after social reserve, tax and a buffer." },
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Vitest'],
  },
  {
    name: 'Vert La Planète', cat: 'saas',
    blurb: { fr: "Annuaire de partenaires écologiques + abonnements Pro : fiches, accès gradué, paiement Stripe.", en: "Eco-partner directory + Pro subscriptions: listings, tiered access, Stripe payments." },
    tags: ['Next.js 15', 'Drizzle', 'PostgreSQL', 'Stripe', 'JWT'],
  },
  {
    name: 'AICheck', cat: 'ai',
    blurb: { fr: "Cockpit de gouvernance IA pour PME : diagnostic, registre IA, scoring, preuves, rapport PDF.", en: "AI governance cockpit for SMEs: diagnostics, AI registry, scoring, evidence, PDF report." },
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Zod'],
  },
  {
    name: 'TrustCenter AI', cat: 'ai', repo: 'trustcenter-ai',
    blurb: { fr: "Prouver la conformité AI Act en achats entreprise : inventaire IA, coffre de preuves, réponses RFP.", en: "Prove AI Act readiness during procurement: AI inventory, evidence vault, RFP answers." },
    tags: ['Next.js', 'Multi-tenant', 'Auth', 'Stripe', 'Markdown'],
  },
  {
    name: 'Forge Brief', cat: 'ai',
    blurb: { fr: "Produire, scorer et suivre des briefs stratégiques : opportunités scorées, reco IA, API privée.", en: "Produce, score and track strategic briefs: scored opportunities, AI recs, private API." },
    tags: ['Next.js', 'RSC', 'Prisma', 'PostgreSQL', 'AI provider'],
  },
  {
    name: 'aegis', cat: 'ops', repo: 'aegis',
    blurb: { fr: "Monorepo de plateforme : backend, frontend et SDK TypeScript partagé (Turbo + pnpm).", en: "Platform monorepo: backend, frontend and a shared TypeScript SDK (Turbo + pnpm)." },
    tags: ['Turbo', 'pnpm', 'TypeScript', 'Monorepo', 'SDK'],
  },
  {
    name: 'VerticalLead OS', cat: 'ops',
    blurb: { fr: "Cockpit d'acquisition B2B multi-SaaS : campagnes, scoring, contact queue, MRR, next best action.", en: "Multi-SaaS B2B acquisition cockpit: campaigns, scoring, contact queue, MRR, next best action." },
    tags: ['Next.js', 'Prisma', 'CSV / XLSX', 'API'],
  },
  {
    name: 'Vertical Lead Finder', cat: 'ops',
    blurb: { fr: "Prospection B2B locale sans API payante : nettoyage, enrichissement, scoring, dédup, export.", en: "Local B2B prospecting with no paid API: cleaning, enrichment, scoring, dedup, export." },
    tags: ['Python', 'CSV / XLSX', 'Scoring'],
  },
  {
    name: 'Cheetah Time', cat: 'ops', repo: 'cheetahtime',
    blurb: { fr: "Planification B2B : tâches hiérarchiques, dépendances (FS/SS/FF/SF), baselines, Gantt synchronisé.", en: "B2B planning: hierarchical tasks, dependencies (FS/SS/FF/SF), baselines, synced Gantt." },
    tags: ['Next.js 16', 'TypeScript', '79 tests', 'CI', 'Engine'],
  },
  {
    name: 'INKR', cat: 'mobile', repo: 'tattoo-app',
    blurb: { fr: "App mobile SaaS pour tatoueurs : RDV, portfolio, paiements, gestion — natif iOS/Android.", en: "Mobile SaaS for tattoo artists: booking, portfolio, payments, management — native iOS/Android." },
    tags: ['Expo', 'React Native', 'Supabase', 'Stripe'],
  },
  {
    name: '学 Mandarin', cat: 'product',
    blurb: { fr: "App hors-ligne d'apprentissage du chinois : une carte par compétence, FSRS, score de prononciation.", en: "Offline Chinese-learning app: one card per skill, FSRS, mic pronunciation scoring." },
    tags: ['Web', 'JS', 'FSRS', 'Web Speech API', 'Offline'],
  },
  {
    name: 'Noah Odyssey', cat: 'product',
    blurb: { fr: "Expérience web interactive : globe 3D et cartographie immersive, rendu temps réel three.js.", en: "Interactive web experience: 3D globe and immersive mapping, real-time three.js rendering." },
    tags: ['Next.js 15', 'React 19', 'three.js', 'react-globe.gl', 'Leaflet'],
  },
];

export const STACK = ['Next.js', 'TypeScript', 'React', 'React Native', 'Prisma', 'Drizzle', 'PostgreSQL', 'Stripe', 'WebGL / GLSL', 'FastAPI', 'Python', 'Supabase', 'Turbo', 'Vitest', 'Playwright', 'Claude API', 'Three.js'];
