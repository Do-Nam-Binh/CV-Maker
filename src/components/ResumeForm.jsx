import React, { useState } from "react";
import styles from "../styles/ResumeForm.module.css";
import Dropdown from "./Dropdown";
import EducationInput from "./EducationInput";

function ResumeForm({
  personalDetails,
  handleImageUpload,
  image,
  educationInfo,
  educationList,
  handleAddOrEdit,
  handleInfoChange,
  handleEditEdu,
  editingId,
  setEditingId,
}) {
  const [openIndex, setOpenIndex] = useState(null); // State to track which section is open
  const [displayForm, setDisplayForm] = useState(true);

  const handleToggle = (index) => {
    // If the clicked section is already open, close it. Otherwise, open the clicked section.
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleEdit = (id) => {
    handleEditEdu(id);
    setDisplayForm(false);
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
                    onChange={(e) => handleInfoChange(e, "personal")}
                  />
                </div>

                <div className={styles.inputEntry}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={personalDetails.lastName}
                    onChange={(e) => handleInfoChange(e, "personal")}
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
                  onChange={(e) => handleInfoChange(e, "personal")}
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
                onChange={(e) => handleInfoChange(e, "personal")}
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
                onChange={(e) => handleInfoChange(e, "personal")}
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
              onChange={(e) => handleInfoChange(e, "personal")}
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
                onChange={(e) => handleInfoChange(e, "personal")}
              />
            </div>

            <div className={styles.inputEntry}>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={personalDetails.city}
                onChange={(e) => handleInfoChange(e, "personal")}
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
        {educationList.length > 0 && (
          <ul className={styles.formEduList}>
            {educationList.map((item) => (
              <li key={item.id}>
                {editingId === item.id ? (
                  <EducationInput
                    educationInfo={educationInfo}
                    handleInfoChange={handleInfoChange}
                    handleAddOrEdit={handleAddOrEdit}
                    setDisplayForm={setDisplayForm}
                  />
                ) : (
                  <button
                    className={styles.eduEntry}
                    onClick={() => handleEdit(item.id)} // Open form for the clicked entry
                  >
                    {item.eduName != "" ? (
                      <div>{item.eduName}</div>
                    ) : (
                      <div>[Education]</div>
                    )}
                    {item.school != "" || item.city != "" ? (
                      <div>
                        {item.school}
                        {item.city && item.school && ", "} {item.city}
                      </div>
                    ) : (
                      <div>[School, City]</div>
                    )}
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
        {displayForm ? (
          <EducationInput
            educationInfo={educationInfo}
            handleInfoChange={handleInfoChange}
            handleAddOrEdit={handleAddOrEdit}
          />
        ) : (
          <button
            className={styles.addEntryButton}
            onClick={() => {
              setDisplayForm(true);
              setEditingId(null);
            }}
          >
            <div>Add education</div>
          </button>
        )}
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
