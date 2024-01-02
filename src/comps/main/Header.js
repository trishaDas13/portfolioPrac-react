import React from "react";
import "./Haeder.css";
import { nanoid } from "nanoid";

const Header = ({ setMenu, currentMenu }) => {
  //TODO array of objects for nav-Links
  let navLinks = [
    {
      menu: "About",
    },
    {
      menu: "Certificates",
    },
    {
      menu: "Projects",
    },
    {
      menu: "More",
    },
    {
      menu: "Contact",
    },
  ];

  //TODO render Header Data
  return (
    <header>
      <ul className="nav-link">
        {navLinks.map((item) => {
          return (
            <li key={nanoid()}>
              <button
                className={
                  item.menu === currentMenu
                    ? "nav-link-btn active"
                    : "nav-link-btn"
                }
                onClick={() => setMenu(item.menu)}
              >
                {item.menu}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
