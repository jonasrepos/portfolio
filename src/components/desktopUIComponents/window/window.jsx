import styles from "./window.module.css";
import { useEffect, useRef, useState } from "react";

export const Window = ({
  initX,
  initY,
  z,
  initWidth,
  initHeight,
  content,
  title,
  icon,
}) => {
  const [x, setX] = useState(initX);
  const [y, setY] = useState(initY);
  const [width, setWidth] = useState(initWidth + "px");
  const [height, setHeight] = useState(initHeight + "px");

  const [prevWidth, setPrevWidth] = useState(initWidth + "px");
  const [prevHeight, setPrevHeight] = useState(initHeight + "px");
  const [isFullsize, setIsFullsize] = useState(false);

  const windowRef = useRef(null);
  const isDragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (!isFullsize) {
      setIsFullsize(!isFullsize);
      setWidth(prevWidth);
      setHeight(prevHeight);
    }
    isDragging.current = true;
    offset.current = {
      x: e.clientX - x,
      y: e.clientY - y,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    setX(e.clientX - offset.current.x);
    setY(e.clientY - offset.current.y);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleSetFullsize = () => {
    if (!isFullsize) {
      setIsFullsize(!isFullsize);
      setWidth(prevWidth);
      setHeight(prevHeight);
    } else {
      setIsFullsize(!isFullsize);
      setPrevWidth(width);
      setPrevHeight(height);
      setX(0);
      setY(0);
      setWidth("100%");
      setHeight("100%");
    }
  };

  return (
    <div
      ref={windowRef}
      id={styles.background}
      style={{
        top: y + "px",
        left: x + "px",
        zIndex: z,
        width: width,
        height: height,
      }}
    >
      <div id={styles.header} onMouseDown={handleMouseDown}>
        <img src={icon} alt="" id={styles.icon} />
        <span id={styles.text}> {title} </span>
        <button onClick={handleSetFullsize} id={styles.resizeBtn}>
          <img src={"resizeIcon.png"} alt="" id={styles.resizeIcon} />
        </button>
      </div>
      <div id={styles.content}> {content} </div>
    </div>
  );
};
