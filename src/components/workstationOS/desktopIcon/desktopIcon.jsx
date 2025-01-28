import styles from "./desktopIcon.module.css";

export const DesktopIcon = ( {icon, title} ) => {
  
  return (
    <>
      <div className={styles.iconContainer}>
        <img src={icon} alt="" className={styles.icon} />
        <span className={styles.title}>{title}</span>
      </div>
    </>
  );
};

export default DesktopIcon;
