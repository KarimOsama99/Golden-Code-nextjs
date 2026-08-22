"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/routing";
import { Fade } from "react-awesome-reveal";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

import imgEzhalha from "@/public/images/project/ezhalha.png";
import imgSalam from "@/public/images/project/salamclinic.png";
import imgUniguide from "@/public/images/project/uniguide.png";
import imgMinbible from "@/public/images/project/minbible.png";
import imgAlnajjar from "@/public/images/project/alnajjar.png";
import img3m from "@/public/images/project/3m.png";

import logoEzhalha from "@/public/images/project/ezhalha-logo.webp";
import logoUniguide from "@/public/images/project/uniguide-logo.png";
import logoMinbible from "@/public/images/project/minbible-logo.png";
import logoSalam from "@/public/images/project/salamclinic-logo.png";
// NOTE: these two logo files don't exist yet — add them to public/images/project/
import logoAlnajjar from "@/public/images/project/alnajjar-logo.png";
import logo3m from "@/public/images/project/3m-logo.png";

import icon from "@/public/images/icon/eye-icon.svg";

type Slide = {
  id: string;
  img: StaticImageData;
  logo: StaticImageData;
  slug: string;
  titleKey: string;
  descKey: string;
};

// slug values match the real detail pages in api/case.tsx exactly
const SLIDES: Slide[] = [
  { id: "ezhalha", img: imgEzhalha, logo: logoEzhalha, slug: "ezhalha-driving-app", titleKey: "p1Title", descKey: "p1Desc" },
  { id: "salam", img: imgSalam, logo: logoSalam, slug: "bariatric-surgery-clinic", titleKey: "p2Title", descKey: "p2Desc" },
  { id: "uniguide", img: imgUniguide, logo: logoUniguide, slug: "uniguide-education-platform", titleKey: "p3Title", descKey: "p3Desc" },
  { id: "minbible", img: imgMinbible, logo: logoMinbible, slug: "religious-website", titleKey: "p4Title", descKey: "p4Desc" },
  { id: "alnajjar", img: imgAlnajjar, logo: logoAlnajjar, slug: "alnajjar", titleKey: "p10Title", descKey: "p10Desc" },
  { id: "3m", img: img3m, logo: logo3m, slug: "3m-chemicals-group", titleKey: "p11Title", descKey: "p11Desc" },
];

const AUTOPLAY_MS = 5500;
const SWIPE_THRESHOLD = 60;

const ArrowIcon = () => (
  <svg
    className="gc-card-arrow-icon"
    width="15"
    height="15"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7354 3.14709C10.8167 2.74092 10.5533 2.3458 10.1471 2.26456L3.52817 0.94078C3.122 0.859546 2.72688 1.12296 2.64565 1.52913C2.56441 1.9353 2.82782 2.33042 3.23399 2.41165L9.11748 3.58835L7.94078 9.47183C7.85955 9.878 8.12296 10.2731 8.52913 10.3544C8.9353 10.4356 9.33042 10.1722 9.41165 9.76601L10.7354 3.14709ZM1.41603 9.62404L10.416 3.62404L9.58398 2.37596L0.583975 8.37596L1.41603 9.62404Z"
      fill="currentColor"
    />
  </svg>
);

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 90 : -90,
    opacity: 0,
    rotate: dir > 0 ? 6 : -6,
    scale: 0.94,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -90 : 90,
    opacity: 0,
    rotate: dir > 0 ? -6 : 6,
    scale: 0.94,
  }),
};

const ProjectSection: React.FC = () => {
  const t = useTranslations("Project");
  const tProData = useTranslations("ProjectData");

  const [[active, direction], setActiveState] = useState<[number, number]>([0, 1]);
  const [isPaused, setIsPaused] = useState(false);
  const isDraggingRef = useRef(false);

  const paginate = (newDirection: number) => {
    setActiveState(([prev]) => {
      const next = (prev + newDirection + SLIDES.length) % SLIDES.length;
      return [next, newDirection];
    });
  };

  const goTo = (index: number) => {
    setActiveState(([prev]) => [index, index > prev ? 1 : -1]);
  };

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, active]);

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    isDraggingRef.current = false;
    if (info.offset.x < -SWIPE_THRESHOLD) {
      paginate(1);
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      paginate(-1);
    }
  };

  const activeSlide = SLIDES[active];

  return (
    <section className="hp-project pt-90 pb-90">
      <div className="container">
        <div className="sa-project-top ul_li_between mb-25">
          <div className="sec-title--two mb-30">
            <Fade direction="up" triggerOnce={false} duration={1000} delay={9}>
              <span className="sub-title wow fadeInDown" data-wow-duration="600ms">
                <Image src={icon} alt="" /> {t("subtitle")}
              </span>
            </Fade>
            <Fade direction="up" triggerOnce={false} duration={1000} delay={9}>
              <h2 className="title wow skewIn" data-wow-duration="600ms">
                {t("title")}
              </h2>
            </Fade>
          </div>
          <Fade direction="right" triggerOnce={false} duration={1000} delay={9}>
            <Link href={"/portfolio"} className="thm-btn thm-btn--aso thm-btn--aso_dark">
              {t("viewMore")}
            </Link>
          </Fade>
        </div>

        <div
          className="hp-carousel mt-40"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            <motion.div
              key={activeSlide.id}
              className="hp-slide"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
              drag="x"
              dragElastic={0.5}
              dragConstraints={{ left: 0, right: 0 }}
              dragMomentum={false}
              onDragStart={() => {
                isDraggingRef.current = true;
              }}
              onDragEnd={handleDragEnd}
            >
              <div className="hp-slide-media">
                <Image
                  src={activeSlide.img}
                  alt={tProData(activeSlide.titleKey)}
                  fill
                  draggable={false}
                  sizes="(max-width: 991px) 100vw, 1140px"
                  className="hp-slide-img"
                />
                <span className="hp-slide-gradient" />
              </div>
              <div className="hp-slide-body">
                <h3 className="hp-slide-title">{tProData(activeSlide.titleKey)}</h3>
                <p className="hp-slide-desc">{tProData(activeSlide.descKey)}</p>
                <Link
                  href={`/portfolio/${activeSlide.slug}`}
                  className="hp-slide-cta"
                  onClick={(e) => {
                    if (isDraggingRef.current) e.preventDefault();
                  }}
                >
                  {t("readDetails")}
                  <ArrowIcon />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hp-indicators mt-30">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hp-indicator ${index === active ? "is-active" : ""}`}
              onClick={() => goTo(index)}
              aria-label={tProData(slide.titleKey)}
              aria-current={index === active}
            >
              <span className="hp-indicator-logo">
                <Image src={slide.logo} alt={tProData(slide.titleKey)} />
              </span>
              <span className="hp-indicator-track">
                {index === active && (
                  <span
                    key={`${active}-${isPaused}`}
                    className="hp-indicator-fill"
                    style={{
                      animationDuration: `${AUTOPLAY_MS}ms`,
                      animationPlayState: isPaused ? "paused" : "running",
                    }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
