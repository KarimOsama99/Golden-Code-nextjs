"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";

import { blogs } from "../../api/blogs";
import BlogSidebar from "../BlogSidebar";
import fallbackImage from "@/public/images/blog/b-img01.jpg";

const BlogList = () => {
  return (
    <div>
      {/* Blog List Section */}
      <section className="blog_details_section pb-130 pt-120">
        <div className="container">
          <div className="row mt-none-30 g-0 align-items-start">
            <div className="col-lg-8 mt-30">
              <div className="blog_details_content">
                {blogs.slice(0, 6).map((blog, index) => (
                  <div className="blog_details_item ul_li" key={index}>
                    <div className="xb-item--img">
                      <Link
                        href={`/blog/${blog.slug
                          .toLowerCase()
                          .replace(
                            /\s+/g,
                            "-"
                          )}`}
                      >
                        <Image
                          src={blog.screens || fallbackImage}
                          alt={blog.title}
                          width={800}
                          height={500}
                        />
                      </Link>
                    </div>
                    <div className="xb-item--holder">
                      <span className="xb-item--text text-primary">{blog.thumb}</span>
                      <h3 className="xb-item--title border-effect">
                        <Link
                          href={`/blog/${blog.slug
                            .toLowerCase()
                            .replace(
                              /\s+/g,
                              "-"
                            )}`}
                        >
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="xb-item--content line-clamp-1">{blog.description}</p>
                      <div className="xb-item--button mt-50">
                        <Link
                          href={`/blog/${blog.slug
                            .toLowerCase()
                            .replace(
                              /\s+/g,
                              "-"
                            )}`}
                        >
                          Read more <i className="far fa-arrow-right text-white"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Basic Pagination UI */}
                <ul className="blog-pagination ul_li">
                  <li>
                    <Link href="/blog?page=1">
                      <i className="fas fa-chevron-double-left"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog?page=1">1</Link>
                  </li>
                  <li className="active">
                    <Link href="/blog?page=2">2</Link>
                  </li>
                  <li>
                    <Link href="/blog?page=3">3</Link>
                  </li>
                  <li>
                    <Link href="/blog?page=4">
                      <i className="fas fa-chevron-double-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Blog Sidebar */}
            <BlogSidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
