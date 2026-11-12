// Outils de l'écran de chargement « Les parenthèses » (composant EcranChargement.astro).

/** Courbe « ease-sortie » de la charte motion */
export const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

/** Met l'écran de chargement au premier plan, page remontée en haut et défilement bloqué */
export function preparer() {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  const html = document.documentElement;
  const avant = html.style.overflow;
  html.style.overflow = 'hidden';
  return () => {
    html.style.overflow = avant;
    if ('scrollRestoration' in history) history.scrollRestoration = 'auto';
  };
}

/**
 * Éléments du panneau vert à faire apparaître un par un après le chargement
 * (titre, textes, boutons, images…), sans prendre deux fois un élément et son parent.
 */
export function unitesAReveler(): HTMLElement[] {
  const racine = document.getElementById('contenu');
  if (!racine) return [];
  const candidats = Array.from(racine.querySelectorAll<HTMLElement>('h1, h2, p, dl, ul, a, img, figure'));
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
 * Attend la fin du chargement : au moins `minimum` ms (pour que l'animation se voie)
 * et jusqu'à ce que la page (images, polices) ait fini de charger.
 */
export function finDuChargement(minimum: number): Promise<void> {
  const page =
    document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise<void>((fin) => window.addEventListener('load', () => fin(), { once: true }));
  return Promise.all([page, attendre(minimum)]).then(() => undefined);
}

/**
 * Rotation en boucle (le « WM » qui tourne comme un indicateur de chargement).
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
