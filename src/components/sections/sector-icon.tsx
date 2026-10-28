import type { IconName } from '@/content/sectors';

// Icones de traç, 24×24, dibuixades per a aquesta web.
const PATHS: Record<IconName, string> = {
  tooth:
    'M8 3c-2.5 0-4 2-4 4.5 0 3 1.5 4.5 2 7.5.4 2.6 1 6 2.5 6s1.6-3 2-5c.3-1.2.7-1.5 1.5-1.5s1.2.3 1.5 1.5c.4 2 .5 5 2 5s2.1-3.4 2.5-6c.5-3 2-4.5 2-7.5C20 5 18.5 3 16 3c-1.6 0-2.6 1-4 1S9.6 3 8 3Z',
  fork: 'M7 3v7a2 2 0 0 0 4 0V3M9 3v18M17 3c-2 1-3 3.5-3 7h3v11',
  house: 'M3 11 12 4l9 7M5 10v10h14V10M10 20v-6h4v6',
  car: 'M4 16v-4l2-5h12l2 5v4M4 16h16M4 16v2M20 16v2M7.5 13h.01M16.5 13h.01',
  briefcase: 'M4 8h16v11H4zM9 8V5h6v3M4 13h16',
  bed: 'M3 18v-8M3 14h18v4M21 18v-4a3 3 0 0 0-3-3h-7v3M6 12.5a1.5 1.5 0 1 0 0-.01',
  bag: 'M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2',
  wrench: 'M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5a4 4 0 0 0-2-2ZM6 18h.01',
  truck: 'M3 6h11v10H3zM14 9h4l3 3v4h-7M7 18.5a1.5 1.5 0 1 0 0-.01M17 18.5a1.5 1.5 0 1 0 0-.01',
  headset:
    'M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H5a1 1 0 0 1-1-1zM20 14h-3v5h2a1 1 0 0 0 1-1zM17 19a4 4 0 0 1-4 2h-1',
};

export function SectorIcon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
