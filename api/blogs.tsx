// /api/blogs.ts

import { StaticImageData } from "next/image";

// Import all images
import blogImg1 from "@/public/images/service/web.webp";
import blogImg2 from "@/public/images/service/software.webp";

// Base blog interface without read time
export interface BlogBase {
  id: string;
  title: string;
  slug: string;
  screens: StaticImageData;
  description?: string;
  author?: string;
  authorTitle?: string;
  create_at?: string;
  comment?: string;
  thumb?: string;
  blClass?: string;
  heading?: string;
  introContent?: string;
  introContent2?: string;
  sectionHeading?: string;
  sectionContent?: string;
  sectionPoints?: string[];
  conclusionHeading?: string;
  conclusionContent?: string;
  conclusionPoints?: string[];
}

export interface ReadableBlog extends BlogBase {
  read: string;
}

export type Blog = BlogBase | ReadableBlog;

// Raw blog data without translations - used for generateStaticParams
const RAW_BLOGS: Blog[] = [
  {
    id: "1",
    title: "Website Design for Small Businesses Essential Guide",
    slug: "Website Design for Small Businesses Essential Guide",
    screens: blogImg1,
    description: "Website Design for Small Businesses Essential Guide",
    author: "Karim",
    authorTitle: "Author",
    create_at: "October 10, 2025",
    comment: "35",
    thumb: "thumb",
    blClass: "format-standard-image",
  },
  {
    id: "2",
    title: "Software Solutions Revolutionizing Business Operations",
    slug: "Software Solutions Revolutionizing Business Operations",
    screens: blogImg2,
    description: "Software Solutions Revolutionizing Business Operations",
    author: "Mohamed",
    authorTitle: "Author",
    create_at: "May 5, 2025",
    comment: "80",
    thumb: "thumb",
    blClass: "format-standard-image",
  },
];

// Get raw blogs without translations (for static generation)
export const getRawBlogs = (): Blog[] => RAW_BLOGS;

// Get static params with normalized slugs
export const getBlogsStaticParams = () => {
  return RAW_BLOGS.map((blog) => ({
    slug: blog.slug.toLowerCase().replace(/\s+/g, "-"),
  }));
};

// Get blogs with translations (for rendering)
export const getBlogs = (t: any): Blog[] => [
  {
    id: "1",
    title: t("b1Title"),
    slug: "Website Design for Small Businesses Essential Guide",
    screens: blogImg1,
    description: t("b1Desc"),
    author: "Karim",
    authorTitle: t("b1AuthorTitle"),
    create_at: "October 10, 2025",
    comment: "35",
    thumb: t("b1Thumb"),
    blClass: "format-standard-image",
    heading: t("b1Heading"),
    introContent: t("b1IntroContent"),
    introContent2: t("b1IntroContent2"),
    sectionHeading: t("b1SectionHeading"),
    sectionContent: t("b1SectionContent"),
    sectionPoints: [t("b1Point1"), t("b1Point2"), t("b1Point3"), t("b1Point4")],
    conclusionHeading: t("b1ConclusionHeading"),
    conclusionContent: t("b1ConclusionContent"),
    conclusionPoints: [t("b1ConcPoint1"), t("b1ConcPoint2"), t("b1ConcPoint3")],
  },
  {
    id: "2",
    title: t("b2Title"),
    slug: "Software Solutions Revolutionizing Business Operations",
    screens: blogImg2,
    description: t("b2Desc"),
    author: "Mohamed",
    authorTitle: t("b2AuthorTitle"),
    create_at: "May 5, 2025",
    comment: "80",
    thumb: t("b2Thumb"),
    blClass: "format-standard-image",
    heading: t("b2Heading"),
    introContent: t("b2IntroContent"),
    introContent2: t("b2IntroContent2"),
    sectionHeading: t("b2SectionHeading"),
    sectionContent: t("b2SectionContent"),
    sectionPoints: [t("b2Point1"), t("b2Point2"), t("b2Point3"), t("b2Point4")],
    conclusionHeading: t("b2ConclusionHeading"),
    conclusionContent: t("b2ConclusionContent"),
    conclusionPoints: [t("b2ConcPoint1"), t("b2ConcPoint2"), t("b2ConcPoint3")],
  },
];
