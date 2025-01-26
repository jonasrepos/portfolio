import styles from "./window.module.css";

export const Window = ({ x, y, z, width, height }) => {
  return (
    <div
      id={styles.background}
      style={{
        top: x + "px",
        left: y + "px",
        zIndex: z,
        width: width + "px",
        height: height + "px",
      }}
    >
      <div id={styles.header}>
        <img src="rahmenIcon.png" alt="" id={styles.icon} />
        <span id={styles.text}>Portfolio</span>
      </div>
      <div id={styles.content}></div>
    </div>
  );
};
