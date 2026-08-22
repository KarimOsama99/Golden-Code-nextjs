"use client";

import React from "react";

import {Link} from "@/i18n/routing";
import Image from "next/image";
import {useTranslations} from 'next-intl';

import { getBlogs } from "../../api/blogs";
import SearchIcon from "@/public/images/icon/search-icon.svg";
import fallbackImage from "@/public/images/blog/b-img01.jpg";

const BlogList = () => {
    const t = useTranslations('BlogList');
    const tSidebar = useTranslations('BlogSidebar');
    const tData = useTranslations('BlogData');
    const blogs = getBlogs(tData);
  return (
    <div>
      {/* Blog List Section */}
      <section className="blog_details_section pb-130 pt-120">
        <div className="container">
          <div className="row justify-content-center mb-50">
            <div className="col-lg-8">
              <div className="sidebar_widget mb-0" style={{ padding: '30px', borderRadius: '10px' }}>
                <form className="form-group mb-0">
                  <input
                    className="form-control"
                    type="search"
                    name="search"
                    placeholder={tSidebar('searchPlaceholder')}
                    style={{ height: '60px', fontSize: '18px' }}
                  />
                  <button type="submit" className="search_icon" aria-label="Search">
                    <Image src={SearchIcon} alt="Search icon" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row mt-none-30 g-0 align-items-start">
            <div className="col-lg-12 mt-30">
              <div className="blog_details_content">
                <div className="row">
                  {blogs.slice(0, 6).map((blog, index) => (
                    <div className="col-lg-6 mb-4" key={index}>
                      <div className="blog_details_item ul_li h-100" style={{ margin: 0 }}>
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
                          {t('readMore')} <i className="far fa-arrow-right text-white"></i>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
