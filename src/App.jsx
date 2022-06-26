// import LightGallery from 'lightgallery/react';

// // import styles
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';

import Profile  from './Profile';
import Photo from './Photo';
import Log from './Log';


import {useState} from "react";
import styles from"./App.module.css";

const menuList = {
    0: <Photo />,
    1: <Log />,
    // 2: <About />
  };


function App() {

    const [menu, setMenu] = useState(0);
    // const changeMenu = (menuIndex) =>{
    //     setMenu({menu : menuIndex});
    //   }

    function changeMenu(menuIndex){
        setMenu(menuIndex);
        console.log(menu);
      }

      

    return (
        <div className="App rounded-lg">
            {/* <h1>Hello</h1> */}
            <Profile/>

            <div className={styles.menuBar}>
                <ul className={styles.tab}>
                    <li className={`${menu === 0? 'active': ''} ${styles.tab_li}`} onClick={()=>changeMenu(0)}>Photo</li>
                    <li className={`${menu === 1? 'active': ''}`} onClick={()=>changeMenu(1)}>Log</li>
                    <li className={`${menu === 2? 'active': ''}`} onClick={()=>changeMenu(2)}>About Me</li> 
                </ul>
            </div>
            <div className="contentArea">
                {menuList[menu]}
            </div>
        </div>
    );
}


export default App
