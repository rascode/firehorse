# Image field (forms)

One image for a record: a person's photo, an org's logo, a goal's icon. Held until Helm makes IMF live; its specimen
reads this file. CSS: `src/components/forms/image-field.css`. Script: `src/js/image-field.js`
(`@rascode/firehorse/image-field`). React: `ImageField` in `@rascode/firehorse-react`.

### IMF · Image field

Use it to edit a single image (the `image` field type's form variant, VAL-8.7). Several images stay on the dropzone
(UPL, VAL-8.6). It is built from existing parts only: the avatar (AVT) for the preview, the mode toggle (SEG-2.2)
for the panes, the compact dropzone (UPL-2), the field and its error line (FLD), buttons (BTN) and chips (CHP) for
the tone. It adds no colour, radius or shadow of its own.

```html
<div class="fh-image-field" data-kind="person" data-size="xl">
  <div class="fh-image-field__layout">
    <div class="fh-image-field__preview"><span class="fh-avatar fh-avatar--xl" data-kind="person">AM</span></div>
    <div class="fh-image-field__main">
      <div class="fh-segment fh-segment--mode fh-image-field__modes" role="group" aria-label="Photo source">
        <button type="button" data-pane="upload" aria-pressed="true">Upload</button>
        <button type="button" data-pane="url" aria-pressed="false">From a URL</button>
      </div>
      <div class="fh-image-field__panes">
        <div class="fh-image-field__pane" data-pane="upload">
          <label class="fh-dropzone fh-dropzone--compact" data-tone="sky"><input type="file" accept="image/*"><span class="fh-dropzone__title">Drop, paste or browse</span><span class="fh-dropzone__hint">PNG, JPG, WebP, GIF or SVG · up to 10 MB</span></label>
        </div>
        <div class="fh-image-field__pane" data-pane="url" data-state="idle" hidden>
          <div class="fh-field"><label for="photo-url">Image address</label>
            <div class="fh-image-field__url"><input class="fh-input" id="photo-url" type="url" placeholder="https://"><button class="fh-button fh-button--secondary" type="button" data-fetch>Fetch</button></div>
            <p class="fh-image-field__status" role="status"><span class="fh-spinner" aria-hidden="true"></span>Fetching the image</p>
            <p class="fh-field__error"></p>
            <p class="fh-image-field__fetched"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="fh-image-field__foot"><button class="fh-button" type="button">Save</button><button class="fh-button fh-button--ghost" type="button" data-tone="danger" data-remove>Remove</button></div>
</div>
```

- Shape: `data-kind` on the field and the avatar. Person is a circle; org, agent, record and goal are rounded squares.
  Size: `fh-avatar--sm|md|lg|xl` on the preview (and `data-size` on the field). No image: the initials.
- URL pane states, by `data-state` on the pane: `idle`, `loading` (the status line), `error` (the field error line and
  a danger border; put the message in `fh-field__error`), `ready` (the fetched preview line). The host sets them.
- Icon pane: only with `data-icons` on the field. A third mode button (`data-pane="icon"`), a search input with
  `data-icon-search`, `fh-image-field__icons` (ghost icon buttons with `data-icon` and `aria-pressed`, names from
  `src/icons/icons.json`) and `fh-image-field__tones` (chips with `data-tone` and `aria-pressed`, the ten tones).
- Inherited value: `<p class="fh-image-field__source fh-field__hint">From Ava's photo <button class="fh-button fh-button--ghost fh-button--sm" type="button" data-reset>Reset</button></p>`.
- A field-wide error: a `fh-field__error` directly in the field shows at once.
- Narrow (the field under 26rem, a 375 page): the preview sits above the panes, the icon grid wraps, nothing scrolls sideways.

Load `@rascode/firehorse/image-field` (`/image-field.js` on a page). It switches panes, takes a drop, a paste or a
browse into the dropzone (an image of up to 10 MB, else `data-invalid` on the dropzone), previews it from an object
URL, filters the icon grid and paints the chosen icon and tone, and dispatches `fh-image-field:change` (bubbling)
with `{ kind: "file"|"url"|"icon"|"remove"|"reset", file?, url?, icon?, tone? }`. Fetch does not request the
address: it dispatches `kind: "url"` and the host fetches and sets the pane state. Exports: `initImageField(field)`
(for a field added later), `setImageFieldPane(field, pane)`.

React: `<ImageField kind value inherited icons onChange onFetchUrl size error />`. `value` is
`{ image?, icon?, tone?, initials, label }`; `inherited` is `{ name }`; `icons` is a list of icon names (no list, no
Icon pane); `onFetchUrl(url)` returns a promise of `{ image } | { error }` and the component sets the pane state.
