/**
 * Sets up one .fh-fold once: adds .fh-fold--js (the clamp), gives the body an id,
 * adds a toggle when there is none, points its aria-controls at the body, measures
 * it and watches its width. Returns the fold.
 */
export function initFold<T extends Element | null | undefined>(fold: T): T;

/**
 * Measures the fold against its clamp (--fh-fold-lines). Text that fits gets
 * data-fits and a hidden toggle. Returns true when the text folds.
 */
export function measureFold(fold: Element): boolean;

/** Opens or closes a fold: data-open, aria-expanded and the toggle label. */
export function setFoldOpen(fold: Element, open: boolean): void;
