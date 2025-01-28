import styles from "./desktop.module.css";
import DesktopIcon from "../desktopIcon/desktopIcon";

export const Desktop = () => {
  return (
    <>
      <div className={styles.background}>
        <DesktopIcon id="1" icon="frameIcon.png" title="Portfolio" />
      </div>
    </>
  );
};

export default Desktop;
