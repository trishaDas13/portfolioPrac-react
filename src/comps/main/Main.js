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

  //TODO useEffect wwhen component updated with menu dependency
  useEffect(() => {
    setCurrentMenu(menu);
  }, [menu]);

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

  return (
    <main>
      <Header setMenu={setMenu} currentMenu={currentMenu} />
      {renderPage()}
    </main>
  );
};

export default Main;
