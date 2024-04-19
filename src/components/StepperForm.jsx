import React, { useEffect, useState } from "react";
import "./Stepper.css";
const steps = ["Personal Details", "Education", "Skills", "Address"];
const steper_data = ["Personal Details", "Education", "Skills", "Address"];
const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [currentstep, setcurrentstep] = useState(1);
  const [complete, setcomplete] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [pro, setpro] = useState(false);
  const [formData, setFormData] = useState({
    personalDetails: {
      firstName: "",
      lastName: "",
      email: "",
      Phone: "",
      Gender: "",
      Date: "",
      profileImage: "",
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
  const [previewMode, setPreviewMode] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    currentstep === steper_data.length
      ? setcomplete(true)
      : setcurrentstep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setcomplete(false);
    setcurrentstep((prev) => prev - 1);
  };

  const handleChange = (event, step) => {
    const { name, type } = event.target;

    if (type === "file" && name === "image") {
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      const { value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [step]:
          step === "skills" || step === "address"
            ? value
            : { ...prevFormData[step], [name]: value },
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handlePrint = () => {
    alert("data uploaded Successfully");
    window.print();
  };

  const handleEdit = (stepIndex) => {
    setActiveStep(stepIndex);
    setPreviewMode(false);
  };
  return (
    <>
      <div id="hello">
        {steper_data.map((item, i) => (
          <div
            key={i}
            className={`step-item ${currentstep == i + 1} && "active" ${
              i + 1 < currentstep && "complete"
            }`}
          >
            <div className="hai">{i + 1}</div>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div>
        {previewMode ? (
          <Preview />
        ) : (
          steps.map((label, index) => (
            <div
              key={index}
              style={{
                display: activeStep === index ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <form onSubmit={handleSubmit} data-aos="fade">
                <h1>{label}</h1>
                <div id="pro" style={{ marginBottom: "20px" }}>
                  <progress value={activeStep+1} max={steps.length}></progress>
                </div>
                {index === 0 && (
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.personalDetails.firstName}
                      onChange={(e) => handleChange(e, "personalDetails")}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.personalDetails.lastName}
                      onChange={(e) => handleChange(e, "personalDetails")}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.personalDetails.email}
                      onChange={(e) => handleChange(e, "personalDetails")}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Phone number"
                      name="Phone"
                      value={formData.personalDetails.Phone}
                      onChange={(e) => handleChange(e, "personalDetails")}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Male/Female"
                      name="Gender"
                      value={formData.personalDetails.Gender}
                      onChange={(e) => handleChange(e, "personalDetails")}
                      required
                    />
                    <input
                      type="date"
                      placeholder="Date of Birth"
                      name="Date"
                      value={formData.personalDetails.Date}
                      onChange={(e) => handleChange(e, "personalDetails")}
                      required
                    />
                    <br />
                    <label htmlFor="profileImage">Upload Profile Picture</label>
                    <input
                      type="file"
                      name="profileImage"
                      accept="image/*"
                      onChange={(e) => handleChange(e, "personalDetails")}
                      required
                    />
                  </div>
                )}
                {index === 1 && (
                  <div>
                    <input
                      type="text"
                      placeholder="College Name"
                      name="College"
                      value={formData.education.College}
                      onChange={(e) => handleChange(e, "education")}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Degree"
                      name="degree"
                      value={formData.education.degree}
                      onChange={(e) => handleChange(e, "education")}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Degree CGPA/Percentage"
                      name="DegreeCGPA"
                      value={formData.education.DegreeCGPA}
                      onChange={(e) => handleChange(e, "education")}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Degree Year of Passing"
                      name="DegreeYear"
                      value={formData.education.DegreeYear}
                      onChange={(e) => handleChange(e, "education")}
                      required
                    />
                    <input
                      type="text"
                      placeholder="12th/Diploma College"
                      name="InterCollege"
                      value={formData.education.InterCollege}
                      onChange={(e) => handleChange(e, "education")}
                      required
                    />
                    <input
                      type="text"
                      placeholder="CGPA/Percentage"
                      name="InterCGPA"
                      value={formData.education.InterCGPA}
                      onChange={(e) => handleChange(e, "education")}
                      required
                    />
                    <input
                      type="text"
                      placeholder="12th/Diploma Year of Passing"
                      name="InterYear"
                      value={formData.education.InterYear}
                      onChange={(e) => handleChange(e, "education")}
                      required
                    />
                    <input
                      type="text"
                      placeholder="School Name"
                      name="School"
                      value={formData.education.School}
                      onChange={(e) => handleChange(e, "education")}
                      required
                    />
                    <input
                      type="text"
                      placeholder="CGPA/Percentage"
                      name="SSCMarks"
                      value={formData.education.SSCMarks}
                      onChange={(e) => handleChange(e, "education")}
                      required
                    />
                    <input
                      type="text"
                      placeholder="10th Year of Passing"
                      name="SSCYear"
                      value={formData.education.SSCYear}
                      onChange={(e) => handleChange(e, "education")}
                      required
                    />
                  </div>
                )}
                {index === 2 && (
                  <div>
                    <input
                      type="text"
                      placeholder="Skills"
                      name="skills"
                      value={formData.skills}
                      onChange={(e) => handleChange(e, "skills")}
                      required
                    />
                  </div>
                )}
                {index === 3 && (
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Your full Address with Pincode"
                      name="address"
                      value={formData.address}
                      onChange={(e) => handleChange(e, "address")}
                      required
                    />
                  </div>
                )}

                <div>
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    Back
                  </button>
                  {index === steps.length - 1 ? (
                    <button type="submit">Finish</button>
                  ) : (
                    <button type="button" onClick={handleNext}>
                      Next
                    </button>
                  )}
                </div>
              </form>
            </div>
          ))
        )}
      </div>
      {activeStep === steps.length && (
        // <div id="prev">
        //   <button onClick={(window.location = "/Dashboard")}>Preview</button>
        // </div>
        <div>
          <div className="dashboard-container">
            <h2 className="dashboard-header">Preview</h2>
            <div className="dashboard-section">
              <h3>Personal Details</h3>
              <table className="dashboard-table">
                <tbody>
                  {Object.entries(formData.personalDetails).map(
                    ([key, value]) => (
                      <tr key={key}>
                        <td>{key}</td>
                        {key === "profileImage" ? (
                          <td>
                            {value && (
                              <img
                                src={formData.personalDetails.profileImage}
                                alt="Profile"
                                className="dashboard-image" // Added class name for image
                              />
                            )}
                          </td>
                        ) : (
                          <td>{value}</td>
                        )}
                      </tr>
                    )
                  )}
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
            <button onClick={handlePrint} className="dashboard-update-button">
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StepperForm;
