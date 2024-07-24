
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Userlist from "./Userlist";
import Userdetails from "./Userdetails";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Userlist/>} />
          <Route path="/users/:userId" element={<Userdetails/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
