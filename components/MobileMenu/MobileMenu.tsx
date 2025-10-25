"use client";

import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

interface SubmenuItem {
  id: number;
  title: string;
  link: string;
}

interface MenuItem {
  id: number;
  title: string;
  link: string;
  submenu?: SubmenuItem[];
}

const menus: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },
  {
    id: 3,
    title: "Company",
    link: "/about",
    submenu: [
      { id: 31, title: "About Us", link: "/about" },
      { id: 3222, title: "Our Pricing", link: "/pricing" },
      { id: 322, title: "Our team", link: "/team" },
      { id: 3455, title: "FAQ's", link: "/faq" },
      { id: 3457, title: "Career", link: "/career" },
    ],
  },
  {
    id: 5,
    title: "Services",
    link: "/services",
  },
  {
    id: 7,
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 6,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 88,
    title: "Contact",
    link: "/contact",
  },
];

const MobileMenu: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

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
                {menu.title}
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
                        {sub.title}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Fragment>
          ) : (
            <Link href={menu.link} className="active">
              {menu.title}
            </Link>
          )}
        </ListItem>
      ))}
    </ul>
  );
};

export default MobileMenu;
