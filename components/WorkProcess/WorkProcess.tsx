'use client';

import React from 'react';
import { Fade } from "react-awesome-reveal";
import hicon from '@/public/images/icon/process-icon.svg';
import pImg from '@/public/images/process/illistration.png';
import pImg2 from '@/public/images/shape/pattern.png';
import sIcon1 from '@/public/images/icon/search01.svg';
import sIcon2 from '@/public/images/icon/user-icon.png';
import sIcon3 from '@/public/images/icon/clipboar02.svg';
import sIcon4 from '@/public/images/icon/medal-star.svg';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';

interface ProcessItem {
  id: string;
  titleKey: string;
  subTitleKey: string;
  icon: StaticImageData | string; 
  direction: 'one' | 'two' | 'three' | 'four';
}

const WorkProcess: React.FC = () => {
  const t = useTranslations('WorkProcess');
  
  const Process: ProcessItem[] = [
    {
      id: "01",
      titleKey: 'p1Title',
      subTitleKey: 'p1Desc',
      icon: sIcon1,
      direction: 'one',
    },
    {
      id: "02",
      titleKey: 'p2Title',
      subTitleKey: 'p2Desc',
      icon: sIcon2,
      direction: 'two',
    },
    {
      id: "03",
      titleKey: 'p3Title',
      subTitleKey: 'p3Desc',
      icon: sIcon3,
      direction: 'three',
    },
    {
      id: "04",
      titleKey: 'p4Title',
      subTitleKey: 'p4Desc',
      icon: sIcon4,
      direction: 'four',
    },
  ];
  
  return (
    <section className="process pt-130 pb-100 pos-rel" style={{ backgroundColor: "#0F55DC" }}>
      <div className="container">
        <div className="sec-title--two text-center mb-90">
          <Fade direction='down' triggerOnce={false} duration={1000} delay={9}>
            <div>
              <div className="sub-title sub-title--strock wow fadeInDown" data-wow-duration="600ms">
                <Image src={hicon} alt="Process icon" />{t('subTitle')}
              </div>
            </div>
          </Fade>
          <Fade direction='up' triggerOnce={false} duration={1200} delay={9}>
            <div>
              <h2 className="title clr-white wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">
                {t('title')}
              </h2>
            </div>
          </Fade>
        </div>
        <div className="row flex-row-reverse">
          <div className="col-lg-6">
            <div className="sa-process_right">
              <Fade direction='right' triggerOnce={false} duration={1200} delay={9}>
                <div>
                  <div className="sa-process-image wow fadeInRight" data-wow-duration="600ms">
                    <Image className="updown" src={pImg} alt="Illustration" />
                  </div>
                </div>
              </Fade>
              <div className="process_shape">
                <Image src={pImg2} alt="Shape pattern" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sa-process_left">
              {Process.map((process, index) => (
                <div className={`process-item process-item--${process.direction}`} key={index}>
                  <div className="xb-item--icon">
                    <Image src={process.icon} alt={`${t(process.titleKey)} icon`} />
                  </div>
                  <h4 className="xb-item--title">{t(process.titleKey)}</h4>
                  <p className="xb-item--contact">{t(process.subTitleKey)}</p>
                  <span className="xb-item--number">{process.id}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
