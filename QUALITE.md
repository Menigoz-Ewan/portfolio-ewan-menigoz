# Checklist qualité web

> Les critères ci-dessous partent des éléments réels de mon site (header en onglet, pile de photos animée, cartes « Hors écran », filtres de projets, formulaire PocketBase, hébergement sur VPS), et non d'une grille générique.
> Pour chaque critère : pourquoi il compte dans mon cas, comment je le vérifie, le résultat et ce que j'ai corrigé.
> Statut : ⬜ à vérifier · 🟨 en cours · ✅ vérifié · ❌ problème trouvé

Outils retenus : Lighthouse (Chrome DevTools), axe DevTools, WAVE, lecteur d'écran NVDA (Windows), clavier seul, EcoIndex / GreenIT-Analysis, Google Search Console, validateur W3C.

---

## 1. Accessibilité

| # | Critère | Pourquoi dans mon cas | Comment je vérifie | Résultat | Correction |

|---|---|---|---|---|---|

| A1 | Tout le site se parcourt au clavier, dans un ordre logique | Header en onglet, filtres, cartes « Hors écran », pile de photos et formulaire sont des éléments interactifs | Parcours complet avec Tab, Maj+Tab, Entrée, Espace et Échap, sur chaque page | ⬜ | |

| A2 | Un lien « Aller au contenu » en premier | Le header est répété sur toutes les pages | Premier Tab sur chaque page | ⬜ | |

| A3 | Le focus est toujours visible | L'état Focus des boutons est prévu dans la maquette ; il faut le garder sur les liens, les filtres et les cartes | Parcours clavier + vérification visuelle sur fond crème, blanc et vert | ⬜ | |

| A4 | Les cartes « Hors écran » réagissent au focus, pas seulement au survol | La consigne affichée est « Survolez ou touchez une carte » : le clavier est oublié | Tab sur chaque carte ; adapter le texte de la consigne | ⬜ | |

| A5 | La pile de photos animée peut être mise en pause | Une animation automatique de plus de 5 secondes doit pouvoir être arrêtée (WCAG 2.2.2) | Vérifier la présence d'un bouton pause accessible au clavier | ⬜ | 
|
| A6 | `prefers-reduced-motion` est respecté | La pile de photos, les translations au scroll, les cartes animées et la note manuscrite de l'accueil (flèche qui se dessine, texte en fondu) | Activer « réduire les animations » dans Windows, recharger le site | ⬜ | |

| A7 | Chaque image porteuse de sens a un `alt` descriptif ; les images décoratives ont `alt=""` | Photos en polaroid, visuels OpenSigne, affiches touristiques, galerie, logo | WAVE + relecture manuelle de chaque `alt` | ⬜ | |

| A8 | Le logo SVG a un nom accessible | Il sert de lien vers l'accueil | NVDA : le lien doit être annoncé « EWME, accueil » | ⬜ | |

| A9 | Contrastes de texte ≥ 4,5 : 1 | Gris #6B655D sur crème et sable, rouge sur crème, blanc sur rouge, vert #1E4D3B sur crème (onglet « stage recherché » de l'accueil) | Calcul fait dans la charte (5,4 / 4,9 / 5,2 / 5,5 ; vert sur crème 9 : 1) ; à recontrôler sur le site avec axe | 🟨 | |

| A10 | Contraste des bordures de champs ≥ 3 : 1 | La couleur « bordure » #D9D2C6 n'atteint que 1,4 : 1 sur le crème : elle ne doit pas servir à délimiter les champs | Contrôle des champs du formulaire ; si besoin, bordure en gris #6B655D (5,4 : 1) | ⬜ | |

| A11 | Le formulaire de contact a des étiquettes visibles, des erreurs explicites et liées au champ | Formulaire PocketBase | NVDA + envoi d'un formulaire vide puis invalide | ⬜ | |

| A12 | Structure sémantique : un seul `h1` par page, titres dans l'ordre, repères `header`, `nav`, `main`, `footer`, `lang="fr"` | Les pages projet ont beaucoup de sections | Extension HeadingsMap + validateur W3C | ⬜ | |

| A13 | Zoom à 200 % et affichage à 320 px de large sans perte de contenu | Maquette conçue en 1440 px | Zoom navigateur + mode responsive des DevTools | ⬜ | |

| A14 | Score Lighthouse Accessibilité | Indicateur global, complété par les tests manuels ci-dessus | Lighthouse mobile et ordinateur, sur chaque type de page | ⬜ | |

| A15 | Contrastes des deux thèmes (clair par défaut, sombre en option) | Le thème clair reste l’identité du site ; le sombre est un choix du visiteur, mémorisé entre les pages | Mesuré le 13/11 dans le navigateur, couleurs calculées du site. Clair : texte 16,9:1 sur le fond, 18,1:1 sur les cartes ; gris secondaire 5,4 (fond), 5,8 (carte), 4,9 (sable) ; vert 9,0 (fond), 9,6 (carte), 7,9 (étiquette). Sombre : texte 15,8 (fond), 14,3 (carte) ; gris secondaire 7,1 / 6,5 / 6,1 ; vert éclairci #8FC2A8 9,2 / 8,3 / 7,9 ; crème sur panneau vert 9,0 dans les deux thèmes. Contour du bouton thème : 1,4 (clair) et 2,1 (sombre), sous 3:1 mais l’icône (16,9 et 15,8) suffit à repérer le bouton. Bouton atteint au clavier (Tab), focus visible, bascule à l’Espace ; pas de rotation de l’icône avec « réduire les animations » | ✅ | |

## 2. Sobriété et performance

| # | Critère | Pourquoi dans mon cas | Comment je vérifie | Résultat | Correction |

|---|---|---|---|---|---|

| P1 | Score Lighthouse Performance ≥ 90 sur mobile | Objectif fixé pour le projet | Lighthouse en navigation privée, mobile, sur l'accueil, une page projet et la galerie | ⬜ | |

| P2 | JavaScript limité aux îlots utiles | Astro n'envoie pas de JS par défaut ; seuls la pile de photos, les filtres et le formulaire en ont besoin | Onglet Réseau : poids et nombre de fichiers JS par page | ⬜ |
 |
| P3 | Images en AVIF/WebP, dimensionnées, avec `srcset` et `loading="lazy"` sous la ligne de flottaison | La galerie et les pages projet sont les pages les plus lourdes | Composant `<Image>` d'Astro + Lighthouse (« Properly size images ») | ⬜ | |

| P4 | Pas de décalage de mise en page (CLS < 0,1) | Images et polaroids chargés tardivement | `width` et `height` sur toutes les images ; Lighthouse | ⬜ | |

| P5 | Polices auto-hébergées en WOFF2, sous-ensemble latin, `font-display: swap`, graisses limitées | Quatre familles : League Spartan, DM Sans, Geist Mono, et Caveat Bold seulement (sous-ensemble latin, 50 Ko) pour la note manuscrite de l'accueil, téléchargée uniquement en desktop car la note est masquée sous 1280 px | Onglet Réseau : nombre et poids des fichiers de police | ⬜ | |

| P6 | La grille de fond ne coûte rien | Composant « Fond/Trame » | Vérifier qu'elle est faite en CSS, sans image | ⬜ | |

| P7 | Compression et cache côté serveur | Hébergement sur VPS : c'est à moi de le configurer | En-têtes `content-encoding` (gzip ou brotli) et `cache-control` dans l'onglet Réseau | ⬜ | |

| P8 | Poids et nombre de requêtes par page | Mesure de sobriété | EcoIndex / GreenIT-Analysis sur chaque type de page | ⬜ | |

## 3. Référencement

| # | Critère | Pourquoi dans mon cas | Comment je vérifie | Résultat | Correction |

|---|---|---|---|---|---|

| R0 | Étape de recherche : requêtes visées | Savoir sur quoi je veux être trouvé : mon nom, « designer UI/UX Montbéliard », « stage UI/UX Doubs »… | Recherche de mots-clés, analyse des portfolios concurrents ; résultat consigné ici | ⬜ | |

| R1 | `title` et `meta description` uniques sur chaque page | Huit pages + une page par projet | Inspection du `<head>` de chaque page | ⬜ | |

| R2 | URL lisibles pour les projets | Routes dynamiques `/projets/[slug]` | Exemple : `/projets/opensigne` | ⬜ | |

| R3 | `sitemap.xml` et `robots.txt` | Indexation par les moteurs | `@astrojs/sitemap`, test dans la Search Console | ⬜ | |
| R4 | URL canonique et nom de domaine unique | Éviter le doublon entre l'adresse du VPS et mon domaine | Balise `link rel="canonical"`, redirection HTTP → HTTPS et www → sans www | ⬜ | |

| R5 | Données structurées `Person` (JSON-LD) | Aider les moteurs à relier mon nom, mon métier et mes réseaux | Test des résultats enrichis de Google | ⬜ | |

| R6 | Aperçu de partage (Open Graph) | Les recruteurs partagent des liens par message | Image et titre de partage vérifiés avec un outil de prévisualisation | ⬜ | |

| R7 | Page 404 personnalisée | Les liens cassés ne doivent pas faire perdre le visiteur | Visite d'une URL inexistante | ⬜ | |

| R8 | Score Lighthouse SEO | Indicateur global | Lighthouse | ⬜ | |

## 4. Conformité juridique

| # | Critère | Pourquoi dans mon cas | Comment je vérifie | Résultat | Correction |

|---|---|---|---|---|---|

| J1 | Mentions légales complètes (éditeur, hébergeur) | Obligation de la loi pour la confiance dans l'économie numérique (LCEN) | La maquette indique encore une adresse Netlify : à remplacer par mon domaine et l'hébergeur du VPS | ❌ | À corriger |

| J2 | Information RGPD sous le formulaire | Le formulaire collecte un nom et une adresse e-mail stockés dans PocketBase | Texte court : finalité, durée de conservation, droits d'accès et de suppression, contact | ⬜ | |

| J3 | Données réduites au strict nécessaire et protégées | PocketBase sur mon VPS | Champs minimum, HTTPS, accès administrateur protégé, suppression des messages après la durée annoncée | ⬜ | |

| J4 | Cookies : bandeau seulement si nécessaire | Les mentions actuelles disent « peut utiliser des cookies » sans préciser | Inventaire réel des cookies dans les DevTools ; adapter le texte et ne pas mettre de bandeau si aucun cookie soumis à consentement | ⬜ | |

| J5 | Licences des polices et bibliothèques déclarées | Polices sous licence SIL OFL ; Astro, Tailwind CSS, daisyUI | Fichier de crédits dans le dépôt et mention dans les mentions légales | ⬜ | |

| J6 | Droits sur les contenus montrés | Projets collectifs ou académiques, photos et visuels de patrimoine dans les affiches | Créditer les co-auteurs et les sources des images | ⬜ | |

| J7 | Droit à l'image | Photos de la pile de polaroids et photo en situation | Accord des personnes visibles | ⬜ | |

| J8 | Déclaration d'usage de l'IA | Exigence du projet | `IA.md` à la racine du dépôt + page « Ma façon de travailler avec l'IA » | 🟨 | |