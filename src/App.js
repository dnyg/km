import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import ViewTransactions from "./pages/ViewTransactions";
import CreateTransaction from "./pages/CreateTransaction";
import axios from "axios";

axios.defaults.baseURL = "https://localhost:8080/api/";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/view" element={<ViewTransactions />} />
          <Route path="/create" element={<CreateTransaction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
