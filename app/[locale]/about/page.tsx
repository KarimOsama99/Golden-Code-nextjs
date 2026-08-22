"use client";

import React, { Fragment } from "react";
import Header from "@/components/header/Header";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import icon from "@/public/images/icon/magic-icon.svg";
import FeaturesSection from "./Features";
import WhyChoose from "./WhyChoose";
import FunfactSection from "./Funfact";
import Roadmap from "./Roadmap";
import ScrollTextReveal from "@/components/ScrollTextReveal/ScrollTextReveal";
import Image from "next/image";
import {useTranslations} from 'next-intl';

const AboutUsPage: React.FC = () => {
    const t = useTranslations('AboutPage');
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <Header />
        <section
          className="page-title pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url(/images/bg/page_bg01.jpg)` }}
        >
          <div className="container">
            <div className="page-title-wrap">
              <div className="row mt-none-30 align-items-end">
                <div className="col-xl-9 col-lg-8 mt-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <Image src={icon} alt="Magic Icon" />
                      {t('subTitle')}
                    </span>
                    <h1 className="title">{t('title')}</h1>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 mt-30">
                  <div className="count-box">
                    <h2 className="number">
                      10 <span className="suffix">+</span>
                    </h2>
                    <span className="text">{t('yearsExp')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="about-video pt-75">
          <div className="container">
            <div className="career_video">
              <Image src="/images/about/company.jpg" alt="About Image" width={1000} height={1000} />
            </div>
          </div>
        </div>

        <FeaturesSection />
        <div style={{ backgroundColor: "#f6f6f8" }}>
          <WhyChoose />
          <FunfactSection />
        </div>
        <Roadmap />
        <ScrollTextReveal variant="About" />
        <CtaSection />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default AboutUsPage;
