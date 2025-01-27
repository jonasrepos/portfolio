import styles from "./taskbar.module.css";
import { TaskbarBtn } from "../taskbarBtn/taskbarBtn";

import configData from "../../../json/config.json";

export const Taskbar = () => {
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();

  return (
    <div id={styles.background}>
      <hr id={styles.backgroundHilightLine} />
      <div id={styles.taskbarContainer}>
        <TaskbarBtn title="Start" icon="windowsLogo.png" fontWeight="700" />
        <div id={styles.taskbarTaskContainer}>
          {configData.windows.map((task) => (
            <TaskbarBtn title={task.title} icon={task.icon} />
          ))}
        </div>
        <div id={styles.currentTimeBackground}>{showTime}</div>
      </div>
    </div>
  );
};
