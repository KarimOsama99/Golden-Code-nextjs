"use client";

import React, { useState } from "react";
import {Link} from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import getCases from "@/api/case";
import {useTranslations} from 'next-intl';

interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  img: StaticImageData;
  category: string;
}

const CaseStudySection: React.FC = () => {
  const t = useTranslations('CaseStudySection');
  const caseStudies = getCases();

  const [activeFilter, setActiveFilter] = useState<string>("*");

  const handleFilter = (category: string) => {
    setActiveFilter(category);
  };

  const filters = [
    { key: "*", label: t("filterAll") },
    { key: "cat1", label: t("filterDev") },
    { key: "cat2", label: t("filterDesign") },
    { key: "cat3", label: t("filterMarketing") },
    { key: "cat4", label: t("filterBranding") },
    { key: "cat5", label: t("filterSEO") },
  ];

  return (
    <section
      className="casestudy pt-70 pb-130"
      style={{ backgroundColor: "#f6f6f8" }}
    >
      <div className="container">
        {/* Filter Buttons */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="team-menu casestudy-menu">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={activeFilter === filter.key ? "active" : ""}
                  onClick={() => handleFilter(filter.key)}
                  type="button"
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="casestudy-content mt-70">
          <div className="row grid mt-none-30">
            <AnimatePresence>
              {caseStudies
                .filter(
                  (item: CaseStudy) =>
                    activeFilter === "*" || item.category === activeFilter
                )
                .map((study: CaseStudy) => (
                  <motion.div
                    key={study.id}
                    className={`col-lg-${
                      study.id === 2 || study.id === 7 || study.id === 12
                        ? "8"
                        : "4"
                    } col-md-6 grid-item ${study.category} mt-30`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="casestudy-item">
                      <div className="casestudy-img">
                        <Link
                          href={`/portfolio/${study.slug.toLowerCase()}`}
                          passHref
                        >
                          <Image src={study.img} alt={study.title} />
                        </Link>
                        <div className="content_wrap">
                          <h3 className="item_title">{study.title}</h3>
                          <span className="item_tag">
                            {study.slug.replace(/-/g, " ")}
                          </span>
                        </div>
                      </div>
                      <Link
                        href={`/portfolio/${study.slug.toLowerCase()}`}
                        passHref
                      >
                        <span className="xb-overlay"></span>
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
