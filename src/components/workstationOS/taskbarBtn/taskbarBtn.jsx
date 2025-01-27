import styles from "./taskbarBtn.module.css";

export const TaskbarBtn = ({ title, icon, fontWeight, width }) => {
  return (
    <button className={styles.taskbarBtn} style={{ width: width || "auto" }}>
      {icon && <img src={icon} alt="user" className={styles.icon} />}
      <span
        className={styles.text}
        style={{ fontWeight: fontWeight || "normal" }}
      >
        {title}
      </span>
    </button>
  );
};
