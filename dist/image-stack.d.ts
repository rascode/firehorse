/** Wires every image stack on the page (delegated, so stacks added later work too). Runs on import. */
export function initImageStack(): void;
/** Opens the viewer (IMS-2.1) on one of a stack's images, 0-based. */
export function openImageViewer(stack: Element, index?: number): void;
/** Closes every stack opened by a tap, except the one given. */
export function closeImageStacks(except?: Element | null): void;
export default initImageStack;
