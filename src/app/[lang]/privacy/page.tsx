import {
  LegalPage,
  legalMetadata,
  legalStaticParams,
  type LegalPageProps,
} from '@/components/legal/legal-page';

export const generateStaticParams = legalStaticParams;

export function generateMetadata(props: LegalPageProps) {
  return legalMetadata(props, 'privacy');
}

export default function Page(props: LegalPageProps) {
  return <LegalPage {...props} doc="privacy" />;
}
