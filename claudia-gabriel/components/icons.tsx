type IconProps = { color?: string };

const base = {
  "aria-hidden": true,
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CheckIcon({ color = "#516d75" }: IconProps) {
  return (
    <svg {...base} stroke={color} strokeWidth={1.8}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function WhatsappIcon({ color = "#dfe6da" }: IconProps) {
  return (
    <svg {...base} stroke={color} strokeWidth={1.5}>
      <path d="M4 20l1.4-4.2A8 8 0 1 1 8.3 18.7z" />
    </svg>
  );
}

// Ícones dos cards de "Dores" (traço fino, herdam a cor do texto)
export function HeartIcon() {
  return (
    <svg {...base} stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" />
    </svg>
  );
}

export function ChatDotsIcon() {
  return (
    <svg {...base} stroke="currentColor" strokeWidth={1.5}>
      <path d="M20 12a7.5 7.5 0 0 1-11 6.6L4 20l1.4-4.4A7.5 7.5 0 1 1 20 12z" />
      <path d="M9 12h.01M12.5 12h.01M16 12h.01" strokeWidth={2.2} />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg {...base} stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function ChatOffIcon() {
  return (
    <svg {...base} stroke="currentColor" strokeWidth={1.5}>
      <path d="M8.3 5.5A7.5 7.5 0 0 1 19 15.6M17 18a7.5 7.5 0 0 1-8 .6L4 20l1.4-4.4A7.5 7.5 0 0 1 6 7" />
      <path d="M3.5 3.5l17 17" />
    </svg>
  );
}

export function EyeOffIcon() {
  return (
    <svg {...base} stroke="currentColor" strokeWidth={1.5}>
      <path d="M9.9 5.2A9.6 9.6 0 0 1 12 5c5.5 0 9 7 9 7a16 16 0 0 1-2.6 3.4M14.1 14.2A3 3 0 0 1 9.8 9.9M6.6 6.6C4.2 8.2 3 12 3 12s3.5 7 9 7a9 9 0 0 0 5.4-1.6" />
      <path d="M3.5 3.5l17 17" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg {...base} stroke="currentColor" strokeWidth={1.6}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" strokeWidth={2.4} />
    </svg>
  );
}

export function MicIcon() {
  return (
    <svg {...base} stroke="currentColor" strokeWidth={1.6}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg {...base} stroke="currentColor" strokeWidth={1.6}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.4-3.5-8.5s1-5.9 3.5-8.5z" />
    </svg>
  );
}

// Câmera de videochamada (atendimento online/presencial)
export function VideoCallIcon({ color = "currentColor" }: IconProps) {
  return (
    <svg {...base} width={18} height={18} stroke={color} strokeWidth={1.6}>
      <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
      <path d="M15.5 10.5l5-3v9l-5-3z" />
    </svg>
  );
}

// Logo oficial do WhatsApp (preenchido), herda a cor do texto
export function WhatsappLogo() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43zm8.03-17.47A11.29 11.29 0 0 0 12.05.7C5.8.7.7 5.79.7 12.04c0 2 .52 3.95 1.52 5.67L.6 23.6l6.03-1.58a11.32 11.32 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.35-11.34 0-3.03-1.18-5.88-3.33-8.03z" />
    </svg>
  );
}

export function MailIcon({ color = "#dfe6da" }: IconProps) {
  return (
    <svg {...base} stroke={color} strokeWidth={1.5}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function PinIcon({ color = "#dfe6da" }: IconProps) {
  return (
    <svg {...base} stroke={color} strokeWidth={1.5}>
      <path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </svg>
  );
}
