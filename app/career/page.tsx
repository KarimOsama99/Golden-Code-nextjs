"use client";

import React, { Fragment } from "react";
import Header from "@/components/header/Header";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import icon from "@/public/images/icon/magic.svg";
import gImg1 from "@/public/images/vectors/Job offers-bro.png";
import Process from "./Process";
import CareerTeam from "./CareerTeam";
import WorkSection from "../team/work";
import GallerySection from "./Gallery";
import Image from "next/image";

const CareerPage: React.FC = () => {
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
                      <Image src={icon} alt="Careers Icon" /> Careers
                    </span>
                    <h2 className="title">
                      Be a part of shaping the <br />
                      future & career opportunities <br />
                      at Golden Code today.
                    </h2>
                  </div>
                </div>

                <div className="col-lg-4 mt-30">
                    <div className="xb-img">
                      <Image src={gImg1} alt="Gallery 1" />
                    </div>
                </div>
              </div>
          </div>
          </div>
        </section>

        <Process />
        <CareerTeam />
        <WorkSection bg="sbg pt-130" />

        <div className="cp-video pb-130">
          <div className="container">
            <div className="xb-img pos-rel d-block">
              <div className="career_video">
                <video
                  className="responsive-video"
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source src="/images/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h2 className="title">Golden Code</h2>
            </div>
          </div>
        </div>

        <GallerySection />
        <CtaSection />
      </div>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default CareerPage;
