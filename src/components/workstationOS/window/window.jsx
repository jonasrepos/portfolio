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
  handleCloseWindow,
}) => {
  const [x, setX] = useState(initX);
  const [y, setY] = useState(initY);
  const [width, setWidth] = useState(initWidth);
  const [height, setHeight] = useState(initHeight);

  const [prevWidth, setPrevWidth] = useState(initWidth);
  const [prevHeight, setPrevHeight] = useState(initHeight);

  const [isFullsize, setIsFullsize] = useState(false);

  const windowRef = useRef(null);
  const isDragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const [fontSize, setFontSize] = useState(0);

  useEffect(() => {
    if (width) {
      setFontSize(parseFloat(width) * 0.01);
    }
  }, [width]);

  const calculatePixels = () => {
    const parent = windowRef.current?.parentNode;
    if (parent) {
      const parentWidth = parent.offsetWidth;
      const parentHeight = parent.offsetHeight;

      setX((parseFloat(initX) / 100) * parentWidth + "px");
      setY((parseFloat(initY) / 100) * parentHeight + "px");
      setWidth((parseFloat(initWidth) / 100) * parentWidth + "px");
      setHeight((parseFloat(initHeight) / 100) * parentHeight + "px");
    }
  };

  useEffect(() => {
    calculatePixels();
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    const currentX = parseFloat(x);
    const currentY = parseFloat(y);

    offset.current = {
      x: e.clientX - currentX,
      y: e.clientY - currentY,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const parent = windowRef.current?.parentNode;
    if (parent) {
      const parentWidth = parent.offsetWidth;
      const parentHeight = parent.offsetHeight;

      let newX = e.clientX - offset.current.x;
      let newY = e.clientY - offset.current.y;

      newX = Math.max(0, Math.min(newX, parentWidth - parseFloat(width)));
      newY = Math.max(0, Math.min(newY, parentHeight - parseFloat(height)));

      if (newY === 0 && !isFullsize) {
        handleSetFullsize();
        return;
      }

      setX(newX + "px");
      setY(newY + "px");
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleSetFullsize = () => {
    const parent = windowRef.current?.parentNode;
    if (parent) {
      const parentWidth = parent.offsetWidth;
      const parentHeight = parent.offsetHeight;

      if (!isFullsize) {
        setPrevWidth(width);
        setPrevHeight(height);
        setX("0px");
        setY("0px");
        setWidth(parentWidth + "px");
        setHeight(parentHeight + "px");
      } else {
        setWidth(prevWidth);
        setHeight(prevHeight);
        calculatePixels();
      }
      setIsFullsize(!isFullsize);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={windowRef}
      className={styles.background}
      style={{
        top: y,
        left: x,
        zIndex: z,
        width: width,
        height: height,
        position: "absolute",
        fontSize: fontSize,
      }}
    >
      <div className={styles.windowBox}>
        <div className={styles.header} onMouseDown={handleMouseDown}>
          <img src={icon} alt="" className={styles.icon} />
          <span className={styles.text}>{title}</span>
          <button onClick={handleSetFullsize} className={styles.resizeBtn}>
            <img src={"resizeIcon.png"} alt="" className={styles.resizeIcon} />
          </button>
          <button onClick={handleCloseWindow} className={styles.resizeBtn}>
            <p>X</p>
          </button>
        </div>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};
