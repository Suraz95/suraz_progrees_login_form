import React from "react";
import StepperForm from "./components/StepperForm";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<StepperForm />} />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
};
export default App;
