import styles from "../styles/ResumeForm.module.css";

function InfoInput({
  infoType,
  infoData,
  handleInfoChange,
  handleAddOrEdit,
  setDisplayForm,
}) {
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

      <button
        className={styles.submitInfo}
        onClick={() => handleSubmit(infoType)}
      >
        Done
      </button>
    </div>
  );
}

export default InfoInput;
