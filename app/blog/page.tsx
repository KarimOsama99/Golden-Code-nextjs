import React, { Fragment } from 'react';
import icon from '@/public/images/icon/cap.svg';
import Image1 from '@/public/images/vectors/blog.png';
import Header from '../../components/header/Header';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogList from '../../components/BlogList';
import Image from 'next/image';

const BlogPage: React.FC = () => {
    return (
        <Fragment>
            <Header />
            <main className="page_content blog-page">
                <section className="page-title pt-200 pos-rel bg_img" style={{ backgroundImage: `url('/images/bg/page_bg01.jpg')` }}>
                    <div className="container">
                        <div className="page-title-wrap sd-title-wrap">
                            <div className="row mt-none-30 align-items-center">
                                <div className="col-lg-9 mt-30">
                                    <div className="page-title-box">
                                        <span className="sub-title">
                                            <Image src={icon} alt="Blog Icon" /> Blog
                                        </span>
                                        <h2 className="title">
                                            Expert insights from our Web <br />
                                            Development solutions.
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 mt-30">
                                    <div className="sd-right-img pos-rel">
                                        <Image src={Image1} alt="Blog Header Illustration" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <BlogList />
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default BlogPage;