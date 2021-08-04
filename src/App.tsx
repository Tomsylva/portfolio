import './App.css';
import React from 'react';
import Landing from './Landing';
import Projects from './Projects';
import {motion} from "framer-motion";
import Contact from './Contact';
import About from './About';

function App() : JSX.Element {

  const [homePage, setHomePage] = React.useState<boolean>(true)
  const [currentPage, setCurrentPage] = React.useState<string>("portfolio")

  function begin () {
    setHomePage(false)
  }

  function changePage(pageName:string){
    setCurrentPage(pageName);
  }

  return (
    <div className="App"> 
      {homePage ? <div id="home-page-div">
      <Landing/>
      <motion.button initial="hidden"
    animate="visible"
    transition={{duration: 1.5}}
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }} onClick={begin} className="start-button">&lt; Portfolio /&gt;</motion.button>
    </div> : <>
    <motion.nav
    initial="hidden"
    animate="visible"
    transition={{duration: 0.75}}
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }}>
            <ul>
                <li><button onClick={() => changePage("contact")}>Contact</button></li>
                <li><button onClick={() => changePage("about")}>About</button></li>
                <li><button onClick={() => changePage("portfolio")}>Projects</button></li>
            </ul>
        </motion.nav>
        {currentPage === "portfolio" ? <Projects /> : currentPage === "contact" ? <Contact /> : <About />}
    </>
}</div>
  );
}

export default App;
