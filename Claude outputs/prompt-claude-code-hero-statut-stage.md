# Mission : nouveau statut « stage » dans le hero de l'accueil (variante F + H)

Des retours m'ont dit que deux éléments du hero de l'accueil faisaient « IA » : l'étiquette blanche « Je recherche un stage en design UI/UX » (avec le point pulsé) et la pastille ronde « Stage recherché ». Je les remplace par deux éléments plus personnels, validés dans la maquette Figma :

1. **un onglet crème découpé dans le bas du panneau vert**, qui donne les infos du stage ;
2. **une note écrite au crayon, « écrivez-moi ! », avec une flèche dessinée** qui pointe vers le bouton « Me proposer un stage ».

Avant de coder : lis `src/components/HeroAccueil.astro` et `src/components/HeaderPanneau.astro`, puis liste-moi les fichiers que tu vas modifier. Si tu as le MCP Figma, la référence est le fichier `IPiSIRm5odE7Um4VxBy9vS`, page **Nouvelle Maquette**, frame `641:1179` (« F+H · Onglet + note »), dans la section « Tests — statut stage (F + H) ». Si un point n'est pas clair (surtout en mobile), pose-moi la question avant d'inventer.

Un commit par étape, messages en français.

---

## Étape 1 · Retirer les anciens éléments (`HeroAccueil.astro`)

- Supprime le `<p>` blanc « Je recherche un stage en design UI/UX » (le badge avec le point pulsé `.onde`) et le CSS `.onde` / `@keyframes pulse` qui ne sert plus.
- Supprime le lien rond « Stage recherché » (`<a href="/contact" …>` en bas à droite).
- Supprime le tableau `<dl>` Durée / Période / Lieu : ses infos passent dans l'onglet (étape 2).
- Le titre `h1` devient le premier élément du hero. Ne change rien d'autre (titre, texte, boutons, pile de photos).

---

## Étape 2 · L'onglet crème en bas du panneau

Un petit onglet, de la **couleur du fond de page (crème)**, découpé dans le **bas du panneau vert**, aligné à gauche sur le texte du hero. C'est le négatif de l'onglet du menu : celui du haut est vert sur crème, celui du bas est crème sur vert.

**Mesures (desktop, ≥ 1024 px)**
- Position : collé au bord bas du panneau, avec le bord gauche du corps de l'onglet aligné sur le texte du hero (80 px à l'intérieur du panneau, comme le `lg:px-20`).
- Hauteur : **40 px**. Largeur : le texte + 20 px de chaque côté.
- Raccords : deux « oreilles » de 24 × 40 px, une de chaque côté, en courbe douce, exactement comme les oreilles de `.onglet` dans `HeaderPanneau.astro` mais retournées (l'onglet monte depuis le bas). Chemins de référence (24 × 40) :
  - oreille gauche : `M0 40 C12 40 12 0 24 0 V40 Z`
  - oreille droite : `M0 0 C12 0 12 40 24 40 H0 Z`
- Fond : `var(--color-creme)`.
- Texte : Geist Mono 12 px, capitales, interlettrage 8 %, couleur `var(--color-vert)`, sur une seule ligne. Contenu construit à partir de `site.stage` (pas en dur) :
  `Stage recherché · {site.stage.duree} · {site.stage.periode} · {site.stage.lieu}`
  (soit « STAGE RECHERCHÉ · 10 SEMAINES · MARS-JUIN · MONTBÉLIARD ET ALENTOURS »).
- Contraste vert sur crème : 9 : 1, OK.

**Implémentation**
- Mets-le dans `HeroAccueil.astro` (le contenu du panneau de l'accueil), en `position: absolute; bottom: 0`, avec le panneau `#contenu` comme référence (`relative` existe déjà).
- C'est du **vrai texte** (un `<p>`), lisible par les lecteurs d'écran.
- Le fond de page porte la grille (`.fond-trame`). Un onglet crème uni est acceptable (la grille est à 5 %). Si tu peux aligner la trame sur l'onglet proprement (même `background-image` et même `background-position` que le fond), fais-le, sinon garde le crème uni et dis-le-moi.
- Vérifie que l'onglet ne recouvre rien : le bloc des boutons doit garder au moins 40 px d'air au-dessus. La hauteur totale du bloc header + hero reste **676 px** en 1440 × 810.

**Mobile (< 1024 px)**
L'onglet est trop long pour un écran étroit. Pas de découpe : affiche la même phrase comme une simple ligne de texte sous les boutons (Geist Mono 12 px, capitales, crème à 80 %, retour à la ligne autorisé). Propose-moi autre chose si tu as mieux.

---

## Étape 3 · La note au crayon « écrivez-moi ! »

Une annotation manuscrite crème, posée **sous le bouton « Me proposer un stage »**, avec une flèche dessinée qui remonte vers le bouton, comme une note sur un brouillon.

**Police** : Caveat, graisse Bold (700), auto-hébergée comme les autres polices :
- installe `@fontsource/caveat` et importe **seulement** le poids 700 en sous-ensemble latin (`@fontsource/caveat/latin-700.css`), dans `global.css` à côté des autres `@import` ;
- ajoute `--font-note: 'Caveat', cursive;` dans `@theme` (utilitaire Tailwind `font-note`).

**Texte** : « écrivez-moi ! », Caveat Bold **30 px**, couleur crème, `rotate: -4deg`.

**Flèche** (SVG en ligne, 45 × 33, trait crème 2,2 px, extrémités arrondies) :

```html
<svg width="45" height="33" viewBox="0 0 45 33" fill="none" aria-hidden="true">
  <path d="M44.06 31.88C26.06 31.88 10.06 21.88 4.06 1.88M13.06 8.88L4.06 1.88L1.06 12.88"
        stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

**Position** (par rapport au bouton « Me proposer un stage », bouton = 224 × 44 px) :
- la flèche démarre ~48 px sous le haut du bouton, son coin gauche à ~122 px du bord gauche du bouton (la pointe touche presque le bas du bouton, vers son milieu) ;
- le texte est à droite de la queue de la flèche, ~77 px sous le haut du bouton et ~170 px du bord gauche du bouton.

Le plus simple : envelopper le bouton dans un conteneur `relative` et placer note + flèche en `absolute` dessous. Ça ne doit pas pousser le reste de la mise en page.

**Accessibilité** : la note et la flèche sont décoratives (le bouton dit déjà la même chose) → `aria-hidden="true"` sur le conteneur de la note.

**Mobile (< 1024 px)** : masque la note et la flèche (`hidden lg:block`).

**Bonus (facultatif)** : à l'arrivée, la flèche peut « se dessiner » (animation `stroke-dashoffset`, 500 ms, après l'apparition du hero), puis le texte apparaît en fondu. À couper avec `prefers-reduced-motion`.

---

## Étape 4 · Vérifications et documentation

1. Vérifie l'accueil en 1440 × 810 (on doit toujours voir le début de la section Compétences sous le panneau), en 1024 px et en 390 px.
2. Lighthouse sur l'accueil : dis-moi les scores avant et après (la police Caveat ajoute un fichier, il doit rester léger).
3. Navigation au clavier : l'onglet et la note ne doivent pas recevoir le focus ; le bouton « Me proposer un stage » garde son focus visible.
4. Mets à jour `QUALITE.md` si des critères changent (police supplémentaire, contraste de l'onglet), ajoute une entrée dans `JOURNAL.md` (retour « effet IA » sur le hero → variantes Figma → choix F + H) et une ligne dans `IA.md` (ce que tu as produit ; je compléterai ce que j'ai modifié ou rejeté).
5. Explique-moi en quelques lignes comment tu as construit l'onglet découpé (les oreilles et le positionnement), pour que je puisse le défendre devant le jury.
