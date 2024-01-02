import React from "react";
import About from "../about/About";
import Certificates from '../Certificates/Certificates'
import Projects from '../Projects/Projects'
import More from '../More/More'
import Contact from '../Contact/Contact'
import "../about/about.css";
import { nanoid } from 'nanoid'
import Header from "./Header";
let navLinks = [
  {
    menu: "About",
  },
  { 
    menu: "Certificates" 
  },
  { 
    menu: "Projects" 
  },
  { 
    menu: "More" 
  },
  { 
    menu: "Contact" 
  }
];

function renderPage(menu) {
  if(menu === "About"){
    return <About />;
  }
  else if(menu === "Certificates"){
    return <Certificates/>;
  }
  else if(menu === "Projects"){
    return <Projects/>;
  }
  else if(menu === "More"){
    return <More/>;
  }
  else if(menu === "Contact"){
    return <Contact/>;
  }
  
}

const Main = () => {
  return (
    <main>
      <header>
        <ul className="nav-link">
          {
            navLinks.map((item) => {
              return(
              <li key={nanoid()}>
                <button onClick={() => renderPage(item.menu)}>{item.menu}</button>
              </li>
              )
            })
          }
        </ul>
      </header>
      <About />
    </main>
  );
};

export default Main;
