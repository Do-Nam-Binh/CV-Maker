import styles from "../styles/Dropdown.module.css";

const Dropdown = ({ title, children, isOpen, toggle }) => {
  return (
    <div className="section">
      <button className={styles.dropdown} onClick={toggle}>
        {title}
        <span className={styles.icon}>{isOpen ? "v" : "+"}</span>
      </button>
      <div
        className={styles.content}
        style={{ maxHeight: isOpen ? "1000px" : "0px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
