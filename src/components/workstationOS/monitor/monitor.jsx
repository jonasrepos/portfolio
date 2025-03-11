import { useState } from "react";
import Taskbar from "../taskbar/taskbar";
import Desktop from "../desktop/desktop";
import { Window } from "../window/window";
import Portfolio from "../../programs/portfolio/portfolio";
import styles from "./monitor.module.css";

const appRegistry = {
  1: { title: "Portfolio", content: <Portfolio />, icon: "frameIcon.png" },
};

export default function Monitor({ isFullscreen }) {
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
  ]);

  const openWindow = (id) => {
    if (!windows.some((w) => w.id === id) && appRegistry[id]) {
      const { title, content, icon } = appRegistry[id];
      setWindows([
        ...windows,
        {
          id,
          title,
          content,
          icon,
          initX: "10%",
          initY: "10%",
          initWidth: "80%",
          initHeight: "80%",
          z: windows.length + 1,
        },
      ]);
    }
  };

  const closeWindow = (id) => {
    setWindows(windows.filter((w) => w.id !== id));
  };

  return (
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
            handleCloseWindow={() => closeWindow(window.id)}
          />
        ))}
        <Desktop openWindow={openWindow} />
      </div>
      <Taskbar windows={windows} openWindow={openWindow} />
    </div>
  );
}
