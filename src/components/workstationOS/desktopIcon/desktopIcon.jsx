import styles from "./desktopIcon.module.css";

export const DesktopIcon = () => {
  return (
    <>
      <div className={styles.iconContainer}>
        <img src="frameIcon.png" alt="" className={styles.icon} />
        <span className={styles.title}>Portfolio</span>
      </div>
    </>
  );
};

export default DesktopIcon;
