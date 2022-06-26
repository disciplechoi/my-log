import styles from './Profile.module.css';

function Profile(){

    return(
        <div className={styles.profile}>  
            <img className={styles.profile_img} alt="img1" src="img/ny_1.jpg" />
            <h1 className={styles.profile_title}>Disciple Choi</h1>
            <div className={styles.profile_bio}>
                <h2>🔥 Love spicy food</h2>
                <h2>🔥 Love travel</h2>
                <h2>🔥 Love bags</h2>
            </div>         
        </div>
    )

}

export default Profile