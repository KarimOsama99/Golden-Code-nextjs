// services.ts
import type { StaticImageData } from 'next/image'

import icon1 from '@/public/images/icon/ai.gif'
import icon2 from '@/public/images/icon/web.gif'
import icon3 from '@/public/images/icon/digital-tra.gif'
import icon4 from '@/public/images/icon/business-develop.gif'
import icon5 from '@/public/images/icon/search.gif'
import icon6 from '@/public/images/icon/warning.gif'
import icon7 from '@/public/images/icon/crm.gif'
import icon8 from '@/public/images/icon/bar-chart.gif'

import web from '@/public/images/vectors/web.png';
import data from '@/public/images/vectors/data.png';
import seo from '@/public/images/vectors/seo.png';
import cyber from '@/public/images/vectors/cyber.png';
import crm from '@/public/images/vectors/data2.png';
import hosting from '@/public/images/vectors/hosting.png';
import ai from '@/public/images/vectors/ai.png';
import deployment from '@/public/images/vectors/deployment.png';

import sicon1 from '@/public/images/icon/ser-icon01.svg'
import sicon2 from '@/public/images/icon/ser-icon02.svg'
import sicon3 from '@/public/images/icon/ser-icon03.svg'
import sicon4 from '@/public/images/icon/ser-icon04.svg'

import sdicon1 from '@/public/images/icon/da-fea_icon01.svg'
import sdicon2 from '@/public/images/icon/da-fea_icon02.svg'
import sdicon3 from '@/public/images/icon/da-fea_icon03.svg'
import sdicon4 from '@/public/images/icon/da-fea_icon04.svg'

import scicon1 from '@/public/images/icon/airdrop-white.svg'
import scicon2 from '@/public/images/icon/cloud-add.svg'
import scicon3 from '@/public/images/icon/check02.svg'
import scicon4 from '@/public/images/icon/finger-scan.svg'
import scicon5 from '@/public/images/icon/ranking.svg'

import cdicon1 from '@/public/images/icon/cd-ser_icon01.svg'
import cdicon2 from '@/public/images/icon/cd-ser_icon02.svg'
import cdicon3 from '@/public/images/icon/cd-ser_icon03.svg'
import cdicon4 from '@/public/images/icon/cd-ser_icon04.svg'
import cdicon5 from '@/public/images/icon/cd-ser_icon05.svg'
import cdicon6 from '@/public/images/icon/cd-ser_icon06.svg'
import cdicon7 from '@/public/images/icon/cd-ser_icon08.svg'
import cdicon8 from '@/public/images/icon/cd-ser_icon09.svg'

import serviceImg01 from '@/public/images/service/service-img01.jpg'
import serviceImg02 from '@/public/images/service/service-img02.jpg'
import serviceImg03 from '@/public/images/service/service-img03.jpg'
import serviceImg04 from '@/public/images/service/service-img04.jpg'

export interface Service {
  Id: string
  title: string
  slug: string
  sImg?: StaticImageData
  sLogo?: StaticImageData
  thumb1?: string
  thumb2?: string
  description?: string
  features?: string[]
  bgClass?: string
}

const Services: Service[] = [
  {
    Id: "1",
    sImg: icon2,
    sLogo: web,
    title: "Web Development",
    slug: "web-development",
    thumb1: "Strategy",
    thumb2: "Consultation",
    description:
      "Web Development builds and maintains websites and web applications for the internet.",
  },
  {
    Id: "2",
    sImg: icon8,
    sLogo: data,
    title: "Data Analysis",
    slug: "data-analysis",
    thumb1: "Management",
    thumb2: "Transfer",
    description:
      "Data Analysis examines data sets to draw conclusions about the information they contain.",
  },
  {
    Id: "3",
    sImg: icon5,
    sLogo: seo,
    title: "SEO audit",
    slug: "SEO-audit",
    thumb1: "Website",
    thumb2: "Mobile App",
    description:
      "An SEO audit evaluates a website identify improvements for better search rankings and visibility.",
  },
  {
    Id: "4",
    sImg: icon6,
    sLogo: cyber,
    title: "Cyber Security",
    slug: "cyber-security",
    description:
      "Cyber Security protects systems, networks, and programs from digital attacks.",
  },
  {
    Id: "5",
    sImg: icon7,
    sLogo: crm,
    title: "Custom CRM services",
    slug: "Custom-CRM-services",
    description:
      "Custom CRM services tailor customer relationship management solutions to fit specific business needs.",
  },
  {
    Id: "6",
    sImg: icon3,
    sLogo: hosting,
    title: "Hosting",
    slug: "Hosting",
    description:
      "Hosting services provide the infrastructure and support needed to host websites and applications.",
  },
  {
    Id: "7",
    sImg: icon4,
    sLogo: deployment,
    title: "Continuous Deployment",
    slug: "Continuous-Deployment",
    description:
      "Continuous Deployment automates software release process, ensuring rapid and reliable delivery to users.",
  },
  {
    Id: "8",
    sImg: icon1,
    sLogo: ai,
    title: "AI solution Design",
    slug: "AI-solution",
    description:
      "We design AI solutions that use your newly found insights to identify new opportunities for improvement.",
  },
];

export default Services
