import { useState, useEffect } from "react";
import styles from "../styles/ResumeForm.module.css";

function EmploymentInput({
  employmentInfo,
  handleInfoChange,
  handleAddOrEdit,
  setDisplayForm,
}) {
  useEffect(() => {
    localStorage.setItem("eduInfo", JSON.stringify(employmentInfo));
  }, [employmentInfo]);

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
        <label htmlFor="position">Employment</label>
        <input
          type="text"
          name="position"
          id={styles.eduNameInput}
          onChange={(e) => handleInfoChange(e, "employment")}
          value={employmentInfo.position}
        />
      </div>

      <div className={styles.schoolCity}>
        <div className={styles.inputEntry}>
          <label htmlFor="employer">employer</label>
          <input
            type="text"
            name="employer"
            id={styles.schoolInput}
            onChange={(e) => handleInfoChange(e, "employment")}
            value={employmentInfo.employer}
          />
        </div>
        <div className={styles.inputEntry}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id={styles.cityInput}
            onChange={(e) => handleInfoChange(e, "employment")}
            value={employmentInfo.city}
          />
        </div>
      </div>

      <div className={styles.inputEntry}>
        <div className={styles.dateSelector}>
          <div>
            <label>Start date</label>
            <div className={styles.startDateSelector}>
              <select
                name="startMonth"
                id="monthSelect"
                onChange={(e) => handleInfoChange(e, "employment")}
                value={employmentInfo.startMonth}
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
                onChange={(e) => handleInfoChange(e, "employment")}
                value={employmentInfo.startYear}
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
                onChange={(e) => handleInfoChange(e, "employment")}
                value={employmentInfo.endMonth}
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
                onChange={(e) => handleInfoChange(e, "employment")}
                value={employmentInfo.endYear}
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
          onChange={(e) => handleInfoChange(e, "employment")}
          value={employmentInfo.desc}
        ></textarea>
      </div>

      <button
        className={styles.submitEduInfo}
        onClick={() => handleSubmit("employment")}
      >
        Done
      </button>
    </div>
  );
}

export default EmploymentInput;
