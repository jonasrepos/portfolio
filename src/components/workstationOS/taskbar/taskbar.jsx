
import styles from "./taskbar.module.css";
import { TaskbarBtn } from "../taskbarBtn/taskbarBtn";

export const Taskbar = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const showTime = `${hours}:${minutes}`;

  return (
    <div className={styles.background}>
      <hr className={styles.backgroundHilightLine} />
      <div className={styles.taskbarContainer}>
        <TaskbarBtn title="Start" icon="windowsLogo.png" fontWeight="700" />
        <div className={styles.taskbarTaskContainer}>
            <TaskbarBtn 
            key={window.id}
            title="Portfolio"
            icon="frameIcon.png" width="150px" />
        </div>
        <div className={styles.currentTimeBackground}>{showTime}</div>
      </div>
    </div>
  );
};
