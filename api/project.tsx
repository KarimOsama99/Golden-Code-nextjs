import pImg5 from '@/public/images/project/img01.png'
import pImg6 from '@/public/images/project/img02.png'
import pImg7 from '@/public/images/project/img03.png'



import icon1 from '@/public/images/icon/pro-icon01.png'
import icon2 from '@/public/images/icon/pro-icon02.png'
import icon3 from '@/public/images/icon/pro-icon03.png'


const getProjects = (t: any) => [
  {
    Id: "1",
    pImg: "/images/project/ezhalha.png",
    title: t('p1Title'),
    slug: "ezhalha-ride-hailing-and-negotiation",
    rnumber: "315",
    rtext: t('rtext'),
    tnumber: "218",
    ttext: t('ttext'),
    snumber: "522",
    stext: t('stext'),
    description: t('p1Desc'),
  },
  {
    Id: "2",
    pImg: "/images/project/salamclinic.png",
    title: t('p2Title'),
    slug: "How-greenish-achieved-a-eco-friendly-SEO-success",
    rnumber: "310",
    rtext: t('rtext'),
    tnumber: "121",
    ttext: t('ttext'),
    snumber: "410",
    stext: t('stext'),
    description: t('p2Desc'),
  },
  {
    Id: "3",
    pImg: "/images/project/uniguide.png",
    title: t('p3Title'),
    slug: "Expanding-cambridges-reach-with-SEO-solutions",
    rnumber: "418",
    rtext: t('rtext'),
    tnumber: "185",
    ttext: t('ttext'),
    snumber: "480",
    stext: t('stext'),
    description: t('p3Desc'),
  },
  {
    Id: "4",
    pImg: "/images/project/minbible.png",
    title: t('p4Title'),
    slug: "Madrids-digital-footprint-with-targeted-SEO",
    rnumber: "588",
    rtext: t('rtext'),
    tnumber: "355",
    ttext: t('ttext'),
    snumber: "547",
    stext: t('stext'),
    description: t('p4Desc'),
  },
  {
    Id: "5",
    pImg: pImg5,
    icon: icon1,
    title: t('p5Title'),
    slug: "Delivering-remote-solutions",
    rtext1: "product design",
    rtext2: "logo",
    rtext3: "visual identity",
    description: t('p5Desc'),
  },
  {
    Id: "6",
    pImg: pImg6,
    icon: icon2,
    title: t('p6Title'),
    slug: "Real-time-health-monitoring",
    rtext1: "product design",
    rtext2: "App",
    rtext3: "visual identity",
    description: t('p6Desc'),
  },
  {
    Id: "7",
    pImg: pImg7,
    icon: icon3,
    title: t('p7Title'),
    slug: "Simple-time-management",
    rtext1: "product design",
    rtext2: "3d",
    rtext3: "visual identity",
    description: t('p7Desc'),
  },
  {
    Id: "8",
    pImg: pImg6,
    icon: icon2,
    title: t('p6Title'),
    slug: "Real-time-health-monitoring",
    rtext1: "product design",
    rtext2: "App",
    rtext3: "visual identity",
    description: t('p6Desc'),
  },
  {
    Id: "9",
    pImg: pImg6,
    icon: icon2,
    title: t('p6Title'),
    slug: "Real-time-health-monitoring",
    rtext1: "product design",
    rtext2: "App",
    rtext3: "visual identity",
    description: t('p6Desc'),
  },
];

export default getProjects;