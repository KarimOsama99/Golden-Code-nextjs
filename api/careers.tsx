export type Job = {
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

// Raw careers data without translations - used for generateStaticParams
const RAW_CAREERS: Job[] = [
  {
    id: 1,
    title: "Enterprise SEO Consultant",
    location: "Cairo, Egypt",
    type: "Full Time",
    slug: "enterprise-seo-consultant",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "January 1, 2026",
    categories: ["cat1", "cat3", "cat5"],
  },
  {
    id: 2,
    title: "IT Infrastructure Manager",
    location: "Cairo, Egypt",
    type: "Full Time",
    slug: "it-infrastructure-manager",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "October 10, 2027",
    categories: ["cat2", "cat4"],
  },
  {
    id: 3,
    title: "Technical Project Manager",
    location: "Cairo, Egypt",
    type: "Full Time",
    slug: "technical-project-manager",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "April 10, 2028",
    categories: ["cat1", "cat5"],
  },
  {
    id: 4,
    title: "Cloud Solutions Architect",
    location: "Cairo, Egypt",
    type: "Full Time",
    slug: "cloud-solutions-architect",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "May 10, 2026",
    categories: ["cat2", "cat3"],
  },
  {
    id: 5,
    title: "IT Support Engineer",
    location: "Cairo, Egypt",
    type: "Full Time",
    slug: "it-support-engineer",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "December 6, 2026",
    categories: ["cat1", "cat4"],
  },
  {
    id: 6,
    title: "Global Benefits Manager",
    location: "Cairo, Egypt",
    type: "Full Time",
    slug: "global-benefits-manager",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "December 10, 2024",
    categories: ["cat2", "cat3", "cat5"],
  },
];

// Get raw careers without translations (for static generation)
export const getRawCareers = (): Job[] => RAW_CAREERS;

// Get careers with translations (for rendering)
const getCareers = (t: any): Job[] => [
  {
    id: 1,
    title: t("j1Title"),
    location: t("j1Location"),
    type: t("fullTime"),
    slug: "enterprise-seo-consultant",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "January 1, 2026",
    categories: ["cat1", "cat3", "cat5"],
  },
  {
    id: 2,
    title: t("j2Title"),
    location: t("j2Location"),
    type: t("fullTime"),
    slug: "it-infrastructure-manager",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "October 10, 2027",
    categories: ["cat2", "cat4"],
  },
  {
    id: 3,
    title: t("j3Title"),
    location: t("j3Location"),
    type: t("fullTime"),
    slug: "technical-project-manager",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "April 10, 2028",
    categories: ["cat1", "cat5"],
  },
  {
    id: 4,
    title: t("j4Title"),
    location: t("j4Location"),
    type: t("fullTime"),
    slug: "cloud-solutions-architect",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "May 10, 2026",
    categories: ["cat2", "cat3"],
  },
  {
    id: 5,
    title: t("j5Title"),
    location: t("j5Location"),
    type: t("fullTime"),
    slug: "it-support-engineer",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "December 6, 2026",
    categories: ["cat1", "cat4"],
  },
  {
    id: 6,
    title: t("j6Title"),
    location: t("j6Location"),
    type: t("fullTime"),
    slug: "global-benefits-manager",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "December 10, 2024",
    categories: ["cat2", "cat3", "cat5"],
  },
];

export default getCareers;
