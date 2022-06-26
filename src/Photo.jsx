import {useCallback, useRef, useState} from "react";
import styles from "./Photo.module.css";
import Image from "./Image";

function Photo(){

    const [style, setStyle] = useState("default");
    const imgUrls= ["img/56600019.JPG"
    ,"img/56600030.JPG"
    ,"img/67250007.JPG"
    ,"img/67250027.JPG"
    ,"img/67250031.JPG"
    ,"img/ny_1.JPG"
    ,"img/67250007.JPG"
    ,"img/67250027.JPG"
    ,"img/67250031.JPG"
    ,"img/ny_1.JPG"
    ];

    const photos = imgUrls.slice(0,6).map((url)=>
        <Image src={url}></Image>
    )

    const moreImg = ()=>{
      
    }
 

    return(
        <div className={styles.photo}>
            {photos}
            {/* <Image src={"img/56600019.JPG"}></Image>
            <Image src={"img/56600030.JPG"}></Image>
            <Image src={"img/67250007.JPG"}></Image>
            <Image src={"img/67250027.JPG"}></Image>
            <Image src={"img/67250031.JPG"}></Image>
            <Image src={"img/ny_1.JPG"}></Image> */}
            {/* <img src="img/56600019.JPG" alt="BigCo Inc. logo" className={style} onClick={enlargeImg}/> */}
            {/* <img src="img/56600030.jpg" alt="BigCo Inc. logo"/>
            <img src="img/67250007.jpg" alt="BigCo Inc. logo"/> 
            <img src="img/67250027.jpg" alt="BigCo Inc. logo"/> 
            <img src="img/67250031.jpg" alt="BigCo Inc. logo"/> 
            <img src="img/ny_1.jpg" alt="BigCo Inc. logo"/>  */}
        </div>
        
    )
}

export default Photo