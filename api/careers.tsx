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

const jobListings: Job[] = [
  {
    id: 1,
    title: "Enterprise SEO Consultant",
    location: "Remote, (USA)",
    type: "Full time",
    slug: "enterprise-seo-consultant",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "January 1, 2026",
    categories: ["cat1", "cat3", "cat5"],
  },
  {
    id: 2,
    title: "IT Infrastructure Manager",
    location: "Remote, Colombia",
    type: "Full time",
    slug: "it-infrastructure-manager",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "October 10, 2027",
    categories: ["cat2", "cat4"],
  },
  {
    id: 3,
    title: "Technical Project Manager",
    location: "Warsaw, Poland",
    type: "Full time",
    slug: "technical-project-manager",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "April 10, 2028",
    categories: ["cat1", "cat5"],
  },
  {
    id: 4,
    title: "Cloud Solutions Architect",
    location: "Bangalore (Hybrid)",
    type: "Full time",
    slug: "cloud-solutions-architect",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "May 10, 2026",
    categories: ["cat2", "cat3"],
  },
  {
    id: 5,
    title: "IT Support Engineer",
    location: "Remote, Argentina",
    type: "Full time",
    slug: "it-support-engineer",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "December 6, 2026",
    categories: ["cat1", "cat4"],
  },
  {
    id: 6,
    title: "Global Benefits Manager",
    location: "Remote, Canada",
    type: "Full time",
    slug: "global-benefits-manager",
    minSalary: 6000,
    maxSalary: 13000,
    deadline: "December 10, 2024",
    categories: ["cat2", "cat3", "cat5"],
  },
];

export default jobListings;