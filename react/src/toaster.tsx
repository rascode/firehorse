/**
 * Toaster for Firehorse toasts.
 * Radix runs the timer, the live region and the dismiss button.
 * Firehorse classes (fh-toaster, fh-toast) do every pixel.
 * `toast()` writes to a module store; `<Toaster />` renders it.
 */
import * as React from "react";
import { Toast as To } from "radix-ui";

const cx = (...c: Array<string | false | undefined | null>) => c.filter(Boolean).join(" ");

export type ToastTone = "neutral" | "success" | "danger";

export type ToastAction =
  | { label: string; href: string }
  | { label: string; onClick: (event: React.MouseEvent<HTMLButtonElement>) => void };

export type ToastOptions = {
  description?: React.ReactNode;
  tone?: ToastTone;
  action?: ToastAction;
  /** Milliseconds. Default 5000, or 8000 when the tone is danger. */
  duration?: number;
};

type ToastItem = {
  id: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone: ToastTone;
  action?: ToastAction;
  duration: number;
};

export type ToastProps = Omit<React.ComponentProps<typeof To.Root>, "title" | "type"> & {
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: ToastTone;
  action?: ToastAction;
  duration?: number;
};

const DEFAULT_MS = 5000;
const DANGER_MS = 8000;

function durationFor(tone: ToastTone, duration?: number) {
  if (duration != null) return duration;
  return tone === "danger" ? DANGER_MS : DEFAULT_MS;
}

let toasts: ToastItem[] = [];
const listeners = new Set<() => void>();
let nextId = 0;

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getToasts() {
  return toasts;
}

function dismiss(id: string) {
  const next = toasts.filter((item) => item.id !== id);
  if (next.length === toasts.length) return;
  toasts = next;
  emit();
}

function push(title: React.ReactNode, options: ToastOptions = {}) {
  const tone = options.tone ?? "neutral";
  const item: ToastItem = {
    id: `fh-toast-${++nextId}`,
    title,
    description: options.description,
    tone,
    action: options.action,
    duration: durationFor(tone, options.duration),
  };
  toasts = [...toasts, item];
  emit();
  return item.id;
}

type ToastFn = {
  (title: React.ReactNode, options?: ToastOptions): string;
  success: (title: React.ReactNode, options?: Omit<ToastOptions, "tone">) => string;
  error: (title: React.ReactNode, options?: Omit<ToastOptions, "tone">) => string;
  dismiss: (id: string) => void;
};

export const toast: ToastFn = Object.assign(
  (title: React.ReactNode, options?: ToastOptions) => push(title, options),
  {
    success: (title: React.ReactNode, options?: Omit<ToastOptions, "tone">) => push(title, { ...options, tone: "success" }),
    error: (title: React.ReactNode, options?: Omit<ToastOptions, "tone">) => push(title, { ...options, tone: "danger" }),
    dismiss,
  },
);

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

function ToastActionView({ action }: { action: ToastAction }) {
  if ("href" in action) {
    const external = isExternal(action.href);
    return (
      <To.Action asChild altText={action.label}>
        <a className="fh-link fh-toast__action" href={action.href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
          {action.label}
        </a>
      </To.Action>
    );
  }
  return (
    <To.Action className="fh-link fh-toast__action" altText={action.label} type="button" onClick={action.onClick}>
      {action.label}
    </To.Action>
  );
}

export function ToastProvider({ children, label = "Notifications" }: { children: React.ReactNode; label?: string }) {
  return (
    <To.Provider swipeDirection="right" label={label}>
      {children}
      <To.Viewport className="fh-toaster" label={label} />
    </To.Provider>
  );
}

export function Toast({ title, description, tone = "neutral", action, duration, className, ...p }: ToastProps) {
  const ms = durationFor(tone, duration);
  return (
    <To.Root
      data-fh="DLG"
      className={cx("fh-toast", className)}
      {...p}
      duration={ms}
      data-tone={tone}
      type={tone === "danger" ? "foreground" : "background"}
    >
      <div className="fh-toast__body">
        <To.Title asChild><p>{title}</p></To.Title>
        {description ? <To.Description asChild><p className="fh-toast__description">{description}</p></To.Description> : null}
        {action ? <ToastActionView action={action} /> : null}
      </div>
      <To.Close className="fh-close" aria-label="Dismiss" type="button" />
    </To.Root>
  );
}

/** Provider, viewport and the toasts raised with `toast()`. Mount one. */
export function Toaster({ label = "Notifications" }: { label?: string }) {
  const items = React.useSyncExternalStore(subscribe, getToasts, getToasts);
  return (
    <ToastProvider label={label}>
      {items.map((item) => (
        <Toast
          key={item.id}
          title={item.title}
          description={item.description}
          tone={item.tone}
          action={item.action}
          duration={item.duration}
          open
          onOpenChange={(open) => {
            if (!open) dismiss(item.id);
          }}
        />
      ))}
    </ToastProvider>
  );
}
