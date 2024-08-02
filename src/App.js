import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './app/pages/LandingPage';
import Blogs from './app/pages/Blogs';
import './index.css'

function App() {
  return (
    <Router basename="/ElayaramanR-Projects/bloc-clone">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blogs" element={<Blogs />} />
        
      </Routes>
    </Router>
  );
}

export default App;
