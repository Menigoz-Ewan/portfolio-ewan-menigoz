// Contenu des projets : alimente les cartes (accueil, page Projets) et les études de cas /projets/[slug].
import type { ImageMetadata } from 'astro';

import vignetteOpenSigne from '../assets/images/vignette-opensigne.png';
import vignetteAffiches from '../assets/images/affiche-chateau.png';
import vignetteDatasets from '../assets/images/vignette-datasets.png';
import vignetteTiktak from '../assets/images/vignette-tiktak.png';
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

import vignetteClimat from '../assets/images/vignette-climat@2x.png';
import climatAnneesChaudes from '../assets/images/climat/01-annees-chaudes-362x490.png';
import climatTerritoires from '../assets/images/climat/02-trois-territoires-362x490.png';
import climatProjections from '../assets/images/climat/03-projections-362x490.png';
import climatEvolution from '../assets/images/climat/04-evolution-588x420.png';
import climatMethode from '../assets/images/climat/05-methode-588x420.png';
import climatPluieChaleur from '../assets/images/climat/06-pluie-chaleur-690x460.png';

import tiktakAccueilMontre from '../assets/images/tiktak/01_accueil-montre_362x490@2x.png';
import tiktakConfigurateur from '../assets/images/tiktak/02_configurateur-panneau_362x490@2x.png';
import tiktakDeclinaisons from '../assets/images/tiktak/03_declinaisons_362x490@2x.png';
import tiktakEnregistrement from '../assets/images/tiktak/04_enregistrement_588x420@2x.png';
import tiktakPanier from '../assets/images/tiktak/05_panier_588x420@2x.png';
import tiktakAccueil from '../assets/images/tiktak/06_accueil_690x460@2x.png';

export type Categorie = 'web' | 'graphisme' | 'identite';

export interface Visuel {
  src: ImageMetadata;
  alt: string;
  /** Légende visible sous l'image (facultative) */
  legende?: string;
  /** Image affichée en entier dans son cadre, sans recadrage (logo sur fond blanc, par exemple) */
  entiere?: boolean;
}

/** Lien affiché dans le hero de l'étude de cas (site en ligne, dossier PDF…) */
export interface LienExterne {
  href: string;
  libelle: string;
}

export interface EtudeDeCas {
  etiquettes: string[];
  accroche: string;
  lien?: LienExterne;
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
      suivant: 'climat-outre-mer',
    },
  },
  {
    slug: 'climat-outre-mer',
    titre: 'Climat Outre-Mer',
    categorie: 'web',
    etiquette: 'Data visualisation · Web',
    resume: 'Un site d’enquête qui compare le réchauffement de trois territoires d’outre-mer, à partir des données de Météo-France.',
    vignette: {
      src: vignetteClimat,
      alt: 'Carte de Climat Outre-Mer : courbes de température de la Martinique, de la Nouvelle-Calédonie et de La Réunion de 1970 à 2024',
    },
    etude: {
      etiquettes: ['Data visualisation · Web', 'Projet étudiant'],
      accroche:
        'Un site d’enquête qui compare le réchauffement de la Martinique, de La Réunion et de la Nouvelle-Calédonie, à partir des données ouvertes de Météo-France.',
      lien: { href: 'https://climat-outre-mer.netlify.app/', libelle: 'Accéder au site' },
      fiche: {
        role: 'Data designer : notebook Observable et intégration des graphiques dans le site (en binôme avec Enzo Loddo)',
        contexte: 'SAE303 · BUT MMI · Open Data University, défi Météo-France',
        outils: 'Observable (Plot, JavaScript), Astro, Tailwind CSS, Leaflet, GitHub',
        livrables: 'Notebook documenté, 5 visualisations interactives, site en 4 temps, page Méthode',
      },
      visuelPrincipal: [
        {
          src: climatAnneesChaudes,
          alt: 'Nuage de points des années 1970 à 2024 pour trois territoires : les années les plus chaudes, cerclées de noir, sont presque toutes récentes.',
        },
        {
          src: climatTerritoires,
          alt: 'Silhouettes de la Martinique, de La Réunion et de la Nouvelle-Calédonie avec leur réchauffement : +0,31, +0,19 et +0,23 °C par décennie.',
        },
        {
          src: climatProjections,
          alt: 'Températures moyennes d’aujourd’hui, de 2050 et de 2100 pour chaque territoire, jusqu’à environ +2 °C par rapport à 1991-2020.',
        },
      ],
      contexte: {
        titre: 'Une question, 55 ans de mesures, trois océans.',
        texte:
          'Répondre à une question d’intérêt public avec des données ouvertes : « La Réunion, la Martinique et la Nouvelle-Calédonie vivent-elles le même changement climatique, au même rythme ? ». Du nettoyage des séries de Météo-France jusqu’au site, chaque étape devait être documentée et vérifiable.',
        contraintes: ['3 territoires', '22 stations', '1970-2024', '5 graphiques', 'Projections jusqu’en 2100'],
      },
      defi: {
        enonce:
          'Rendre lisibles des séries climatiques pour un public sans formation scientifique, sans simplifier au point de tromper.',
        visuels: [
          { src: climatEvolution, alt: 'Trois courbes de température de 1970 à 2024 : la Martinique monte le plus vite.' },
          {
            src: climatMethode,
            alt: 'Schéma de la méthode : 126 282 lignes brutes, 79 706 lignes gardées, 22 stations, 5 graphiques, puis un récit en quatre temps.',
          },
        ],
      },
      solution: {
        titre: 'Une enquête en quatre temps, un graphique par question.',
        texte:
          'Chaque page pose une question et y répond par un graphique interactif : les années les plus chaudes, une carte des stations sur fond de relief, le rythme du réchauffement, les projections jusqu’en 2100 et le lien entre pluie et chaleur. Chaque graphique a un titre qui affirme la réponse et une lecture guidée en trois points. Une page Méthode expose les sources, les choix et les limites.',
        visuel: {
          src: climatPluieChaleur,
          alt: 'Trois petits graphiques où la courbe de chaleur monte et celle de la pluie oscille autour de zéro.',
        },
      },
      bilan: [
        'Nettoyer, joindre et documenter un vrai jeu de données, de la source au graphique.',
        'Choisir la forme de graphique adaptée à chaque question, puis l’ajuster aux retours.',
        'Passer d’un notebook à un site : fonctions réutilisables et données allégées.',
      ],
      suivant: 'tiktak',
    },
  },
  {
    slug: 'tiktak',
    titre: 'TiK•TaK',
    categorie: 'web',
    etiquette: 'UX/UI · Développement web',
    resume: 'Un configurateur en ligne pour composer, enregistrer et commander sa propre montre, assemblée à la main.',
    vignette: {
      src: vignetteTiktak,
      alt: 'Aperçu du site TiK•TaK',
    },
    etude: {
      etiquettes: ['UX/UI · Développement web', 'Projet étudiant'],
      accroche: 'Un configurateur en ligne pour composer, enregistrer et commander sa propre montre, assemblée à la main.',
      lien: { href: 'https://tiktak.menigoz.optimiseus.fr/', libelle: 'Accéder au site' },
      fiche: {
        role: 'Designer UI/UX et développeur front-end',
        contexte: 'SAE 301 · BUT MMI 2 · 3 jours, en individuel',
        outils: 'Figma, Astro, Tailwind CSS et DaisyUI, SQLite (DataGrip), Looping',
        livrables: 'Story map et personas, maquette Figma, objectif marketing et nudges, base de données, site déployé',
      },
      visuelPrincipal: [
        {
          src: tiktakAccueilMontre,
          alt: 'Montre L’Établi au boîtier en laiton et au bracelet en cuir, sur la page d’accueil de TiK•TaK.',
        },
        {
          src: tiktakConfigurateur,
          alt: 'Panneau du configurateur avec la barre d’étapes, le choix du modèle et de la finition, et l’assistant IA.',
        },
        {
          src: tiktakDeclinaisons,
          alt: 'Douze déclinaisons des modèles L’Établi, Le Copeau et Le Burin, en boîtier carré et rond.',
        },
      ],
      contexte: {
        titre: 'Une marque à créer, un configurateur à concevoir.',
        texte:
          'Concevoir le site de TiK•TaK, une marque fictive de montres françaises au style raffiné et épuré. L’utilisateur doit pouvoir composer sa montre pièce par pièce ou la décrire à une IA, l’enregistrer dans son espace et la commander, le tout appuyé sur une base de données et mis en ligne sur un serveur.',
        contraintes: ['3 jours', 'Individuel', 'Maquette 1920 px', 'Base SQLite', 'Connexion Google', 'Assistant IA'],
      },
      defi: {
        enonce: 'Faire composer une montre en ligne sans perdre l’utilisateur en route.',
        visuels: [
          {
            src: tiktakEnregistrement,
            alt: 'Fenêtre d’enregistrement « Ne perdez pas L’Établi 01 » avec la connexion Google et le lien « Plus tard ».',
          },
          {
            src: tiktakPanier,
            alt: 'Récapitulatif du panier avec le total livraison comprise, l’échéance de Noël et les garanties.',
          },
        ],
      },
      solution: {
        titre: 'Un configurateur guidé, à l’esprit d’atelier.',
        texte:
          'Une identité « L’Établi », entre bois, laiton et vert atelier, et un parcours en cinq étapes qui part d’un modèle déjà prêt. Sept nudges accompagnent l’utilisateur, de la barre de progression au prix affiché dès le départ, pour l’aider à aller jusqu’à la commande, sans jamais lui imposer de compte.',
        visuel: {
          src: tiktakAccueil,
          alt: 'Page d’accueil de TiK•TaK avec l’accroche « Composée par vous, assemblée à la main. ».',
        },
      },
      bilan: [
        'Concevoir un parcours et des nudges au service d’un objectif marketing.',
        'Modéliser et interroger une base de données (MCD, MPD, requêtes SQL).',
        'Mettre en ligne une application Astro sur un serveur, en HTTPS.',
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
