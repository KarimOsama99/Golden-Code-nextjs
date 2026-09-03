import React, { Fragment } from 'react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/hero';
import PartnerSection from '@/components/PartnerSection';
import About from '@/components/about/about';
import ServiceSection from '@/components/ServiceSection/ServiceSection';
import ProjectSection from '@/components/ProjectSection/ProjectSection';
import WorkProcess from '@/components/WorkProcess/WorkProcess';
import IndustrieSection from '@/components/IndustrieSection/IndustrieSection';
import Testimonial from '@/components/Testimonial/Testimonial';
import FeaturesSection from '@/components/FeaturesSection/FeaturesSection';
import ScrollTextReveal from '@/components/ScrollTextReveal/ScrollTextReveal';
import FaqSection from '@/components/FaqSection/FaqSection';
import CtaSection from '@/components/CtaSection/CtaSection';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta.Home' });
  return buildMetadata({
    locale,
    path: '/',
    title: t('title'),
    description: t('description'),
  });
}


const HomePage = () => {
    // trigger refresh

    return (
        <Fragment>
            <div className='body_wrap sco_agency' style={{ position: 'relative' }}>
                <Header />
                <main className="page_content" style={{ position: 'relative' }}>
                    <Hero />
                    <PartnerSection />
                    <About />
                    <ServiceSection />
                    <ProjectSection />
                    <WorkProcess />
                    <IndustrieSection />
                    <Testimonial />
                    <FeaturesSection />
                    <ScrollTextReveal variant="Home" />
                    <FaqSection limit={5} />
                    <CtaSection />  
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;