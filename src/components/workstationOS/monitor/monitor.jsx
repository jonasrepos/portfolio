import { useState, useEffect, useRef } from "react";
import styles from "./monitor.module.css";

import { Taskbar } from "../taskbar/taskbar";
import { Window } from "../window/window";
import { Screensaver } from "../screensaver/screensaver";
import { Desktop } from "../desktop/desktop";
import Portfolio from "../../programs/portfolio/portfolio";

export const Monitor = ({ isFullscreen }) => {
  const [windows, setWindows] = useState([
    {
      id: 1,
      title: "Portfolio",
      content: <Portfolio />,
      icon: "frameIcon.png",
      initX: "10%",
      initY: "10%",
      initWidth: "80%",
      initHeight: "80%",
      z: 1,
    },
    /*{
      id: 2,
      title: "Hinweis",
      content: "Vielen Dank für das Besuchen meines Portfolios!",
      icon: "monitor.png",
      initX: "40%",
      initY: "40%",
      initWidth: "20%",
      initHeight: "5%",
      z: 2,
    },*/
  ]);

  const removeWindow = (windowId) => {
    setWindows(windows.filter((window) => window.id !== windowId));
  };

  return (
    <>
      <div className={isFullscreen ? styles.fullscreen : styles.standart}>
        <div className={styles.desktopContainer}>
          {windows.map((window) => (
            <Window
              key={window.id}
              initX={window.initX}
              initY={window.initY}
              z={window.z}
              initWidth={window.initWidth}
              initHeight={window.initHeight}
              content={window.content}
              title={window.title}
              icon={window.icon}
              handleCloseWindow={() => removeWindow(window.id)} // Übergibt die Entfernen-Funktion
            />
          ))}
          <Desktop />
        </div>

        <Taskbar />
      </div>
    </>
  );
};

export default Monitor;
