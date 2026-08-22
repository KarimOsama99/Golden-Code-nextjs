'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";

// Real client project logos (swapped in for the template's placeholder brand logos)
import ezhalhaLogo from '@/public/images/project/ezhalha-logo.webp';
import salamLogo from '@/public/images/project/salamclinic-logo.png';
import uniguideLogo from '@/public/images/project/uniguide-logo.png';
import minbibleLogo from '@/public/images/project/minbible-logo.png';

interface Partner {
  pImg: StaticImageData;
  name: string;
}

const partners: Partner[] = [
  { pImg: ezhalhaLogo, name: "Ezhalha" },
  { pImg: salamLogo, name: "Salam Surgery Clinic" },
  { pImg: uniguideLogo, name: "UniGuide" },
  { pImg: minbibleLogo, name: "Mohamed in the Bible" },
  { pImg: ezhalhaLogo, name: "Ezhalha" },
  { pImg: salamLogo, name: "Salam Surgery Clinic" },
  { pImg: uniguideLogo, name: "UniGuide" },
  { pImg: minbibleLogo, name: "Mohamed in the Bible" },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  responsive: [
    { breakpoint: 1025, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 450, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 340, settings: { slidesToShow: 2, slidesToScroll: 1 } },
  ],
};

import {useTranslations} from 'next-intl';

const PartnerSection: React.FC = () => {
  const t = useTranslations('Partner');
  return (
    <section className="brand pt-30 pb-140">
      <div className="container">
        <div className="o-hidden">
          <div className="brand-sub_title">
            <span>
              {/* trigger update */}
              {t.rich('trustedBy', {
                b: (chunks) => <b>{chunks}</b>
              })}
            </span>
          </div>
          <div className="brand-wrap brand-marquee">
            <Slider {...settings}>
              {partners.map((partner, index) => (
                <div className="brand-logo gc-partner-logo" key={index}>
                  <Image
                    src={partner.pImg}
                    alt={partner.name}
                    className="gc-partner-logo-img"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
