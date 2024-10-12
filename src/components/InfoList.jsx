import React from "react";
import InfoInput from "./InfoInput";
import styles from "../styles/ResumeForm.module.css";

function InfoList({
  list,
  infoType,
  infoData,
  editingId,
  displayForm,
  handleInfoChange,
  handleAddOrEdit,
  handleEditSubmit,
  setDisplayForm,
  setEditingId,
  clearInfo,
}) {
  return (
    <>
      {list.length > 0 && (
        <ul className={styles.formEduList}>
          {list.map((item) => (
            <li key={item.id}>
              {editingId === item.id ? (
                <InfoInput
                  infoType={infoType}
                  infoData={infoData}
                  handleInfoChange={handleInfoChange}
                  handleAddOrEdit={handleAddOrEdit}
                  setDisplayForm={setDisplayForm}
                />
              ) : (
                <button
                  className={styles.eduEntry}
                  onClick={() => handleEditSubmit(item.id, infoType)}
                >
                  {/* Display based on the type of info (education/employment/projects) */}
                  {infoType === "education" ? (
                    <>
                      {item.eduName ? (
                        <div>{item.eduName}</div>
                      ) : (
                        <div>[Education]</div>
                      )}
                      {item.school || item.city ? (
                        <div>
                          {item.school}
                          {item.city && item.school && ", "} {item.city}
                        </div>
                      ) : (
                        <div>[School, City]</div>
                      )}
                    </>
                  ) : infoType === "employment" ? (
                    <>
                      {item.position ? (
                        <div>{item.position}</div>
                      ) : (
                        <div>[Employment]</div>
                      )}
                      {item.employer || item.city ? (
                        <div>
                          {item.employer}
                          {item.city && item.employer && ", "} {item.city}
                        </div>
                      ) : (
                        <div>[Employer, City]</div>
                      )}
                    </>
                  ) : (
                    // Handle projects
                    <>
                      {item.projectName ? (
                        <div>{item.projectName}</div>
                      ) : (
                        <div>[Project]</div>
                      )}
                      {item.description ? (
                        <div>{item.description}</div>
                      ) : (
                        <div>[Description]</div>
                      )}
                    </>
                  )}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      {displayForm ? (
        <InfoInput
          infoType={infoType}
          infoData={infoData}
          handleInfoChange={handleInfoChange}
          handleAddOrEdit={handleAddOrEdit}
          setDisplayForm={setDisplayForm}
        />
      ) : (
        <button
          className={styles.addEntryButton}
          onClick={() => {
            clearInfo(infoType);
            setDisplayForm(true);
            setEditingId(null);
          }}
        >
          <div>Add {infoType}</div>
        </button>
      )}
    </>
  );
}

export default InfoList;
