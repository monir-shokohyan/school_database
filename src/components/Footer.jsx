import styles from "../css/footer.module.css";

const Footer = () =>{
    return (
        <>
             <footer>
                    <div className={styles.footer_upper}>
                            <div className={styles.footer_first}>
                                <h1 className={styles.text_blue}>School Management</h1>
                                <p className={styles.text_gray}>Our vision is to provide convenience and help increase your School Management.</p>
                            </div>
                            <div className={styles.footer_remain}>
                                    <div className={styles.footer_second}>
                                        <h3>About</h3>
                                        <li><a href="#how-it-works">How it works</a></li>
                                        <li><a href="#featured">Featured</a></li>
                                        <li><a href="#partnership">Partnership</a></li>
                                        <li><a href="#business-relation">Business Relation</a></li>
                                    </div>  
                                    <div className={styles.footer_third}>
                                        <h3>Community</h3>
                                        <li><a href="#events">Events</a></li>
                                        <li><a href="#blog">Blog</a></li>
                                        <li><a href="#podcast">Podcast</a></li>
                                        <li><a href="#invite-a-friend">invite a friend</a></li>
                                    </div>
                                    <div className={styles.footer_fourth}>
                                        <h3>Socials</h3>
                                        <li><a href="#discord">discord</a></li>
                                        <li><a href="#instagram">instagram</a></li>
                                        <li><a href="#twitter">twitter</a></li>
                                        <li><a href="#facebook">faceook</a></li>
                                    </div>
                            </div>
                    </div>
                    <div className={styles.footer_down}>
                        <h3 className={styles.footer_1}>©2024 Alif Academy Students</h3>
                        <div className={styles.footer_last}>
                            <h3 className={styles.footer_2}>Bozorg Omid Shokohyan</h3>

                        </div>

                    </div>
                
            </footer>
        </>
    )

}

export { Footer }


