// "use client";

import React, { Fragment } from "react";
import Header from "@/components/header/Header";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import icon from "@/public/images/icon/magic.svg";
import gImg from "@/public/images/vectors/career.png";
import Image from "next/image";
import ApplyForm from "./applyForm";
import { notFound } from "next/navigation";
import jobListings from "@/api/careers";
import { getTranslations } from "next-intl/server";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  // Map your data source to an array of objects,
  // where each object contains the dynamic segment key (slug)
  return jobListings((key: string) => key).map((item) => ({
    // The key MUST match the folder name: [slug]
    slug: item.slug,
  }));
}

const CareerSingle: React.FC<Props> = async ({ params }) => {
  const { slug } = params;
  const t = await getTranslations('CareerJobs');
  const tPage = await getTranslations('CareerSlugPage');
  const job = jobListings(t).find((item) => item.slug === slug);

  if (!job) {
    notFound();
  }
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <Header />
        <section
          className="page-title cp-page-title pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url('/images/bg/page_bg01.jpg')` }}
        >
          <div className="container">
            <div className="page-title-wrap">
              <div className="row mt-none-30 align-items-center">
                <div className="col-lg-8 mt-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <Image src={icon} alt="icon" /> {tPage('subTitle')}
                    </span>
                    <h2 className="title">
                      {job.title}
                    </h2>
                  </div>
                </div>
                <div className="col-lg-4 mt-30">
                  <div className="xb-img">
                    <Image src={gImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cp-det-bg">
          <section className="career-details">
            <div className="container">
              <div className="cp-details-wrap">
                <div className="cp-manager_info">
                  <h2 className="xb-item--title">
                    {job.title} - ({job.type})
                  </h2>
                  <ul className="xb-details-content list-unstyled">
                    <li>
                      <span>{tPage('jobType')}</span> {job.type}
                    </li>
                    <li>
                      <span>{tPage('location')}</span> {job.location}
                    </li>
                    <li>
                      <span>{tPage('salary')}</span> {job.minSalary} to {job.maxSalary} EGP {tPage('basedOnExperience')}
                    </li>
                    <li>
                      <span>{tPage('deadline')}</span> {job.deadline}
                    </li>
                    <li>
                      <span>{tPage('expRequired')}</span> {tPage('yearsPlus')}
                    </li>
                  </ul>
                  <p className="xb-item--content">
                    {tPage('description')}
                    <br />
                    <br />
                    {tPage('description2')}
                  </p>
                </div>

                <div className="xb-details-item">
                  <h3 className="xb-item--title">
                    {tPage('whatYouDo')}
                  </h3>
                  <ul className="xb-details-content">
                    <li>{tPage('requirement1')}</li>
                    <li>{tPage('requirement2')}</li>
                    <li>{tPage('requirement3')}</li>
                    <li>{tPage('requirement4')}</li>
                    <li>{tPage('requirement5')}</li>
                    <li>{tPage('requirement6')}</li>
                    <li>{tPage('requirement7')}</li>
                    <li>{tPage('requirement8')}</li>
                    <li>{tPage('requirement9')}</li>
                  </ul>
                </div>

                <div className="xb-details-item">
                  <h3 className="xb-item--title">{tPage('youMightHave')}</h3>
                  <ul className="xb-details-content">
                    <li>{tPage('bonus1')}</li>
                    <li>{tPage('bonus2')}</li>
                    <li>{tPage('bonus3')}</li>
                    <li>{tPage('bonus4')}</li>
                    <li>{tPage('bonus5')}</li>
                    <li>{tPage('bonus6')}</li>
                  </ul>
                </div>

                <div className="xb-details-item">
                  <h3 className="xb-item--title">{tPage('benefits')}</h3>
                  <ul className="xb-details-content">
                    <li>{tPage('benefit1')}</li>
                    <li>{tPage('benefit2')}</li>
                    <li>{tPage('benefit3')}</li>
                    <li>{tPage('benefit4')}</li>
                    <li>{tPage('benefit5')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="cp-contact-wrap pt-130 pb-130">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ApplyForm jobTitle={job.title} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <CtaSection />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default CareerSingle;
