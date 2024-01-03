import React, { useEffect, useState } from "react";
import About from "../about/About";
import Certificates from "../Certificates/Certificates";
import Projects from "../Projects/Projects";
import More from "../More/More";
import Contact from "../Contact/Contact";
import "../about/about.css";
import Header from "./Header";

const Main = () => {
  const [menu, setMenu] = useState("About");
  const [currentMenu, setCurrentMenu] = useState("About");
  const [currentpageIdx, setCurrentIdx] = useState(0);
  const [paginationStyle, setPaginationStyle] = useState({
    display: "flex",
  });

  //TODO array of objects for nav-Links
  let navLinks = ["About", "Certificates", "Projects", "More", "Contact"];

  //TODO useEffect wwhen component updated with menu dependency
  useEffect(() => {
    setCurrentMenu(menu);
    let currIdx = navLinks.findIndex((m) => m === menu);
    setCurrentIdx(currIdx);
  }, [menu]);

  //TODO handle pagination button style according to current menu
  useEffect(() => {
    if (currentMenu === "Contact") {
      setPaginationStyle({ display: "none" });
    } else {
      setPaginationStyle({ display: "flex" });
    }
  }, [currentMenu]);

  //TODO function for rendering components according to navbar
  function renderPage() {
    if (menu === "About") {
      document.title = "Mayank Gupta - About";
      return <About />;
    } else if (menu === "Certificates") {
      document.title = "Mayank Gupta - Certificates";
      return <Certificates />;
    } else if (menu === "Projects") {
      document.title = "Mayank Gupta - Projects";
      return <Projects />;
    } else if (menu === "More") {
      document.title = "Mayank Gupta - More";
      return <More />;
    } else if (menu === "Contact") {
      document.title = "Mayank Gupta - Contact";
      return <Contact />;
    }
  }

  //TODO Handle pagination Function
  const handlePagination = (e) => {
    let newIdx = currentpageIdx + 1;
    setCurrentIdx(newIdx);
    setMenu(navLinks[newIdx]);
    setCurrentMenu(navLinks[newIdx]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <Header setMenu={setMenu} currentMenu={currentMenu} navLinks={navLinks} />
      {renderPage()}
      <br />
      <div className="pagination">
        <button
          className="next-btn"
          style={paginationStyle}
          onClick={(e) => handlePagination(e)}
        >
          {"Next >"}
        </button>
      </div>
    </main>
  );
};

export default Main;
