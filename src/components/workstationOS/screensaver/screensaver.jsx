import React, { useState, useEffect } from "react";
import styles from "./screensaver.module.css";

export const Screensaver = () => {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    let timeout;

    const handleMouseMove = () => {
      // Hide the iframe when the mouse moves
      if (showIframe) {
        setShowIframe(false);
      }
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        // Show the iframe after 5 seconds of inactivity
        setShowIframe(true);
      }, 5000);
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, [showIframe]);

  return (
    <>
      {showIframe && (
        <iframe
          src="https://www.youtube.com/embed/mvDveDf0Wbk?autoplay=1&mute=1&controls=0&loop=1&playlist=mvDveDf0Wbk"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; encrypted-media"
          allowFullScreen
          id={styles.screensaver}
        />
      )}
    </>
  );
};

export default Screensaver;
