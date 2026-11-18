// Informations générales du site, centralisées ici pour être modifiées en un seul endroit.
// Les textes qui changent selon la langue sont dans textesSite (plus bas).
import { lien, t, type Langue } from '../i18n';

export const site = {
  nom: 'Ewan Menigoz',
  metier: 'Designer UI/UX',
  ville: 'Montbéliard',
  description:
    'Portfolio d’Ewan Menigoz, étudiant en BUT MMI à Montbéliard : je conçois des interfaces claires, puis je les code. Recherche de stage en design UI/UX.',
  email: 'ewan.menigoz@edu.univ-fcomte.fr',
  // Réseaux professionnels (pied de page, données structurées de l'accueil)
  linkedin: 'https://www.linkedin.com/in/ewan-menigoz-3b10a7385/',
  instagram: 'https://www.instagram.com/ewn_design/',
  // Déposer le CV dans public/ sous ce nom.
  cv: '/cv-ewan-menigoz.pdf',
  // Nom de domaine et hébergeur du VPS (mentions légales, QUALITE J1)
  domaine: 'portfolio.ewan-menigoz.fr',
  hebergeur: {
    nom: 'Infomaniak Network SA',
    adresse: 'Rue Eugène-Marziano 25, 1227 Les Acacias (Genève), Suisse',
    site: 'https://www.infomaniak.com',
    // Le téléphone de l'hébergeur est obligatoire (LCEN, article 6)
    telephone: '+41 22 820 35 44',
    // Pays du centre de données (hors Union européenne : la Suisse a une décision d'adéquation)
    pays: 'Suisse',
  },
  // Durée de conservation des messages du formulaire (mentions légales, QUALITE J2 et J3)
  conservationMessages: '12 mois après la réception du message',
  // Durée maximale de conservation des journaux techniques du serveur
  conservationJournaux: '12 mois au plus',
  // Adresse de l'instance PocketBase (variable d'environnement PUBLIC_POCKETBASE_URL).
  pocketbase: import.meta.env.PUBLIC_POCKETBASE_URL ?? '',
  stage: {
    duree: '8-10 semaines',
    periode: 'mars-juin',
    lieu: 'Montbéliard et alentours',
  },
};

/** Identifiant de page : sert à placer l'onglet du header et à marquer le lien actif */
export type PageId = 'accueil' | 'projets' | 'galerie' | 'a-propos' | 'contact';

/** Liens du menu, dans la langue de la page */
export const navigation = (lang: Langue): { id: PageId; libelle: string; href: string }[] =>
  (['accueil', 'projets', 'galerie', 'a-propos'] as const).map((id) => ({ id, libelle: t(lang).nav[id], href: lien(id, lang) }));

/** Textes du site qui changent selon la langue */
export const textesSite = (lang: Langue) =>
  lang === 'en'
    ? {
        metier: 'UI/UX Designer',
        description:
          'Portfolio of Ewan Menigoz, a BUT MMI student in Montbéliard, France: I design clear interfaces, then I code them. Looking for a UI/UX design internship.',
        stage: { duree: '8–10 weeks', periode: 'March–June', lieu: 'Montbéliard area' },
        conservationMessages: '12 months after the message is received',
        conservationJournaux: '12 months at most',
      }
    : {
        metier: site.metier,
        description: site.description,
        stage: site.stage,
        conservationMessages: site.conservationMessages,
        conservationJournaux: site.conservationJournaux,
      };
