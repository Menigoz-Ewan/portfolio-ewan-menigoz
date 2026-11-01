// Contenu des projets : alimente les cartes (accueil, page Projets) et les études de cas /projets/[slug].
import type { ImageMetadata } from 'astro';

import vignetteOpenSigne from '../assets/images/vignette-opensigne.png';
import vignetteAffiches from '../assets/images/affiche-chateau.png';
import vignetteDatasets from '../assets/images/vignette-datasets.png';
import vignetteCimade from '../assets/images/vignette-cimade.png';

import osEnjeu from '../assets/images/opensigne/enjeu-societal.png';
import osCharte from '../assets/images/opensigne/charte-graphique.png';
import osExperience from '../assets/images/opensigne/experience-apprentissage.png';

import afficheChateau from '../assets/images/affiche-chateau.png';
import afficheTheatre from '../assets/images/galerie/affiche-theatre.png';
import afficheTemple from '../assets/images/galerie/affiche-temple.png';
import afficheTempleDetail from '../assets/images/affiches/affiche-temple-detail.png';
import noteIntention from '../assets/images/affiches/note-intention.png';
import afficheTheatreDetail from '../assets/images/affiches/affiche-theatre-detail.png';

export type Categorie = 'web' | 'graphisme' | 'identite';

export interface Visuel {
  src: ImageMetadata;
  alt: string;
}

export interface EtudeDeCas {
  etiquettes: string[];
  accroche: string;
  fiche: { role: string; contexte: string; outils: string; livrables: string };
  visuelPrincipal: Visuel[];
  contexte: { titre: string; texte: string; contraintes: string[] };
  defi: { enonce: string; visuels: Visuel[]; fondLavande?: boolean };
  solution: { titre: string; texte: string; visuel: Visuel };
  bilan: string[];
  suivant: string;
}

export interface Projet {
  slug: string;
  titre: string;
  categorie: Categorie;
  /** Étiquette et résumé affichés sur l'accueil */
  accueil?: { etiquette: string; resume: string };
  /** Étiquette et résumé affichés sur la page Projets */
  etiquette: string;
  resume: string;
  vignette: Visuel;
  etude?: EtudeDeCas;
}

export const categories: { id: Categorie | 'tous'; libelle: string }[] = [
  { id: 'tous', libelle: 'Tous' },
  { id: 'web', libelle: 'Web' },
  { id: 'graphisme', libelle: 'Graphisme' },
  { id: 'identite', libelle: 'Identité' },
];

export const projets: Projet[] = [
  {
    slug: 'opensigne',
    titre: 'OpenSigne',
    categorie: 'web',
    accueil: {
      etiquette: 'UI/UX · Projet collectif',
      resume: 'Web app gamifiée pour apprendre la langue des signes française.',
    },
    etiquette: 'UI/UX · Web app',
    resume: 'Apprendre la langue des signes française en jouant : parcours gamifié, projet collectif.',
    vignette: {
      src: vignetteOpenSigne,
      alt: 'Visuel d’OpenSigne : logo et slogan « Brisez le silence, apprenez à signer » sur fond lavande',
    },
    etude: {
      etiquettes: ['UI/UX · Web app', 'Projet collectif'],
      accroche:
        'Une web app gamifiée pour apprendre la langue des signes française, pensée comme une vraie startup.',
      fiche: {
        role: 'Designer UI/UX, développeur front-end, SEO & lancement',
        contexte: 'Projet collectif · BUT MMI, 1re année',
        outils: 'Figma, Astro, Tailwind, HTML/CSS',
        livrables:
          'Web app, modèle économique, stratégie d’acquisition, audit éco-conception & accessibilité',
      },
      visuelPrincipal: [
        {
          src: vignetteOpenSigne,
          alt: 'OpenSigne : logo, main qui signe et slogan « Brisez le silence, apprenez à signer »',
        },
      ],
      contexte: {
        titre: 'Lancer un service numérique de A à Z.',
        texte:
          'En 1re année de BUT MMI, nous devions concevoir et simuler le lancement d’un service numérique complet : concept, modèle économique et stratégie de communication sous contrainte budgétaire. Côté technique, la web app devait être éco-conçue, accessible et bien référencée.',
        contraintes: ['Éco-conception', 'Accessibilité RGAA', 'SEO', 'Budget 1 000 €', 'Lancement Ulule'],
      },
      defi: {
        enonce:
          'Acquérir des utilisateurs sans un euro de publicité, en conciliant accessibilité et éco-conception.',
        fondLavande: true,
        visuels: [
          {
            src: osEnjeu,
            alt: 'Diapositive « Un enjeu sociétal » : 300 000 personnes en France souffrent d’une surdité sévère à profonde',
          },
          {
            src: osCharte,
            alt: 'Diapositive « La charte graphique » : typographies League Spartan et Nunito, palette lavande, violet sombre, blanc, gris et noir',
          },
        ],
      },
      solution: {
        titre: 'Une app ludique, légère et inclusive.',
        texte:
          'OpenSigne combine une interface éco-conçue et accessible, une architecture ultra-légère sous Astro pour le référencement, et un modèle freemium appuyé sur une stratégie de lean marketing.',
        visuel: {
          src: osExperience,
          alt: 'Maquettes d’OpenSigne sur ordinateur et smartphone : « Une expérience d’apprentissage ludique et accessible »',
        },
      },
      bilan: [
        'Allier exigence technique et contraintes éthiques : RGAA et éco-conception.',
        'Penser l’expérience utilisateur et l’acquisition dès la phase de code.',
        'Concevoir un produit digital viable, du concept au lancement.',
      ],
      suivant: 'affiches-touristiques',
    },
  },
  {
    slug: 'affiches-touristiques',
    titre: 'Affiches touristiques',
    categorie: 'graphisme',
    accueil: {
      etiquette: 'Direction artistique · Print',
      resume: 'Trois affiches vectorielles pour valoriser le patrimoine de Montbéliard.',
    },
    etiquette: 'Direction artistique · Print',
    resume: 'Trois affiches vectorielles qui donnent envie de visiter Montbéliard.',
    vignette: {
      src: vignetteAffiches,
      alt: 'Affiche vectorielle du château des ducs de Wurtemberg à Montbéliard',
    },
    etude: {
      etiquettes: ['Direction artistique · Print', 'Projet étudiant'],
      accroche: 'Trois affiches vectorielles pour donner envie de visiter le patrimoine du Pays de Montbéliard.',
      fiche: {
        role: 'Designer graphique / directeur artistique',
        contexte: 'Projet étudiant · BUT MMI',
        outils: 'Affinity Designer, export PDF print (CMJN)',
        livrables: '3 affiches vectorielles, fichiers sources, note d’intention',
      },
      visuelPrincipal: [
        { src: afficheChateau, alt: 'Affiche du château des ducs de Wurtemberg, en flat design' },
        { src: afficheTheatre, alt: 'Affiche du théâtre gallo-romain de Mandeure vu du ciel' },
        { src: afficheTemple, alt: 'Affiche du temple Saint-Martin et de son clocher' },
      ],
      contexte: {
        titre: 'Une commande claire, des contraintes print précises.',
        texte:
          'Concevoir une série de trois affiches pour valoriser trois édifices d’époques différentes, entièrement en vectoriel, avec les logos institutionnels et des PDF prêts à imprimer, accompagnés d’une note d’intention.',
        contraintes: ['3 affiches', '40 × 60 cm', 'CMJN', 'Fond perdu 3 mm', 'Repères de coupe'],
      },
      defi: {
        enonce: 'Moderniser l’image d’un territoire historique sans tomber dans la carte postale.',
        visuels: [
          { src: afficheTempleDetail, alt: 'Détail de l’affiche du temple Saint-Martin' },
          { src: noteIntention, alt: 'Extrait de la note d’intention accompagnant la série d’affiches' },
        ],
      },
      solution: {
        titre: 'Une identité épurée, inspirée du voyage rétro.',
        texte:
          'Un flat design sans contours : volumes géométriques et aplats de couleurs. Une signature commune, « L’art de bâtir le temps », relie le théâtre gallo-romain de Mandeure, le temple Saint-Martin et le château des ducs de Wurtemberg.',
        visuel: {
          src: afficheTheatreDetail,
          alt: 'Détail de l’affiche du théâtre gallo-romain de Mandeure',
        },
      },
      bilan: [
        'Maîtriser la vectorisation sous Affinity Designer.',
        'Respecter la rigueur du print : fonds perdus et normes d’export.',
        'Construire une identité de série, de la DA aux livrables.',
      ],
      suivant: 'opensigne',
    },
  },
  {
    slug: 'transcription-de-donnees',
    titre: 'Transcription de données',
    categorie: 'web',
    accueil: {
      etiquette: 'UI · Front-end',
      resume: 'Des jeux de données bruts rendus lisibles en graphiques interactifs.',
    },
    etiquette: 'UI · Front-end',
    resume: 'Des jeux de données bruts transformés en graphiques lisibles et interactifs.',
    vignette: {
      src: vignetteDatasets,
      alt: 'Interface « Datasets TP3 » : trois cartes Pingouins, Pizzas et Météo',
    },
  },
  {
    slug: 'identite-la-cimade',
    titre: 'Identité visuelle La Cimade',
    categorie: 'identite',
    etiquette: 'Identité · Cas fictif',
    resume: 'Refonte de l’identité d’une association humanitaire, du diagnostic à la charte.',
    vignette: {
      src: vignetteCimade,
      alt: 'Refonte du logo de La Cimade : poing levé intégré au C',
    },
  },
];

export const projetsAvecEtude = projets.filter((p) => p.etude);

export function lienProjet(projet: Projet) {
  return projet.etude ? `/projets/${projet.slug}` : undefined;
}
