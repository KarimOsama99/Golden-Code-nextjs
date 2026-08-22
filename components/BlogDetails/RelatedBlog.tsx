"use client";

import React, { FC } from "react";
import { getBlogs, Blog } from "../../api/blogs";
import {Link} from '@/i18n/routing';
import Image from "next/image";
import { useTranslations } from "next-intl";

interface RelatedBlogProps {
  currentSlug: string;
}

const RelatedBlog: FC<RelatedBlogProps> = ({ currentSlug }) => {
  const t = useTranslations('BlogData');
  const tDetails = useTranslations('BlogDetails');
  
  const blogs = getBlogs(t).filter(
    (b) =>
      b.slug.toLowerCase().replace(/\s+/g, "-") !==
      currentSlug.toLowerCase().replace(/\s+/g, "-")
  );

  return (
    <div className="row mt-none-30">
      {blogs.slice(0, 3).map((blog: Blog) => (
        <div className="col-lg-4 col-md-6 mt-30" key={blog.slug}>
          <div className="blog-details_wrap">
            <div className="blog-details_item">
              <div className="xb-item--img">
                <Link
                  href={`/blog/${blog.slug.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Image
                    src={blog.screens}
                    alt={blog.title}
                    width={400}
                    height={250}
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="xb-item--holder">
                <div className="xb-item--meta ul_li">
                  <span className="xb-item--meta_label1">
                    {blog.thumb ?? "No category"}
                  </span>
                  <span className="xb-item--meta_label">
                    {tDetails('by')} {blog.author ?? "Unknown"}
                  </span>
                </div>
                <h3 className="item_details_info_heading border-effect line-clamp-2">
                  <Link
                    href={`/blog/${blog.slug
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {blog.title}
                  </Link>
                </h3>
                <Link
                  href={`/blog/${blog.slug.toLowerCase().replace(/\s+/g, "-")}`}
                  className="xb-item--det-btn"
                >
                  {tDetails('readMore')} <i className="far fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedBlog;
