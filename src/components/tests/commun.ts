// TESTS — outils partagés par les écrans de chargement (pages /chargement1, /chargement2, /chargement3).
// À supprimer avec ces pages une fois la variante choisie.

/** Courbe « ease-sortie » de la charte motion */
export const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

/** L'utilisateur a demandé moins d'animations dans son système : on n'affiche pas l'écran de chargement */
export const reduit = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Met l'écran de chargement au premier plan, page remontée en haut et défilement bloqué */
export function preparer(ecran: HTMLElement) {
  document.body.appendChild(ecran);
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  const html = document.documentElement;
  const avant = html.style.overflow;
  html.style.overflow = 'hidden';
  return () => {
    html.style.overflow = avant;
  };
}

/**
 * Éléments du panneau vert à faire apparaître un par un après le chargement
 * (titre, textes, boutons, images…), sans prendre deux fois un élément et son parent.
 */
export function unitesAReveler(): HTMLElement[] {
  const racine = document.getElementById('contenu');
  if (!racine) return [];
  const candidats = Array.from(
    racine.querySelectorAll<HTMLElement>('h1, h2, p, dl, ul, a, img, figure, [data-revele]'),
  ).filter((el) => !el.closest('[data-chargement]'));
  const ensemble = new Set(candidats);
  return candidats.filter((el) => {
    for (let p = el.parentElement; p && p !== racine; p = p.parentElement) if (ensemble.has(p)) return false;
    return true;
  });
}

export function masquer(unites: HTMLElement[]) {
  for (const u of unites) u.style.opacity = '0';
}

/** Apparition en cascade : fondu + petite montée, 70 ms d'écart entre deux éléments */
export function reveler(unites: HTMLElement[], ecart = 70) {
  unites.forEach((u, i) => {
    u.animate(
      [
        { opacity: 0, transform: 'translateY(14px)' },
        { opacity: 1, transform: 'none' },
      ],
      { duration: 450, delay: i * ecart, easing: EASE, fill: 'backwards' },
    );
    u.style.opacity = '';
  });
}

/**
 * Progression de 0 à 100 : elle dure au moins `minimum` ms (pour que l'animation se voie)
 * et ne dépasse pas 92 tant que la page (images, polices) n'a pas fini de charger.
 */
export function progression(minimum: number, surChaqueImage: (p: number) => void = () => {}): Promise<void> {
  return new Promise((fin) => {
    let charge = document.readyState === 'complete';
    if (!charge) window.addEventListener('load', () => (charge = true), { once: true });
    const debut = performance.now();
    const image = (t: number) => {
      const x = Math.min(1, (t - debut) / minimum);
      let p = (1 - Math.pow(1 - x, 3)) * 100;
      if (!charge) p = Math.min(p, 92);
      surChaqueImage(p);
      if (x >= 1 && charge) {
        surChaqueImage(100);
        fin();
      } else requestAnimationFrame(image);
    };
    requestAnimationFrame(image);
  });
}

/**
 * Rotation en boucle (le « WM » qui tourne comme un spinner).
 * `arreter()` laisse finir le tour en cours pour que les lettres s'arrêtent bien droites.
 */
export function tourner(el: Element, dureeTour = 1100) {
  const anim = el.animate([{ rotate: '0deg' }, { rotate: '360deg' }], {
    duration: dureeTour,
    iterations: Infinity,
    easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
  });
  return {
    arreter: () =>
      new Promise<void>((fin) => {
        const t = Number(anim.currentTime ?? 0);
        const reste = dureeTour - (t % dureeTour);
        setTimeout(() => {
          anim.cancel();
          fin();
        }, reste);
      }),
  };
}

export const attendre = (ms: number) => new Promise((r) => setTimeout(r, ms));
