import {  useState } from "react";
import styles from "../css/dashboard.module.css";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function Dash_head({AddTSC,closeSidebar,openForm,savePdf,searchData,searchData2}) {
const [searchInput,setSearchInput]=useState("")

const handleLogout = () => {
  localStorage.removeItem("token");
}
  return (
    <> <section className={styles.dashboard}>
    <div className={styles.top}>
      <div className={styles.top_left}>
        <i className="bx bx-menu sidebar-toggle" onClick={() => closeSidebar()}></i>
         <Link   className={styles.button} onClick={()=>{
            savePdf()
         }}>
          Export PDF
        </Link>
         <Link  className={styles.button_2} onClick={()=>{
            openForm()
         }} >
         {AddTSC}
        </Link>
      </div>
      <div className={styles.top_right}>
         <Link
          
          className={`${styles.button} ${styles.notification_button}`}
        >
          <i className="bx bx-bell"></i>
        </Link>
        <Link className={`${styles.button} ${styles.logout_button}`} onClick={()=>{
        handleLogout()
          
        }}>
          Logout
        </Link>
      </div>
    </div>
  </section>
  <section className={`${styles.search_filter} ${styles.dashboard}`}>
    <div className={styles.search_form}>
        <div className={styles.correcting}></div>
      <label htmlFor="search">
        <input
          required=""
          autoComplete="off"
          placeholder="search here"
          id="search"
          type="text"
         value={searchInput}
       onChange={(e)=>{
        setSearchInput(e.target.value);
        searchData2(e.target.value)
       
       }
       
       }
        />
        <div className={styles.search_button} onClick={()=>{
          searchData(searchInput)
        }}>
          <i className='bx bx-search' ></i>
        </div>
      </label>
    </div>
  </section></>
  )
}Dash_head.propTypes = {
  closeSidebar: PropTypes.func.isRequired,
  AddTSC: PropTypes.string.isRequired,
  openForm: PropTypes.func.isRequired,
  savePdf: PropTypes.func.isRequired,
  searchData: PropTypes.func.isRequired,
  searchData2: PropTypes.func.isRequired,

};

export default Dash_head