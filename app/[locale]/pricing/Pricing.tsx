'use client';

import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Fade } from "react-awesome-reveal";
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

import icon from '@/public/images/icon/dollar-icon.svg';
import picon from '@/public/images/icon/pricing-icon01.svg';
import picon2 from '@/public/images/icon/pricing-icon02.svg';
import picon3 from '@/public/images/icon/pricing-icon03.svg';
import check from '@/public/images/icon/check-icon.svg';
import cross from '@/public/images/icon/cross-icon.svg';

const PricingSection: React.FC = () => {
    const t = useTranslations('PricingPage');
    const tPlans = useTranslations('PricingPlans');
    const [activeTab, setActiveTab] = useState<string>('1');

    const toggle = (tab: string) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const getFeatures = (planType: string) => {
        if (planType === 'free') {
            return [
                { text: tPlans('featKeyword'), active: true },
                { text: tPlans('featOnPage'), active: true },
                { text: tPlans('featTechAudit'), active: true },
                { text: tPlans('featMonthlyRep'), active: true },
                { text: tPlans('featWeeklyRep'), active: false }
            ];
        } else if (planType === 'standard') {
            return [
                { text: tPlans('featAllBasic'), active: true },
                { text: tPlans('featLocal'), active: true },
                { text: tPlans('featContent'), active: true },
                { text: tPlans('featLinkBuild'), active: true },
                { text: tPlans('featWeeklyRep'), active: true }
            ];
        } else if (planType === 'premium') {
            return [
                { text: tPlans('featAllAdv'), active: true },
                { text: tPlans('featFullAudit'), active: true },
                { text: tPlans('featCompAnalysis'), active: true },
                { text: tPlans('featAdvLink'), active: true },
                { text: tPlans('featWeeklyRep'), active: true }
            ];
        }
        return [];
    };

    const plans = [
        {
            key: 'free',
            icon: picon,
            title: tPlans('freeTitle'),
            text: tPlans('freeText'),
            priceYear: '$0',
            priceMonth: '$0',
            features: getFeatures('free'),
            isActive: false
        },
        {
            key: 'standard',
            icon: picon2,
            title: tPlans('standardTitle'),
            text: tPlans('standardText'),
            priceYear: '$499',
            priceMonth: '$49',
            features: getFeatures('standard'),
            isActive: true,
            badge: tPlans('mostPopular')
        },
        {
            key: 'premium',
            icon: picon3,
            title: tPlans('premiumTitle'),
            text: tPlans('premiumText'),
            priceYear: '$999',
            priceMonth: '$99',
            features: getFeatures('premium'),
            isActive: false
        }
    ];

    return (
        <section className="pricing pt-130 pb-130">
            <div className="container">
                <div className="sec-title--two text-center mb-60">
                    <Fade direction='down' triggerOnce={false} duration={1000} delay={9}>
                        <div>
                            <div className="sub-title wow fadeInDown" data-wow-duration="600ms">
                                <Image src={icon} alt="Dollar Icon" />
                                {' '}{t('subTitle')}
                            </div>
                        </div>
                    </Fade>
                    <Fade direction='down' triggerOnce={false} duration={1200} delay={9}>
                        <div>
                            <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">
                                {t('title')}
                            </h2>
                        </div>
                    </Fade>
                </div>

                <div className="xb-pricing-nav-wrap text-center mb-110">
                    <Nav tabs className="xb-pricing-nav ul_li_center nav nav-tabs" id="myTab" role="tablist">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => toggle('1')}
                                style={{ cursor: 'pointer' }}
                            >
                                {t('billedYearly')} <span>30%</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => toggle('2')}
                                style={{ cursor: 'pointer' }}
                            >
                                {t('billedMonthly')}
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>

                <div className="pg-pricing_content">
                    <TabContent activeTab={activeTab} id="myTabContent">
                        {['1', '2'].map((tabId) => (
                            <TabPane tabId={tabId} key={tabId}>
                                <Row className="mt-none-30">
                                    {plans.map((plan, index) => (
                                        <Col lg="4" className="mt-30 center-card" key={index}>
                                            <div className={`pg-pricing-item ${plan.isActive ? 'active' : ''} pos-rel`}>
                                                {plan.isActive && <span className="xb-item--top-text">{plan.badge}</span>}
                                                <div className="xb-item--inner o-hidden pos-rel">
                                                    <div className="xb-item--holder ul_li">
                                                        <div className="xb-item--icon">
                                                            <Image src={plan.icon} alt={plan.title} />
                                                        </div>
                                                        <div className="xb-item--right">
                                                            <h3 className="xb-item--title">{plan.title}</h3>
                                                            <span className="xb-item--text">{plan.text}</span>
                                                        </div>
                                                    </div>
                                                    <div className="xb-item--price">
                                                        <h2 className="xb-item--number">{tabId === '1' ? plan.priceYear : plan.priceMonth}</h2>
                                                        <span className="xb-item--time">{tabId === '1' ? tPlans('perYear') : tPlans('perMonth')}</span>
                                                    </div>
                                                    <div className="xb-item--line"></div>
                                                    <h4 className="xb-item--feature">{t('features')}</h4>
                                                    <ul className="xb-item--list list-unstyled">
                                                        {plan.features.map((feature, i) => (
                                                            <li key={i} className={!feature.active ? 'deactive' : ''}>
                                                                <Image src={feature.active ? check : cross} alt={feature.active ? "Check" : "Cross"} /> {feature.text}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="pg-det-btn">
                                                        <Link href="/contact" className="thm-btn--aso thm-btn--aso_dark cp-btn">{t('choosePlan')}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </TabPane>
                        ))}
                    </TabContent>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;

