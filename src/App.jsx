import './App.css';
import React from 'react';
import NavBar from './components/navBar.jsx'
import Page from './Page'
import ConnectForm from './components/ConnectForm';

function App(TableTest) {
  return (
    <div className="App">
      <header className="App-header">
     <ConnectForm></ConnectForm>   
      {/* <NavBar/> */}
      </header>
      {/* <Page/> */}
    </div>
  );
}

export default App;
