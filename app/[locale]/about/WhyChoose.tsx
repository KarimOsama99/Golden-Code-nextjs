import React from 'react';
import Image from 'next/image';

import sIcon1 from '@/public/images/icon/eye-icon.svg';
import {useTranslations} from 'next-intl';

interface WhyChooseProps {}

const HonestyIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L20 6.5V11.5C20 16.2 16.9 20.4 12 21.5C7.1 20.4 4 16.2 4 11.5V6.5L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 12L11 14L15.5 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SpeedIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L4 14H11L10 22L20 9H13L13 2Z" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const ToolsIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2-2 2.5-2.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);

const WhyChoose: React.FC<WhyChooseProps> = () => {
  const t = useTranslations('AboutWhyChoose');
  const items = [
    { Icon: HonestyIcon, text: t('item1') },
    { Icon: SpeedIcon, text: t('item2') },
    { Icon: ToolsIcon, text: t('item3') },
  ];
  return (
    <section className="feature pt-130">
      <div className="container">
        <div className="sec-title--two text-center mb-60">
          <div className="sub-title">
            <Image src={sIcon1} alt="Why Choose Icon" />
            {t('subTitle')}
          </div>
          <h2 className="title">{t('title')}</h2>
        </div>
        <div className="row mt-none-30 align-items-stretch">
          {items.map(({ Icon, text }, index) => (
            <div className="col-lg-4 col-md-6 mt-30 d-flex" key={index}>
              <div className="gc-why-card w-100 flex-grow-1">
                <span className="gc-why-index">{`0${index + 1}`}</span>
                <span className="gc-why-icon">
                  <Icon />
                </span>
                <h3 className="gc-why-text">{text}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
