import './App.css';
import React from 'react';
import NavBar from './components/navBar.jsx'
import Page from './Page'
import ConnectForm from './components/ConnectForm';
import AdminForm from './components/AdminForm';

function App() {
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
