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
  handleDelete,
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

  const confirmDelete = (itemId, infoType) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      handleDelete(itemId, infoType); // Call the delete function passed from the parent
    }
  };

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
                <div
                  className={styles.displayEntry}
                  onClick={() => handleEditSubmit(item.id, infoType)}
                >
                  <div>
                    {" "}
                    {/* Display based on the type of info (skills|languages|hobbies) */}
                    {infoType === "hobbies" ? (
                      <>
                        {item.name ? (
                          <div>{item.name}</div>
                        ) : (
                          <div>[Hobby]</div>
                        )}
                      </>
                    ) : infoType === "skills" ? (
                      <>
                        {item.name ? (
                          <div>{item.name}</div>
                        ) : (
                          <div>[Skill]</div>
                        )}
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
                  </div>

                  <div
                    className={styles.deleteButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      confirmDelete(item.id, infoType);
                    }}
                  >
                    X
                  </div>
                </div>
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
