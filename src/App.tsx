import './App.css';
import React from 'react';
import Landing from './Landing';
import Navbar from './Navbar';
import Projects from './Projects';

function App() : JSX.Element {

  const [homePage, setHomePage] = React.useState<boolean>(true)

  function begin () {
    setHomePage(false)
  }

  return (
    <div className="App">
      {homePage ? <div id="home-page-div">
        <Landing/>
        <button onClick={begin} className="start-button">&lt; Portfolio /&gt;</button>
      </div> : <>
        <Navbar />
        <Projects />
      </>}
    </div>
  );
}

export default App;
