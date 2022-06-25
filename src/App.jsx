import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/navBar.jsx";
import Page from "./pages/Page";

import FormTool from "./components/FormTool";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IsConnectContext from "./services/isConnect.context";
import ConnectForm from "./components/ConnectForm";
import Logout from "./pages/Logout";

function App() {
  const [isConnect, setIsConnect] = useState(false);

  const contextConnect = {
    isConnect,
    setIsConnect,
  };
  return (
    <IsConnectContext.Provider value={contextConnect}>
      <Router>
        <div className="App">
          <NavBar></NavBar>
          <main>
            <Routes>
              <Route path="Page" element={<Page />} />
              <Route path="FormConnect" element={<FormTool />} />
              <Route path="FormNewNGO" element={<ConnectForm />} />
              <Route path="logout" element={<Logout />} />
            </Routes>
          </main>
        </div>
      </Router>
    </IsConnectContext.Provider>
  );
}

export default App;
