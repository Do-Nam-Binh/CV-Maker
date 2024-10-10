import { useState, useEffect } from "react";
import styles from "../styles/ResumeForm.module.css";

function EducationInput() {
  const [educationInfo, setEducationInfo] = useState(() => {
    const savedEduInfo = localStorage.getItem("eduInfo");
    return savedEduInfo
      ? JSON.parse(savedEduInfo)
      : {
          eduName: "",
          school: "",
          city: "",
          startMonth: "",
          startYear: "",
          endMonth: "",
          endYear: "",
          desc: "",
        };
  });

  function handleEduInfoChange(e) {
    const { name, value } = e.target;
    setEducationInfo((prevEduInfo) => ({
      ...prevEduInfo,
      [name]: value,
    }));
  }

  useEffect(() => {
    localStorage.setItem("eduInfo", JSON.stringify(educationInfo));
  }, [educationInfo]);

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

  return (
    <div className={styles.eduForm}>
      <div className={styles.inputEntry}>
        <label htmlFor="eduName">Education</label>
        <input
          type="text"
          name="eduName"
          id={styles.eduNameInput}
          onChange={handleEduInfoChange}
          value={educationInfo.eduName}
        />
      </div>

      <div className={styles.schoolCity}>
        <div className={styles.inputEntry}>
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id={styles.schoolInput}
            onChange={handleEduInfoChange}
            value={educationInfo.school}
          />
        </div>
        <div className={styles.inputEntry}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id={styles.cityInput}
            onChange={handleEduInfoChange}
            value={educationInfo.city}
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
                onChange={handleEduInfoChange}
                value={educationInfo.startMonth}
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
                onChange={handleEduInfoChange}
                value={educationInfo.startYear}
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
                onChange={handleEduInfoChange}
                value={educationInfo.endMonth}
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
                onChange={handleEduInfoChange}
                value={educationInfo.endYear}
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
          onChange={handleEduInfoChange}
          value={educationInfo.desc}
        ></textarea>
      </div>

      <button className={styles.submitEduInfo}>Done</button>
    </div>
  );
}

export default EducationInput;
