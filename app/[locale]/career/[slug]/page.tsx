// "use client";

import React, { Fragment } from "react";
import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import icon from "@/public/images/icon/magic.svg";
import gImg from "@/public/images/vectors/career.png";
import Image from "next/image";
import ApplyForm from "./applyForm";
import { notFound } from "next/navigation";
import jobListings, { getRawCareers } from "@/api/careers";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  const locales = ["en", "ar"];
  const careers = getRawCareers();

  const params = [];
  for (const locale of locales) {
    for (const career of careers) {
      params.push({
        locale,
        slug: career.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "CareerJobs" });
  const allJobs = jobListings(t);
  const job = allJobs.find((item) => item.slug === slug);

  if (!job) {
    return buildMetadata({
      locale,
      path: `/career/${slug}`,
      title: "Job Not Found",
      description: "This job listing could not be found.",
      noIndex: true,
    });
  }

  return buildMetadata({
    locale,
    path: `/career/${job.slug}`,
    title: job.title,
    description: job.description ?? job.title,
  });
}

const CareerSingle: React.FC<Props> = async ({ params }) => {
  const { slug } = await params;

  // First, find the job using raw data (no translations needed)
  const rawJobs = getRawCareers();
  const rawJob = rawJobs.find((item) => item.slug === slug);

  if (!rawJob) {
    notFound();
  }

  // Now get translations for rendering
  const t = await getTranslations("CareerJobs");
  const tPage = await getTranslations("CareerSlugPage");
  const allJobs = jobListings(t);
  const job = allJobs.find((item) => item.slug === slug);
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
                      <Image src={icon} alt="icon" /> {tPage("subTitle")}
                    </span>
                    <h1 className="title">{job.title}</h1>
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
                      <span>{tPage("jobType")}</span> {job.type}
                    </li>
                    <li>
                      <span>{tPage("location")}</span> {job.location}
                    </li>
                    <li>
                      <span>{tPage("salary")}</span> {job.minSalary} to{" "}
                      {job.maxSalary} EGP {tPage("basedOnExperience")}
                    </li>
                    <li>
                      <span>{tPage("deadline")}</span> {job.deadline}
                    </li>
                    <li>
                      <span>{tPage("expRequired")}</span> {tPage("yearsPlus")}
                    </li>
                  </ul>
                  <p className="xb-item--content">{job?.description}</p>
                </div>

                <div className="xb-details-item">
                  <h3 className="xb-item--title">{tPage("whatYouDo")}</h3>
                  <ul className="xb-details-content">
                    {job?.requirements?.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="xb-details-item">
                  <h3 className="xb-item--title">{tPage("youMightHave")}</h3>
                  <ul className="xb-details-content">
                    {job?.bonusSkills?.map((bonus, idx) => (
                      <li key={idx}>{bonus}</li>
                    ))}
                  </ul>
                </div>

                <div className="xb-details-item">
                  <h3 className="xb-item--title">{tPage("benefits")}</h3>
                  <ul className="xb-details-content">
                    {job?.benefits?.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
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
