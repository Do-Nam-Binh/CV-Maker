import styles from "../styles/ResumePreview.module.css";

function ResumePreview({ fullName, headline, personalDetails }) {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.leftSide}>
          <div className={styles.nameHeadline}>
            <div className={styles.name}>
              <div>{fullName.firstName}</div>
              <div>{fullName.lastName}</div>
            </div>

            <div className={styles.headline}>{headline}</div>
          </div>

          <div className={styles.leftHeaders}>Personal details</div>
          <div className={styles.leftHeaders}>Skills</div>
          <div className={styles.leftHeaders}>Languages</div>
          <div className={styles.leftHeaders}>Hobbies</div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.rightHeaders}>Education</div>
          <div className={styles.rightHeaders}>Employment</div>
          <div className={styles.rightHeaders}>Projects</div>
        </div>
      </div>
    </>
  );
}

export default ResumePreview;
