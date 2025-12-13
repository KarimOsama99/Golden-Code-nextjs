// services.ts
import type { StaticImageData } from "next/image";

import icon1 from "@/public/images/icon/ai.gif";
import icon2 from "@/public/images/icon/web.gif";
import icon3 from "@/public/images/icon/digital-tra.gif";
import icon4 from "@/public/images/icon/business-develop.gif";
import icon5 from "@/public/images/icon/search.gif";
import icon6 from "@/public/images/icon/warning.gif";
import icon7 from "@/public/images/icon/crm.gif";
import icon8 from "@/public/images/icon/bar-chart.gif";

import web from "@/public/images/vectors/web.png";
import data from "@/public/images/vectors/data.png";
import seo from "@/public/images/vectors/seo.png";
import cyber from "@/public/images/vectors/cyber.png";
import crm from "@/public/images/vectors/data2.png";
import hosting from "@/public/images/vectors/hosting.png";
import ai from "@/public/images/vectors/ai.png";
import deployment from "@/public/images/vectors/deployment.png";

import sicon1 from "@/public/images/icon/ser-icon01.svg";
import sicon2 from "@/public/images/icon/ser-icon02.svg";
import sicon3 from "@/public/images/icon/ser-icon03.svg";
import sicon4 from "@/public/images/icon/ser-icon04.svg";

import sdicon1 from "@/public/images/icon/da-fea_icon01.svg";
import sdicon2 from "@/public/images/icon/da-fea_icon02.svg";
import sdicon3 from "@/public/images/icon/da-fea_icon03.svg";
import sdicon4 from "@/public/images/icon/da-fea_icon04.svg";

import scicon1 from "@/public/images/icon/airdrop-white.svg";
import scicon2 from "@/public/images/icon/cloud-add.svg";
import scicon3 from "@/public/images/icon/check02.svg";
import scicon4 from "@/public/images/icon/finger-scan.svg";
import scicon5 from "@/public/images/icon/ranking.svg";

import cdicon1 from "@/public/images/icon/cd-ser_icon01.svg";
import cdicon2 from "@/public/images/icon/cd-ser_icon02.svg";
import cdicon3 from "@/public/images/icon/cd-ser_icon03.svg";
import cdicon4 from "@/public/images/icon/cd-ser_icon04.svg";
import cdicon5 from "@/public/images/icon/cd-ser_icon05.svg";
import cdicon6 from "@/public/images/icon/cd-ser_icon06.svg";
import cdicon7 from "@/public/images/icon/cd-ser_icon08.svg";
import cdicon8 from "@/public/images/icon/cd-ser_icon09.svg";

import serviceImg01 from "@/public/images/service/web.webp";
import serviceImg02 from "@/public/images/service/data.webp";
import serviceImg03 from "@/public/images/service/seo.webp";
import serviceImg04 from "@/public/images/service/cyber.webp";
import serviceImg05 from "@/public/images/service/crm.webp";
import serviceImg06 from "@/public/images/service/hosting.webp";
import serviceImg07 from "@/public/images/service/deploy.webp";
import serviceImg08 from "@/public/images/service/ai.webp";

export interface Service {
  Id: string;
  title: string;
  slug: string;
  sImg?: StaticImageData;
  sLogo?: StaticImageData;
  sCover?: StaticImageData;
  thumb1?: string;
  thumb2?: string;
  description?: string;
  features?: string[];
  bgClass?: string;
  // New elements added
  heading?: string;
  description2?: string;
}

// Raw services data without translations - used for generateStaticParams
const RAW_SERVICES: Service[] = [
  {
    Id: "1",
    sImg: icon2,
    sLogo: web,
    sCover: serviceImg01,
    title: "Web Development",
    slug: "web-development",
    thumb1: "Strategy",
    thumb2: "Consultation",
    description: "Web Development",
    heading: "Web Development",
    description2: "Web Development",
  },
  {
    Id: "2",
    sImg: icon8,
    sLogo: data,
    sCover: serviceImg02,
    title: "Data Analysis",
    slug: "data-analysis",
    thumb1: "Management",
    thumb2: "Transfer",
    description: "Data Analysis",
    heading: "Data Analysis",
    description2: "Data Analysis",
  },
  {
    Id: "3",
    sImg: icon5,
    sLogo: seo,
    sCover: serviceImg03,
    title: "SEO Audit",
    slug: "SEO-audit",
    thumb1: "Website",
    thumb2: "Mobile App",
    description: "SEO Audit",
    heading: "SEO Audit",
    description2: "SEO Audit",
  },
  {
    Id: "4",
    sImg: icon6,
    sLogo: cyber,
    sCover: serviceImg04,
    title: "Cyber Security",
    slug: "cyber-security",
    description: "Cyber Security",
    heading: "Cyber Security",
    description2: "Cyber Security",
  },
  {
    Id: "5",
    sImg: icon7,
    sLogo: crm,
    sCover: serviceImg05,
    title: "Custom CRM Services",
    slug: "Custom-CRM-services",
    description: "Custom CRM Services",
    heading: "Custom CRM Services",
    description2: "Custom CRM Services",
  },
  {
    Id: "6",
    sImg: icon3,
    sLogo: hosting,
    sCover: serviceImg06,
    title: "Hosting",
    slug: "Hosting",
    description: "Hosting",
    heading: "Hosting",
    description2: "Hosting",
  },
  {
    Id: "7",
    sImg: icon4,
    sLogo: deployment,
    sCover: serviceImg07,
    title: "Continuous Deployment",
    slug: "Continuous-Deployment",
    description: "Continuous Deployment",
    heading: "Continuous Deployment",
    description2: "Continuous Deployment",
  },
  {
    Id: "8",
    sImg: icon1,
    sLogo: ai,
    sCover: serviceImg08,
    title: "AI Solution",
    slug: "AI-solution",
    description: "AI Solution",
    heading: "AI Solution",
    description2: "AI Solution",
  },
];

// Get raw services without translations (for static generation)
export const getRawServices = (): Service[] => RAW_SERVICES;

// Get services with translations (for rendering)
const getServices = (t: any): Service[] => [
  {
    Id: "1",
    sImg: icon2,
    sLogo: web,
    sCover: serviceImg01,
    title: t("s1Title"),
    slug: "web-development",
    thumb1: "Strategy",
    thumb2: "Consultation",
    description: t("s1Desc"),
    heading: t("s1Heading"),
    description2: t("s1Desc2"),
  },
  {
    Id: "2",
    sImg: icon8,
    sLogo: data,
    sCover: serviceImg02,
    title: t("s2Title"),
    slug: "data-analysis",
    thumb1: "Management",
    thumb2: "Transfer",
    description: t("s2Desc"),
    heading: t("s2Heading"),
    description2: t("s2Desc2"),
  },
  {
    Id: "3",
    sImg: icon5,
    sLogo: seo,
    sCover: serviceImg03,
    title: t("s3Title"),
    slug: "SEO-audit",
    thumb1: "Website",
    thumb2: "Mobile App",
    description: t("s3Desc"),
    heading: t("s3Heading"),
    description2: t("s3Desc2"),
  },
  {
    Id: "4",
    sImg: icon6,
    sLogo: cyber,
    sCover: serviceImg04,
    title: t("s4Title"),
    slug: "cyber-security",
    description: t("s4Desc"),
    heading: t("s4Heading"),
    description2: t("s4Desc2"),
  },
  {
    Id: "5",
    sImg: icon7,
    sLogo: crm,
    sCover: serviceImg05,
    title: t("s5Title"),
    slug: "Custom-CRM-services",
    description: t("s5Desc"),
    heading: t("s5Heading"),
    description2: t("s5Desc2"),
  },
  {
    Id: "6",
    sImg: icon3,
    sLogo: hosting,
    sCover: serviceImg06,
    title: t("s6Title"),
    slug: "Hosting",
    description: t("s6Desc"),
    heading: t("s6Heading"),
    description2: t("s6Desc2"),
  },
  {
    Id: "7",
    sImg: icon4,
    sLogo: deployment,
    sCover: serviceImg07,
    title: t("s7Title"),
    slug: "Continuous-Deployment",
    description: t("s7Desc"),
    heading: t("s7Heading"),
    description2: t("s7Desc2"),
  },
  {
    Id: "8",
    sImg: icon1,
    sLogo: ai,
    sCover: serviceImg08,
    title: t("s8Title"),
    slug: "AI-solution",
    description: t("s8Desc"),
    heading: t("s8Heading"),
    description2: t("s8Desc2"),
  },
];

export default getServices;
