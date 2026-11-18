// Traduction du site : français (langue par défaut, adresses sans préfixe) et anglais (adresses en /en/…).
// - langue(Astro.currentLocale) : langue de la page en cours (fournie par Astro d'après l'adresse)
// - lien('projets', 'en') : adresse d'une page dans une langue
// - autreLangue(Astro.url.pathname) : adresses de la même page en français et en anglais (sélecteur de langue)
// - t(lang) : textes courts de l'interface (menus, boutons, libellés…)

export const langues = ['fr', 'en'] as const;
export type Langue = (typeof langues)[number];

/** Langue de la page, d'après la valeur fournie par Astro (Astro.currentLocale) */
export const langue = (locale?: string): Langue => (locale === 'en' ? 'en' : 'fr');

/** Adresses de chaque page, dans les deux langues */
export const routes = {
  accueil: { fr: '/', en: '/en/' },
  projets: { fr: '/projets', en: '/en/projects' },
  galerie: { fr: '/galerie', en: '/en/gallery' },
  'a-propos': { fr: '/a-propos', en: '/en/about' },
  contact: { fr: '/contact', en: '/en/contact' },
  mentions: { fr: '/mentions-legales', en: '/en/legal' },
  ia: { fr: '/usage-ia', en: '/en/ai' },
} as const;
export type RouteId = keyof typeof routes;

export const lien = (id: RouteId, lang: Langue) => routes[id][lang];

/** Adresse de l'étude de cas d'un projet */
export const lienProjet = (slug: string, lang: Langue) => (lang === 'en' ? `/en/projects/${slug}` : `/projets/${slug}`);

/** Adresses de la page en cours dans les deux langues (sélecteur de langue, balises hreflang) */
export function autreLangue(chemin: string): Record<Langue, string> {
  // Même écriture pour toutes les adresses : sans barre finale (« / » reste « / »)
  const normal = (c: string) => c.replace(/\/+$/, '') || '/';
  const ici = normal(chemin);
  // Études de cas
  const projet = ici.match(/^(?:\/en\/projects|\/projets)\/([^/]+)$/);
  if (projet) return { fr: lienProjet(projet[1], 'fr'), en: lienProjet(projet[1], 'en') };
  // Pages du menu et pages annexes
  for (const r of Object.values(routes)) {
    if (normal(r.fr) === ici || normal(r.en) === ici) return { fr: r.fr, en: r.en };
  }
  return { fr: '/', en: '/en/' };
}

/** Textes courts de l'interface */
const ui = {
  fr: {
    allerAuContenu: 'Aller au contenu',
    presentationPage: 'Présentation de la page',
    navigationPrincipale: 'Navigation principale',
    meContacter: 'Me contacter',
    accueilLogo: 'EWME, accueil',
    choixLangue: 'Choisir la langue',
    langueFr: 'Français',
    langueEn: 'English',
    titreSite: 'Ewan Menigoz - Portfolio',
    nav: { accueil: 'Accueil', projets: 'Projets', galerie: 'Galerie', 'a-propos': 'À propos' },
    menu: 'Menu',
    fermer: 'Fermer',
    piedDePage: 'Pied de page',
    contact: 'Contact',
    mentions: 'Mentions légales',
    usageIa: 'Usage de l’IA',
    confidentialite: 'Confidentialité',
    themeSombre: 'Thème sombre',
    chargementSousTitre: 'Portfolio · Design UI/UX',
    chargement: 'Chargement du portfolio',
    ogImageAlt: 'Ewan Menigoz, designer UI/UX : « Je conçois des interfaces claires, puis je les code. »',
  },
  en: {
    allerAuContenu: 'Skip to content',
    presentationPage: 'Page introduction',
    navigationPrincipale: 'Main navigation',
    meContacter: 'Contact me',
    accueilLogo: 'EWME, home',
    choixLangue: 'Choose language',
    langueFr: 'Français',
    langueEn: 'English',
    titreSite: 'Ewan Menigoz - Portfolio',
    nav: { accueil: 'Home', projets: 'Projects', galerie: 'Gallery', 'a-propos': 'About' },
    menu: 'Menu',
    fermer: 'Close',
    piedDePage: 'Footer',
    contact: 'Contact',
    mentions: 'Legal notice',
    usageIa: 'Use of AI',
    confidentialite: 'Privacy',
    themeSombre: 'Dark theme',
    chargementSousTitre: 'Portfolio · UI/UX design',
    chargement: 'Loading the portfolio',
    ogImageAlt: 'Ewan Menigoz, UI/UX designer: “I design clear interfaces, then I code them.”',
  },
};

export const t = (lang: Langue) => ui[lang];
