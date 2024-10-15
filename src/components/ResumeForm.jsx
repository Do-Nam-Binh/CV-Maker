import React, { useState } from "react";
import styles from "../styles/ResumeForm.module.css";
import Dropdown from "./Dropdown";
import InfoList from "./InfoList";
import MinorInfoList from "./MinorInfoList";

function ResumeForm({
  personalDetails,
  handleImageUpload,
  image,
  educationInfo,
  educationList,
  handleAddOrEdit,
  handleInfoChange,
  handleEdit,
  editingId,
  setEditingId,
  employmentInfo,
  employmentList,
  projectInfo,
  projectList,
  skillInfo,
  skillList,
  languageInfo,
  languageList,
  hobbyInfo,
  hobbyList,
  clearInfo,
}) {
  const [openIndex, setOpenIndex] = useState(null); // State to track which section is open
  const [displayForm, setDisplayForm] = useState(true);

  const handleToggle = (index) => {
    // If the clicked section is already open, close it. Otherwise, open the clicked section.
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleEditSubmit = (id, type) => {
    setDisplayForm(false);
    handleEdit(id, type);
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
        <InfoList
          list={educationList}
          infoType="education"
          infoData={educationInfo}
          editingId={editingId}
          displayForm={displayForm}
          handleInfoChange={handleInfoChange}
          handleAddOrEdit={handleAddOrEdit}
          handleEditSubmit={handleEditSubmit}
          setDisplayForm={setDisplayForm}
          setEditingId={setEditingId}
          clearInfo={clearInfo}
        />
      </Dropdown>

      <Dropdown
        title="Employment"
        isOpen={openIndex === 2}
        toggle={() => handleToggle(2)}
      >
        <InfoList
          list={employmentList}
          infoType="employment"
          infoData={employmentInfo}
          editingId={editingId}
          displayForm={displayForm}
          handleInfoChange={handleInfoChange}
          handleAddOrEdit={handleAddOrEdit}
          handleEditSubmit={handleEditSubmit}
          setDisplayForm={setDisplayForm}
          setEditingId={setEditingId}
          clearInfo={clearInfo}
        />
      </Dropdown>

      <Dropdown
        title="Skills"
        isOpen={openIndex === 3}
        toggle={() => handleToggle(3)}
      >
        <MinorInfoList
          list={skillList}
          infoType="skills"
          infoData={skillInfo}
          editingId={editingId}
          displayForm={displayForm}
          handleInfoChange={handleInfoChange}
          handleAddOrEdit={handleAddOrEdit}
          handleEditSubmit={handleEditSubmit}
          setDisplayForm={setDisplayForm}
          setEditingId={setEditingId}
          clearInfo={clearInfo}
        />
      </Dropdown>

      <Dropdown
        title="Languages"
        isOpen={openIndex === 4}
        toggle={() => handleToggle(4)}
      >
        <MinorInfoList
          list={languageList}
          infoType="languages"
          infoData={languageInfo}
          editingId={editingId}
          displayForm={displayForm}
          handleInfoChange={handleInfoChange}
          handleAddOrEdit={handleAddOrEdit}
          handleEditSubmit={handleEditSubmit}
          setDisplayForm={setDisplayForm}
          setEditingId={setEditingId}
          clearInfo={clearInfo}
        />
      </Dropdown>

      <Dropdown
        title="Projects"
        isOpen={openIndex === 5}
        toggle={() => handleToggle(5)}
      >
        <InfoList
          list={projectList}
          infoType="projects"
          infoData={projectInfo}
          editingId={editingId}
          displayForm={displayForm}
          handleInfoChange={handleInfoChange}
          handleAddOrEdit={handleAddOrEdit}
          handleEditSubmit={handleEditSubmit}
          setDisplayForm={setDisplayForm}
          setEditingId={setEditingId}
          clearInfo={clearInfo}
        />
      </Dropdown>

      <Dropdown
        title="Hobbies"
        isOpen={openIndex === 6}
        toggle={() => handleToggle(6)}
      >
        <MinorInfoList
          list={hobbyList}
          infoType="hobbies"
          infoData={hobbyInfo}
          editingId={editingId}
          displayForm={displayForm}
          handleInfoChange={handleInfoChange}
          handleAddOrEdit={handleAddOrEdit}
          handleEditSubmit={handleEditSubmit}
          setDisplayForm={setDisplayForm}
          setEditingId={setEditingId}
          clearInfo={clearInfo}
        />
      </Dropdown>
    </div>
  );
}

export default ResumeForm;
