import React, { useState } from "react";
import Dropdown from "./Dropdown";

function ResumeForm({
  fullName,
  headline,
  handleNameChange,
  handleHeadlineChange,
}) {
  const [openIndex, setOpenIndex] = useState(null); // State to track which section is open

  const handleToggle = (index) => {
    // If the clicked section is already open, close it. Otherwise, open the clicked section.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="resumeForm">
      <Dropdown
        title="Personal details"
        isOpen={openIndex === 0}
        toggle={() => handleToggle(0)}
      >
        <div className="fullName">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={fullName.firstName}
            onChange={handleNameChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={fullName.lastName}
            onChange={handleNameChange}
          />
        </div>

        <div className="headline">
          <label htmlFor="headline">Headline</label>
          <input
            type="text"
            id="headline"
            value={headline}
            onChange={handleHeadlineChange}
          />
        </div>
      </Dropdown>

      <Dropdown
        title="Education"
        isOpen={openIndex === 1}
        toggle={() => handleToggle(1)}
      >
        <p>Content for Education</p>
      </Dropdown>

      <Dropdown
        title="Employment"
        isOpen={openIndex === 2}
        toggle={() => handleToggle(2)}
      >
        <p>Content for Employment</p>
      </Dropdown>

      <Dropdown
        title="Skills"
        isOpen={openIndex === 3}
        toggle={() => handleToggle(3)}
      >
        <p>Content for Skills</p>
      </Dropdown>

      <Dropdown
        title="Languages"
        isOpen={openIndex === 4}
        toggle={() => handleToggle(4)}
      >
        <p>Content for Languages</p>
      </Dropdown>
    </div>
  );
}

export default ResumeForm;
