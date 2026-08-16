"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import getCases from "@/api/case";
import { useTranslations, useLocale } from "next-intl";

interface CaseStudy {
  id: number;
  title: string;
  titleAr?: string;
  slug: string;
  img: StaticImageData;
  category: string;
  cat: string;
  date: string;
  framework: string;
  link: string;
}

const ExternalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="gc-card-arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CaseStudySection: React.FC = () => {
  const t = useTranslations("CaseStudySection");
  const locale = useLocale();
  const caseStudies = getCases() as CaseStudy[];
  const displayTitle = (study: CaseStudy) =>
    locale === "ar" && study.titleAr ? study.titleAr : study.title;

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

  const filteredStudies = caseStudies.filter(
    (item) => activeFilter === "*" || item.category === activeFilter
  );

  return (
    <section className="pf-section pt-70 pb-130">
      <div className="container">
        {/* Filter Pills */}
        <div className="pf-filter-row">
          <div className="pf-filter-scroller">
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`pf-filter-pill ${activeFilter === filter.key ? "is-active" : ""}`}
                onClick={() => handleFilter(filter.key)}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="pf-grid mt-70">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => {
              return (
                <motion.article
                  layout
                  key={study.id}
                  className="pf-card"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Link href={`/portfolio/${study.slug.toLowerCase()}`} className="pf-card-link">
                    <div className="pf-card-media">
                      <Image
                        src={study.img}
                        alt={displayTitle(study)}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                        className="pf-card-img"
                      />
                    </div>
                    <span className="pf-card-scrim" />
                    <div className="pf-card-info">
                      <span className="pf-card-cat">{study.cat}</span>
                      <h3 className="pf-card-title">{displayTitle(study)}</h3>
                      <div className="pf-card-meta">
                        <span>{study.framework}</span>
                        <span className="pf-card-meta-dot" />
                        <span>{study.date}</span>
                      </div>
                      <span className="pf-card-cta">
                        {t("viewCase")}
                        <ArrowIcon />
                      </span>
                    </div>
                  </Link>

                  <span className="pf-card-badge">{study.framework}</span>

                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-visit-btn"
                    aria-label={t("visitSite")}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalIcon />
                  </a>
                </motion.article>
              );
            })}
          </AnimatePresence>

          {filteredStudies.length === 0 && (
            <p className="pf-empty">{t("noResults")}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
