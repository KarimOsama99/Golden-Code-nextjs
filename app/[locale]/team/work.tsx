"use client";

import React from "react";
import {Link} from '@/i18n/routing';
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

import icon1 from "@/public/images/icon/tp-work-icon01.svg";
import icon2 from "@/public/images/icon/tp-work-icon02.svg";
import icon3 from "@/public/images/icon/tp-work-icon03.svg";
import icon4 from "@/public/images/icon/tp-work-icon04.svg";
import icon5 from "@/public/images/icon/tp-work-icon05.svg";
import icon6 from "@/public/images/icon/tp-work-icon06.svg";
import iIcon from "@/public/images/icon/eye-icon.svg";
import iIcon2 from "@/public/images/icon/sms-white-icon01.svg";

interface WorkItem {
  id: number;
  icon: StaticImageData;
  titleKey: string;
  contentKey: string;
}

interface WorkSectionProps {
  bg?: string;
}

const WorkSection: React.FC<WorkSectionProps> = ({ bg }) => {
  const t = useTranslations('WorkSection');
  const tNav = useTranslations('Navigation');
  
  const workItems: WorkItem[] = [
    { id: 1, icon: icon1, titleKey: "w1Title", contentKey: "w1Content" },
    { id: 2, icon: icon2, titleKey: "w2Title", contentKey: "w2Content" },
    { id: 3, icon: icon3, titleKey: "w3Title", contentKey: "w3Content" },
    { id: 4, icon: icon4, titleKey: "w4Title", contentKey: "w4Content" },
    { id: 5, icon: icon5, titleKey: "w5Title", contentKey: "w5Content" },
    { id: 6, icon: icon6, titleKey: "w6Title", contentKey: "w6Content" },
  ];

  return (
    <section className={`work pb-130 ${bg || ""}`}>
      <div className="container">
        <div className="sec-title--two text-center mb-60">
          <div className="sub-title">
            <Image src={iIcon} alt="Section icon" />
            {t('subTitle')}
          </div>
          <h2 className="title">{t('title')}</h2>
        </div>

        <div className="tp-work-wrapp">
          <div className="row mt-none-30">
            {workItems.map((item) => (
              <div className="col-lg-6 mt-30" key={item.id}>
                <div className="tp-work-item">
                  <div className="xb-item--inner ul_li">
                    <div className="xb-item--icon">
                      <Image src={item.icon} alt={t(item.titleKey)} />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title">{t(item.titleKey)}</h3>
                      <p className="xb-item--content">{t(item.contentKey)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="header-contact text-center mt-60">
            <Link
              href="/contact"
              className="thm-btn thm-btn--aso thm-btn--header-black"
            >
              {tNav('talk')}
              <Image src={iIcon2} alt="Talk icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
