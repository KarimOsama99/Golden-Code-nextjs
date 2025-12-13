import React, { Fragment } from "react";
import { notFound } from "next/navigation";
import Header from "@/components/header/Header";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import Services, { getRawServices } from "@/api/service";
import { Link } from "@/i18n/routing";
import icon from "@/public/images/icon/ser-01.svg";
import vImg from "@/public/images/service/hosting.jpeg";
import sImg1 from "@/public/images/icon/sd-icon01.svg";
import sImg2 from "@/public/images/icon/sd-icon02.svg";
import sImg3 from "@/public/images/icon/sd-icon03.svg";
import sImg4 from "@/public/images/icon/sd-icon04.svg";
import shape from "@/public/images/shape/sd-shape.png";
import Image from "next/image";

import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  // Map your data source to an array of objects,
  // where each object contains the dynamic segment key (slug)
  const services = getRawServices();
  return services.map((item) => ({
    // The key MUST match the folder name: [slug]
    slug: item.slug,
  }));
}

async function ServiceSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations("ServiceData");
  const tSingle = await getTranslations("ServiceSinglePage");
  const allServices = Services(t);
  const service = allServices.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!service) return notFound();

  return (
    <Fragment>
      <div className="sco_agency">
        <Header />
        <main className="page_content service-single-page">
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
                        <Image src={icon} alt="" /> {service.title}
                      </span>
                      <h2 className="title">{service.description}</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-30">
                    <div className="sd-right-img pos-rel">
                      <Image
                        src={service.sLogo ?? icon}
                        alt={service.title || ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="video pt-70 pb-65">
            <div className="container">
              <div className="xb-video sd-video pos-rel">
                <Image src={service.sCover ?? icon} alt={service.title || ""} />
                {/* <button className="popup-video btn-video">
                  <Image src={vImg2} alt="" />
                </button> */}
              </div>
            </div>
          </div>

          <div className="sd-ser-content_wrap pb-110">
            <div className="container">
              <div className="sd-ser-content">
                <h2 className="sd-title">{service.heading}</h2>
                <p className="sd-content lead">{service.description2}</p>
              </div>
            </div>
          </div>

          <div className="sd-process_warp">
            <div className="container">
              <div className="sd-heading">
                <h2 className="sd-title">{tSingle("processTitle")}</h2>
              </div>
              <div className="sd-process_inner ul_li">
                <div className="sd-process-item">
                  <div className="xb-item--icon">
                    <Image src={sImg4} alt="" />
                  </div>
                  <h3 className="xb-item--title">{tSingle("p1Title")}</h3>
                  <p className="xb-item--contact">{tSingle("p1Desc")}</p>
                  <span className="xb-item--number">01</span>
                </div>

                <div className="sd-process-item">
                  <div className="xb-item--icon">
                    <Image src={sImg2} alt="" />
                  </div>
                  <h3 className="xb-item--title">{tSingle("p2Title")}</h3>
                  <p className="xb-item--contact">{tSingle("p2Desc")}</p>
                  <span className="xb-item--number">02</span>
                </div>

                <div className="sd-process-item">
                  <div className="xb-item--icon">
                    <Image src={sImg3} alt="" />
                  </div>
                  <h3 className="xb-item--title">{tSingle("p3Title")}</h3>
                  <p className="xb-item--contact">{tSingle("p3Desc")}</p>
                  <span className="xb-item--number">03</span>
                </div>

                <div className="sd-process-item">
                  <div className="xb-item--icon">
                    <Image src={sImg1} alt="" />
                  </div>
                  <h3 className="xb-item--title">{tSingle("p4Title")}</h3>
                  <p className="xb-item--contact">{tSingle("p4Desc")}</p>
                  <span className="xb-item--number">04</span>
                </div>

                <div className="sd-shape">
                  <Image src={shape} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="sd-service_wrap pt-115 pb-130">
            <div className="container">
              <div className="sd-heading">
                <h2 className="sd-title text-center">
                  {tSingle("orderTitle")}
                </h2>
              </div>
              <div className="cp-det-btn mt-20 d-flex">
                <Link
                  href={"/contact"}
                  className="cp-btn thm-btn thm-btn--aso thm-btn--aso_yellow m-auto"
                >
                  {tSingle("contactBtn")}
                  <i className="fal fa-arrow-right text-white"></i>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <CtaSection />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
}

export default ServiceSinglePage;
