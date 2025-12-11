'use client';

import React, { useState } from "react";
import {Link} from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import cIcon1 from '@/public/images/icon/cp-icon.svg';
import cIcon2 from '@/public/images/icon/loc-icon.svg';
import cIcon3 from '@/public/images/icon/clock-icon.svg';
import Image from "next/image";
import getCareers from "@/api/careers";
import {useTranslations} from 'next-intl';

const CareerTeam: React.FC = () => {
  const t = useTranslations('CareerTeam');
  const tJobs = useTranslations('CareerJobs');
  const jobListings = getCareers(tJobs);

  const [activeFilter, setActiveFilter] = useState<string>("*");

  const handleFilter = (category: string) => {
    setActiveFilter(category);
  };

  const filters = [
    { key: "*", label: t("filterAll") },
    { key: "cat1", label: t("filterDev") },
    { key: "cat2", label: t("filterDesign") },
    { key: "cat3", label: t("filterMarketing") },
    { key: "cat4", label: t("filterSupport") },
    { key: "cat5", label: t("filterManagement") },
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="team pt-130 pb-130">
      <div className="container">
        <div className="sec-title--two text-center mb-50">
          <Fade direction="down" triggerOnce={false} duration={1000} delay={9}>
            <div className="sub-title wow fadeInDown" data-wow-duration="600ms">
              <Image src={cIcon1} alt="icon" />
              {t('subTitle')}
            </div>
          </Fade>
          <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
            <h2
              className="title wow fadeInDown"
              data-wow-delay="150ms"
              data-wow-duration="600ms"
            >
              {t('title')}
            </h2>
          </Fade>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="team-menu mb-50">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className={activeFilter === filter.key ? "active" : ""}
                  onClick={() => handleFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="col-lg-12">
            <div className="cp-team-wrap grid">
              <AnimatePresence>
                {jobListings
                  .filter(
                    (job) =>
                      activeFilter === "*" ||
                      job.categories.includes(activeFilter)
                  )
                  .map((job) => (
                    <motion.div
                      key={job.id}
                      className={`cp-team-item grid-item ${job.categories.join(
                        " "
                      )}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="xb-item--inner ul_li_between">
                        <div className="xb-item--content">
                          <h3 className="xb-item--title">
                            <Link
                              // onClick={scrollToTop}
                              href={`/career/${job.slug}`}
                            >
                              {job.title}
                            </Link>
                          </h3>
                          <div className="xb-item--holder ul_li">
                            <span className="xb-item--meta">
                              <Image src={cIcon2} alt="location" />
                              {job.location}
                            </span>
                            <span className="xb-item--meta">
                              <Image src={cIcon3} alt="time" />
                              {job.type}
                            </span>
                          </div>
                        </div>
                        <div className="cp-team-btn">
                          <Link
                            // onClick={scrollToTop}
                            href={`/career/${job.slug}`}
                            className="thm-btn--aso cp-btn"
                          >
                            View job{" "}
                            <i className="fal fa-arrow-right text-white"></i>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTeam;
