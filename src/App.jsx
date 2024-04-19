import React, { useEffect, useState } from "react";
// import "./App.css";
import Particle from "./components/Particle";
// import Aos from "aos";
import StepperForm from "./components/StepperForm";
import Dashboard from "./components/Dashboard";
// import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// const steps = ["Personal Details", "Education", "Skills", "Address"];

const App = () => {
  
  return (
    <div>
      {/* <Particle/> */}
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<StepperForm/>} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}
export default App;
