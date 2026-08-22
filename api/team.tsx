import timg1 from '@/public/images/bg/avatar2.jpg'
import timg2 from "@/public/images/bg/avatar.png";
import timg3 from "@/public/images/bg/avatar3.jpg";
import timg4 from "@/public/images/bg/avatar4.jpg";


const getTeams = (t: any) => [
  {
    Id: "1",
    tImg: timg1,
    name: t('t1Name'),
    slug: "Mohamed Samy",
    title: t('t1Title'),
    exprience: t('t1Exp'),
    rating: "4.9",
  },
  {
    Id: "2",
    tImg: timg2,
    name: t('t2Name'),
    slug: "Karim Osama",
    title: t('t2Title'),
    exprience: t('t2Exp'),
    rating: "4.8",
  },
  {
    Id: "3",
    tImg: timg3,
    name: t('t3Name'),
    slug: "Fathy Aly",
    title: t('t3Title'),
    exprience: t('t3Exp'),
    rating: "4.8",
  },
];

export default getTeams;