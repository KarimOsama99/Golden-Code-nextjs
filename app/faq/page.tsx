"use client";

import React from "react";
// import Link from "next/link";
import sImg1 from "@/public/images/vectors/faq.png";
import Header from "../../components/header/Header";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import icon from "@/public/images/icon/magic.svg";
import FaqSection from "@/components/FaqSection/FaqSection";
import Image from "next/image";

const FaqPage: React.FC = () => {
  return (
    <>
      <div className="body_wrap sco_agency">
        <Header />
        <section
          className="page-title cp-page-title pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url('/images/bg/page_bg01.jpg')` }}
        >
          <div className="container">
            <div className="page-title-wrap">
              <div className="row mt-none-30 align-items-center">
                <div className="col-lg-8 mt-30 mb-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <Image src={icon} alt="Privacy Icon" /> FAQ's
                    </span>
                    <h2 className="title">Frequently Asked Questions.</h2>
                    <span className="page-update_time">
                      Updated on : Octoper 10th, 2025
                    </span>
                  </div>
                </div>
                <div className="col-lg-4 mt-30">
                  <div className="sd-right-img pos-rel">
                    <Image src={sImg1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FaqSection />
        <CtaSection cClass="bg" />
      </div>
      <Footer />
      <Scrollbar />
    </>
  );
};

export default FaqPage;
