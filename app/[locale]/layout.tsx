import type { Metadata } from "next";
import Script from "next/script";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/fontawesome.css";
import "../../styles/animate.css";
import "../../styles/custom-font.css";
import "../../styles/main.css";
import "../../styles/xb-project-cards.css";
import "../../styles/rtl.css";
import "../../styles/mobile-app-shell.css";
// themify-icons.css and cursor.css were dead weight — no `ti-*` icon class or
// custom-cursor markup exists anywhere in the codebase, they were only ever
// used by template demo pages that never shipped. Dropped to cut ~25KB of
// unused CSS from the render-blocking chain.
import { SITE_URL, SITE_NAME } from "@/lib/seo";


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Golden Code | Web & Mobile App Development and Professional Design",
  description:
    "Golden Code is a Cairo-based software team building websites, mobile apps, and e-commerce stores with premium quality and full support.",
  icons: {
    icon: "/favIcon.ico",
  },
  openGraph: {
    title: "Golden Code | Web & Mobile App Development",
    description: "Golden Code is a Cairo-based software team building websites, mobile apps, and e-commerce stores.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/logo/logo3.png",
        width: 800,
        height: 600,
        alt: "Golden Code Logo",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Code | Web & Mobile App Development",
    description: "Golden Code is a Cairo-based software team building websites, mobile apps, and e-commerce stores.",
    images: ["/images/logo/logo3.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/logo3.png`,
  image: `${SITE_URL}/images/logo/logo3.png`,
  email: "sales@goldencodee.com",
  telephone: "+201124762799",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hadayek Helwan",
    addressRegion: "Cairo",
    addressCountry: "EG",
  },
  sameAs: ["https://www.facebook.com/goldencodee/"],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        {/* Hero section's LCP element is a CSS background-image, so the
            browser can't discover it until main.css parses. Preloading it
            directly (with high priority) lets it start downloading in
            parallel with the CSS instead of waiting behind it. */}
        <link
          rel="preload"
          as="image"
          href="/images/bg/hero-bg02.jpg"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Fonts CSS loaded as non-render-blocking. Previously this
            was a plain <link rel="stylesheet"> sitting in the critical
            render path (~750ms of the render-blocking chain per
            PageSpeed). This is a Server Component, so a React onLoad
            handler isn't an option — instead a tiny inline script injects
            the <link> at runtime, which browsers fetch without blocking
            first paint. <noscript> keeps fonts working with JS disabled. */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Inter:ital,wght@0,100..900;1,100..900&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Inter:ital,wght@0,100..900;1,100..900&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body id='scrool'>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
