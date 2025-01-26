import React, { useState } from 'react';
import styles from "./layout.module.css"
import Desktop from "../../components/desktop/desktop";

export const Layout = () => {  
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    return (
        <div id={styles.layout}>
            <Desktop isFullscreen={isFullscreen} />
            <img 
                src={ isFullscreen ? "nofullscreen.png" : "fullscreen.png" }
                alt="Fullscreen Toggle" 
                id={styles.fullscreenBtn} 
                onClick={toggleFullscreen} 
            />
        </div>
    );
};

export default Layout;