import React, { Fragment } from "react";
import Header from "@/components/header/Header";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import BlogSingle from "@/components/BlogDetails/BlogDetails";
import { notFound } from "next/navigation";
import { getBlogs, getRawBlogs, getBlogsStaticParams } from "@/api/blogs";
import type { Blog } from "@/api/blogs";
import icon from "@/public/images/icon/cap.svg";
import Image1 from "@/public/images/vectors/web.png";
import Image2 from "@/public/images/shape/brd_shape.png";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const locales = ["en", "ar"];
  const blogs = getBlogsStaticParams();

  const params = [];
  for (const locale of locales) {
    for (const blog of blogs) {
      params.push({
        locale,
        slug: blog.slug,
      });
    }
  }
  return params;
}

export default async function BlogDetailsPage(props: Props) {
  const params = await props.params;
  const { slug } = params;

  // First, find the blog using raw data (no translations needed)
  const rawBlogs = getRawBlogs();
  const rawBlog = rawBlogs.find(
    (b) =>
      b.slug.toLowerCase().replace(/\s+/g, "-") ===
      slug.toLowerCase().replace(/\s+/g, "-")
  );

  if (!rawBlog) {
    notFound();
  }

  // Now get translations for rendering
  const t = await getTranslations("BlogData");
  const tPage = await getTranslations("BlogSlugPage");
  const blogs = getBlogs(t);
  const blog: Blog | undefined = blogs.find(
    (b) =>
      b.slug.toLowerCase().replace(/\s+/g, "-") ===
      slug.toLowerCase().replace(/\s+/g, "-")
  );

  return (
    <Fragment>
      <Header />
      <main className="page_content blog-page">
        <section
          className="page-title pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url('/images/bg/page_bg01.jpg')` }}
        >
          <div className="container">
            <div className="page-title-wrap sd-title-wrap">
              <div className="row mt-none-30 align-items-center">
                <div className="col-lg-8 mt-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <Image src={icon} alt="Icon" /> {tPage("subTitle")}
                    </span>
                    <h2 className="title">{blog.title}</h2>
                  </div>
                </div>
                <div className="col-lg-4 mt-30">
                  <div className="sd-right-img pos-rel">
                    <Image src={Image1} alt="Right Illustration" />
                    <div className="sd-arrow-shape style-2">
                      <Image
                        className="xbzoominzoomup"
                        src={Image2}
                        alt="Arrow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BlogSingle blog={blog} />
      </main>

      <CtaSection cClass={"bg"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
}
