'use client';

import React from 'react';
import {Link} from '@/i18n/routing';;
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import icon from '@/public/images/icon/magic.png';
import about1 from '@/public/images/icon/airdrop.png';
import about2 from '@/public/images/icon/people.png';
import about3 from '@/public/images/icon/microphone.png';

import {useTranslations} from 'next-intl';

const About: React.FC = () => {
  const t = useTranslations('About');
  return (
    <section id="about" className="about m-lr">
      <div className="about-wrapper sec-bg pos-rel pb-130 pt-130">
        <div className="container">
          <div className="sec-title--two text-center">
            <Fade direction="down" triggerOnce={false} duration={1000} delay={9}>
              <div className="sub-title wow fadeInDown" data-wow-duration="600ms">
                <Image src={icon} alt="We are golden code" />
                {' '}{t('subtitle')}
              </div>
            </Fade>
            <Fade direction="down" triggerOnce={false} duration={1500} delay={9}>
              <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">
                {t('title')}
              </h2>
            </Fade>
          </div>

          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6 mt-50">
              <div className="about-left">
                <h2 className="title">{t('coreValues')}</h2>

                <div className="about-item_box ul_li">
                  <div className="xb-item--icon">
                    <Image src={about1} alt="Innovation icon" />
                  </div>
                  <div className="xb-item--holder">
                    <p className="xb-item--content">
                      <span>{t('val1Title')}</span> {t('val1Desc')}
                    </p>
                  </div>
                </div>

                <div className="about-item_box ul_li">
                  <div className="xb-item--icon">
                    <Image src={about2} alt="Client Focus icon" />
                  </div>
                  <div className="xb-item--holder">
                    <p className="xb-item--content">
                      <span>{t('val2Title')}</span> {t('val2Desc')}
                    </p>
                  </div>
                </div>

                <div className="about-item_box ul_li">
                  <div className="xb-item--icon">
                    <Image src={about3} alt="Transparency icon" />
                  </div>
                  <div className="xb-item--holder">
                    <p className="xb-item--content">
                      <span>{t('val3Title')}</span> {t('val3Desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 mt-50">
              <div className="about-right">
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">{t('missionTitle')}</h3>
                  <p className="xb-item--content">
                    {t('missionDesc')}
                  </p>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">{t('visionTitle')}</h3>
                  <p className="xb-item--content">
                    {t('visionDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="xb-btn text-center mt-90 wow fadeInUp" data-wow-duration="600ms">
              <Fade direction="up" triggerOnce={false} duration={1500} delay={9}>
                <Link href="/about" className="thm-btn thm-btn--aso thm-btn--aso_dark">
                  {t('cta')}
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
