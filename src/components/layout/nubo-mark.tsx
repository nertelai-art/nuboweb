/**
 * La N de Nubo tal com és: retallada del PNG oficial del logo (1794×566), sense
 * redibuixar res. `alt` buit si és decorativa; amb `title`, és una imatge.
 */
export function NuboMark({ className, title }: { className?: string; title?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- PNG petit i fix; next/image no hi aporta res i obliga a donar mides.
    <img
      src="/brand/nubo-n.png"
      alt={title ?? ''}
      aria-hidden={title ? undefined : true}
      width={578}
      height={566}
      className={className}
    />
  );
}
