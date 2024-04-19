import React, { useState, useEffect } from "react";
import "./Dashboard.css"

const Dashboard = () => {
  const [formData, setFormData] = useState({
    personalDetails: {
      firstName: "",
      lastName: "",
      email: "",
      Phone: "",
      Gender: "",
      Date: "",
      image:""
    },
    education: {
      College: "",
      degree: "",
      DegreeCGPA: "",
      DegreeYear: "",
      InterCollege: "",
      InterCGPA: "",
      InterYear: "",
      School: "",
      SSCMarks: "",
      SSCYear: "",
    },
    skills: "",
    address: "",
  });
  const handleSubmit=()=>{
    alert("data uploaded Successfully");
    window.print();
  }
  // Load data from local storage on component mount
  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);
  
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Preview</h2>
      <div className="dashboard-section">
        <h3>Personal Details</h3>
        <table className="dashboard-table">
          <tbody>
            {Object.entries(formData.personalDetails).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                {key === "image" ? (
                  <td>
                    {value && (
                      <img
                        src={value}
                        alt="Profile"
                        className="dashboard-image" // Added class name for image
                      />
                    )}
                  </td>
                ) : (
                  <td>{value}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dashboard-section">
        <h3>Education</h3>
        <table className="dashboard-table">
          <tbody>
            {Object.entries(formData.education).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dashboard-section">
        <h3>Skills</h3>
        <p>{formData.skills}</p>
      </div>

      <div className="dashboard-section">
        <h3>Address</h3>
        <p>{formData.address}</p>
      </div>
      <button onClick={handleSubmit} className="dashboard-update-button">Submit</button>
    </div>
  );
};

export default Dashboard;
