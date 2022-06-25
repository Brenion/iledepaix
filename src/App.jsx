
import './App.css';

import FormTool from './components/FormTool';

import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar.jsx'
import Page from './pages/Page'
import FormConnect from './pages/FormConnect';
import ToolConnect from './pages/ToolConnect';


function App() {
  return (
    <div className="App">

      <header className="App-header bg-slate-50">
        <div className='flex justify-center'>
        <p className='text-red-600 text-2xl'>Welcome to ile de paix</p>
      </div>
      </header>
      
      
      <header className="App-header">
        <BrowserRouter>
        <NavBar>
          
            <Routes>
              <Route path="Page" element={<Page />} />
              <Route path="FormConnect" element={<FormConnect />} />
              <Route path="ToolConnect" element={<ToolConnect />} />
          </Routes>
        </NavBar>
       </BrowserRouter>
    
      </header>   
     
    </div>
  );
}

export default App;