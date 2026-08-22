import React, { Fragment } from 'react';
import type { Metadata } from 'next';
import {Link} from '@/i18n/routing';
import getTeams from '@/api/team'
import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import Header from '@/components/header/Header';
import Scrollbar from '@/components/scrollbar/scrollbar'
import Footer from '@/components/footer/Footer';
import CtaSection from '@/components/CtaSection/CtaSection';
import icon from '@/public/images/icon/cap.svg'
import bg from "@/public/images/team/team-bg.jpg";
import WorkSection from './work';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta.Team' });
  return buildMetadata({
    locale,
    path: '/team',
    title: t('title'),
    description: t('description'),
  });
}

const TeamPage = () => {
    const t = useTranslations('TeamPage');
    const tData = useTranslations('TeamData');
    const Teams = getTeams(tData);
    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header />
                <section className="page-title pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${'/images/bg/page_bg01.jpg'})` }}>
                    <div className="container">
                        <div className="page-title-wrap">
                            <div className="row mt-none-30 align-items-end">
                                <div className="col-lg-7 mt-30">
                                    <div className="page-title-box">
                                        <span className="sub-title"><Image src={icon} alt="" />{t('subTitle')}</span>
                                        <h1 className="title">{t('title')}</h1>
                                    </div>
                                </div>
                                <div className="col-lg-5 mt-30">
                                    <div className="count-box">
                                        <h2 className="number">3 <span className="suffix">+</span></h2>
                                        <span className="text">
                                            <span dangerouslySetInnerHTML={{ __html: t.raw('countText') }} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team pt-55 pb-130">
                    <div className="container">
                        <div className="row mt-none-30">
                            {Teams.map((team, tsm) => (
                                <div className="col-xl-4 col-lg-6 col-md-6 mt-30" key={tsm}>
                                    <div className="team-item">
                                        <div className="xb-item--content pos-rel">
                                            <div className="xb-item--img">
                                                <Image src={bg} alt="" />
                                            </div>
                                            <div className="xb-item--item">
                                                <span className="xb-item--skill">{team.exprience}</span>
                                                <span className="xb-item--reating"><i className="fas fa-star"></i> {team.rating}</span>
                                            </div>
                                        </div>
                                        <div className="xb-item--inner ul_li_between align-items-end">
                                            <div className="xb-item--holder">
                                                <div className="xb-item--avatar">
                                                    <Image src={team.tImg} alt={team.name} />
                                                </div>
                                                <div className="xb-item--author">
                                                    <h3 className="xb-item--name">{team.name}</h3>
                                                    <span className="xb-item--desig">{team.title}</span>
                                                </div>
                                            </div>
                                            <ul className="xb-item--social-link ul_li">
                                                <li>
                                                    <Link href={team.linkedin || "#"} target={team.linkedin ? "_blank" : undefined} rel={team.linkedin ? "noopener noreferrer" : undefined} aria-label="LinkedIn">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={team.github || "#"} target={team.github ? "_blank" : undefined} rel={team.github ? "noopener noreferrer" : undefined} aria-label="GitHub">
                                                        <i className="fab fa-github"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <WorkSection />
                <CtaSection />
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default TeamPage;
