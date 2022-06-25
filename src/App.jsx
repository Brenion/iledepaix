import './App.css';
import React from 'react';
import NavBar from './components/navBar.jsx'
import Page from './Page'
import AdminCreate from './components/AdminCreate';
import UpdatePasswordForm from './components/UpdatePasswordForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>   
      {/* <Page/>
      // <AdminCreate></AdminCreate> */}
      <UpdatePasswordForm/>
    </div>
  );
}

export default App;
