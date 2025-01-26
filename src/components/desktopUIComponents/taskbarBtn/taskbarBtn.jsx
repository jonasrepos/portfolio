import styles from "./taskbarBtn.module.css"

export const TaskbarBtn = ({ text, icon, fontWeight, width }) => {
    return (
      <button id={styles.taskbarBtn} style={{ width: width || 'auto' }}>
        {icon && <img src={icon} alt="user" id={styles.icon} />}
        <span id={styles.text} style={{ fontWeight: fontWeight || 'normal' }}>{text}</span>
      </button>
    );
};