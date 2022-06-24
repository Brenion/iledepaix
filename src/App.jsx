import './App.css';
import React from 'react';
import NavBar from './components/navBar.jsx'
import Page from './Page'

function App(TableTest) {
  return (
    <div className="App">
      <header className="App-header">
        
      <NavBar/>
      </header>
      <Page/>
    </div>
  );
}

export default App;
