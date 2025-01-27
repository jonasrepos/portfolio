import { useState, useEffect, useRef } from "react";
import styles from "./monitor.module.css";

import { Taskbar } from "../taskbar/taskbar";
import { Window } from "../window/window";
import { Screensaver } from "../screensaver/screensaver";
import { Desktop } from "../desktop/desktop";

export const Monitor = ({ isFullscreen }) => {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <>
      {/* 
      {!isFullscreen && <img src="monitor.png" className={styles.monitor} />}
      {!isFullscreen && <Screensaver />}
      */}

      <div className={isFullscreen ? styles.fullscreen : styles.standart}>
        <Desktop />

        <Window
          initX="100"
          initY="100"
          z="50"
          initWidth="1350"
          initHeight="900"
          content="Test"
          title="Portfolio"
          icon="frameIcon.png"
        />

        <Taskbar />
      </div>
    </>
  );
};

export default Monitor;
