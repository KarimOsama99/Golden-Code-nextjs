"use client";

import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import {Link} from '@/i18n/routing';
import { useTranslations } from 'next-intl';

interface SubmenuItem {
  id: number;
  titleKey: string;
  link: string;
}

interface MenuItem {
  id: number;
  titleKey: string;
  link: string;
  submenu?: SubmenuItem[];
}

const MobileMenu: React.FC = () => {
  const t = useTranslations('MobileMenu');
  const [openId, setOpenId] = useState<number | null>(null);

  const menus: MenuItem[] = [
    {
      id: 1,
      titleKey: "home",
      link: "/",
    },
    {
      id: 3,
      titleKey: "company",
      link: "/about",
      submenu: [
        { id: 31, titleKey: "aboutUs", link: "/about" },
        { id: 322, titleKey: "team", link: "/team" },
        { id: 3455, titleKey: "faqs", link: "/faq" },
      ],
    },
    {
      id: 5,
      titleKey: "services",
      link: "/services",
    },
    {
      id: 7,
      titleKey: "portfolio",
      link: "/portfolio",
    },
    {
      id: 6,
      titleKey: "blog",
      link: "/blog",
    },
    {
      id: 88,
      titleKey: "contact",
      link: "/contact",
    },
  ];

  const handleToggle = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <ul className="xb-menu-primary clearfix">
      {menus.map((menu) => (
        <ListItem key={menu.id} className={openId === menu.id ? "active" : ""}>
          {menu.submenu ? (
            <Fragment>
              <p onClick={() => handleToggle(menu.id)}>
                {t(menu.titleKey)}
                <i
                  className={`fa ${
                    openId === menu.id ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </p>
              <Collapse in={openId === menu.id} timeout="auto" unmountOnExit>
                <List className="menu-item menu-item-has-children active">
                  {menu.submenu.map((sub) => (
                    <ListItem key={sub.id}>
                      <Link href={sub.link} className="active">
                        {t(sub.titleKey)}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Fragment>
          ) : (
            <Link href={menu.link} className="active">
              {t(menu.titleKey)}
            </Link>
          )}
        </ListItem>
      ))}
    </ul>
  );
};

export default MobileMenu;
