/** A change from the image field. Fetching a URL is the host's job. */
export type ImageFieldChange = {
  kind: "file" | "url" | "icon" | "remove" | "reset";
  file?: File;
  url?: string;
  icon?: string;
  tone?: string;
};

/**
 * Sets up one .fh-image-field once: pane switching, drop, paste and browse
 * into the dropzone, an object-URL preview, and icon search. Returns the field.
 */
export function initImageField<T extends Element | null | undefined>(root: T): T;

/** Shows one pane (upload, url or icon) and presses its Segmented button. */
export function setImageFieldPane(root: Element, pane: string): void;
