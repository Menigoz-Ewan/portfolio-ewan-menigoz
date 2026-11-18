// Version anglaise des textes des projets (les images restent celles de projets.ts).
// Un bloc par projet, dans le même ordre de champs que projets.ts ; les tableaux de textes alternatifs
// suivent l'ordre des images correspondantes.

export interface TraductionProjet {
  titre?: string;
  sousDomaines: string[];
  accueil?: string;
  resume: string;
  vignetteAlt: string;
  etude?: {
    accroche: string;
    lienLibelle?: string;
    fiche: { role: string; contexte: string; outils: string; livrables: string };
    visuelPrincipal: string[];
    contexte: { titre: string; texte: string; contraintes: string[] };
    defi: { enonce: string; visuels: string[] };
    solution: { titre: string; texte: string; visuel: string };
    bilan: string[];
  };
}

export const traductionsEn: Record<string, TraductionProjet> = {
  opensigne: {
    sousDomaines: ['UI', 'UX', 'SEO'],
    resume: 'Learning French Sign Language through play: a gamified journey, built as a team project.',
    vignetteAlt: 'OpenSigne visual: logo and slogan “Brisez le silence, apprenez à signer” (Break the silence, learn to sign) on a lavender background',
    etude: {
      accroche: 'A gamified web app for learning French Sign Language, designed like a real startup.',
      fiche: {
        role: 'UI/UX designer, SEO and launch',
        contexte: 'Team project · BUT MMI, 1st year',
        outils: 'Figma, Astro, Tailwind, HTML/CSS',
        livrables: 'Web app, business model, acquisition strategy, eco-design and accessibility audit',
      },
      visuelPrincipal: ['OpenSigne: logo, a signing hand and the slogan “Brisez le silence, apprenez à signer” (Break the silence, learn to sign)'],
      contexte: {
        titre: 'Launching a digital service from A to Z.',
        texte:
          'In the 1st year of our BUT MMI, we had to design and simulate the launch of a complete digital service: concept, business model and communication strategy on a tight budget. On the technical side, the web app had to be eco-designed, accessible and well referenced.',
        contraintes: ['Eco-design', 'RGAA accessibility', 'SEO', '€1,000 budget', 'Ulule launch'],
      },
      defi: {
        enonce: 'Winning users while reconciling accessibility and eco-design.',
        visuels: [
          'Slide “Un enjeu sociétal” (A societal issue): 300,000 people in France have severe to profound hearing loss',
          'Slide “La charte graphique” (The brand guidelines): League Spartan and Nunito typefaces, lavender, dark purple, white, grey and black palette',
        ],
      },
      solution: {
        titre: 'A playful, lightweight and inclusive app.',
        texte:
          'OpenSigne combines an eco-designed, accessible interface, an ultra-light Astro architecture for search engines, and a freemium model backed by a lean marketing strategy.',
        visuel: 'OpenSigne mock-ups on a laptop and a smartphone: “Une expérience d’apprentissage ludique et accessible” (A playful, accessible learning experience)',
      },
      bilan: [
        'Combining technical standards with ethical constraints: RGAA and eco-design.',
        'Thinking about user experience and acquisition from the coding stage.',
        'Designing a viable digital product, from concept to launch.',
      ],
    },
  },

  'affiches-touristiques': {
    titre: 'Tourism posters',
    sousDomaines: ['Art direction'],
    accueil: 'Three vector posters that make you want to visit the Pays de Montbéliard.',
    resume: 'Three vector posters that make you want to visit the Pays de Montbéliard.',
    vignetteAlt: 'The three tourism posters side by side: the castle of the Dukes of Württemberg, the Gallo-Roman theatre of Mandeure and Saint-Martin church, in flat colours',
    etude: {
      accroche: 'Three fictional vector posters that make you want to visit the heritage of the Pays de Montbéliard.',
      fiche: {
        role: 'Graphic designer / art director',
        contexte: 'Fictional student project · BUT MMI',
        outils: 'Affinity Designer, print PDF export (CMYK)',
        livrables: '3 vector posters, source files, design rationale',
      },
      visuelPrincipal: [
        'Poster “Au sommet de l’Histoire” (At the top of History): the castle of the Dukes of Württemberg, in flat design',
        'Poster “Un spectacle depuis 2000 ans” (A show for 2,000 years): the Gallo-Roman theatre of Mandeure seen from above',
        'Poster “L’élégance de la Renaissance” (The elegance of the Renaissance): Saint-Martin church and its bell tower',
      ],
      contexte: {
        titre: 'A clear brief, precise print constraints.',
        texte:
          'Designing a series of three posters to showcase three buildings from different eras, entirely in vector, with the institutional logos and print-ready PDFs, along with a design rationale.',
        contraintes: ['3 posters', '40 × 60 cm', 'CMYK', '3 mm bleed', 'Crop marks'],
      },
      defi: {
        enonce: 'Modernising the image of a historic area without falling into postcard clichés.',
        visuels: [
          'Vectorising the bell tower of Saint-Martin church in Affinity: flat shapes, polyline layers visible',
          'Vectorising the stands of the Gallo-Roman theatre of Mandeure in Affinity, named layers visible',
        ],
      },
      solution: {
        titre: 'A clean identity, inspired by retro travel posters.',
        texte:
          'Flat design without outlines: geometric volumes and solid colours. A shared signature, “L’art de bâtir le temps” (The art of building time), links the Gallo-Roman theatre of Mandeure, Saint-Martin church and the castle of the Dukes of Württemberg.',
        visuel: 'Detail of the Mandeure theatre poster: semicircular stands seen from above, in shades of green and beige',
      },
      bilan: [
        'Mastering vectorisation in Affinity Designer.',
        'Respecting the rigour of print: bleeds and export standards.',
        'Building a series identity, from art direction to deliverables.',
      ],
    },
  },

  'climat-outre-mer': {
    sousDomaines: ['Data visualisation', 'Front-end'],
    resume: 'A data-driven website comparing global warming in three French overseas territories, based on Météo-France data.',
    vignetteAlt: 'Climat Outre-Mer card: temperature curves for Martinique, New Caledonia and Réunion from 1970 to 2024',
    etude: {
      accroche:
        'A data-driven website comparing warming in Martinique, Réunion and New Caledonia, based on Météo-France open data.',
      lienLibelle: 'Visit the website',
      fiche: {
        role: 'Data designer: Observable notebook and integration of the charts into the website (in a pair with Enzo Loddo)',
        contexte: 'SAE 303 · BUT MMI · Open Data University, Météo-France challenge',
        outils: 'Observable (Plot, JavaScript), Astro, Tailwind CSS, Leaflet, GitHub, data.gouv.fr',
        livrables: 'Documented notebook, 5 interactive visualisations, 5-part website, Method page',
      },
      visuelPrincipal: [
        'Scatter plot of the years 1970 to 2024 for three territories: the hottest years, circled in black, are almost all recent.',
        'Outlines of Martinique, Réunion and New Caledonia with their warming: +0.31, +0.19 and +0.23 °C per decade.',
        'Average temperature today and projection for 2100 in each territory: about +1.8 to +2.1 °C compared with 1991–2020.',
      ],
      contexte: {
        titre: 'One question, 55 years of data, three different regions.',
        texte:
          'Answering a public-interest question with open data: “Are Réunion, Martinique and New Caledonia going through the same climate change, at the same pace?”. From cleaning the Météo-France series to the website, every step had to be documented and verifiable.',
        contraintes: ['3 territories', '22 stations', '1970–2024', '5 charts', 'Projections to 2100'],
      },
      defi: {
        enonce: 'Making climate series readable for a non-scientific audience, without simplifying to the point of misleading.',
        visuels: [
          'Three temperature curves from 1970 to 2024: Martinique is warming the fastest.',
          'Diagram of the method: 126,282 raw rows, 79,706 rows kept, 22 stations, 5 charts, then a five-part story.',
        ],
      },
      solution: {
        titre: 'A five-part investigation, one chart per question.',
        texte:
          'Each page asks a question and answers it with an interactive chart. Every chart has a title that states the answer and a three-point reading guide. A Method page sets out the sources, the choices and the limits.',
        visuel: 'Three small charts where the heat curve rises while the rainfall curve fluctuates around zero.',
      },
      bilan: [
        'Cleaning, joining and documenting a real dataset, from source to chart.',
        'Choosing the right chart for each question, then adjusting it to feedback.',
        'Moving from a notebook to a website: reusable functions and lighter data.',
      ],
    },
  },

  tiktak: {
    sousDomaines: ['UX', 'UI', 'Front-end'],
    accueil: 'An online configurator to design, save and order your own handcrafted watch.',
    resume: 'An online configurator to design, save and order your own handcrafted watch.',
    vignetteAlt: 'TiK•TaK visual: three watches with leather straps and the tagline “Configurateur de montres personnalisées” (Custom watch configurator)',
    etude: {
      accroche: 'An online configurator to design, save and order your own handcrafted watch.',
      lienLibelle: 'Visit the website',
      fiche: {
        role: 'UI/UX designer and front-end developer',
        contexte: 'SAE 301 · BUT MMI 2 · 3 days, solo',
        outils: 'Figma, Astro, Tailwind CSS and DaisyUI, SQLite (DataGrip), Looping',
        livrables: 'Story map and personas, Figma mock-up, marketing goal and nudges, database, deployed website',
      },
      visuelPrincipal: [
        'The L’Établi watch with a brass case and a leather strap, on the TiK•TaK home page.',
        'Configurator panel with the progress bar, the choice of model and finish, and the AI assistant.',
        'Twelve variations of the L’Établi, Le Copeau and Le Burin models, with square and round cases.',
      ],
      contexte: {
        titre: 'A brand to create, a configurator to design.',
        texte:
          'Designing the website of TiK•TaK, a fictional French watch brand with a refined, minimal style. Users must be able to build their watch piece by piece or describe it to an AI, save it in their account and order it, all backed by a database and deployed on a server.',
        contraintes: ['3 days', 'Solo', '1920 px mock-up', 'SQLite database', 'Google sign-in', 'AI assistant'],
      },
      defi: {
        enonce: 'Letting people build a watch online without losing them along the way.',
        visuels: [
          'Save dialog “Ne perdez pas L’Établi 01” (Don’t lose L’Établi 01) with Google sign-in and a “Plus tard” (Later) link.',
          'Basket summary with the total including delivery, the Christmas deadline and the guarantees.',
        ],
      },
      solution: {
        titre: 'A guided configurator, with a workshop spirit.',
        texte:
          'An “L’Établi” (the workbench) identity, mixing wood, brass and workshop green, and a five-step journey that starts from a ready-made model. Seven nudges support users, from the progress bar to the price shown from the start, to help them reach the order, without ever forcing them to create an account.',
        visuel: 'TiK•TaK home page with the tagline “Composée par vous, assemblée à la main.” (Designed by you, assembled by hand.)',
      },
      bilan: [
        'Designing a journey and nudges that serve a marketing goal.',
        'Modelling and querying a database (conceptual and physical models, SQL queries).',
        'Deploying an Astro application on a server, over HTTPS.',
      ],
    },
  },

  'la-cimade': {
    sousDomaines: ['Branding', 'Visual identity'],
    accueil: 'Redesign of the visual identity of an organisation defending the rights of exiled people: logo, brand guidelines and applications.',
    resume: 'Redesign of the visual identity of an organisation defending the rights of exiled people: logo, brand guidelines and applications.',
    vignetteAlt: 'La Cimade logo where the “i” is replaced by a black raised fist veined with red.',
    etude: {
      accroche:
        'Redesign of the visual identity of an organisation defending the rights of exiled people: logo, brand guidelines and applications.',
      lienLibelle: 'Read the full document (PDF, in French)',
      fiche: {
        role: 'Graphic designer (solo project)',
        contexte: 'Fictional student project · BUT MMI, 1st year',
        outils: 'Figma, Canva (layout)',
        livrables: 'Logo and 3 variants, 28-page brand guidelines, A3 poster, flyer, web header',
      },
      visuelPrincipal: [
        'Several vector versions of the logo, with roots or a raised fist in place of the “i”.',
        'La Cimade’s visual universe: the black raised fist veined with red, surrounded by red circles and black rectangles and ovals.',
        'La Cimade flyer with the logo, the words “Association Humanitaire” (Humanitarian organisation) and the call “Rejoignez-nous” (Join us).',
      ],
      contexte: {
        titre: 'A historic organisation, an image to revive.',
        texte:
          'Founded in 1939, La Cimade defends the rights of exiled people, refugees and people in insecure administrative situations. Its current logo, thin and very horizontal, loses legibility in small digital formats. The goal: a more accessible, more striking identity that immediately inspires trust. A project carried out in a teaching context, without any commission from the organisation.',
        contraintes: ['Audit of the existing logo', '2 creative directions + 1 anti-direction', 'Logo + 3 variants', '28-page guidelines', '3 applications'],
      },
      defi: {
        enonce: 'Reconciling the credibility of an institution with the energy of an activist movement, without falling into pity.',
        visuels: [
          'Moodboard around the idea of struggle: demonstrations, raised fists, a megaphone and a dove, in black, white and red.',
          'Sheet of pencil sketches exploring stars, hearts, joined hands, roots and raised fists.',
        ],
      },
      solution: {
        titre: 'A raised fist that becomes the “i” in Cimade.',
        texte:
          'Rather than choosing between solidarity and struggle, I merged these two directions into one idea: active solidarity. The raised fist takes the place of the “i” and becomes a symbol that can stand on its own, even at a very small size. A rounded typeface brings the warmth of welcome, while the black and red pair, inherited from the old logo, keeps the activist strength. A universe of circles, rectangles and ovals extends the identity to the poster, the flyer and the website.',
        visuel: 'Legibility test of the La Cimade logo and its variants, from large to very small sizes.',
      },
      bilan: [
        'Analysing before drawing: audit of the existing logo and comparison with Amnesty, Secours populaire and Emmaüs.',
        'Bringing out a strong symbol by iterating from paper sketches to vector.',
        'Structuring complete guidelines: variants, legibility tests, forbidden uses, colours and typefaces.',
      ],
    },
  },

  iris: {
    sousDomaines: ['Visual identity', 'UI', 'Database'],
    resume: 'A fictional streaming platform for film lovers, with an iris-shaped logo and a catalogue of about fifty films.',
    vignetteAlt: 'Iris VOD home page: logo, search bar and the featured film “L’Odyssée” (2026) with its summary, over a still from the film',
    etude: {
      accroche: 'A video-on-demand platform designed for film lovers, which encourages viewers to step out of their habits.',
      lienLibelle: 'Visit the website',
      fiche: {
        role: 'Logo, PocketBase database and contribution to the mock-ups',
        contexte: 'Course exercise · BUT MMI 2 · 2 weeks, team of 3',
        outils: 'Paper, Figma, PocketBase, Astro, Tailwind CSS, JavaScript, Netlify',
        livrables: 'Logo, brand guidelines, prototyped Figma mock-up, database, live website',
      },
      visuelPrincipal: [
        'Iris VOD warning window: “Site fictif · projet étudiant” (Fictional website · student project), list of commitments and a “J’ai compris, découvrir le projet” (Got it, discover the project) button',
        'Figma mock-up of the page for the film “L’Odyssée”: banner, synopsis, resume playback and video player',
        'Figma mock-up of the Profile page: avatar, statistics, history and a “To watch” list of film posters',
      ],
      contexte: {
        titre: 'Imagining the ideal streaming platform for film lovers.',
        texte:
          'Our teacher asked us to imagine the ideal video-on-demand platform for film lovers, with practical and original features. We had two weeks, as a team of three with Enzo Hillairet and Matthis Carnicer, before an oral presentation. I created the logo, structured the database and contributed to the mock-ups. The website was not required: we built it because we enjoyed the project.',
        contraintes: ['2 weeks', 'Team of 3', 'Open brief', 'Oral presentation', 'Prototyped mock-up', 'Brand guidelines'],
      },
      defi: {
        enonce: 'Making people want to discover films without locking viewers into their habits.',
        visuels: [
          'Iris VOD style guide: colour palette (main green, white, grey, dark blue) and type styles',
          'Mock-up of the end-of-film screen: “Qu’avez-vous pensé du film ?” (What did you think of the film?), star rating, review field and a “Valider” (Submit) button',
        ],
      },
      solution: {
        titre: 'An iris for a logo, a catalogue that broadens your view.',
        texte:
          'The logo brings together the human eye and the camera lens: I explored on paper the oval shape of the eye, the circle of the lens and inner rays, before finishing it in Figma. I structured a PocketBase database of about fifty films, with their real posters, synopses, actors and directors, then connected it to the website that displays them. Together, we kept features such as “Changer de regard” (See differently), the “Hasard” (Random) button or a rating offered at the end of the film, never imposed.',
        visuel: 'Drama catalogue on Iris VOD: sorting options and a grid of film posters',
      },
      bilan: [
        'Searching for a logo on paper, idea after idea, before drawing it cleanly in Figma.',
        'Structuring a PocketBase database and connecting its data to an Astro website.',
        'Sorting the ideas of a three-person brainstorm to keep only the most useful features.',
      ],
    },
  },
};
