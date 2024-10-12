import styles from "../styles/ResumeForm.module.css";

function InfoInput({
  infoType,
  infoData,
  handleInfoChange,
  handleAddOrEdit,
  setDisplayForm,
}) {
  const months = {
    0: "Month",
    1: "January",
    2: "Febuary",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const startYear = 1920;
  const endYear = new Date().getFullYear();
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  const handleSubmit = (type) => {
    handleAddOrEdit(type);
    setDisplayForm(true);
  };

  return (
    <div className={styles.eduForm}>
      <div className={styles.inputEntry}>
        <label htmlFor="name">
          {infoType === "employment" ? "Employment" : "Education"}
        </label>
        <input
          type="text"
          name={infoType === "employment" ? "position" : "eduName"}
          id={styles.eduNameInput}
          onChange={(e) => handleInfoChange(e, infoType)}
          value={infoData[infoType === "employment" ? "position" : "eduName"]}
        />
      </div>

      <div className={styles.schoolCity}>
        <div className={styles.inputEntry}>
          <label
            htmlFor={
              infoType === "employment"
                ? "employer"
                : infoType === "education"
                ? "school"
                : "summary"
            }
          >
            {infoType === "employment"
              ? "Employer"
              : infoType === "education"
              ? "School"
              : "summary"}
          </label>
          <input
            type="text"
            name={
              infoType === "employment"
                ? "employer"
                : infoType === "education"
                ? "school"
                : "summary"
            }
            id={styles.schoolInput}
            onChange={(e) => handleInfoChange(e, infoType)}
            value={
              infoData[
                infoType === "employment"
                  ? "employer"
                  : infoType === "education"
                  ? "school"
                  : "summary"
              ]
            }
          />
        </div>
        {infoType !== "projects" && (
          <div className={styles.inputEntry}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id={styles.cityInput}
              onChange={(e) => handleInfoChange(e, infoType)}
              value={infoData.city}
            />
          </div>
        )}
      </div>

      <div className={styles.inputEntry}>
        <div className={styles.dateSelector}>
          <div>
            <label>Start date</label>
            <div className={styles.startDateSelector}>
              <select
                name="startMonth"
                id="monthSelect"
                onChange={(e) => handleInfoChange(e, infoType)}
                value={infoData.startMonth}
              >
                {Object.entries(months).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>

              <select
                name="startYear"
                id="yearSelect"
                onChange={(e) => handleInfoChange(e, infoType)}
                value={infoData.startYear}
              >
                <option key="Year" value={null}>
                  Year
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label>End date</label>
            <div className={styles.endDateSelector}>
              <select
                name="endMonth"
                id="monthSelect"
                onChange={(e) => handleInfoChange(e, infoType)}
                value={infoData.endMonth}
              >
                {Object.entries(months).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>

              <select
                name="endYear"
                id="yearSelect"
                onChange={(e) => handleInfoChange(e, infoType)}
                value={infoData.endYear}
              >
                <option key="Year" value={null}>
                  Year
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.inputEntry}>
        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          id={styles.descInput}
          rows="10"
          onChange={(e) => handleInfoChange(e, infoType)}
          value={infoData.desc}
        ></textarea>
      </div>

      <button
        className={styles.submitEduInfo}
        onClick={() => handleSubmit(infoType)}
      >
        Done
      </button>
    </div>
  );
}

export default InfoInput;
