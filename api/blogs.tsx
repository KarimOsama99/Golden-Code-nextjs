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

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Website Design for Small Businesses: Essential Guide",
    slug: "Website Design for Small Businesses Essential Guide",
    screens: blogImg1,
    description:
      "In the digital age, every business, whether large or small, is dependent on technology. Software solutions have become the backbone of modern business operations. From managing customer relationships to automating complex processes, software solutions can significantly enhance business productivity and efficiency.",
    author: "Karim",
    authorTitle: "Sineor Consultant",
    create_at: "October 10, 2025",
    comment: "35",
    thumb: "Technology",
    blClass: "format-standard-image",
  },
  {
    id: "2",
    title: "Software Solutions: Revolutionizing Business Operations",
    slug: "Software Solutions Revolutionizing Business Operations",
    screens: blogImg2,
    description: "In today’s digital world, having an online presence is not just an option for small businesses—it’s a necessity. Website design for small businesses is one of the first steps in establishing that presence, and it plays a crucial role in how potential customers perceive your business. A well-designed website can make your small business stand out, create a professional image, and help build trust with your audience.",
    author: "Mohamed",
    authorTitle: "Creative Director",
    create_at: "May 5, 2025",
    comment: "80",
    thumb: "Branding",
    blClass: "format-standard-image",
  },
];

export async function getBlogs() {
  return blogs;
}
