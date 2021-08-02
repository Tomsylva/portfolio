import './App.css';
import React from 'react';
import Landing from './Landing';
import Navbar from './Navbar';
import Projects from './Projects';
import {motion} from "framer-motion"

function App() : JSX.Element {

  const [homePage, setHomePage] = React.useState<boolean>(true)

  function begin () {
    setHomePage(false)
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
        <Navbar />
        <Projects />
      </>}
    </div>
  );
}

export default App;
