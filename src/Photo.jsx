import {useCallback, useRef, useState} from "react";
import styles from "./Photo.module.css";

function Photo(){
 

    return(
        <div className={styles.photo}>
            <img src="img/ny_1.jpg" alt="BigCo Inc. logo"/>
            <img src="img/ny_1.jpg" alt="BigCo Inc. logo"/>
            <img src="img/ny_1.jpg" alt="BigCo Inc. logo"/> 
            <img src="img/ny_1.jpg" alt="BigCo Inc. logo"/> 
            <img src="img/ny_1.jpg" alt="BigCo Inc. logo"/> 
            <img src="img/ny_1.jpg" alt="BigCo Inc. logo"/> 
        </div>
        
    )
}

export default Photo