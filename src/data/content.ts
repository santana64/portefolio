export type Lang = 'fr' | 'en';

export const SITE = {
  origin: 'https://santana64.github.io',
  base: '/portefolio',
  email: 'piesse917@gmail.com',
  calendly: 'https://calendly.com/917',
  github: 'https://github.com/santana64',
  repoBase: 'https://github.com/santana64/',
  ogImage: '/portefolio/og.png',
};

export const NUMBERS = {
  products: 18,
  verticals: 7,
  commits: '160+',
  ts: '100%',
};

export const SEO: Record<Lang, { title: string; description: string }> = {
  fr: {
    title: 'Noah — Ingénieur produit full-stack | SaaS verticaux',
    description: "Ingénieur produit full-stack. Je conçois et je livre des SaaS verticaux de bout en bout — design, architecture, paiement, conformité, production. 18 produits, 7 secteurs.",
  },
  en: {
    title: 'Noah — Full-stack product engineer | Vertical SaaS',
    description: 'Full-stack product engineer. I design and ship vertical SaaS end to end — design, architecture, payments, compliance, production. 18 products, 7 verticals.',
  },
};

export const STR: Record<Lang, Record<string, string>> = {
  fr: {
    nav_approach: 'Approche', nav_arkoryn: 'Arkoryn', nav_selected: 'Sélection', nav_index: 'Index', nav_metrics: 'Chiffres', nav_contact: 'Contact',
    hero_status: 'Statut — disponible pour missions',
    hero_lede: "Ingénieur produit full-stack. Un problème métier précis devient un logiciel vendable : design, architecture, paiement, conformité, mise en production.",
    ro_avail_k: 'Disponibilité', ro_avail_v: 'Ouvert', ro_products_k: 'Produits', ro_markets_k: 'Marchés', ro_ts_k: 'TypeScript',
    hero_cta1: 'Voir le travail', hero_cta2: 'Réserver un appel',
    work_h: 'Un seul ingénieur. Toute la chaîne.',
    work_p: "Du diagnostic métier à l'abonnement Stripe en production. La valeur, selon votre rôle.",
    work_c1_h: 'Pour les recruteurs', work_c1_p: "Stack maîtrisée de bout en bout : Next.js App Router, TypeScript strict, Prisma/Drizzle, PostgreSQL, FastAPI, tests Vitest/Playwright, CI GitHub Actions, monorepos Turbo, WebGL. Du code typé, testé, mis en production.",
    work_n1: 'produits conçus & codés, de la landing au paiement.',
    work_c2_h: 'Pour les clients', work_c2_p: "Des SaaS complets et vendables : auth, multi-tenant, facturation Stripe, PDF, exports, RGPD. Un produit qui encaisse.",
    work_c3_h: 'Pour les partenaires', work_c3_p: "Une fonderie à SaaS verticaux : un socle réutilisable décliné sur 7+ marchés (BTP, immobilier, qualité, énergie, conformité IA). Vitesse d'exécution, validation rapide.",
    sel_h: 'Travaux sélectionnés.', sel_p: 'Trois preuves : le problème, ce que j’ai construit, la preuve d’ingénierie.',
    idx_h: "L'index complet.", idx_p: 'Des SaaS verticaux aux apps mobiles et expériences WebGL. Filtrez par domaine.',
    metrics_h: 'Construire, tester, livrer — en boucle.',
    stat_products: 'Produits construits', stat_verticals: 'Secteurs verticaux', stat_commits: 'Commits suivis', stat_ts: 'TypeScript strict',
    social_h: 'Preuve.', social_q: 'Chaque produit est codé de la landing au paiement, typé strict et mis en production — pas une démo.',
    social_m: 'Références clients sur demande — bloc témoignages prêt à compléter.',
    social_b1: 'produits livrés', social_b2: 'secteurs verticaux', social_b3: 'TypeScript strict',
    contact_h: 'Un produit à construire ?', contact_p: "Recrutement, SaaS en tête, ou marché vertical à attaquer — parlons-en.",
    contact_meta: 'Remote — je travaille avec des clients partout, facturation EUR / USD.',
    contact_cta1: 'Réserver un appel', contact_cta2: 'Email',
    problem_k: 'Problème', built_k: 'Construit', proof_k: 'Preuve',
    code_link: 'Code ▸', view: 'Ouvrir', open_repo: 'Repo ▸',
    foot_tag: 'Machined Carbon + Forge Signal · Astro statique',
    skip: 'Aller au contenu',
  },
  en: {
    nav_approach: 'Approach', nav_arkoryn: 'Arkoryn', nav_selected: 'Selected', nav_index: 'Index', nav_metrics: 'Numbers', nav_contact: 'Contact',
    hero_status: 'Status — available for work',
    hero_lede: 'Full-stack product engineer. A sharp business problem becomes sellable software: design, architecture, payments, compliance, production.',
    ro_avail_k: 'Availability', ro_avail_v: 'Open', ro_products_k: 'Products', ro_markets_k: 'Markets', ro_ts_k: 'TypeScript',
    hero_cta1: 'View work', hero_cta2: 'Book a call',
    work_h: 'One engineer. The whole chain.',
    work_p: 'From business diagnosis to a live Stripe subscription. Value, for your role.',
    work_c1_h: 'For recruiters', work_c1_p: 'A stack owned end to end: Next.js App Router, strict TypeScript, Prisma/Drizzle, PostgreSQL, FastAPI, Vitest/Playwright tests, GitHub Actions CI, Turbo monorepos, WebGL. Typed, tested, shipped.',
    work_n1: 'products designed & coded, from landing to payment.',
    work_c2_h: 'For clients', work_c2_p: 'Complete, sellable SaaS: auth, multi-tenancy, Stripe billing, PDF, exports, GDPR. A product that collects revenue.',
    work_c3_h: 'For partners', work_c3_p: 'A vertical-SaaS foundry: a reusable core deployed across 7+ markets (construction, real estate, quality, energy, AI compliance). Speed of execution, fast validation.',
    sel_h: 'Selected work.', sel_p: 'Three proofs: the problem, what I built, the engineering evidence.',
    idx_h: 'The full index.', idx_p: 'From vertical SaaS to mobile apps and WebGL experiences. Filter by domain.',
    metrics_h: 'Build, test, ship — on repeat.',
    stat_products: 'Products built', stat_verticals: 'Vertical markets', stat_commits: 'Tracked commits', stat_ts: 'Strict TypeScript',
    social_h: 'Proof.', social_q: 'Every product is coded from landing to payment, strictly typed and shipped to production — not a demo.',
    social_m: 'Client references on request — testimonials block ready to fill.',
    social_b1: 'products shipped', social_b2: 'vertical markets', social_b3: 'strict TypeScript',
    contact_h: 'Got a product to build?', contact_p: "Hiring, a SaaS in mind, or a vertical market to attack — let's talk.",
    contact_meta: 'Remote — I work with clients worldwide, billing in EUR / USD.',
    contact_cta1: 'Book a call', contact_cta2: 'Email',
    problem_k: 'Problem', built_k: 'Built', proof_k: 'Proof',
    code_link: 'Code ▸', view: 'Open', open_repo: 'Repo ▸',
    foot_tag: 'Machined Carbon + Forge Signal · static Astro',
    skip: 'Skip to content',
  },
};

export interface ArkorynContent {
  kicker: string; title: string; lede: string;
  layers: { n: string; name: string }[];
  note: string;
  specs: { k: string; v: string }[];
  tags: string[];
}
export const ARKORYN: Record<Lang, ArkorynContent> = {
  fr: {
    kicker: 'Flagship — venture industrielle',
    title: 'Arkoryn',
    lede: "Mon initiative la plus ambitieuse : un produit de supervision thermique local-first pour PME et petites infrastructures critiques — température, humidité, seuils, alertes et rapports. Pas une web-app de plus : un produit pensé pour toucher le monde physique.",
    layers: [
      { n: '01', name: 'Audit' }, { n: '02', name: 'Node' }, { n: '03', name: 'Control' }, { n: '04', name: 'Report' },
    ],
    note: "Périmètre prudent, par conception : Arkoryn produit de l'observation, une dérive mesurée et une recommandation à faire valider par un professionnel qualifié — jamais une garantie de conformité. Une absence d'alerte ne prouve pas l'absence de risque.",
    specs: [
      { k: 'Couche logicielle livrée', v: 'Node V0 « ultra-finale » — serveur Python rendu côté serveur, auth admin, rapports PDF, export CSV, alertes webhook optionnelles, 25 tests verts.' },
      { k: 'Stack', v: 'FastAPI · SQLModel / SQLite · Jinja2 · ReportLab · APScheduler' },
      { k: 'Architecture', v: 'Entreprise en 4 couches — Audit / Node / Control / Report.' },
      { k: 'Statut', v: 'Produit en pilote, mode démonstration à capteur simulé clairement signalé. Sans déploiement client revendiqué.' },
    ],
    tags: ['Python', 'FastAPI', 'SQLite', 'ReportLab', 'APScheduler', 'PDF'],
  },
  en: {
    kicker: 'Flagship — industrial venture',
    title: 'Arkoryn',
    lede: 'My most ambitious initiative: a local-first thermal-monitoring product for SMEs and small critical infrastructure — temperature, humidity, thresholds, alerts and reports. Not another web app: a product designed to touch the physical world.',
    layers: [
      { n: '01', name: 'Audit' }, { n: '02', name: 'Node' }, { n: '03', name: 'Control' }, { n: '04', name: 'Report' },
    ],
    note: 'Cautious scope, by design: Arkoryn produces observation, a measured drift and a recommendation to be validated by a qualified professional — never a guarantee of compliance. The absence of an alert does not prove the absence of risk.',
    specs: [
      { k: 'Shipped software layer', v: 'Node V0 "ultra-final" — server-rendered Python app, admin auth, PDF reports, CSV export, optional webhook alerts, 25 green tests.' },
      { k: 'Stack', v: 'FastAPI · SQLModel / SQLite · Jinja2 · ReportLab · APScheduler' },
      { k: 'Architecture', v: 'A four-layer venture — Audit / Node / Control / Report.' },
      { k: 'Status', v: 'Product in pilot, with a clearly labelled simulated-sensor demo mode. No client deployment claimed.' },
    ],
    tags: ['Python', 'FastAPI', 'SQLite', 'ReportLab', 'APScheduler', 'PDF'],
  },
};
