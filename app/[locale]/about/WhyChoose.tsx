import React from 'react';
import Image from 'next/image';

import sIcon1 from '@/public/images/icon/eye-icon.svg';
import sIcon2 from '@/public/images/feature/ap-feature01.webp';
import sIcon3 from '@/public/images/feature/ap-feature02.webp';
import sIcon4 from '@/public/images/feature/ap-feature03.webp';
import {useTranslations} from 'next-intl';

interface WhyChooseProps {}

const WhyChoose: React.FC<WhyChooseProps> = () => {
  const t = useTranslations('AboutWhyChoose');
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
        <div className="row mt-none-30">
          <div className="col-lg-4 col-md-6 mt-30 center-card">
            <div className="ap-fea-item pos-rel">
              <div className="xb-item--img">
                <Image src={sIcon2} alt="No empty promises" />
              </div>
              <h3 className="xb-item--content">{t('item1')}</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-30 center-card">
            <div className="ap-fea-item pos-rel">
              <div className="xb-item--img">
                <Image src={sIcon3} alt="Quick fixes" />
              </div>
              <h3 className="xb-item--content">{t('item2')}</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-30 center-card">
            <div className="ap-fea-item pos-rel">
              <div className="xb-item--img">
                <Image src={sIcon4} alt="Custom SEO tools" />
              </div>
              <h3 className="xb-item--content">{t('item3')}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
