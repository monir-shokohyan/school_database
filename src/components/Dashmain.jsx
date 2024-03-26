

import { Link } from 'react-router-dom';
import styles from "../css/dashboard.module.css";
import PropTypes from 'prop-types';
function Dashmain({closeSidebar}) {
 let user=localStorage.getItem("username")
    let stylediv={textAlign:"left",paddingLeft:"20%",paddingRight:"10%",marginBottom:"5vh"}

    const handleLogout = () => {
      localStorage.removeItem("token");
    };
  return (
    <> <section className={styles.dashboard}>
    <div className={styles.top} >
      <div className={styles.top_left}>
        <i className="bx bx-menu sidebar-toggle" onClick={() => closeSidebar()}></i>
     
        
      </div>
    <h4 className={styles.welcome_1}>Welcome <span className={styles.welcome_to_your}>to your Dashboard </span> {user[0].toUpperCase()+user.substring(1)}</h4>
      <div className={styles.top_right}>
         <Link
          
          className={`${styles.button} ${styles.notification_button}`}
        >
          <i className="bx bx-bell"></i>
        </Link>
        <Link className={`${styles.button} ${styles.logout_button}`} onClick={()=>{
          handleLogout();
        }}>
          Log out
        </Link>
      </div>
    </div>
  </section>
  <section className={`${styles.search_filter} ${styles.dashboard}`}>
    <div className={styles.dashmain_container}>
      <h1 style={{paddingBottom:"5vh"}}>What we have ?</h1>
      <div style={stylediv}>  <h2 style={{paddingBottom:"2vh"}}>
        <span className='bx bx-group' style={{paddingRight:"3%"}}></span>Add Teachers</h2>
          <p style={{paddingLeft:"6.2%"}}>Streamline teacher onboarding with our user-friendly school management system. Customize profiles, manage schedules, and ensure secure, collaborative access for all educators.</p>
      </div>
      <div style={stylediv}>
        <h2 style={{paddingBottom:"2vh"}}><span className='bx bx-child' style={{paddingRight:"3%"}}></span>Add Students</h2>
        <p style={{paddingLeft:"6.2%"}}>Enroll students effortlessly with our streamlined school management system. Create detailed student profiles, organize academic records, and enable secure educational engagement in a few simple steps.</p>
      </div>
      <div style={stylediv}>
        <h2 style={{paddingBottom:"2vh"}}><span className='bx bx-detail' style={{paddingRight:"3%"}}></span>Add Classes</h2>
        <p style={{paddingLeft:"6.2%"}}>Organize classes with ease using our school management system. Set up class details, assign teachers, and manage student enrollments for a structured educational experience.</p>
      </div>
    </div>
  </section></>
  )
}

Dashmain.propTypes = {
  closeSidebar: PropTypes.func.isRequired,

};

export default Dashmain