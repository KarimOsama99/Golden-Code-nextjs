'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/routing';
import {useTransition} from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function toggleLanguage() {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }

  return (
    <div className="language-switcher">
        <button 
            onClick={toggleLanguage} 
            disabled={isPending}
            className="lang-toggle-btn thm-btn thm-btn--aso thm-btn--aso_yellow"
            
        >
            {locale === 'en' ? 'Ar' : 'En'}
        </button>
    </div>
  );
}
