'use client';

import React, { Fragment } from 'react';
import CountUp, { useCountUp } from 'react-countup';
import Header from '@/components/header/Header';
import Scrollbar from '@/components/scrollbar/scrollbar';
import Footer from '@/components/footer/Footer';
import CtaSection from '@/components/CtaSection/CtaSection';
import icon from '@/public/images/icon/dollar-icon.svg';
import sImg from '@/public/images/vectors/Pricing plans-amico.png';
import PricingSection from './Pricing';
import FaqSection from '@/components/FaqSection/FaqSection';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

const PricingPage: React.FC = () => {
  const t = useTranslations('PricingPage');
  useCountUp({
    end: 56656,
    ref: 'counter',
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <Header />
        <section
          className="page-title pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url('/images/bg/page_bg01.jpg')` }}
        >
          <div className="container">
            <div className="page-title-wrap pg-title-wrap">
              <div className="row mt-none-30 align-items-center">
                <div className="col-lg-8 mt-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <Image src={icon} alt="Dollar Icon" />
                      {' '}{t('pageSubTitle')}
                    </span>
                    <h1 className="title">
                      <span dangerouslySetInnerHTML={{ __html: t.raw('pageTitle') }} />
                    </h1>
                  </div>
                </div>
                <div className="col-lg-4 mt-30">
                  <div className="pg-img-right pos-rel">
                    <Image src={sImg} alt="Pricing illustration" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fanfact pg-fan-bg pt-100 pb-125">
          <div className="container">
            <div className="pg-fanfact-wrap ul_li_between mt-none-30">
              <div className="ap-fanfact-item pg-fanfact-item mt-30">
                <h2 className="xb-item--number">
                  <CountUp end={65} enableScrollSpy />
                  %
                </h2>
                <span className="xb-item--text">{t('f1Title')}</span>
                <p className="xb-item--content">
                  {t('f1Content')}
                </p>
              </div>
              <div className="ap-fanfact-item pg-fanfact-item mt-30">
                <h2 className="xb-item--number">
                  <CountUp end={48} enableScrollSpy />
                  %
                </h2>
                <span className="xb-item--text">{t('f2Title')}</span>
                <p className="xb-item--content">
                  {t('f2Content')}
                </p>
              </div>
              <div className="ap-fanfact-item pg-fanfact-item mt-30">
                <h2 className="xb-item--number">
                  <CountUp end={55} enableScrollSpy />
                  %
                </h2>
                <span className="xb-item--text">{t('f3Title')}</span>
                <p className="xb-item--content">
                  {t('f3Content')}
                </p>
              </div>
            </div>
          </div>
          <span id="counter" className="d-none" />
        </section>

        <PricingSection />
        <FaqSection />
        <CtaSection />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default PricingPage;
