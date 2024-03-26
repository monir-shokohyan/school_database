import styles from "../css/notfound.module.css"
import { Link ,useNavigate } from 'react-router-dom'
function Notfound() {
	let navigate=useNavigate()


  return (
	<>
    <div className={styles.notfound_1}>


        <div className={styles.about}>
        <Link className={`${styles.bg_links} ${styles.social} ${styles.portfolio}`}  to="https://www.facebook.com/bozorg.shokoyan" target="_blank">
            <span className={styles.icon}></span>
        </Link>
        <Link className={`${styles.bg_links} ${styles.social} ${styles.dribbble}`} to="https://www.instagram.com/bozorg_47?igsh=YzljYTk1ODg3Zg==" target="_blank">
            <span className={styles.icon}></span>
        </Link>
        <Link className={`${styles.bg_links} ${styles.social} ${styles.linkedin}`} to="https://twitter.com/BOZORG_47?t=BhieweJY2XWvj4kBY3kCew&s=09" target="_blank">
            <span className={styles.icon}></span>
        </Link>
        <Link className={`${styles.bg_links} ${styles.logo}`}></Link>
        </div>

    

        <section className={styles.wrapper}>

            <div className={styles.container}>

                <div id="scene" className={styles.scene} data-hover-only="false">


                    <div className={styles.circle} data-depth="1.2"></div>

                    <div className={styles.one} data-depth="0.9">
                        <div className={styles.content}>
                            <span className={styles.piece}></span>
                            <span className={styles.piece}></span>
                            <span className={styles.piece}></span>
                        </div>
                    </div>

                    <div className={styles.two} data-depth="0.60">
                        <div className={styles.content}>
                            <span className={styles.piece}></span>
                            <span className={styles.piece}></span>
                            <span className={styles.piece}></span>
                        </div>
                    </div>

                    <div className={styles.three} data-depth="0.40">
                        <div className={styles.content}>
                            <span className={styles.piece}></span>
                            <span className={styles.piece}></span>
                            <span className={styles.piece}></span>
                        </div>
                    </div>

                    <p className={styles.p404} data-depth="0.50">404</p>
                    <p className={styles.p404} data-depth="0.10">404</p>

                </div>

                <div className={styles.text}>
                    <article>
                        <p>Uh oh! Looks like you got lost. <br/>Go back to the homepage if you dare!</p>
                        <button onClick={()=>{navigate("/")}}>return to homepage.</button>
                    </article>
                </div>

            </div>
        </section>
    </div>
</>
  )
}

export default Notfound