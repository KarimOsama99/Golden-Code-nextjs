"use client";

import React from "react";
import Image from "next/image";
import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';
import Header from "@/components/header/Header";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import icon from "@/public/images/icon/magic.svg";
import gImg1 from "@/public/images/gallery/cp-img01.jpg";
import gImg2 from "@/public/images/gallery/cp-img02.jpg";
import gImg3 from "@/public/images/gallery/cp-img03.jpg";
import gImg4 from "@/public/images/gallery/cp-img04.jpg";
import gImg5 from "@/public/images/gallery/cp-img05.jpg";
import gImg6 from "@/public/images/gallery/cp-img06.jpg";

interface Section {
  title: string;
  content: string[];
  list?: string[];
}

const PrivacyPage: React.FC = () => {
  const t = useTranslations('PrivacyPage');
  const tGlobal = useTranslations();
  const sections = tGlobal.raw('PrivacyData') as Section[];

  return (
    <>
      <div className="body_wrap sco_agency">
        <Header />
        <section
          className="page-title cp-page-title pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url('/images/bg/page_bg01.jpg')` }}
        >
          <div className="container">
            <div className="page-title-wrap">
              <div className="row mt-none-30 align-items-center">
                <div className="col-lg-8 mt-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <Image src={icon} alt="Privacy Icon" /> {t('subTitle')}
                    </span>
                    <h2 className="title">
                      <span dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
                    </h2>
                    <span className="page-update_time">
                      {t('updated')}
                    </span>
                  </div>
                </div>
                <div className="col-lg-4 mt-30">
                  <div className="cp-img-slide">
                    <div className="cp-img-inner ul_li">
                      <div className="cp-item marquee-first">
                        {[gImg1, gImg2, gImg3, gImg1, gImg2, gImg3].map(
                          (img, i) => (
                            <div className="xb-img" key={`img1-${i}`}>
                              <Image src={img} alt={`Gallery Image ${i + 1}`} />
                            </div>
                          )
                        )}
                      </div>
                      <div className="cp-item marquee-2">
                        {[gImg4, gImg5, gImg6, gImg4, gImg5, gImg6].map(
                          (img, i) => (
                            <div className="xb-img" key={`img2-${i}`}>
                              <Image src={img} alt={`Gallery Image ${i + 7}`} />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="terms-conditions-section cp-det-bg">
          <div className="container">
            <div className="terms-section_inner pt-120 pb-75">
              <div className="row">
                <div className="col-lg-11">
                  {sections.map((section, i) => (
                    <div className="item-details-widget" key={i}>
                      <h2 className="item_details_info_title">
                        {section.title}
                      </h2>
                      {section.content.map((text, idx) => (
                        <p key={idx}>{text}</p>
                      ))}
                      {section.list && (
                        <ul className="privacy-details">
                          {section.list.map((item, liIdx) => (
                            <li key={liIdx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  <div className="item-details-widget">
                    <h2 className="item_details_info_title">{t('contactHeading')}</h2>
                    <p>
                      {t.rich('contactText', {
                        link: (chunks) => <Link href="/contact" className="details-link">{chunks}</Link>,
                        email: (chunks) => <a href="mailto:contact@Golden Code.com">{chunks}</a>
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection cClass="bg" />
      </div>
      <Footer />
      <Scrollbar />
    </>
  );
};

export default PrivacyPage;
