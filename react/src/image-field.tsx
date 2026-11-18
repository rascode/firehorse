/**
 * Firehorse ImageField — one image (IMF): a preview in the avatar part, then
 * Upload, From a URL and (with icons) Icon. Style from @rascode/firehorse
 * image-field.css; the same markup as the plain script (dist/image-field.js),
 * with the behaviour held in React state instead.
 *
 *   <ImageField kind="person" size="2xl" value={{ image, initials: "AM", label: "Ava Moreno" }}
 *     onChange={(change) => save(change)} onFetchUrl={(url) => api.fetchImage(url)} />
 *
 * Fetching a URL is the host's job: onFetchUrl(url) resolves { image } or { error }.
 */
import * as React from "react";

type Tone = "sky" | "teal" | "lime" | "amber" | "orange" | "accent" | "rose" | "fuchsia" | "violet" | "neutral";
const cx = (...c: Array<string | false | undefined | null>) => c.filter(Boolean).join(" ");

const TONES: Tone[] = ["neutral", "accent", "lime", "sky", "amber", "rose", "teal", "violet", "fuchsia", "orange"];
const MAX = 10 * 1024 * 1024;

export type ImageFieldKind = "person" | "org" | "agent" | "record" | "goal";
export type ImageFieldValue = { image?: string; icon?: string; tone?: Tone; initials: string; label: string };
export type ImageFieldChange = {
  kind: "file" | "url" | "icon" | "remove" | "reset";
  file?: File;
  url?: string;
  icon?: string;
  tone?: Tone;
};
export type ImageFieldProps = {
  kind?: ImageFieldKind;
  value: ImageFieldValue;
  /** The value comes from another record: shows "From <name>'s photo" and Reset. */
  inherited?: { name: string };
  /** Icon names for the Icon pane (from @rascode/firehorse icons.json). No list, no Icon pane. */
  icons?: string[];
  onChange?: (change: ImageFieldChange) => void;
  onFetchUrl?: (url: string) => Promise<{ image: string } | { error: string }>;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  /** An error for the field as a whole, in the field error style. */
  error?: string;
  className?: string;
  id?: string;
};

type Pane = "upload" | "url" | "icon";
type UrlState = { state: "idle" } | { state: "loading" } | { state: "error"; message: string } | { state: "ready"; image: string };

export function ImageField({ kind = "person", value, inherited, icons, onChange, onFetchUrl, size = "lg", error, className, id }: ImageFieldProps) {
  const auto = React.useId();
  const base = id ?? `fh-imf-${auto.replace(/:/g, "")}`;
  const [pane, setPane] = React.useState<Pane>(value.icon && icons ? "icon" : "upload");
  const [preview, setPreview] = React.useState<{ image?: string; icon?: string; tone?: Tone }>({ image: value.image, icon: value.icon, tone: value.tone });
  const [invalid, setInvalid] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const [urlState, setUrlState] = React.useState<UrlState>({ state: "idle" });
  const [query, setQuery] = React.useState("");
  const objectUrl = React.useRef<string | null>(null);

  React.useEffect(() => setPreview({ image: value.image, icon: value.icon, tone: value.tone }), [value.image, value.icon, value.tone]);
  React.useEffect(() => () => { if (objectUrl.current) URL.revokeObjectURL(objectUrl.current); }, []);

  const takeFile = (file?: File | null) => {
    if (!file) return;
    const ok = file.type.startsWith("image/") && file.size <= MAX;
    setInvalid(!ok);
    if (!ok) return;
    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    objectUrl.current = URL.createObjectURL(file);
    setPreview({ image: objectUrl.current });
    onChange?.({ kind: "file", file });
  };

  const fetchUrl = async () => {
    onChange?.({ kind: "url", url });
    if (!onFetchUrl) return;
    setUrlState({ state: "loading" });
    const out = await onFetchUrl(url);
    if ("error" in out) setUrlState({ state: "error", message: out.error });
    else { setUrlState({ state: "ready", image: out.image }); setPreview({ image: out.image }); }
  };

  const pickIcon = (icon: string, tone = preview.tone) => {
    setPreview({ icon, tone });
    onChange?.({ kind: "icon", icon, tone });
  };

  const pickTone = (tone: Tone) => {
    if (preview.icon) pickIcon(preview.icon, tone);
    else setPreview((p) => ({ ...p, tone }));
  };

  const q = query.trim().toLowerCase();
  const panes: Array<[Pane, string]> = [["upload", "Upload"], ["url", "From a URL"], ...(icons ? [["icon", "Icon"] as [Pane, string]] : [])];

  return (
    <div data-fh="IMF" className={cx("fh-image-field", className)} data-kind={kind} data-size={size} data-icons={icons ? "" : undefined} id={id}
      onPaste={(event) => {
        const file = [...event.clipboardData.files].find((f) => f.type.startsWith("image/"));
        if (file) { event.preventDefault(); takeFile(file); }
      }}>
      <div className="fh-image-field__layout">
        <div className="fh-image-field__preview">
          <span className={cx("fh-avatar", `fh-avatar--${size}`)} data-kind={kind} data-tone={preview.tone}>
            {preview.image ? <img src={preview.image} alt="" /> : preview.icon ? <i className={cx("fh-icon", `fh-icon--${preview.icon}`)} aria-hidden="true" /> : value.initials}
          </span>
        </div>
        <div className="fh-image-field__main">
          <div className="fh-segment fh-segment--mode fh-image-field__modes" role="group" aria-label={`${value.label}: image source`}>
            {panes.map(([key, label]) => (
              <button key={key} type="button" data-pane={key} aria-pressed={pane === key} onClick={() => setPane(key)}>{label}</button>
            ))}
          </div>
          <div className="fh-image-field__panes">
            <div className="fh-image-field__pane" data-pane="upload" hidden={pane !== "upload"}>
              <label className="fh-dropzone fh-dropzone--compact" data-tone="sky" data-invalid={invalid ? "" : undefined} data-dragging={dragging ? "" : undefined}
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => { e.preventDefault(); setDragging(false); takeFile(e.dataTransfer.files?.[0]); }}>
                <input type="file" accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml" onChange={(e) => takeFile(e.target.files?.[0])} />
                <span className="fh-dropzone__title">Drop, paste or browse</span>
                <span className="fh-dropzone__hint">PNG, JPG, WebP, GIF or SVG · up to 10 MB</span>
                {invalid && <p className="fh-dropzone__error">Use an image of up to 10 MB.</p>}
              </label>
            </div>
            <div className="fh-image-field__pane" data-pane="url" data-state={urlState.state} hidden={pane !== "url"}>
              <div className="fh-field">
                <label htmlFor={`${base}-url`}>Image address</label>
                <div className="fh-image-field__url">
                  <input className="fh-input" id={`${base}-url`} type="url" inputMode="url" placeholder="https://" pattern="https://.*" value={url}
                    aria-invalid={urlState.state === "error" ? true : undefined} onChange={(e) => setUrl(e.target.value)} />
                  <button className="fh-button fh-button--secondary" type="button" data-fetch disabled={!url || urlState.state === "loading"} onClick={fetchUrl}>Fetch</button>
                </div>
                <p className="fh-image-field__status" role="status"><span className="fh-spinner" aria-hidden="true" />Fetching the image</p>
                <p className="fh-field__error">{urlState.state === "error" ? urlState.message : ""}</p>
                <p className="fh-image-field__fetched">{urlState.state === "ready" && <><span className={cx("fh-avatar", "fh-avatar--sm")} data-kind={kind}><img src={urlState.image} alt="" /></span>Fetched. Save to use it.</>}</p>
              </div>
            </div>
            {icons && (
              <div className="fh-image-field__pane" data-pane="icon" hidden={pane !== "icon"}>
                <div className="fh-field">
                  <label htmlFor={`${base}-icon`}>Icon</label>
                  <input className="fh-input" id={`${base}-icon`} type="search" placeholder="Search icons" data-icon-search value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
                <div className="fh-image-field__icons" role="group" aria-label="Icons">
                  {icons.map((name) => (
                    <button key={name} type="button" className="fh-button fh-button--ghost fh-button--icon fh-button--sm" data-icon={name} aria-label={name} title={name}
                      aria-pressed={preview.icon === name} hidden={q.length > 0 && !name.includes(q)} onClick={() => pickIcon(name)}>
                      <i className={cx("fh-icon", `fh-icon--${name}`)} aria-hidden="true" />
                    </button>
                  ))}
                </div>
                <div className="fh-image-field__tones" role="group" aria-label="Tone">
                  {TONES.map((tone) => (
                    <button key={tone} type="button" className="fh-chip fh-chip--sm" data-tone={tone} aria-pressed={preview.tone === tone} onClick={() => pickTone(tone)}>{tone}</button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {inherited && (
        <p className="fh-image-field__source fh-field__hint">From {inherited.name}'s photo
          <button className="fh-button fh-button--ghost fh-button--sm" type="button" data-reset onClick={() => onChange?.({ kind: "reset" })}>Reset</button>
        </p>
      )}
      {error && <p className="fh-field__error" role="alert">{error}</p>}
      <div className="fh-image-field__foot">
        <button className="fh-button" type="submit">Save</button>
        <button className="fh-button fh-button--ghost" type="button" data-tone="danger" data-remove onClick={() => { setPreview({}); onChange?.({ kind: "remove" }); }}>Remove</button>
      </div>
    </div>
  );
}
