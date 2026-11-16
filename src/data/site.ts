// Informations générales du site, centralisées ici pour être modifiées en un seul endroit.

export const site = {
  nom: 'Ewan Menigoz',
  metier: 'Designer UI/UX',
  ville: 'Montbéliard',
  description:
    'Portfolio d’Ewan Menigoz, étudiant en BUT MMI à Montbéliard : je conçois des interfaces claires, puis je les code. Recherche de stage en design UI/UX.',
  email: 'ewan.menigoz@edu.univ-fcomte.fr',
  // Liens à compléter : laissés vides, les boutons correspondants pointent vers la page Contact.
  linkedin: '',
  instagram: '',
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
    duree: '10 semaines',
    periode: 'Mars-Juin',
    lieu: 'Montbéliard et alentours',
  },
};

/** Identifiant de page : sert à placer l'onglet du header et à marquer le lien actif */
export type PageId = 'accueil' | 'projets' | 'galerie' | 'a-propos' | 'contact';

export const navigation: { id: PageId; libelle: string; href: string }[] = [
  { id: 'accueil', libelle: 'Accueil', href: '/' },
  { id: 'projets', libelle: 'Projets', href: '/projets' },
  { id: 'galerie', libelle: 'Galerie', href: '/galerie' },
  { id: 'a-propos', libelle: 'À propos', href: '/a-propos' },
];
