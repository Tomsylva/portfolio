import './App.css';
import React from 'react';
import Landing from './Landing';
import Navbar from './Navbar';
import Projects from './Projects';
// import projects from "./projects-db";

function App() : JSX.Element {

  const [homePage, setHomePage] = React.useState<boolean>(true)

  function begin () {
    setHomePage(false)
  }

  return (
    <div className="App">
      {homePage ? <>
      <Landing/>
      <button onClick={begin}>Portfolio</button>
      </> : <>
      <Navbar />
      <Projects />
      </>}
    </div>
  );
}

export default App;
