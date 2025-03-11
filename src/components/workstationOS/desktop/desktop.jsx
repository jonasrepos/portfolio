import styles from "./desktop.module.css";
import DesktopIcon from "../desktopIcon/desktopIcon";

export const Desktop = ({ openWindow }) => {
  return (
    <div className={styles.background}>
      <DesktopIcon id={1} icon="frameIcon.png" title="Portfolio" openWindow={openWindow} />
    </div>
  );
};

export default Desktop;
