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

import serviceImg01 from '@/public/images/service/web.webp'
import serviceImg02 from '@/public/images/service/data.webp'
import serviceImg03 from '@/public/images/service/seo.webp'
import serviceImg04 from '@/public/images/service/cyber.webp'
import serviceImg05 from '@/public/images/service/crm.webp'
import serviceImg06 from '@/public/images/service/hosting.webp'
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

const Services: Service[] = [
  {
    Id: "1",
    sImg: icon2,
    sLogo: web,
    sCover: serviceImg01,
    title: "Web Development",
    slug: "web-development",
    thumb1: "Strategy",
    thumb2: "Consultation",
    description:
      "Web Development builds and maintains websites and web applications for the internet.",
    heading: "Front-End & Back-End Expertise",
    description2:
      "We specialize in full-stack development, using modern frameworks like React, Angular, or Vue.js for the front-end, and Node.js, Python, or PHP for the back-end.",
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
    description:
      "Data Analysis examines data sets to draw conclusions about the information they contain.",
    heading: "Actionable Insights",
    description2:
      "We transform raw data into clear, actionable insights using statistical methods and visualization tools (e.g., Tableau, Power BI) to inform your strategic decisions.",
  },
  {
    Id: "3",
    sImg: icon5,
    sLogo: seo,
    sCover: serviceImg03,
    title: "SEO audit",
    slug: "SEO-audit",
    thumb1: "Website",
    thumb2: "Mobile App",
    description:
      "An SEO audit evaluates a website identify improvements for better search rankings and visibility.",
    heading: "Comprehensive Site Evaluation",
    description2:
      "Our audits cover technical SEO, on-page factors, off-page links, and content strategy to provide a holistic view of your search engine performance.",
  },
  {
    Id: "4",
    sImg: icon6,
    sLogo: cyber,
    sCover: serviceImg04,
    title: "Cyber Security",
    slug: "cyber-security",
    description:
      "Cyber Security protects systems, networks, and programs from digital attacks.",
    heading: "Proactive Threat Defense",
    description2:
      "We implement robust security protocols, including penetration testing, vulnerability management, and employee training to mitigate risks and ensure data integrity.",
  },
  {
    Id: "5",
    sImg: icon7,
    sLogo: crm,
    sCover: serviceImg05,
    title: "Custom CRM services",
    slug: "Custom-CRM-services",
    description:
      "Custom CRM services tailor customer relationship management solutions to fit specific business needs.",
    heading: "Streamline Sales & Marketing",
    description2:
      "We build CRM systems that integrate seamlessly with your existing tools, automating workflows and providing a unified view of the customer journey.",
  },
  {
    Id: "6",
    sImg: icon3,
    sLogo: hosting,
    sCover: serviceImg06,
    title: "Hosting",
    slug: "Hosting",
    description:
      "Hosting services provide the infrastructure and support needed to host websites and applications.",
    heading: "Reliable Cloud Solutions",
    description2:
      "Choose from dedicated, shared, or cloud hosting solutions optimized for speed, scalability, and 99.9% uptime for maximum performance.",
  },
  {
    Id: "7",
    sImg: icon4,
    sLogo: deployment,
    sCover: serviceImg07,
    title: "Continuous Deployment",
    slug: "Continuous-Deployment",
    description:
      "Continuous Deployment automates software release process, ensuring rapid and reliable delivery to users.",
    heading: "Rapid & Consistent Delivery",
    description2:
      "We set up automated CI/CD pipelines using tools like Jenkins, GitLab CI, or GitHub Actions to deploy verified code changes quickly and with minimal human error.",
  },
  {
    Id: "8",
    sImg: icon1,
    sLogo: ai,
    sCover: serviceImg08,
    title: "AI solution Design",
    slug: "AI-solution",
    description:
      "We design AI solutions that use your newly found insights to identify new opportunities for improvement.",
    heading: "Machine Learning Integration",
    description2:
      "From predictive models to natural language processing, we design and deploy custom AI models that automate tasks and unlock strategic value in your operations.",
  },
];

export default Services
