import styles from "../css/dashboard.module.css";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Profile({closeProfile,product}) {

 
  return (
   <>



<div className={styles.hidden_div} onClick={()=>{
  closeProfile()
}}>
<div className={styles.hide_section} onClick={(e)=>{e.stopPropagation()}}>
<div className={styles.top_about}>
  <div className={styles.top_img}>
    <img src={product.photo} alt="profile" />
  </div>
  <div className={styles.top_text}>
    <div className={styles.profile_details_2}>
{   product.name&&   <div className={styles.profile_details_details}><h4>Name</h4><span>{product.name}</span></div>
}      {product.lname &&<div className={styles.profile_details_details}><h4>Lastname</h4><span>{product.lname}</span></div> }
    </div>
    <div className={styles.profile_details_2}>
      {product.gender&& <div className={styles.profile_details_details}><h4>Gender</h4><span>{product.gender}</span></div>}
      {product.class_name &&<div className={styles.profile_details_details}><h4>Class</h4><span>{product.class_name}</span></div>}
     {product.subject&& <div className={styles.profile_details_details}><h4>Subject</h4><span>{product.subject}</span></div> }
    </div>
  </div>
</div>
<div className={styles.bottom_about}>
   
   <Link className={`${styles.button_2} ${styles.add_student}`} to={`https://wa.me/${product.phnum}/?text=Hello ${product.name}!`}>
    <i className="bx bxl-whatsapp"></i>
  </Link>
   <Link className={`${styles.button_2} ${styles.add_student}`} to={`mailto:${product.email}`}>
    <i className="bx bx-envelope"></i>
  </Link>
</div>
</div> 
</div> 
   </>)}
Profile.propTypes = {
  closeProfile: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
 

};

   export default Profile