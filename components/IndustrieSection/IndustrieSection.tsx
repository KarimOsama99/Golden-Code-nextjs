import React from 'react';
import { Fade } from "react-awesome-reveal";
import {Link} from '@/i18n/routing';
import hicon from '@/public/images/icon/building.svg';
import sIcon1 from '@/public/images/industrie/img01.png';
import sIcon2 from '@/public/images/industrie/img02.png';
import sIcon3 from '@/public/images/industrie/img03.png';
import sIcon4 from '@/public/images/industrie/img04.png';
import sIcon5 from '@/public/images/industrie/img05.png';
import sIcon6 from '@/public/images/industrie/img06.png';
import sIcon7 from '@/public/images/industrie/img07.png';
import sIcon8 from '@/public/images/industrie/img08.png';
import sIcon9 from '@/public/images/industrie/img09.png';
import sIcon10 from '@/public/images/industrie/img10.png';
import Image, { StaticImageData } from 'next/image';

import {useTranslations} from 'next-intl';

// Moved inside component or kept here if keys match.
// Ideally move inside to use t() directly or map keys.


const IndustrieSection: React.FC = () => {
    const t = useTranslations('Industrie');

    const Industrie = [
        { icon: sIcon1, title: t('saas') },
        { icon: sIcon2, title: t('lawyers') },
        { icon: sIcon3, title: t('realEstate') },
        { icon: sIcon4, title: t('insurance') },
        { icon: sIcon5, title: t('crypto') },
        { icon: sIcon6, title: t('privateEquity') },
        { icon: sIcon7, title: t('education') },
        { icon: sIcon8, title: t('finance') },
        { icon: sIcon9, title: t('healthcare') },
        { icon: sIcon10, title: t('automotive') },
    ];
  return (
    <section className="industrie m-lr pt-140 pb-140">
      <div className="industrie-wrap sec-bg pos-rel pt-130 pb-130">
        <div className="container">
          <div className="sec-title--two text-center mb-30">
            <Fade
              direction="down"
              triggerOnce={false}
              duration={1000}
              delay={9}
            >
              <div>
                <div
                  className="sub-title wow fadeInDown"
                  data-wow-duration="600ms"
                >
                  <Image src={hicon} alt="Industries icon" />
                  {t('subtitle')}
                </div>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
              <div>
                <h2
                  className="title wow fadeInDown"
                  data-wow-delay="150ms"
                  data-wow-duration="600ms"
                >
                  {t('title')}
                </h2>
              </div>
            </Fade>
          </div>
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-2">
            {Industrie.map((industry, i) => (
              <div className="col" key={i}>
                <div className="indus-item">
                  <div className="xb-img">
                    <Image src={industry.icon} alt={industry.title} />
                  </div>
                  <h3 className="xb-title">{industry.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="xb-btn text-center mt-60">
            <Link href="/contact" className="thm-btn thm-btn--aso thm-btn--aso_dark">
              {t('cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustrieSection;
