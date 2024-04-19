import React from "react";
import StepperForm from "./components/StepperForm";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<StepperForm />} />
            <Route path="/suraz-progress-login-form.vercel.app/Dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
export default App;
