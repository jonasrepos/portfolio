import { useState, useEffect, useRef } from "react";
import styles from "./desktop.module.css";
import { Taskbar } from "../desktopUIComponents/taskbar/taskbar";
import { Window } from "../desktopUIComponents/window/window";
import { Screensaver } from "../desktopUIComponents/screensaver/screensaver";

import configData from "../../json/config.json";

export const Desktop = ({ isFullscreen }) => {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <>
      {/* 
      {!isFullscreen && <img src="monitor.png" id={styles.monitor} />}
      {!isFullscreen && <Screensaver />}
      */}

      <div
        id="div1"
        className={isFullscreen ? styles.fullscreen : styles.standart}
      >
        {configData.windows.map((task) => (
          <Window
            id={task.id}
            initX={task.initX}
            initY={task.initY}
            z={task.z}
            initWidth={task.initWidth}
            initHeight={task.initHeight}
            content={task.content}
            title={task.title}
            icon={task.icon}
          />
        ))}
        <Taskbar />
      </div>
    </>
  );
};

export default Desktop;
