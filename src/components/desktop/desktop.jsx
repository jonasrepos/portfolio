import React, { useState } from 'react';
import styles from './desktop.module.css';
import { Taskbar } from '../desktopUIComponents/taskbar/taskbar';
import { Window } from '../desktopUIComponents/window/window';
import { Screensaver } from '../desktopUIComponents/screensaver/screensaver';

export const Desktop = ({ isFullscreen }) => {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <>
      { !isFullscreen && (
        <img 
          src="monitor.png"
          id={styles.monitor}
        />
      )}

      { !isFullscreen && (
        <Screensaver />
      )}

      <div id={ isFullscreen ? styles.fullscreen : styles.standart }>
        <Window x='10' y='150' z='50' width='800' height='300'/>
        <Taskbar />
      </div>
    </>
  );
};

export default Desktop;
