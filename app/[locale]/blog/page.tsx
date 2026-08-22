import React, { Fragment } from 'react';
import type { Metadata } from 'next';
import icon from '@/public/images/icon/cap.svg';
import Image1 from '@/public/images/vectors/blog.png';
import Header from '@/components/header/Header';
import Scrollbar from '@/components/scrollbar/scrollbar';
import Footer from '@/components/footer/Footer';
import CtaSection from '@/components/CtaSection/CtaSection';
import BlogList from '@/components/BlogList';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta.Blog' });
  return buildMetadata({
    locale,
    path: '/blog',
    title: t('title'),
    description: t('description'),
  });
}

const BlogPage: React.FC = () => {
    const t = useTranslations('BlogPage');
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
                                            <Image src={icon} alt="Blog Icon" /> {t('subTitle')}
                                        </span>
                                        <h1 className="title">
                                            <span dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
                                        </h1>
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