
import { useNavigate } from 'react-router-dom';
import styles from  '../css/header.module.css';


function Header(){
    const navigate=useNavigate()
    return (
        <div>
        <header className={styles.header}>
            <nav className={styles.navbar_1}>
                <div className={styles.logo_1}>
                    <img src="./logo_school.png" style={{width:"100",height:"75px",filter:"invert(100%)"}}></img>
                </div>

                <div className={styles.nav_mini_screen}> 
                    <div className={styles.logo}>
                        <img src="./logo_school.png" style={{width:"100",height:"75px",filter:"invert(100%)"}}></img>
                    </div>
                   
                </div>

                <ul className={styles.nav_ul}>
                    <li style={{color:"#8a89be"}}>Home</li>
                    <li onClick={()=>{
                        navigate("/login")
                    }}>login</li>
                    <li onClick={()=>{
                        navigate("/register")
                    }}>Register</li>

                </ul>

              

           
            </nav>

            <div className={styles.Header_box}>
                <div className={styles.Header_text}>
                    <h1>Manage your team easily with task man</h1>
                    <p>
                    Statisdaa is a  school management solution that offers a personalized portal to each type of user,
                    </p>
                </div>
                <div className={styles.Header_bottom_box}>
                   {/* <img src="./dashboard-screenshot.png"></img> */}
                </div>
            </div>


        </header>
        </div>
    )
}




export {Header}