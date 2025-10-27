'use client';

import React from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      className="hero o-hidden hero-style-two pos-rel pt-120 bg_img"
      style={{ backgroundImage: `url('/images/bg/hero-bg02.jpg')` }}
    >
      <div className="container">
        <div className="hero_wrap pt-40">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="xb-hero">
                <Fade direction="up" triggerOnce duration={1000}>
                  <h1
                    className="xb-item--title wow fadeInUp"
                    data-wow-duration="600ms"
                  >
                    We Build Apps
                    <br /> That <span>Users Love</span>
                  </h1>
                </Fade>

                <Fade direction="up" triggerOnce duration={1200}>
                  <p
                    className="xb-item--content wow fadeInUp"
                    data-wow-delay="100ms"
                    data-wow-duration="600ms"
                  >
                    (Get a lightning-fast site built on modern frameworks.)
                  </p>
                </Fade>

                <Fade direction="up" triggerOnce duration={1400}>
                  <ul
                    className="xb-item--item list-unstyled wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="600ms"
                  >
                    <li>
                      <i className="far fa-check"></i> Validate market fit
                    </li>
                    <li>
                      <i className="far fa-check"></i> Custom UI/UX Design
                    </li>
                    <li>
                      <i className="far fa-check"></i> High Performance
                    </li>
                    <li>
                      <i className="far fa-check"></i> Scale infrastructure &
                      grow users
                    </li>
                  </ul>
                </Fade>

                <Fade direction="up" triggerOnce duration={1600}>
                  <div
                    className="xb-btn mt-60 wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="600ms"
                  >
                    <Link
                      href="/contact"
                      className="thm-btn thm-btn--aso thm-btn--aso_yellow"
                    >
                      Book a free consultation
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-right_img pos-rel">
                <Fade direction="right" triggerOnce duration={1200}>
                  <Image
                    className="wow fadeInRight"
                    data-wow-duration="600ms"
                    src="/images/hero/hero-img02.svg"
                    alt="Main Hero"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-scroll-down active">
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
