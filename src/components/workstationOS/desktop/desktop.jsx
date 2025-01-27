import styles from "./desktop.module.css";
import DesktopIcon from "../desktopIcon/desktopIcon";

export const Desktop = () => {
  return (
    <>
      <div className={styles.desktop}>
        <DesktopIcon />
      </div>
    </>
  );
};

export default Desktop;
