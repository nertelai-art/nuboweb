import Image from 'next/image';

/**
 * El logo de Nubo Telecom en les dues versions: text fosc per al tema clar
 * (`nubo-telecom-dark.png`, el PNG oficial amb el blanc recolorit) i text
 * blanc per al fosc (l'original). El CSS ensenya la que toca.
 */
export function BrandLogo({
  className = 'h-8 w-auto',
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <>
      <Image
        src="/brand/nubo-telecom-dark.png"
        alt="Nubo Telecom"
        width={1794}
        height={566}
        priority={priority}
        className={`logo-dark ${className}`}
      />
      <Image
        src="/brand/nubo-telecom.png"
        alt="Nubo Telecom"
        width={1794}
        height={566}
        priority={priority}
        className={`logo-light ${className}`}
      />
    </>
  );
}
