'use client';

import React from 'react';
import {Link} from '@/i18n/routing';
import { Fade } from 'react-awesome-reveal';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'next/image';

import {useTranslations} from 'next-intl';

const Hero: React.FC = () => {
  const t = useTranslations('Hero');
  const [showScrollDown, setShowScrollDown] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollDown(false);
      } else {
        setShowScrollDown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="hero o-hidden hero-style-two pos-rel pt-120 bg_img"
      style={{ backgroundImage: `url('/images/bg/hero-bg02.jpg')` }}
    >
      <div className="container">
        <div className="hero_wrap pt-40">
          <div className="row align-items-center">
            <div className="col-lg-6 mt-xl-5">
              <div className="xb-hero">
                <Fade direction="up" triggerOnce duration={1000}>
                  <h1
                    className="xb-item--title wow fadeInUp"
                    data-wow-duration="600ms"
                  >
                    {t('titleLine1')}
                    <br /> {t.rich('titleLine2', {
                      span: (chunks) => <span>{chunks}</span>
                    })}
                  </h1>
                </Fade>

                <Fade direction="up" triggerOnce duration={1200}>
                  <p
                    className="hero-subtitle-mobile wow fadeInUp"
                    data-wow-delay="100ms"
                    data-wow-duration="600ms"
                  >
                    {t('subtitle')}
                  </p>
                </Fade>

                <Fade direction="up" triggerOnce duration={1400}>
                  <ul
                    className="xb-item--item gc-check-list list-unstyled wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="600ms"
                  >
                    <li>
                      <span className="gc-check-badge">
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4.5L4.2 7.7L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {t('feature1')}
                    </li>
                    <li>
                      <span className="gc-check-badge">
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4.5L4.2 7.7L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {t('feature2')}
                    </li>
                    <li>
                      <span className="gc-check-badge">
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4.5L4.2 7.7L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {t('feature3')}
                    </li>
                    <li>
                      <span className="gc-check-badge">
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4.5L4.2 7.7L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {t('feature4')}
                    </li>
                  </ul>
                </Fade>

                <Fade direction="up" triggerOnce duration={1600}>
                  <div
                    className="xb-btn hero-btn-mt wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="600ms"
                  >
                    <Link
                      href="/contact"
                      className="thm-btn thm-btn--aso thm-btn--aso_yellow"
                    >
                      {t('cta')}
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>

            <div className="col-lg-6">
              <Fade direction="right" triggerOnce duration={1200}>
                <div className="hero-right_img hero-right_img-container pos-rel">
                  <Image
                    className="wow fadeInRight"
                    data-wow-duration="600ms"
                    src="/images/hero/hero-img02.svg"
                    alt="Main Hero"
                    fill
                    style={{ objectFit: "contain" }}
                    priority={true}
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div 
          className="banner-scroll-down active"
          style={{ 
            opacity: showScrollDown ? 1 : 0, 
            transition: 'opacity 0.3s ease',
            pointerEvents: showScrollDown ? 'auto' : 'none'
          }}
        >
          <AnchorLink
            href="#about"
            aria-label="Scroll to top"
            className="scrollspy-btn"
          >
            <span></span>
            <span></span>
            <span></span>
          </AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
