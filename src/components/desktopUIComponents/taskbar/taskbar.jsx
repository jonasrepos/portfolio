import styles from "./taskbar.module.css"
import { TaskbarBtn } from "../taskbarBtn/taskbarBtn";

export const Taskbar = () => {
    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 

    return (
        <div id={styles.background}>
            <hr id={styles.backgroundHilightLine}/>
            <div id={styles.taskbarContainer}>
                <TaskbarBtn text="Start" icon="windowsLogo.png" fontWeight="700"/>
                <div id={styles.taskbarTaskContainer}>
                    <TaskbarBtn text="Portfolio" icon="" width="150px" />
                </div>
                <div id={styles.currentTimeBackground}>{showTime}</div>
            </div>
        </div>
    );
}