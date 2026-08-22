import { redirect } from '@/i18n/routing';

// This route used to duplicate the real homepage (`/[locale]`) byte-for-byte —
// a duplicate-content SEO issue, and nothing on the site links here internally.
// Redirect it to the canonical homepage instead of rendering a second copy.
export default async function HomeRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect({ href: '/', locale });
}
