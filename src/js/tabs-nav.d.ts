/**
 * Centres the nav's [aria-current="page"] link by setting the nav's scrollLeft,
 * when that link is not fully inside the nav's visible width. No animation; the
 * page never scrolls. Returns true when scrollLeft was set.
 */
export function revealCurrentTab(nav: Element | null | undefined): boolean;
