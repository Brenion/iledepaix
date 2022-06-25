import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navBar.jsx'
import Page from './pages/Page'
import FormConnect from './pages/FormConnect';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          
        <NavBar>
            <Routes>
              <Route path="Page" element={<Page />} />
              <Route path="FormConnect" element={<FormConnect />} />
          </Routes>
        </NavBar>
       </BrowserRouter>
      </header>   
     
    </div>
  );
}

export default App;
