type Job = {
  id: number;
  title: string;
  location: string;
  type: string;
  slug: string;
  minSalary: number;
  maxSalary: number;
  deadline: string;
  categories: string[];
};

const getCareers = (t: any): Job[] => [
  {
    id: 1,
    title: t('j1Title'),
    location: t('j1Location'),
    type: t('fullTime'),
    slug: "enterprise-seo-consultant",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "January 1, 2026",
    categories: ["cat1", "cat3", "cat5"],
  },
  {
    id: 2,
    title: t('j2Title'),
    location: t('j2Location'),
    type: t('fullTime'),
    slug: "it-infrastructure-manager",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "October 10, 2027",
    categories: ["cat2", "cat4"],
  },
  {
    id: 3,
    title: t('j3Title'),
    location: t('j3Location'),
    type: t('fullTime'),
    slug: "technical-project-manager",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "April 10, 2028",
    categories: ["cat1", "cat5"],
  },
  {
    id: 4,
    title: t('j4Title'),
    location: t('j4Location'),
    type: t('fullTime'),
    slug: "cloud-solutions-architect",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "May 10, 2026",
    categories: ["cat2", "cat3"],
  },
  {
    id: 5,
    title: t('j5Title'),
    location: t('j5Location'),
    type: t('fullTime'),
    slug: "it-support-engineer",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "December 6, 2026",
    categories: ["cat1", "cat4"],
  },
  {
    id: 6,
    title: t('j6Title'),
    location: t('j6Location'),
    type: t('fullTime'),
    slug: "global-benefits-manager",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "December 10, 2024",
    categories: ["cat2", "cat3", "cat5"],
  },
];

export default getCareers;