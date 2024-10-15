import React from "react";
import styles from "../styles/ResumeForm.module.css";
import MinorInfoInput from "./MinorInfoInput";

function MinorInfoList({
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
  const skillLevel = [
    "Make a choice",
    "Beginner",
    "Moderate",
    "Good",
    "Very Good",
    "Excellent",
  ];

  const languageLevel = [
    "Make a choice",
    "Beginner",
    "Moderate",
    "Good",
    "Very Good",
    "Fluent",
  ];
  return (
    <>
      {list.length > 0 && (
        <ul className={styles.formList}>
          {list.map((item) => (
            <li key={item.id}>
              {editingId === item.id ? (
                <MinorInfoInput
                  infoType={infoType}
                  infoData={infoData}
                  handleInfoChange={handleInfoChange}
                  handleAddOrEdit={handleAddOrEdit}
                  setDisplayForm={setDisplayForm}
                />
              ) : (
                <button
                  className={styles.displayEntry}
                  onClick={() => handleEditSubmit(item.id, infoType)}
                >
                  {/* Display based on the type of info (skills|languages|hobbies) */}
                  {infoType === "hobbies" ? (
                    <>
                      {item.name ? <div>{item.name}</div> : <div>[Hobby]</div>}
                    </>
                  ) : infoType === "skills" ? (
                    <>
                      {item.name ? <div>{item.name}</div> : <div>[Skill]</div>}
                    </>
                  ) : (
                    <>
                      {item.name ? (
                        <div>{item.name}</div>
                      ) : (
                        <div>[Language]</div>
                      )}
                    </>
                  )}

                  {infoType === "skills" ? (
                    <div className={styles.levelDisplay}>
                      {skillLevel[item.level]}
                    </div>
                  ) : infoType === "languages" ? (
                    <div className={styles.levelDisplay}>
                      {languageLevel[item.level]}
                    </div>
                  ) : (
                    ""
                  )}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      {displayForm ? (
        <MinorInfoInput
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

export default MinorInfoList;
