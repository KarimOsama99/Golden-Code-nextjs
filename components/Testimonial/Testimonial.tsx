"use client";

import React, { useRef, useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/navigation";
import tImg1 from "@/public/images/testimonial/sa-tas05.png";
import tImg2 from "@/public/images/testimonial/sa-tas01.png";
import tImg3 from "@/public/images/testimonial/sa-tas02.png";
import tImg4 from "@/public/images/testimonial/sa-tas03.png";

import { Link } from "@/i18n/routing";
import icon1 from "@/public/images/testimonial/tes-logo02.png";
import icon2 from "@/public/images/testimonial/tes-logo01.png";
import icon3 from "@/public/images/testimonial/tes-logo03.png";
import icon4 from "@/public/images/testimonial/tes-logo04.png";
import icon5 from "@/public/images/testimonial/tes-logo05.png";

import quote from "@/public/images/icon/quta.png";
import hicon from "@/public/images/icon/like-icon.svg";
import Image, { StaticImageData } from "next/image";

interface TestimonialItem {
  id: string;
  tImg: StaticImageData | string;
  logo: StaticImageData | string;
  Des: string;
  Name: string;
  sub: string;
  country?: string;
}

interface TestimonialProps {
  tClass?: string;
}

import { useTranslations } from "next-intl";

const Testimonial: React.FC<TestimonialProps> = ({ tClass = "" }) => {
  const t = useTranslations("Testimonial");

  const testimonial: TestimonialItem[] = [
    {
      id: "01",
      tImg: tImg1,
      logo: icon1,
      Des: t("t1Des"),
      Name: "Ahmed Ali",
      sub: t("t1Sub"),
      country: "Seattle, Ukraine",
    },
    {
      id: "02",
      tImg: tImg2,
      logo: icon2,
      Des: t("t2Des"),
      Name: "Omar Farouk",
      sub: t("t2Sub"),
    },
    {
      id: "03",
      tImg: tImg3,
      logo: icon3,
      Des: t("t3Des"),
      Name: "Mahmoud Mansour",
      sub: t("t3Sub"),
    },
    {
      id: "04",
      tImg: tImg4,
      logo: icon4,
      Des: t("t4Des"),
      Name: "Mohamed Abdelsalam",
      sub: t("t4Sub"),
    },
    {
      id: "05",
      tImg: tImg3,
      logo: icon5,
      Des: t("t4Des"),
      Name: "Ibrahim Mohamed",
      sub: t("t4Sub"),
    },
    {
      id: "06",
      tImg: tImg2,
      logo: icon2,
      Des: t("t2Des"),
      Name: "Saif Mohamed",
      sub: t("t2Sub"),
    },
  ];
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className={`testimonial o-hidden pb-140 ${tClass}`}>
      <div className="container">
        <div className="sa-tes_top pos-rel mb-60">
          <div className="sec-title--two">
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
                  <Image src={hicon} alt="Like icon" />
                  {t("subtitle")}
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
                  {t("title")}
                </h2>
              </div>
            </Fade>
          </div>
          <div className="sa-tes_button">
            <div className="sa-swiper-btn swiper-button-prev" ref={prevRef}>
              <i className="fal fa-angle-left"></i>
            </div>
            <div
              className="sa-swiper-btn active swiper-button-next"
              ref={nextRef}
            >
              <i className="fal fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="sa-testimonial-slider-inner">
        <div className="sa-testimonial-slider">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
            speed={1800}
            parallax={true}
            ref={swiperRef}
            breakpoints={{
              1600: { slidesPerView: 5 },
              768: { slidesPerView: 2, centeredSlides: false },
              576: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {testimonial.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="sa-testimonial-item">
                  <div className="xb-item--inner">
                    <div className="xb-item--quta">
                      <Image src={quote} alt="Quote icon" />
                    </div>
                    <p className="xb-item--content">&quot;{item.Des}&quot;</p>
                    <div className="xb-item--holder ul_li">
                      <div className="xb-item--avatar">
                        <Image src={item.tImg} alt={`${item.Name} avatar`} />
                      </div>
                      <div className="xb-item--author">
                        <h3 className="xb-item--name">{item.Name}</h3>
                        <span className="xb-item--desig">{item.sub}</span>
                        {/* <div className="xb-item--logo"> */}
                          {/* <Image src={item.logo} alt={`${item.Name} logo`} /> */}
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
