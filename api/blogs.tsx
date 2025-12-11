// /api/blogs.ts

import { StaticImageData } from "next/image";

// Import all images
import blogImg1 from "@/public/images/blog/da-img01.webp";
import blogImg2 from "@/public/images/blog/da-img02.webp";


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
}

export interface ReadableBlog extends BlogBase {
  read: string;
}

export type Blog = BlogBase | ReadableBlog;

export const getBlogs = (t: any): Blog[] => [
  {
    id: "1",
    title: t('b1Title'),
    slug: "Website Design for Small Businesses Essential Guide",
    screens: blogImg1,
    description: t('b1Desc'),
    author: "Karim",
    authorTitle: t('b1AuthorTitle'),
    create_at: "October 10, 2025",
    comment: "35",
    thumb: t('b1Thumb'),
    blClass: "format-standard-image",
  },
  {
    id: "2",
    title: t('b2Title'),
    slug: "Software Solutions Revolutionizing Business Operations",
    screens: blogImg2,
    description: t('b2Desc'),
    author: "Mohamed",
    authorTitle: t('b2AuthorTitle'),
    create_at: "May 5, 2025",
    comment: "80",
    thumb: t('b2Thumb'),
    blClass: "format-standard-image",
  },
];
