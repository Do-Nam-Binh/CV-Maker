import React, { useState } from "react";
import styles from "../styles/ResumeForm.module.css";
import Dropdown from "./Dropdown";
import EducationInput from "./EducationInput";

function ResumeForm({
  personalDetails,
  handlePersonalDetailChange,
  handleImageUpload,
  image,
  handleAddEdu,
  educationInfo,
  handleEduInfoChange,
}) {
  const [openIndex, setOpenIndex] = useState(null); // State to track which section is open

  const handleToggle = (index) => {
    // If the clicked section is already open, close it. Otherwise, open the clicked section.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.resumeForm}>
      <Dropdown
        title="Personal details"
        isOpen={openIndex === 0}
        toggle={() => handleToggle(0)}
      >
        <div className={styles.personalDetail}>
          <div className={styles.nameImg}>
            <div className={styles.imageUploadContainer}>
              <label htmlFor="image-upload">
                <div className={styles.imagePreview}>
                  {image ? (
                    <img src={image} alt="Uploaded" />
                  ) : (
                    <div className={styles.placeholder}>Upload Image</div>
                  )}
                </div>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </div>

            <div>
              <div className={styles.fullName}>
                <div className={styles.inputEntry}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={personalDetails.firstName}
                    onChange={handlePersonalDetailChange}
                  />
                </div>

                <div className={styles.inputEntry}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={personalDetails.lastName}
                    onChange={handlePersonalDetailChange}
                  />
                </div>
              </div>

              <div className={styles.inputEntry} id={styles.headline}>
                <label htmlFor="headline">Headline</label>
                <input
                  type="text"
                  name="headline"
                  id="headline"
                  value={personalDetails.headline}
                  onChange={handlePersonalDetailChange}
                />
              </div>
            </div>
          </div>

          <div className={styles.emailPhone}>
            <div className={styles.inputEntry}>
              <label htmlFor="email">Email address</label>
              <input
                type="text"
                name="email"
                id="email"
                value={personalDetails.email}
                onChange={handlePersonalDetailChange}
              />
            </div>

            <div className={styles.inputEntry}>
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={personalDetails.phone}
                onChange={handlePersonalDetailChange}
              />
            </div>
          </div>

          <div className={styles.inputEntry}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={personalDetails.address}
              onChange={handlePersonalDetailChange}
            />
          </div>

          <div className={styles.postCity}>
            <div className={styles.inputEntry}>
              <label htmlFor="postcode">Post code</label>
              <input
                type="text"
                name="postcode"
                id="postcode"
                value={personalDetails.postcode}
                onChange={handlePersonalDetailChange}
              />
            </div>

            <div className={styles.inputEntry}>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={personalDetails.city}
                onChange={handlePersonalDetailChange}
              />
            </div>
          </div>
        </div>
      </Dropdown>

      <Dropdown
        title="Education"
        isOpen={openIndex === 1}
        toggle={() => handleToggle(1)}
      >
        <EducationInput
          educationInfo={educationInfo}
          handleEduInfoChange={handleEduInfoChange}
          handleAddEdu={handleAddEdu}
        />
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

      <Dropdown
        title="Projects"
        isOpen={openIndex === 5}
        toggle={() => handleToggle(5)}
      >
        <p>Content for Languages</p>
      </Dropdown>
    </div>
  );
}

export default ResumeForm;
