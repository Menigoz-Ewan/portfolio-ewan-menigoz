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
  // Adresse de l'instance PocketBase (variable d'environnement PUBLIC_POCKETBASE_URL).
  pocketbase: import.meta.env.PUBLIC_POCKETBASE_URL ?? '',
  stage: {
    duree: '10 semaines',
    periode: 'Mars-Juin',
    lieu: 'Montbéliard et alentours',
  },
};

export const navigation = [
  { libelle: 'Projets', href: '/projets' },
  { libelle: 'Galerie', href: '/galerie' },
  { libelle: 'À propos', href: '/a-propos' },
];
