import { notFound } from 'next/navigation';

// Qualsevol camí desconegut dins d'un idioma mostra el 404 d'aquell idioma.
export default function CatchAll() {
  notFound();
}
