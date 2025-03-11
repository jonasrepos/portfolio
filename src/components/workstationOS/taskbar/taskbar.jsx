import styles from "./taskbar.module.css";
import { TaskbarBtn } from "../taskbarBtn/taskbarBtn";

export const Taskbar = ({ windows, openWindow }) => {
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
          {windows.map((window) => (
            <TaskbarBtn
              key={window.id}
              title={window.title}
              icon={window.icon}
              width="150px"
              onClick={() => openWindow(window.id)} // Klick auf Taskbar-Button öffnet oder fokussiert das Fenster
            />
          ))}
        </div>
        <div className={styles.currentTimeBackground}>{showTime}</div>
      </div>
    </div>
  );
};

export default Taskbar;
