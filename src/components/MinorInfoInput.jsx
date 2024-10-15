import styles from "../styles/ResumeForm.module.css";

function MinorInfoInput({
  infoType,
  infoData,
  handleInfoChange,
  handleAddOrEdit,
  setDisplayForm,
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

  const handleSubmit = (type) => {
    handleAddOrEdit(type);
    setDisplayForm(false);
  };

  return (
    <div className={styles.form}>
      <div className={styles.inputEntry}>
        <label htmlFor="name">
          {infoType === "skills"
            ? "Skill"
            : infoType === "languages"
            ? "Language"
            : "Hobby"}
        </label>
        <input
          type="text"
          name="name"
          id={styles.eduNameInput}
          onChange={(e) => handleInfoChange(e, infoType)}
          value={infoData.name}
        />
      </div>

      {infoType !== "hobbies" && (
        <div className={styles.levelInput}>
          <div className={styles.inputEntry}>
            <label htmlFor="level">Level</label>
            <input
              name="level"
              id="level"
              type="range"
              min={0}
              max={5}
              step={1}
              value={infoData.level}
              onChange={(e) => handleInfoChange(e, infoType)}
            ></input>
          </div>
          <div>
            {infoType === "skills"
              ? skillLevel[infoData.level]
              : languageLevel[infoData.level]}
          </div>
        </div>
      )}

      <button
        className={styles.submitInfo}
        onClick={() => handleSubmit(infoType)}
      >
        Done
      </button>
    </div>
  );
}

export default MinorInfoInput;
