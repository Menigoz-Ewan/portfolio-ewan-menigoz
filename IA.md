# Déclaration d'usage de l'IA

> Conformément au point 3 des consignes, ce fichier déclare, **pour chaque outil d'IA utilisé** : à quelle étape, pour quoi faire, et ce que j'ai modifié, corrigé ou rejeté dans ce qu'il a produit.
> Le déroulé général du projet (ce que j'ai fait, ce qui a coincé, ce que j'ai décidé) est dans [`JOURNAL.md`].

## Mes règles

1. Je ne livre rien que je ne sais pas expliquer, justifier et modifier moi-même devant le jury.
2. L'inspiration (références, intention de départ, direction artistique) vient de moi.
3. Chaque proposition de l'IA est relue : orthographe, accessibilité, cohérence avec ma charte, compréhension du code.
4. Ce fichier est mis à jour à chaque étape, en même temps que le journal.

---

## Comment j'en suis arrivé là

### Ce qui s'est passé

1. **Début du projet.** J'ai fait une première maquette à partir de mon inspiration et de celle de Gemini. Mes prompts étaient mauvais : j'avais une inspiration personnelle, mais trop vague et avec peu de sens. Résultat : une charte graphique incomplète, incohérente et dénuée de sens.
2. **Soutenance maquette.** Beaucoup de remarques négatives : éléments trop gros, manque de sens, logo, couleurs, typographie… Les professeurs nous ont aussi dit de ne pas hésiter à utiliser l'IA.
3. **Après la soutenance.** Je me suis penché sur l'IA : comment prompter efficacement, quelle IA convient le mieux, quels outils utiliser. J'ai choisi Claude, avec l'abonnement Pro.
4. **Prise en main de Claude.** Je me suis documenté sur son fonctionnement, puis j'ai trouvé et installé des plugins et des skills.
5. **Refonte de la maquette.** J'ai demandé à Claude de prendre en compte les retours de la soutenance : comment trouver une meilleure charte graphique, ce qui fonctionne pour ce type de site, ce qu'attendent les cibles, l'esthétique qui fonctionne bien et les informations à ne pas oublier.
6. **Passage au développement.** Une fois la nouvelle maquette validée, j'ai demandé à l'IA la meilleure façon de passer au code : comment utiliser les plugins dans un projet VS Code et comment optimiser le code. J'ai d'abord indiqué ce que j'avais en tête, surtout pour le back-end (PocketBase, hébergement, animations…).
7. **Première version.** J'ai indiqué ce que j'avais travaillé en cours, puis j'ai demandé une première version.

### Les retouches

- **Le travail de l'IA ne me convainquait pas : ce n'était pas mon style.** Je lui ai donc apporté mes propres références : photos de mes dessins, de mes projets…
- **V2 de la maquette :** c'était mieux, avec quelques ajustements à retravailler.

Ensuite, le travail a continué étape par étape jusqu'à aujourd'hui : chaque étape est détaillée dans les tableaux ci-dessous.

---

## Outils utilisés

| Outil | Version / offre | Période |
|---|---|---|
| Gemini | Avant la refonte | Depuis le 24/09/2026 |
| Claude (application Desktop, mode Cowork) | Offre Pro, connecteur Figma | Depuis le 16/10/2026 |
| Claude Code | Offre Pro | Maquette V3/V4, puis phase de code |

---

## Claude (Cowork, avec le connecteur Figma)

| Étape | Pour quoi faire | Ce que j'ai modifié, corrigé ou rejeté |

|---|---|---|

| Refonte V2 de la maquette (16/10) | Proposer et construire dans Figma un style clair (crème, vert sapin), les composants et les pages. | J'ai choisi la direction claire et le vert sapin. *Fond de couleur sombre, éléments de couleurs jaune, éléments de couleurs bleu marine : refusés* |

| Header (16/10) | Choix d'intégrer un header animé, essaie avec plusieurs variantes. | Sur cinq variantes, j'ai gardé l'onglet de classeur et fait supprimer les quatre autres. J'ai demandé un onglet plus souple et une recherche de stage plus visible. |

| Logo (16/10) | Proposer un audit complet sur mon logo EWME ainsi que de ses variantes (taille, interlettrage, E détachés). | J'ai choisi la variante « E détachés, plus grand » et demandé d'inverser le sens du dernier E pour qu'il fasse une parenthèse. J'ai écarté l'ancienne version. |

| Relecture de la maquette V3 (18/10) | Lire le fichier Figma et lister les changements faits pendant la V3. | Aucun changement : simple compte rendu. |

| Récapitulatif PDF (18/10) | Mettre en forme mes changements, ma méthode de travail et un brouillon de note sur l'IA. | La méthode en quatre étapes vient de moi ; l'IA l'a rédigée. |

| Note de positionnement (18/10) | Rédiger une première version à partir des consignes, de ma maquette et de mes réponses. | J'ai refusé de restreindre la cible à un seul type de structure. | 

| Charte graphique (18/10) | Expliquer mes choix de couleurs, typographies, grille et hiérarchie ; vérifier les contrastes. | 

| Page « Usage de l'IA » (18/10) | Ajouter la page dans la maquette, avec un lien dans le pied de page et un renvoi dans À propos. | J'ai choisi l'emplacement : une page dédiée et un renvoi dans À propos. |

| Grille qualité (18/10) | Proposer des critères propres à mon site pour `QUALITE.md`. | 

---

## Claude Code

| Étape | Pour quoi faire | Ce que j'ai modifié, corrigé ou rejeté |

|---|---|---|

| Maquette V3/V4 *(à dater)* | *(à compléter)* | *(à compléter)* |

| Phase de code *(à venir)* | *(à compléter pour chaque partie : carrousels, formulaire, routes dynamiques des projets…)* | *(à compléter)* |

| Header à onglet et nouveau logo (10/11) | Appliquer la nouvelle maquette dans le code : logo EWME à espacement régulier et favicons, composant HeaderPanneau (panneau vert + onglet sous le lien actif, dessiné en CSS), transition de l’onglet avec les View Transitions, menu mobile sous 1024 px, contenus des pages déplacés dans le panneau, mentions légales (hébergeur à compléter) ; vérifications en 1440/390 px et Lighthouse. | *(à compléter)* |

| Statut « stage » du hero, variante F + H (10/11) | Retirer l’étiquette « Je recherche un stage… » et la pastille « Stage recherché » ; coder l’onglet crème découpé dans le bas du panneau (masque CSS, trame alignée, texte construit depuis les données) et la note au crayon « écrivez-moi ! » (police Caveat, flèche SVG animée) ; corriger la hauteur du hero (676 px) ; vérifications en 1440/1280/1024/390 px et Lighthouse avant/après. | *(à compléter)* |

| Thème clair / sombre, phase 1 (13/11) | À partir de ma liste `A-INTEGRER.md` : créer les deux thèmes daisyUI, remplacer les couleurs écrites en dur par des couleurs par rôle, ajouter le bouton soleil/lune et le script qui mémorise le choix, décaler le menu de 48 px ; mesurer les contrastes des deux thèmes. Claude a proposé les couleurs manquantes du thème sombre (cartes, surfaces, vert des textes) : je les ai validées. | *(à compléter)* |

| Menu à onglets fantômes, phase 2 (13/11) | À partir de ma liste `A-INTEGRER.md` et du composant Figma « Onglet fantôme » : coder le contour en pointillé derrière les liens inactifs (repos, survol, focus, thème sombre), régler le glissement à 0,35 s ; mesurer les contrastes. J'ai refusé la première version, qui ne ressemblait pas à la maquette (onglet actif trop large, fantômes trop pâles) : Claude l'a refaite en mesurant Figma. J'ai aussi signalé l'onglet vert « coupé » au survol du lien voisin : corrigé. J'ai ensuite retravaillé moi-même la forme et l'espacement des onglets dans Figma ; Claude a reporté ces mesures dans le code. | *(à compléter)* |

| Formulaire de contact → PocketBase (16/11) | J'ai créé moi-même l'instance et la collection « messages » (champs, règles) et le fichier `.env`. Claude a branché le formulaire : envoi en fetch, case de consentement, champ piège, bouton désactivé pendant l'envoi, messages annoncés ; puis l'a testé sans écrire dans la base. Il avait d'abord mis l'objet en tête du message, faute de champ « objet » : j'ai préféré ajouter un champ `objet` (150 caractères) dans la collection, et Claude a adapté l'envoi. | *(à compléter)* |

| Étiquettes des projets : domaines + sous-domaines (16/11) | Je trouvais les étiquettes incohérentes et sans lien avec les filtres. Claude a proposé 3 variantes dans Claude Design (pastilles, rail des 3 domaines, code couleur) ; j'ai choisi la variante A (pas celle qu'il recommandait, la B). J'ai validé la liste des sous-domaines et décidé de garder les supports dans la fiche projet. Claude a codé le composant `PastillesDomaines.astro`, les filtres avec pictogrammes, puis mesuré les contrastes en clair et en sombre. | *(à compléter)* |

| Filtres animés, contexte, affiches (16/11) | J'ai demandé une animation fluide pour les filtres, le retrait des points dans les étiquettes du contexte, et j'ai fourni mes 3 affiches finales et 2 captures d'Affinity. Claude a animé les filtres avec les View Transitions natives (coupées avec « réduire les animations »), converti les affiches en PNG et rédigé les textes alternatifs des captures. Il a remarqué que le titre de mes affiches était coupé et a laissé les images du triptyque garder leurs proportions. | *(à compléter)* |

| Mentions légales, RGPD et confidentialité (16/11) | J'ai demandé une vérification des pages et l'ajout de ce qui manquait. Claude a fait l'inventaire réel du site (aucun cookie, aucune requête externe, deux clés de stockage local), corrigé le texte sur les cookies, ajouté les mentions obligatoires (directeur de la publication, téléphone de l'hébergeur, base légale, droits, CNIL) et les crédits. Les informations qu'il ne connaît pas sont laissées en [À COMPLÉTER]. | *(à compléter)* |

| Mentions légales complétées (16/11) | Claude m’a posé des questions sur chaque [À COMPLÉTER] : j’ai donné mon hébergeur (Infomaniak), mon domaine, les membres d’OpenSigne, les durées de conservation, l’adresse de l’IUT et mes choix (adresse personnelle non publiée, pas de nom de licence pour Météo-France). Il a rempli la page et vérifié qu’il ne restait aucun marqueur. | *(à compléter)* |

