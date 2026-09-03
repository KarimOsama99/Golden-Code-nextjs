'use client';

import React from "react";
import Image, { StaticImageData } from "next/image";
import {useTranslations} from 'next-intl';

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
          <div className="brand-wrap">
            <div className="custom-marquee-container">
              <div className="custom-marquee-track">
                {/* Render 3 sets of partners for seamless looping on all screens without starting empty */}
                {[...partners, ...partners, ...partners].map((partner, index) => (
                  <div className="brand-logo gc-partner-logo" key={index}>
                    <Image
                      src={partner.pImg}
                      alt={partner.name}
                      className="gc-partner-logo-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .custom-marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 30s linear infinite;
        }
        /* Pause ONLY when hovering directly on a logo, not the empty section spaces! */
        .custom-marquee-track:has(.gc-partner-logo:hover) {
          animation-play-state: paused;
        }
        /* Ensure logos are consistently sized just like they were in slick slider */
        .brand-logo {
          width: 280px;
          height: 56px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          padding: 0 15px;
        }
        /* Constrain the actual images so tall/wide logos look balanced and consistent */
        :global(.gc-partner-logo-img) {
          max-width: 100px !important;
          max-height: 100% !important;
          width: auto !important;
          height: auto !important;
          object-fit: contain !important;
        }
        @media (max-width: 991px) {
          .brand-logo { width: 230px; }
          :global(.gc-partner-logo-img) { max-width: 60% !important; }
        }
        @media (max-width: 767px) {
          .brand-logo { width: 180px; }
        }
        @media (max-width: 450px) {
          :global(.gc-partner-logo-img) { max-width: 60% !important; }
        }
        @keyframes marqueeScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(calc(-100% / 3), 0, 0); }
        }
        :global([dir="rtl"]) .custom-marquee-track {
           animation: marqueeScrollRTL 30s linear infinite;
        }
        @keyframes marqueeScrollRTL {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(calc(100% / 3), 0, 0); }
        }
      `}</style>
    </section>
  );
};

export default PartnerSection;

