import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Scrollbar from "@/components/scrollbar/scrollbar";
import CtaSection from "@/components/CtaSection/CtaSection";
import { notFound } from "next/navigation";
import caseStudies from "@/api/case";

import icon from "@/public/images/icon/eye-icon.svg";
// import caseImg from "@/public/images/service/cd-image.jpg";
import cIcon1 from "@/public/images/icon/csd-icon01.svg";
import cIcon2 from "@/public/images/icon/csd-icon02.svg";
import cIcon3 from "@/public/images/icon/csd-icon03.svg";
import cIcon4 from "@/public/images/icon/check-mark.png";
import cIcon from "@/public/images/icon/check-icon.svg";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  // Map your data source to an array of objects,
  // where each object contains the dynamic segment key (slug)
  return caseStudies.map((item) => ({
    // The key MUST match the folder name: [slug]
    slug: item.slug,
  }));
}

export default function CaseStudySingle({ params }: Props) {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    notFound();
  }
  return (
    <div className="body_wrap sco_agency">
      <Header />
      <section
        className="page-title pt-200 pos-rel bg_img"
        style={{ backgroundImage: `url(/images/bg/page_bg01.jpg)` }}
      >
        <div className="container">
          <div className="page-title-wrap">
            <div className="row mt-none-30 align-items-center">
              <div className="col-lg-9 mt-30">
                <div className="page-title-box">
                  <span className="sub-title">
                    <Image src={icon} alt="" width={20} height={20} />Real Online Project.
                  </span>
                  <h2 className="title">
                    {study.title}
                  </h2>
                </div>
              </div>
              <div className="col-lg-3 mt-30">
                <div className="count-box">
                  <h2 className="number">
                    10<span className="suffix">+</span>
                  </h2>
                  <span className="text">
                    our most popular <br /> casestudy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="csd-img pt-70 pb-65">
        <div className="container">
          <div className="item-details_image pos-rel">
            <Image src={study.img} alt="" />
          </div>
        </div>
      </div>

      <div className="sd-ser-content_wrap pb-20">
        <div className="container">
          <div className="sd-ser-content">
            <h2 className="sd-title text-center">
              {study.slug.replace(/-/g, ' ').toUpperCase()}
            </h2>
          </div>
        </div>
      </div>

      <div className="csd-ser_warp">
        <div className="container">
          <div className="csd-ser_inner ul_li_between">
            <div className="csd-item ul_li">
              <div className="xb-icon">
                <Image src={cIcon1} alt="" />
              </div>
              <h6 className="xb-text">
                client : <span> Golden Code</span>
              </h6>
            </div>
            <div className="csd-item ul_li">
              <div className="xb-icon">
                <Image src={cIcon2} alt="" />
              </div>
              <h6 className="xb-text">
                Category : <span> {study.cat}</span>
              </h6>
            </div>
            <div className="csd-item ul_li">
              <div className="xb-icon">
                <Image src={cIcon3} alt="" />
              </div>
              <h6 className="xb-text">
                completed date : <span>{study.date}</span>
              </h6>
            </div>
            <div className="csd-item ul_li">
              <div className="xb-icon">
                <Image src={cIcon4} width={18} height={18} alt="" />
              </div>
              <h6 className="xb-text">
                Framework : <span> {study.framework}</span>
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="sd-service_wrap pt-90 pb-130">
        <div className="container">
          <div className="cp-det-btn mt-20 d-grid">
            <Link
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cp-btn thm-btn--aso thm-btn--aso_yellow m-auto"
            >
              Visit {study.title} Website
              <i className="fal fa-arrow-right text-white"></i>
            </Link>
          </div>
        </div>
      </div>

      <CtaSection />
      <Footer />
      <Scrollbar />
    </div>
  );
}
