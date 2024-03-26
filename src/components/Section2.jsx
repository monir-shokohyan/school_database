import styles from  "../css/section2.module.css";

const Section2 = () => {
    return <div>
        <div className={styles.section2}>
            <div className={styles.Layout_box}>
                <div className={styles.text}>
                    <div className={styles.innertext}><h1 className={styles.main_text}>Revolutionizing Learning: Innovative Approaches to Modern School Education Systems</h1>
                        <p className={styles.paragraph}>Empowering students through tailored curricula, fostering critical thinking, creativity, and real-world problem-solving in dynamic, inclusive educational environments.</p>
                        <p className={styles.paragraph}>Transforming Classrooms: Pioneering Educational Strategies for Tomorrow’s Diverse and Technological Learning Landscape.</p>
                    </div>   
                    
                </div>
                <div className={styles.section2_image}><img  src="./woman.png" alt="" /></div>
            </div>
        </div>
    </div>
}
export { Section2 };