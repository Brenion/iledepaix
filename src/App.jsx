import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar.jsx'
<<<<<<< HEAD
import Page from './Page'
import AdminCreate from './components/AdminCreate';
import UpdatePasswordForm from './components/UpdatePasswordForm';
=======
import Page from './pages/Page'
import FormConnect from './pages/FormConnect';
>>>>>>> main

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
<<<<<<< HEAD
      {/* <Page/>
      // <AdminCreate></AdminCreate> */}
      <UpdatePasswordForm/>
=======
     
>>>>>>> main
    </div>
  );
}

export default App;
