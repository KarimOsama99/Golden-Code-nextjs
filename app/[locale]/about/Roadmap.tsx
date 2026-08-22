"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import shape1 from "@/public/images/shape/line-shape03.png";
import shape2 from "@/public/images/shape/line-shape04.png";
import shape3 from "@/public/images/shape/pattern02.png";
import shape4 from "@/public/images/shape/monitor-shape.png";
import shape5 from "@/public/images/shape/blur-shape.png";
import icon from "@/public/images/icon/process-icon.svg";
import {useTranslations, useLocale} from 'next-intl';

interface RoadmapItem {
  quarter: string;
  year: string;
  title: string;
  content: string;
}

const getRoadmapData = (t: any) => [
  {
    quarter: "Q-1",
    year: "2012",
    title: t('q1Title'),
    content: t('q1Content'),
  },
  {
    quarter: "Q-2",
    year: "2014",
    title: t('q2Title'),
    content: t('q2Content'),
  },
  {
    quarter: "Q-3",
    year: "2016",
    title: t('q3Title'),
    content: t('q3Content'),
  },
  {
    quarter: "Q-4",
    year: "2018",
    title: t('q4Title'),
    content: t('q4Content'),
  },
  {
    quarter: "Q-5",
    year: "2024",
    title: t('q5Title'),
    content: t('q5Content'),
  },
];

const RoadmapSlider: React.FC = () => {
  const t = useTranslations('AboutRoadmap');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const roadmapData = getRoadmapData(t);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="roadmap roadmap-pb pt-130 pb-200 pos-rel"
      style={{ backgroundColor: "#0F55DC" }}
    >
      <div className="container">
        <div className="sa-tes_top roadmap-top pos-rel mb-85">
          <div className="sec-title--two">
            <div
              className="sub-title sub-title--strock wow fadeInDown"
              data-wow-duration="600ms"
            >
              <Image src={icon} alt="Process Icon" />
              {t('subTitle')}
            </div>
            <h2
              className="title clr-white wow fadeInDown"
              data-wow-delay="150ms"
              data-wow-duration="600ms"
            >
              {t('title')}
            </h2>
          </div>
          <div className="sa-tes_button roadmap-button">
            <div className="sa-swiper-btn swiper-button-prev" ref={prevRef}>
              <i className="fal fa-angle-left gc-swiper-arrow-icon"></i>
            </div>
            <div className="sa-swiper-btn swiper-button-next" ref={nextRef}>
              <i className="fal fa-angle-right gc-swiper-arrow-icon"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="roadmap-slider-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          dir={isRtl ? 'rtl' : 'ltr'}
          key={locale}
          loop
          spaceBetween={50}
          speed={400}
          slidesPerView={3}
          centeredSlides
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1600: { slidesPerView: 3 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="roadmap-slider"
        >
          {roadmapData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="roadmap-item">
                <div className="xb-item--top">
                  <Image src={shape1} alt="" />
                  <span className="xb-item--ques">{item.quarter}</span>
                  <Image src={shape2} alt="" />
                </div>
                <div className="xb-item--holder">
                  <span className="xb-item--year">{item.year}</span>
                  <h3 className="xb-item--title">{item.title}</h3>
                  <p className="xb-item--content">{item.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="roadmap-shape">
        <div className="shape shape--one">
          <Image src={shape3} alt="Pattern Shape" />
        </div>
        <div className="shape shape--two">
          <Image src={shape4} alt="Monitor Shape" />
        </div>
        <div className="shape shape--three">
          <Image src={shape5} alt="Blur Shape" />
        </div>
      </div>
    </section>
  );
};

export default RoadmapSlider;
