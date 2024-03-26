import styles from  "../css/Trusted.module.css";


function Trusted (){
    return(
        <div>
            
            <div className={styles.Trusted_BOX } >
                <h2>Trusted by company like</h2>
                <div className={styles.Icons}>
                    <div className={styles.div_icons}>
                        <i className='bx bxl-microsoft'></i>
                    </div>
                    <div className={styles.div_icons}>
                    <i className='bx bxl-meta' ></i>
                    </div>
                    <div className={styles.div_icons}>
                    <i className='bx bxl-adobe' ></i>
                    </div>
                    <div className={styles.div_icons}>
                    <i className='bx bxl-google' ></i>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export {Trusted}