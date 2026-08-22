import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import type { ReactNode } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta.Pricing' });
  return buildMetadata({
    locale,
    path: '/pricing',
    title: t('title'),
    description: t('description'),
  });
}

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
