import React from "react";
import "./Haeder.css";
import { nanoid } from "nanoid";

const Header = ({ setMenu, currentMenu, navLinks }) => {

  //TODO render Header Data
  return (
    <header>
      <ul className="nav-link">
        {navLinks.map((item) => {
          return (
            <li key={nanoid()}>
              <button
                className={
                  item === currentMenu
                    ? "nav-link-btn active"
                    : "nav-link-btn"
                }
                onClick={() => setMenu(item)}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
