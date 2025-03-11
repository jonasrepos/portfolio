import styles from "./desktopIcon.module.css";

export const DesktopIcon = ({ id, icon, title, openWindow }) => {
  return (
    <div className={styles.iconContainer} onClick={() => openWindow(id)}>
      <img src={icon} alt={title} className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default DesktopIcon;
