import React from "react";

type IconProps = { className?: string };

/** Long, thin arrow used in links and buttons. */
export function Arrow({ className = "h-2.5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M0 5h20M15.5 0.8 20 5l-4.5 4.2" />
    </svg>
  );
}

export function PlayGlyph({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
      <path d="M0 0v14l12-7z" />
    </svg>
  );
}

export function PauseGlyph({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
      <path d="M0 0h4v14H0zM8 0h4v14H8z" />
    </svg>
  );
}

/** Speaker with a slash or with sound waves, drawn as plain strokes. */
export function SoundGlyph({ muted, className = "h-4 w-4" }: IconProps & { muted: boolean }) {
  return (
    <svg className={className} viewBox="0 0 20 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M1 5.5h3.5L9 1.5v13l-4.5-4H1z" fill="currentColor" stroke="none" />
      {muted ? <path d="m13 5 6 6M19 5l-6 6" /> : <path d="M12.5 5.2a4 4 0 0 1 0 5.6M15.2 2.6a7.6 7.6 0 0 1 0 10.8" />}
    </svg>
  );
}

export function WhatsAppGlyph({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.04 3C8.9 3 3.1 8.78 3.1 15.9c0 2.27.6 4.5 1.73 6.45L3 29l6.83-1.79a12.9 12.9 0 0 0 6.2 1.58h.01c7.13 0 12.94-5.78 12.94-12.9C28.98 8.78 23.17 3 16.04 3Zm0 23.6h-.01a10.7 10.7 0 0 1-5.46-1.5l-.39-.23-4.05 1.06 1.08-3.94-.26-.4a10.6 10.6 0 0 1-1.64-5.7c0-5.92 4.82-10.73 10.74-10.73 5.92 0 10.74 4.81 10.74 10.72 0 5.92-4.82 10.72-10.75 10.72Zm5.89-8.03c-.32-.16-1.91-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.21-.37.24-.7.08-.32-.16-1.36-.5-2.59-1.6a9.7 9.7 0 0 1-1.79-2.22c-.19-.32-.02-.5.14-.65.15-.15.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.74-1-2.38-.26-.62-.52-.54-.72-.55h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.44 5.47 4.83.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function InstagramGlyph({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinGlyph({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96ZM3 9.75h3.96V21H3zM9.6 9.75h3.8v1.54h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.06V21h-3.96v-5.05c0-1.2-.02-2.76-1.68-2.76-1.69 0-1.95 1.32-1.95 2.67V21H9.6z" />
    </svg>
  );
}
