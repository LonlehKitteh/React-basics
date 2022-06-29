import React from 'react'
import Navigation from "./Navigation"
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import '../css/App.css'

function App() {
  return (
    <>
      <Navigation />
      <div className="push">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
