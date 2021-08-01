import './App.css';
import React from 'react';
import Landing from './Landing';

function App() :JSX.Element {

  const [homePage, setHomePage] = React.useState<boolean>(true)

  function begin () {
    setHomePage(false)
  }

  return (
    <div className="App">
      {homePage ? <>
      <Landing/>
      <button onClick={begin}>Portfolio</button>
      </> : <>You found me</>}
    </div>
  );
}

export default App;
