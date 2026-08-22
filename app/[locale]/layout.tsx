import type { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/fontawesome.css";
import "../../styles/themify-icons.css";
import "../../styles/animate.css";
import "../../styles/cursor.css";
import "../../styles/custom-font.css";
import "../../styles/main.css";
import "../../styles/xb-project-cards.css";
import "../../styles/rtl.css";
import "../../styles/mobile-app-shell.css";
import { SITE_URL, SITE_NAME } from "@/lib/seo";


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Golden Code | Web & Mobile App Development and Professional Design",
  description:
    "Golden Code is a Cairo-based software team building websites, mobile apps, and e-commerce stores with premium quality and full support.",
  icons: {
    icon: "/favIcon.ico",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Inter:ital,wght@0,100..900;1,100..900&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
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
