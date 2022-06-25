import './App.css';
import React from 'react';
import NavBar from './components/navBar.jsx'
import Page from './Page'
import AdminCreate from './components/AdminCreate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>   
      <Page/>
      <AdminCreate></AdminCreate>
    </div>
  );
}

export default App;
