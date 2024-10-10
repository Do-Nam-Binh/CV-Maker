import styles from "../styles/ResumePreview.module.css";
import houseLogo from "../assets/house-chimney.svg";
import emailLogo from "../assets/envelope.svg";
import phoneLogo from "../assets/phone-flip.svg";

function ResumePreview({ personalDetails, image, educationList }) {
  const showPersonalHeader =
    personalDetails.email ||
    personalDetails.phone ||
    personalDetails.address ||
    personalDetails.postcode ||
    personalDetails.city
      ? true
      : false;

  const monthNumberToLabelMap = {
    [1]: "January",
    [2]: "February",
    [3]: "March",
    [4]: "April",
    [5]: "May",
    [6]: "June",
    [7]: "July",
    [8]: "August",
    [9]: "September",
    [10]: "October",
    [11]: "November",
    [12]: "December",
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.leftSide}>
          <div className={styles.nameHeadline}>
            <div className={styles.name}>
              <div>{personalDetails.firstName}</div>
              <div>{personalDetails.lastName}</div>
            </div>

            <div className={styles.headline}>{personalDetails.headline}</div>

            <div>
              {image && (
                <img
                  src={image}
                  alt="Uploaded preview"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    marginTop: "30px",
                    borderRadius: "20px",
                  }}
                />
              )}
            </div>
          </div>

          <div className={styles.leftHeaders}>
            {showPersonalHeader && (
              <div className={styles.leftHeadersLabel}>Personal Details</div>
            )}
            {personalDetails.email && (
              <div className={styles.info}>
                <img src={emailLogo} className={styles.logo} alt="Email logo" />
                <div>{personalDetails.email}</div>
              </div>
            )}

            {personalDetails.phone && (
              <div className={styles.info}>
                <img src={phoneLogo} className={styles.logo} alt="Phone logo" />
                <div>{personalDetails.phone}</div>
              </div>
            )}

            {(personalDetails.address ||
              personalDetails.postcode ||
              personalDetails.city) && (
              <div className={styles.info}>
                <img src={houseLogo} className={styles.logo} alt="House logo" />
                <div>
                  <div>{personalDetails.address}</div>
                  <div className={styles.postcodeCity}>
                    <div>{personalDetails.postcode}</div>
                    <div>{personalDetails.city}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.leftHeaders}>
            <div className={styles.leftHeadersLabel}>Skills</div>
          </div>
          <div className={styles.leftHeaders}>
            <div className={styles.leftHeadersLabel}>Languages</div>
          </div>
          <div className={styles.leftHeaders}>
            <div className={styles.leftHeadersLabel}>Hobbies</div>
          </div>
        </div>

        <div className={styles.rightSide}>
          {educationList.length > 0 && (
            <div className={styles.rightHeaders}>
              <div className={styles.rightHeadersLabel}>Education</div>
              <div className={styles.eduList}>
                <ul className={styles.eduListItem}>
                  {educationList.map((item) => (
                    <li key={item.id}>
                      <div className={styles.eduNameDate}>
                        <div className={styles.eduName}>{item.eduName}</div>
                        <div className={styles.date}>
                          {monthNumberToLabelMap[item.startMonth]}{" "}
                          {item.startYear} -{" "}
                          {monthNumberToLabelMap[item.endMonth]} {item.endYear}
                        </div>
                      </div>

                      <div className={styles.schoolCity}>
                        {item.school}, {item.city}
                      </div>

                      <div className={styles.desc}>{item.desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div className={styles.rightHeaders}>
            <div className={styles.rightHeadersLabel}>Employment</div>
          </div>
          <div className={styles.rightHeaders}>
            <div className={styles.rightHeadersLabel}>Projects</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumePreview;
