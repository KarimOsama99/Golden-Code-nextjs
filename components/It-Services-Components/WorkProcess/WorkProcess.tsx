"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import {Link} from '@/i18n/routing';
import Image, { StaticImageData } from "next/image";
import {useTranslations} from 'next-intl';

import pImg from "@/public/images/shape/process-shape01.png";
import pImg2 from "@/public/images/shape/process-shape01.png";
import sIcon1 from "@/public/images/process/image01.png";
import sIcon2 from "@/public/images/process/image02.png";
import sIcon3 from "@/public/images/process/image03.png";
import sIcon4 from "@/public/images/process/image04.png";
import sIcon5 from "@/public/images/process/image05.png";

interface ProcessItem {
  id: string;
  title: string;
  subTitle: string;
  icon: StaticImageData;
  direction: string;
}

const WorkProcess: React.FC = () => {
  const t = useTranslations('WorkProcess');

  const Process: ProcessItem[] = [
    {
      id: "01",
      title: t('step1Title'),
      subTitle: t('step1Desc'),
      icon: sIcon1,
      direction: "one",
    },
    {
      id: "02",
      title: t('step2Title'),
      subTitle: t('step2Desc'),
      icon: sIcon2,
      direction: "two",
    },
    {
      id: "03",
      title: t('step3Title'),
      subTitle: t('step3Desc'),
      icon: sIcon3,
      direction: "three",
    },
    {
      id: "04",
      title: t('step4Title'),
      subTitle: t('step4Desc'),
      icon: sIcon4,
      direction: "four",
    },
    {
      id: "05",
      title: t('step5Title'),
      subTitle: t('step5Desc'),
      icon: sIcon5,
      direction: "four",
    },
  ];

  return (
    <section
      className="process pt-140 pb-40 pos-rel"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="process-left pt-70">
              <div className="sec-title">
                <Fade direction="down" triggerOnce duration={1000} delay={9}>
                  <div>
                    <h2
                      className="title mb-40 wow fadeInUp"
                      data-wow-duration="600ms"
                    >
                      {t('title')}
                    </h2>
                  </div>
                </Fade>
                <Fade direction="up" triggerOnce duration={1200} delay={9}>
                  <div>
                    <span
                      className="content wow fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="600ms"
                    >
                      {t('description')}
                    </span>
                  </div>
                </Fade>
              </div>
              <Fade direction="up" triggerOnce duration={1200} delay={9}>
                <div>
                  <div
                    className="xb-btn mt-55 wow fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="600ms"
                  >
                    <Link href="/about" className="thm-btn thm-btn--fill_icon">
                      <div className="xb-item--hidden-text">
                        <span className="text">{t('cta')}</span>
                      </div>
                      <div className="xb-item--holder">
                        <span className="xb-item--text">
                          {t('cta')}
                        </span>
                        <div className="xb-item--icon">
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                        <span className="xb-item--text">
                          {t('cta')}
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="col-lg-7 col-md-8">
            <div className="process-right f-right">
              {Process.map((process, index) => (
                <div className="process-item" key={index}>
                  <span className="xb-item--number">{process.id}</span>
                  <div className="xb-item--img">
                    <Image src={process.icon} alt={process.title} />
                  </div>
                  <div className="xb-item--holder">
                    <h3 className="xb-item--title">{process.title}</h3>
                    <span className="xb-item--content">{process.subTitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="peocess-shape">
        <div className="shape shape--one">
          <Image src={pImg} alt="Process shape one" />
        </div>
        <div className="shape shape--two">
          <Image src={pImg2} alt="Process shape two" />
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
