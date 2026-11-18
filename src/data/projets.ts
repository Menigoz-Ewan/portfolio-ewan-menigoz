// Contenu des projets : alimente les cartes (accueil, page Projets) et les études de cas /projets/[slug].
//
// Plan du fichier :
//   1. Images (une rubrique par projet)
//   2. Types : le modèle d'un projet
//   3. Catégories des filtres
//   4. Projets : un bloc par projet
//   5. Liste des projets (ordre d'affichage) et fonctions utiles
import type { ImageMetadata } from 'astro';
import type { Langue } from '../i18n';
import { lienProjet as adresseProjet } from '../i18n';
import { traductionsEn } from './projets-en';

/* ========================================================================
 * 1. IMAGES — vignette (carte) puis images de la page, une rubrique par projet
 * ======================================================================== */

// OpenSigne
import vignetteOpenSigne from '../assets/images/vignette-opensigne.png';
import osEnjeu from '../assets/images/opensigne/enjeu-societal.png';
import osCharte from '../assets/images/opensigne/charte-graphique.png';
import osExperience from '../assets/images/opensigne/experience-apprentissage.png';

// Affiches touristiques
import vignetteAffiches from '../assets/images/affiche-chateau.png';
import afficheChateau from '../assets/images/affiche-chateau.png';
import afficheTheatre from '../assets/images/galerie/affiche-theatre.png';
import afficheTemple from '../assets/images/galerie/affiche-temple.png';
import affinityTempleClocher from '../assets/images/affiches/affinity-temple-clocher.png';
import affinityTheatreGradins from '../assets/images/affiches/affinity-theatre-gradins.png';
import afficheTheatreDetail from '../assets/images/affiches/affiche-theatre-detail.png';

// Climat Outre-Mer
import vignetteClimat from '../assets/images/vignette-climat.png';
import climatAnneesChaudes from '../assets/images/climat/01-annees-chaudes-362x490.png';
import climatTerritoires from '../assets/images/climat/02-trois-territoires-362x490.png';
import climatProjections from '../assets/images/climat/03-projections-362x490.png';
import climatEvolution from '../assets/images/climat/04-evolution-588x420.png';
import climatMethode from '../assets/images/climat/05-methode-588x420.png';
import climatPluieChaleur from '../assets/images/climat/06-pluie-chaleur-690x460.png';

// TiK•TaK
import vignetteTiktak from '../assets/images/vignette-tiktak.png';
import tiktakAccueilMontre from '../assets/images/tiktak/01_accueil-montre_362x490@2x.png';
import tiktakConfigurateur from '../assets/images/tiktak/02_configurateur-panneau_362x490@2x.png';
import tiktakDeclinaisons from '../assets/images/tiktak/03_declinaisons_362x490@2x.png';
import tiktakEnregistrement from '../assets/images/tiktak/04_enregistrement_588x420@2x.png';
import tiktakPanier from '../assets/images/tiktak/05_panier_588x420@2x.png';
import tiktakAccueil from '../assets/images/tiktak/06_accueil_690x460@2x.png';

// La Cimade
import vignetteCimade from '../assets/images/vignette-cimade-carte.png';
import cimadeIterations from '../assets/images/cimade/01-iterations-logo-362x490@2x.png';
import cimadeUnivers from '../assets/images/cimade/02-univers-graphique-362x490@2x.png';
import cimadeFlyer from '../assets/images/cimade/03-flyer-362x490@2x.png';
import cimadeMoodboard from '../assets/images/cimade/04-moodboard-combat-588x420@2x.png';
import cimadeCroquis from '../assets/images/cimade/05-croquis-588x420@2x.png';
import cimadeTestVisibilite from '../assets/images/cimade/06-test-visibilite-690x460@2x.png';

// Iris VOD
import vignetteIris from '../assets/images/vignette-iris.png';
import irisAvertissement from '../assets/images/iris/01-avertissement-362x490@2x.png';
import irisDetail from '../assets/images/iris/02-detail-odyssee-362x490@2x.png';
import irisProfil from '../assets/images/iris/03-profil-362x490@2x.png';
import irisGuide from '../assets/images/iris/04-guide-de-style-588x420@2x.png';
import irisNotation from '../assets/images/iris/05-notation-588x420@2x.png';
import irisCatalogue from '../assets/images/iris/06-catalogue-690x460@2x.png';

/* ========================================================================
 * 2. TYPES — le modèle que chaque projet doit respecter
 * ======================================================================== */

/** Les trois pôles du BUT MMI : développement, communication, création numérique */
export type Categorie = 'dev' | 'com' | 'crea';

export interface Visuel {
  src: ImageMetadata;
  alt: string;
}

/** Lien affiché dans le hero de l'étude de cas (site en ligne, dossier PDF…) */
export interface LienExterne {
  href: string;
  libelle: string;
}

export interface EtudeDeCas {
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
  /** Un ou plusieurs domaines MMI (pastilles vertes + filtres de la page Projets) */
  categories: Categorie[];
  /** Sous-domaines (UX, UI, Branding…), affichés en mots-clés sous les pastilles */
  sousDomaines: string[];
  /** Résumé affiché sur l'accueil (seuls les projets qui en ont un y apparaissent) */
  accueil?: { resume: string };
  /** Résumé affiché sur la page Projets */
  resume: string;
  vignette: Visuel;
  etude?: EtudeDeCas;
}

/* ========================================================================
 * 3. DOMAINES — pastilles des cartes et des études de cas, boutons de filtre
 * ======================================================================== */

/** Chaque domaine : nom court (cartes), nom complet (filtres, étude de cas) et pictogramme */
export const domaines: Record<Categorie, { court: string; long: string; icone: 'code' | 'design' | 'message' }> = {
  dev: { court: 'Dev', long: 'Développement', icone: 'code' },
  crea: { court: 'Créa', long: 'Création numérique', icone: 'design' },
  com: { court: 'Com', long: 'Communication', icone: 'message' },
};

/** Noms des domaines en anglais */
const domainesEn: Record<Categorie, { court: string; long: string }> = {
  dev: { court: 'Dev', long: 'Development' },
  crea: { court: 'Design', long: 'Digital design' },
  com: { court: 'Comms', long: 'Communication' },
};

/** Domaines dans la langue de la page */
export const domainesPour = (lang: Langue) =>
  lang === 'en'
    ? (Object.fromEntries(Object.entries(domaines).map(([id, d]) => [id, { ...d, ...domainesEn[id as Categorie] }])) as typeof domaines)
    : domaines;

/** Ordre d'affichage des domaines (filtres et pastilles) */
export const ordreDomaines: Categorie[] = ['dev', 'crea', 'com'];

/** Range les domaines d'un projet dans l'ordre commun, pour que les pastilles soient toujours au même endroit */
export const trierDomaines = (liste: Categorie[]) => ordreDomaines.filter((id) => liste.includes(id));

/* ========================================================================
 * 4. PROJETS — un bloc par projet (« suivant » = slug du projet affiché après, dans l'ordre de la liste)
 * ======================================================================== */

// ─── OpenSigne ─────────────────────────────────────────────────────────────
const opensigne: Projet = {
  slug: 'opensigne',
  titre: 'OpenSigne',
  categories: ['crea', 'com'],
  sousDomaines: ['UI', 'UX', 'SEO'],
  resume: 'Apprendre la langue des signes française en jouant : parcours gamifié, projet collectif.',
  vignette: {
    src: vignetteOpenSigne,
    alt: 'Visuel d’OpenSigne : logo et slogan « Brisez le silence, apprenez à signer » sur fond lavande',
  },
  etude: {
    accroche:
      'Une web app gamifiée pour apprendre la langue des signes française, pensée comme une vraie startup.',
    fiche: {
      role: 'Designer UI/UX, SEO et lancement',
      contexte: 'Projet collectif · BUT MMI, 1re année',
      outils: 'Figma, Astro, Tailwind, HTML/CSS',
      livrables:
        'Web app, modèle économique, stratégie d’acquisition, audit d’éco-conception et d’accessibilité',
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
        'Acquérir des utilisateurs en conciliant accessibilité et éco-conception.',
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
      'Concevoir un produit numérique viable, du concept au lancement.',
    ],
    suivant: 'affiches-touristiques',
  },
};

// ─── Affiches touristiques ─────────────────────────────────────────────────
const affichesTouristiques: Projet = {
  slug: 'affiches-touristiques',
  titre: 'Affiches touristiques',
  categories: ['crea', 'com'],
  sousDomaines: ['Direction artistique'],
  resume: 'Trois affiches vectorielles qui donnent envie de visiter le Pays de Montbéliard.',
  vignette: {
    src: vignetteAffiches,
    alt: 'Affiche « Au sommet de l’Histoire » : le château des ducs de Wurtemberg à Montbéliard, en aplats de couleurs',
  },
  etude: {
    accroche: 'Trois affiches vectorielles fictives pour donner envie de visiter le patrimoine du Pays de Montbéliard.',
    fiche: {
      role: 'Designer graphique / directeur artistique',
      contexte: 'Projet étudiant fictif · BUT MMI',
      outils: 'Affinity Designer, export PDF print (CMJN)',
      livrables: '3 affiches vectorielles, fichiers sources, note d’intention',
    },
    visuelPrincipal: [
      { src: afficheChateau, alt: 'Affiche « Au sommet de l’Histoire » : le château des ducs de Wurtemberg, en flat design' },
      { src: afficheTheatre, alt: 'Affiche « Un spectacle depuis 2000 ans » : le théâtre gallo-romain de Mandeure vu du ciel' },
      { src: afficheTemple, alt: 'Affiche « L’élégance de la Renaissance » : le temple Saint-Martin et son clocher' },
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
        {
          src: affinityTempleClocher,
          alt: 'Vectorisation du clocher du temple Saint-Martin dans Affinity : formes en aplats, calques de polylignes visibles',
        },
        {
          src: affinityTheatreGradins,
          alt: 'Vectorisation des gradins du théâtre gallo-romain de Mandeure dans Affinity, calques nommés visibles',
        },
      ],
    },
    solution: {
      titre: 'Une identité épurée, inspirée du voyage rétro.',
      texte:
        'Un flat design sans contours : volumes géométriques et aplats de couleurs. Une signature commune, « L’art de bâtir le temps », relie le théâtre gallo-romain de Mandeure, le temple Saint-Martin et le château des ducs de Wurtemberg.',
      visuel: {
        src: afficheTheatreDetail,
        alt: 'Détail de l’affiche du théâtre gallo-romain de Mandeure : gradins en demi-cercle vus du ciel, en aplats de verts et de beiges',
      },
    },
    bilan: [
      'Maîtriser la vectorisation sous Affinity Designer.',
      'Respecter la rigueur du print : fonds perdus et normes d’export.',
      'Construire une identité de série, de la DA aux livrables.',
    ],
    suivant: 'la-cimade',
  },
};

// ─── Climat Outre-Mer ──────────────────────────────────────────────────────
const climatOutreMer: Projet = {
  slug: 'climat-outre-mer',
  titre: 'Climat Outre-Mer',
  categories: ['dev', 'crea'],
  accueil: {
    resume: 'Un site d’enquête qui compare le réchauffement de trois territoires d’outre-mer, à partir des données de Météo-France.',
  },
  sousDomaines: ['Datavisualisation', 'Front-end'],
  resume: 'Un site d’enquête qui compare le réchauffement de trois territoires d’outre-mer, à partir des données de Météo-France.',
  vignette: {
    src: vignetteClimat,
    alt: 'Carte de Climat Outre-Mer : courbes de température de la Martinique, de la Nouvelle-Calédonie et de La Réunion de 1970 à 2024',
  },
  etude: {
    accroche:
      'Un site d’enquête qui compare le réchauffement de la Martinique, de La Réunion et de la Nouvelle-Calédonie, à partir des données ouvertes de Météo-France.',
    lien: { href: 'https://climat-outre-mer.netlify.app/', libelle: 'Accéder au site' },
    fiche: {
      role: 'Data designer : notebook Observable et intégration des graphiques dans le site (en binôme avec Enzo Loddo)',
      contexte: 'SAE 303 · BUT MMI · Open Data University, défi Météo-France',
      outils: 'Observable (Plot, JavaScript), Astro, Tailwind CSS, Leaflet, GitHub, data.gouv.fr',
      livrables: 'Notebook documenté, 5 visualisations interactives, site en 5 temps, page Méthode',
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
      titre: 'Une question, 55 ans de mesures, trois zones différentes.',
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
          alt: 'Schéma de la méthode : 126 282 lignes brutes, 79 706 lignes gardées, 22 stations, 5 graphiques, puis un récit en cinq temps.',
        },
      ],
    },
    solution: {
      titre: 'Une enquête en cinq temps, un graphique par question.',
      texte:
        'Chaque page pose une question et y répond par un graphique interactif. Les graphiques ont un titre qui affirme la réponse et une lecture guidée en trois points. Une page Méthode expose les sources, les choix et les limites.',
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
    suivant: 'opensigne',
  },
};

// ─── TiK•TaK ───────────────────────────────────────────────────────────────
const tiktak: Projet = {
  slug: 'tiktak',
  titre: 'TiK•TaK',
  categories: ['dev', 'crea'],
  accueil: {
    resume: 'Un configurateur en ligne pour composer, enregistrer et commander sa propre montre, assemblée à la main.',
  },
  sousDomaines: ['UX', 'UI', 'Front-end'],
  resume: 'Un configurateur en ligne pour composer, enregistrer et commander sa propre montre, assemblée à la main.',
  vignette: {
    src: vignetteTiktak,
    alt: 'Visuel de TiK•TaK : trois montres à bracelet en cuir et l’accroche « Configurateur de montres personnalisées »',
  },
  etude: {
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
    suivant: 'climat-outre-mer',
  },
};

// ─── La Cimade ─────────────────────────────────────────────────────────────
const laCimade: Projet = {
  slug: 'la-cimade',
  titre: 'La Cimade',
  categories: ['crea'],
  accueil: {
    resume:
      'Refonte de l’identité visuelle d’une association de défense des droits des personnes exilées : logo, charte graphique et déclinaisons.',
  },
  sousDomaines: ['Branding', 'Identité visuelle'],
  resume:
    'Refonte de l’identité visuelle d’une association de défense des droits des personnes exilées : logo, charte graphique et déclinaisons.',
  vignette: {
    src: vignetteCimade,
    alt: 'Logo de La Cimade dont le « i » est remplacé par un poing levé noir veiné de rouge.',
  },
  etude: {
    accroche:
      'Refonte de l’identité visuelle d’une association de défense des droits des personnes exilées : logo, charte graphique et déclinaisons.',
    lien: { href: '/projets/la-cimade-refonte-identite.pdf', libelle: 'Consulter le dossier (PDF)' },
    fiche: {
      role: 'Designer graphique (projet individuel)',
      contexte: 'Projet étudiant fictif · BUT MMI 1re année',
      outils: 'Figma, Canva (mise en page)',
      livrables: 'Logo et 3 variantes, charte graphique de 28 pages, affiche A3, flyer, header web',
    },
    visuelPrincipal: [
      {
        src: cimadeIterations,
        alt: 'Plusieurs versions vectorielles du logo, avec racines ou poing levé à la place du « i ».',
      },
      {
        src: cimadeUnivers,
        alt: 'Univers graphique de La Cimade : le poing levé noir veiné de rouge, entouré de cercles rouges et de rectangles et d’ovales noirs.',
      },
      {
        src: cimadeFlyer,
        alt: 'Flyer de La Cimade avec le logo, la mention « Association Humanitaire » et l’appel « Rejoignez-nous ».',
      },
    ],
    contexte: {
      titre: 'Une association historique, une image à réveiller.',
      texte:
        'Fondée en 1939, La Cimade défend les droits des personnes exilées, réfugiées et en situation de précarité administrative. Son logo actuel, fin et très horizontal, perd en lisibilité sur les petits formats numériques. L’objectif : proposer une identité plus accessible et plus percutante, qui inspire immédiatement confiance. Projet réalisé dans un cadre pédagogique, sans commande de l’association.',
      contraintes: [
        'Audit de l’existant',
        '2 axes créatifs + 1 anti-axe',
        'Logo + 3 variantes',
        'Charte de 28 pages',
        '3 déclinaisons',
      ],
    },
    defi: {
      enonce:
        'Concilier la crédibilité d’une institution et l’énergie d’un mouvement militant, sans tomber dans le misérabilisme.',
      visuels: [
        {
          src: cimadeMoodboard,
          alt: 'Moodboard autour du combat : manifestations, poings levés, mégaphone et colombe, en noir, blanc et rouge.',
        },
        {
          src: cimadeCroquis,
          alt: 'Planche de croquis au crayon explorant étoiles, cœurs, mains serrées, racines et poings levés.',
        },
      ],
    },
    solution: {
      titre: 'Un poing levé qui devient le « i » de Cimade.',
      texte:
        'Plutôt que de choisir entre la solidarité et le combat, j’ai fusionné ces deux axes en une idée : la solidarité active. Le poing levé prend la place du « i » et devient un symbole capable de vivre seul, même en très petit format. Une typographie arrondie apporte la chaleur de l’accueil, tandis que le duo noir et rouge, hérité de l’ancien logo, garde la force militante. Un univers de cercles, rectangles et ovales prolonge l’identité sur l’affiche, le flyer et le site.',
      visuel: {
        src: cimadeTestVisibilite,
        alt: 'Test de lisibilité du logo de La Cimade et de ses variantes, du grand au très petit format.',
      },
    },
    bilan: [
      'Analyser avant de dessiner : audit du logo existant et comparaison avec Amnesty, le Secours populaire et Emmaüs.',
      'Faire émerger un symbole fort en itérant du croquis papier jusqu’au vectoriel.',
      'Structurer une charte complète : variantes, tests de lisibilité, usages interdits, couleurs et typographies.',
    ],
    suivant: 'iris',
  },
};

// ─── Iris VOD ──────────────────────────────────────────────────────────────
const iris: Projet = {
  slug: 'iris',
  titre: 'Iris VOD',
  categories: ['crea', 'dev'],
  sousDomaines: ['Identité visuelle', 'UI', 'Base de données'],
  resume: 'Une plateforme VOD fictive pour cinéphiles, avec un logo en forme d’iris et un catalogue d’une cinquantaine de films.',
  vignette: {
    src: vignetteIris,
    alt: 'Accueil d’Iris VOD : logo, barre de recherche et film à la une « L’Odyssée » (2026) avec son résumé, sur une image du film',
  },
  etude: {
    accroche: 'Une plateforme de vidéo à la demande pensée pour les cinéphiles, qui invite à sortir de ses habitudes de spectateur.',
    lien: { href: 'https://iris-vod.netlify.app/', libelle: 'Accéder au site' },
    fiche: {
      role: 'Logo, base de données PocketBase et participation aux maquettes',
      contexte: 'Exercice de cours · BUT MMI 2 · 2 semaines, en groupe de 3',
      outils: 'Papier, Figma, PocketBase, Astro, Tailwind CSS, JavaScript, Netlify',
      livrables: 'Logo, charte graphique, maquette Figma prototypée, base de données, site en ligne',
    },
    visuelPrincipal: [
      {
        src: irisAvertissement,
        alt: 'Fenêtre d’avertissement d’Iris VOD : « Site fictif · projet étudiant », liste des engagements et bouton « J’ai compris, découvrir le projet »',
      },
      {
        src: irisDetail,
        alt: 'Maquette Figma de la page du film « L’Odyssée » : bannière, synopsis, reprise de la lecture et lecteur vidéo',
      },
      {
        src: irisProfil,
        alt: 'Maquette Figma de la page Profil : avatar, statistiques, historique et liste « À voir » en affiches de films',
      },
    ],
    contexte: {
      titre: 'Imaginer la plateforme VOD idéale pour les cinéphiles.',
      texte:
        'Notre professeur nous a demandé d’imaginer la plateforme VOD idéale pour les cinéphiles, avec des fonctions pratiques et originales. Nous avions deux semaines, à trois avec Enzo Hillairet et Matthis Carnicer, avant un oral de présentation. J’ai créé le logo, structuré la base de données et participé aux maquettes. Le site n’était pas demandé : nous l’avons développé parce que le projet nous plaisait.',
      contraintes: ['2 semaines', 'Groupe de 3', 'Sujet libre', 'Oral de présentation', 'Maquette prototypée', 'Charte graphique'],
    },
    defi: {
      enonce: 'Donner envie de découvrir des films sans enfermer le spectateur dans ses habitudes.',
      visuels: [
        {
          src: irisGuide,
          alt: 'Guide de style d’Iris VOD : palette de couleurs (vert principal, blanc, gris, bleu foncé) et styles typographiques',
        },
        {
          src: irisNotation,
          alt: 'Maquette de l’écran de fin de visionnage : « Qu’avez-vous pensé du film ? », notation en étoiles, champ d’avis et bouton « Valider »',
        },
      ],
    },
    solution: {
      titre: 'Un iris pour logo, un catalogue qui ouvre le regard.',
      texte:
        'Le logo réunit l’œil humain et l’objectif de caméra : j’ai exploré sur papier la forme ovale de l’œil, le cercle de l’objectif et des rayons internes, avant de le finir sur Figma. J’ai structuré une base PocketBase d’une cinquantaine de films, avec leurs vraies affiches, synopsis, acteurs et réalisateurs, puis je l’ai reliée au site qui les affiche. À trois, nous avons retenu des fonctions comme « Changer de regard », le bouton « Hasard » ou une note proposée à la fin du film, jamais imposée.',
      visuel: {
        src: irisCatalogue,
        alt: 'Catalogue du genre Drame sur Iris VOD : options de tri et grille d’affiches de films',
      },
    },
    bilan: [
      'Chercher un logo sur papier, piste après piste, avant de le dessiner au propre sur Figma.',
      'Structurer une base de données PocketBase et relier ses données à un site Astro.',
      'Trier les idées d’un brainstorming à trois pour ne garder que les fonctions les plus utiles.',
    ],
    suivant: 'tiktak',
  },
};

/* ========================================================================
 * 5. LISTE DES PROJETS — l'ordre ici est l'ordre d'affichage sur le site
 * ======================================================================== */

export const projets: Projet[] = [
  tiktak,
  climatOutreMer,
  opensigne,
  affichesTouristiques,
  laCimade,
  iris,
];

/** Projets qui ont une page d'étude de cas */
export const projetsAvecEtude = projets.filter((p) => p.etude);

/** Adresse de l'étude de cas d'un projet (undefined s'il n'en a pas), dans la langue demandée */
export function lienProjet(projet: Projet, lang: Langue = 'fr') {
  return projet.etude ? adresseProjet(projet.slug, lang) : undefined;
}

/** Remplace les textes d'un projet par leur version anglaise (les images ne changent pas) */
function traduire(p: Projet): Projet {
  const tr = traductionsEn[p.slug];
  if (!tr) return p;
  const avecAlt = (v: Visuel, alt?: string): Visuel => ({ src: v.src, alt: alt ?? v.alt });
  return {
    ...p,
    titre: tr.titre ?? p.titre,
    sousDomaines: tr.sousDomaines,
    accueil: p.accueil && tr.accueil ? { resume: tr.accueil } : p.accueil,
    resume: tr.resume,
    vignette: avecAlt(p.vignette, tr.vignetteAlt),
    etude:
      p.etude && tr.etude
        ? {
            ...p.etude,
            accroche: tr.etude.accroche,
            lien: p.etude.lien ? { href: p.etude.lien.href, libelle: tr.etude.lienLibelle ?? p.etude.lien.libelle } : undefined,
            fiche: tr.etude.fiche,
            visuelPrincipal: p.etude.visuelPrincipal.map((v, i) => avecAlt(v, tr.etude!.visuelPrincipal[i])),
            contexte: tr.etude.contexte,
            defi: { ...p.etude.defi, enonce: tr.etude.defi.enonce, visuels: p.etude.defi.visuels.map((v, i) => avecAlt(v, tr.etude!.defi.visuels[i])) },
            solution: { titre: tr.etude.solution.titre, texte: tr.etude.solution.texte, visuel: avecAlt(p.etude.solution.visuel, tr.etude.solution.visuel) },
            bilan: tr.etude.bilan,
          }
        : p.etude,
  };
}

/** Liste des projets dans la langue de la page */
export const projetsPour = (lang: Langue): Projet[] => (lang === 'en' ? projets.map(traduire) : projets);
