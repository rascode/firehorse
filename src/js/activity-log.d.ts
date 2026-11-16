/** Wires every .fh-activity-log in root (or root itself), except those marked data-boot="off" (drawn by a framework). Runs on import; call again after entries change. */
export function boot(root?: Document | Element): Element[];
/** Shows every body in a log rendered ("rendered") or as typed ("plain"), and sets its switch to match. */
export function setLogRender(log: Element, mode: "rendered" | "plain"): void;
/** Markdown source to an HTML string. Every tag in the source is escaped first; links keep http(s), mailto and relative targets. */
export function renderMarkdown(source: string): string;
export default boot;
