import React, { Fragment } from "react";
import Header from "@/components/header/Header";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import BlogSingle from "@/components/BlogDetails/BlogDetails";
import { notFound } from "next/navigation";
import { blogs } from "@/api/blogs";
import type { Blog } from "@/api/blogs";
import icon from "@/public/images/icon/cap.svg";
import Image1 from "@/public/images/vectors/web.png";
import Image2 from "@/public/images/shape/brd_shape.png";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailsPage(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const blog: Blog | undefined = blogs.find(
    (b) =>
      b.slug.toLowerCase().replace(/\s+/g, "-") ===
      slug.toLowerCase().replace(/\s+/g, "-")
  );

  if (!blog) {
    notFound();
  }

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
                      <Image src={icon} alt="Icon" /> Blog details
                    </span>
                    <h2 className="title">
                      {blog.title}
                    </h2>
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