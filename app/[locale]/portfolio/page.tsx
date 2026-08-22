import React, { Fragment, FC } from 'react';
import type { Metadata } from 'next';
import CaseStudySection from './CaseSection';
import Header from "@/components/header/Header";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import icon from '@/public/images/icon/eye-icon.svg';
import sImg1 from '@/public/images/vectors/portfolio.png';
import sImg2 from '@/public/images/shape/brd_shape.png';
import Image from 'next/image';
// import Projects from '@/api/project';
import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta.Portfolio' });
  return buildMetadata({
    locale,
    path: '/portfolio',
    title: t('title'),
    description: t('description'),
  });
}

interface CaseStudySingleProps {}

const CaseStudySingle: FC<CaseStudySingleProps> = () => {
  const t = useTranslations('PortfolioPage');
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <Header />
        <section
          className="page-title pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url('/images/bg/page_bg01.jpg')` }}
        >
          <div className="container">
            <div className="page-title-wrap sd-title-wrap">
              <div className="row mt-none-30 align-items-center">
                <div className="col-lg-8 mt-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <Image src={icon} alt="" /> {t('subTitle')}
                    </span>
                    <h1 className="title">
                      <span dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
                    </h1>
                  </div>
                </div>
                <div className="col-lg-4 mt-30">
                  <div className="sd-right-img pos-rel">
                    <Image src={sImg1} alt="" />
                    <div className="sd-arrow-shape style-2">
                      <Image className="xbzoominzoomup" src={sImg2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CaseStudySection />
        <CtaSection />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default CaseStudySingle;
