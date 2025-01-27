import React, { useState } from "react";
import styles from "./layout.module.css";
import Monitor from "../../components/workstationOS/monitor/monitor";

export const Layout = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={styles.layout}>
      <Monitor isFullscreen={isFullscreen} />
      <img
        src={isFullscreen ? "nofullscreen.png" : "fullscreen.png"}
        alt="Fullscreen Toggle"
        className={styles.fullscreenBtn}
        onClick={toggleFullscreen}
      />
    </div>
  );
};

export default Layout;
