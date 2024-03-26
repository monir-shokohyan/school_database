import {  Link, NavLink } from "react-router-dom";
import styles from "../css/dashboard.module.css";
import { useEffect, useState } from 'react';
import Dash_head from "./Dash_head";
import AddStudent from "./Addstudents";
import AddTeacher from "./Addteachers";
import AddClasses from "./AddClasses";
import Dashmain from "./Dashmain";
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
import { toast,Toaster } from "sonner";
import { BeatLoader } from 'react-spinners';
import Profile from "./Profile"

function Dashboard() {

  const [darkMode, setDarkMode] = useState(localStorage.getItem('mode') === 'dark');
  const [sidebarClosed, setSidebarClosed] = useState(localStorage.getItem('status') === 'close');
  const [AddTSC, setAddTSC] = useState(false)
  const [closeForm, setCloseForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingtable, setLoadingTable] = useState(false)
  const [openDashMain, setOpenDashMain] = useState(true)
  const [checkProfile, setCheckProfile] = useState("")
  const [dataTSC, setDataTSC] = useState(false)
  const [showHideProfile, setShowHideProfile] = useState(false)
  const [product, setProduct] = useState("")
  const user=localStorage.getItem("schoolname")
  const [dotone, setDotOne] = useState({
    dashboard: styles.nav_links2a,
    teacher: styles.nav_linksa,
    student: styles.nav_linksa,
    class: styles.nav_linksa,
  })





let token =localStorage.getItem("token")

  /////////////////////////////first table loading in page
  useEffect(() => {
   if(AddTSC){ let getData = async (url) => {
    setLoadingTable(true)
      let res = await fetch(`https://yusof.pythonanywhere.com/api/${url}/?token=${token}`, {
        method: "GET",
      })
      let data = await res.json()

      if (data) {
        setLoadingTable(false)

        setDataTSC(data)
      } else {
        setLoadingTable(false)

        setDataTSC(false)
      }
    }

    if (AddTSC === "Add Teachers") {
      getData("teachers")
    } else if (AddTSC === "Add Students") {
      getData("students")
    } else if(AddTSC==="Add Classes"){
      getData("classes")
    }else{
      console.log("problem in AddTSC")
    }}

  }, [AddTSC,token])
//////////////////////////////////////////////////////////


///////////////////////////////////////////////dark mode
  useEffect(() => {
    localStorage.setItem('mode', darkMode ? 'dark' : 'light');
    localStorage.setItem('status', sidebarClosed ? 'close' : 'open');
  }, [darkMode, sidebarClosed]);
  /////////////////////////////////////////////////////
  ///////////////////////////////////////minimize sidebar
  const closeSidebar = () => {
    setSidebarClosed(!sidebarClosed)
  }
  //////////////////////////////////////////////////////////


  ////////////////////////////////////close profile
  let closeProfile = () => {
   setShowHideProfile(false)
  }
  /////////////////////////////////////////////



  ////////////////////////////////////open form
  let openForm = () => {
    setCloseForm(true)
  }
  /////////////////////////////////////////////


  /////////////////////////////////////close form
  let cancel = () => {
    setCloseForm(false)
  }
  //////////////////////////////////////////



  /////////////////////////////////////close form
  let cancelAndRefreshData = () => {
    setCloseForm(false)
    if(AddTSC){ let getData = async (url) => {
      setLoadingTable(true)

      let res = await fetch(`https://yusof.pythonanywhere.com/api/${url}/?token=${token}`, {
        method: "GET",
      })
      let data = await res.json()
      if (data) {
        setLoadingTable(false)

        setDataTSC(data)
      } else {
        setLoadingTable(false)

        setDataTSC(false)
      }
    }

    if (AddTSC === "Add Teachers") {
      getData("teachers")
    } else if (AddTSC === "Add Students") {
      getData("students")
    } else if(AddTSC==="Add Classes"){
      getData("classes")
    }else{
      console.log("problem in AddTSC")
    }}

  }
  //////////////////////////////////////////


  ////////////////////////////////savepdf
  let savePdf = () => {

    const doc = new jsPDF();

    autoTable(doc, { html: '#myTable' })
    doc.save("School-management.pdf");

  }
  /////////////////////////////////
let searchData2=(data)=>{
  if(data.length===0){
    if(AddTSC){ let getData = async (url) => {
      setLoadingTable(true)

      let res = await fetch(`https://yusof.pythonanywhere.com/api/${url}/?token=${token}`, {
        method: "GET",
      })
      let data = await res.json()
      if (data) {
        setLoadingTable(false)

        setDataTSC(data)
      } else {
        setLoadingTable(false)

        setDataTSC(false)
      }
    }

    if (AddTSC === "Add Teachers") {
      getData("teachers")
    } else if (AddTSC === "Add Students") {
      getData("students")
    } else if(AddTSC==="Add Classes"){
      getData("classes")
    }else{
      console.log("problem in AddTSC")
    }}
  }
}
  /////////////////////////////////search
  let searchData = (data2) => {

    if(AddTSC){ let getData = async (url) => {
      setLoadingTable(true)

      let res = await fetch(`https://yusof.pythonanywhere.com/api/${url}/?search=${data2}&token=${token}`, {
        method: "GET",
      })
      let data = await res.json()
      if (data) {
        setLoadingTable(false)

        setDataTSC(data)
      } else {
        setLoadingTable(false)

        setDataTSC(false)
      }
    }

    if (AddTSC === "Add Teachers") {
      getData("teachers")
    } else if (AddTSC === "Add Students") {
      getData("students")
    } else if(AddTSC==="Add Classes"){
      getData("classes")
    }else{
      console.log("problem in AddTSC")
    }}
  
  }
  ////////////////////////////////////////////////

  /////////////////////////////////////delete

const deleteItem = (id) =>{
  if(AddTSC){
    let deleteItemResult=async(url)=>{
      setLoading(true)
      let ditem=await fetch(`https://yusof.pythonanywhere.com/api/${url}/${id}`,{
        method:"DELETE",
      })
      ditem=await ditem.json()
      if(ditem){
        toast.success("Item Deleted Successfully.")
        setTimeout(() => {
         setLoading(false) 
        }, 500);
        let getData = async (url) => {
          setLoadingTable(true)

          let res = await fetch(`https://yusof.pythonanywhere.com/api/${url}/?token=${token}`, {
            method: "GET",
          })
          let data = await res.json()
          if (data) {
            setLoadingTable(false)

            setDataTSC(data)
          } else {
            setLoadingTable(false)

            setDataTSC(false)
          }
        }
    
        if (AddTSC === "Add Teachers") {
          getData("teachers")
        } else if (AddTSC === "Add Students") {
          getData("students")
        } else if(AddTSC==="Add Classes"){
          getData("classes")
        }else{
          console.log("problem in AddTSC")
        }
       
      }else{
        toast.error("Something went wrong.")
      }
      }
      if (AddTSC === "Add Teachers") {
        deleteItemResult("teachers")
      } else if (AddTSC === "Add Students") {
        deleteItemResult("students")
      } else if(AddTSC==="Add Classes"){
        deleteItemResult("classes")
      }else{
        console.log("problem in AddTSC")
      }
  }

}
///////////////////////////////////////////
  return (
    <div className={`${darkMode ? styles.darkMode : ''} ${styles.dashboard_1}`}>
    <Toaster richColors position="top-center"/>
      <nav className={`${sidebarClosed ? styles.close : ''}`}>
        <div className={styles.logo_name_container}>
          <div className={styles.logo_image}>
            <img src="/profile.png" alt="" />
          </div>

          <span className={styles.logo_name}>{user[0].toUpperCase()+user.substring(1)}</span>
        </div>

        <div className={`${sidebarClosed === false ? styles.menu_items : styles.menu_items2}`} >
          <ul className={styles.nav_links}  >
            <li>
              <NavLink className={dotone.dashboard} onClick={() => {
                setOpenDashMain(true)
                setDotOne({
                  dashboard: styles.nav_links2a,
                  teacher: styles.nav_linksa,
                  student: styles.nav_linksa,
                  class: styles.nav_linksa,
                })
              }}>
                <i className="bx bx-home"></i>

                <span className={styles.link_name}>{sidebarClosed === false ? "Dashboard" : ""}</span>
              </NavLink>
            </li>
            <li >
              <NavLink className={dotone.teacher} onClick={() => {
                setOpenDashMain(false)
                setAddTSC("Add Teachers")
                setCheckProfile("teacher");
                setDotOne({
                  dashboard: styles.nav_linksa,
                  teacher: styles.nav_links2a,
                  student: styles.nav_linksa,
                  class: styles.nav_linksa,
                })
              }}>
                <i className="bx bx-group"></i>
                <span className={styles.link_name}> {sidebarClosed === false ? "Teachers" : ""}</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={dotone.student} onClick={() => {
                setOpenDashMain(false)
                setAddTSC("Add Students")
                setCheckProfile("student");
                setDotOne({
                  dashboard: styles.nav_linksa,
                  teacher: styles.nav_linksa,
                  student: styles.nav_links2a,
                  class: styles.nav_linksa,
                })
              }} >
                <i className="bx bx-child"></i>
                <span className={styles.link_name}> {sidebarClosed === false ? "Students" : ""}</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={dotone.class} onClick={() => {
                setOpenDashMain(false)
                setAddTSC("Add Classes")
                setCheckProfile("class");
                setDotOne({
                  dashboard: styles.nav_linksa,
                  teacher: styles.nav_linksa,
                  student: styles.nav_linksa,
                  class: styles.nav_links2a,
                })
              }} >
                <i className="bx bx-detail"></i>
                <span className={styles.link_name}> {sidebarClosed === false ? "classes" : ""}</span>
              </NavLink>
            </li>

          </ul>

          <ul className={styles.logout_mode}  >
            <li className={styles.mode}>
              <NavLink  >
                <i className="bx bx-moon"></i>
                <span className={styles.link_name}>Dark Mode</span>
              </NavLink>

              <div className={styles.mode_toggle} onClick={() => setDarkMode(!darkMode)}>
                <span className={`${styles.switch} ${darkMode ? styles.dark : ''}`}></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>



{/* ////////////////////////profile */}




{showHideProfile &&<Profile closeProfile={closeProfile} product={product}/>}




{/* ////////////////////////profile */}


      {/* dash main section */}
      {openDashMain && <Dashmain AddTSC={AddTSC} closeSidebar={closeSidebar} openForm={openForm} />}
      {/* dash main section */}




      {/* dash head section */}
      {openDashMain === false && <Dash_head AddTSC={AddTSC} closeSidebar={closeSidebar} openForm={openForm} savePdf={savePdf} searchData={searchData} searchData2={searchData2} />
      }

      {/* dash head section */}


      {/* Table section */}
      
      {/* table section teacher */}
      {openDashMain === false && AddTSC==="Add Teachers"&& <section style={{overflow:'scroll'}} className={styles.dashboard}>
        <table className={styles.rwd_table} id="myTable">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Subject</th>
              <th>Class Name</th>
              <th>Gender</th>
              <th>Whatsapp</th>
              <th>Email Address</th>
              <th>Action</th>
            </tr>
       {loadingtable ?    <tr style={{height:"6vh",}} ><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td></tr>:dataTSC ? dataTSC.map((item)=>{
        return(
        <tr key={item.id} onClick={()=>{
setShowHideProfile(true)
setProduct(item)
        }}>
              <td data-th="Name">
                <div className={styles.first_td}>
                  <img
                    src={item.photo}
                    className={styles.table_img}
                    alt="name"
                  />
                  {
                    item.name
                  }
                </div>
              </td>
              <td data-th="lname">{item.lname}</td>
              <td data-th="Subject">{item.subject}</td>
              <td data-th="className">{item.class_name}</td>
              <td data-th="Gender">{item.gender}</td>
              <td data-th="phnum">{item.phnum}</td>
              <td data-th="Email Adress">{item.email}</td>
              <td data-th="Actions">
                <div className={styles.action_wrapper}>
               
                  <Link className={styles.action_button} style={{width:"60px",height:"40px",display:"flex",justifyContent:"center",alignItems:'center'}} onClick={(e)=>{
                    e.stopPropagation()
                    deleteItem(item.id)
                  }}>
                   {loading ?    <BeatLoader
        color={"#fff"} 
        size={5}
      />: <i className="bx bx-trash"></i>
      }
                   
                  </Link>
                </div>
              </td>
            </tr>)
       }):<tr><td>Nothing found.</td></tr>}
          </tbody>
        </table>
      </section>}

      {/* table section students */}
      {openDashMain === false && AddTSC==="Add Students"&& <section style={{overflow:'scroll'}} className={styles.dashboard}>
        <table className={styles.rwd_table} id="myTable">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Class Name</th>
              <th>Gender</th>
              <th>Whatsapp</th>
              <th>Email Address</th>
              <th>Action</th>
            </tr>
       { loadingtable ?<tr style={{height:"6vh",}} ><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td></tr>:dataTSC ? dataTSC.map((item)=>{
        return(
        <tr key={item.id} onClick={()=>{
setShowHideProfile(true)
setProduct(item)
        }}>
              <td data-th="Name">
                <div className={styles.first_td}>
                  <img
                    src={item.photo}
                    className={styles.table_img}
                    alt="name"
                  />
                  {
                    item.name
                  }
                </div>
              </td>
              <td data-th="className">{item.class_name}</td>
              <td data-th="Gender">{item.gender}</td>
              <td data-th="phnum">{item.phnum}</td>
              <td data-th="Email Adress">{item.email}</td>
              <td data-th="Actions">
                <div className={styles.action_wrapper}>
            
                  <Link className={styles.action_button} style={{width:"60px",height:"40px",display:"flex",justifyContent:"center",alignItems:'center'}} onClick={(e)=>{
                    e.stopPropagation()
                    deleteItem(item.id)
                  }}>
                                  {loading ?    <BeatLoader
        color={"#fff"} 
        size={5}
      />: <i className="bx bx-trash"></i>
      }
                  </Link>
                </div>
              </td>
            </tr>)
       }):<tr><td>Nothing found.</td></tr>}
          </tbody>
        </table>
      </section>}

      {/* table section classes */}
      {openDashMain === false && AddTSC==="Add Classes"&& <section style={{overflow:'scroll'}} className={styles.dashboard}>
        <table className={styles.rwd_table} id="myTable">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Grade</th>
              <th>Room</th>
              <th>Action</th>
            </tr>
       {loadingtable ?<tr style={{height:"6vh",}} ><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td><td><BeatLoader
        color={"#000"} 
        size={7}
      /></td></tr>:dataTSC ? dataTSC.map((item)=>{
        return(
        <tr key={item.id} >
              <td data-th="Name">
                <div className={styles.first_td}>
                  <img
                    src={item.photo}
                    className={styles.table_img}
                    alt="name"
                  />
                  {
                    item.name
                  }
                </div>
              </td>
              <td data-th="grade">{item.grade}</td>
              <td data-th="room">{item.room}</td>
              <td data-th="Actions">
                <div className={styles.action_wrapper}>
                 
                  <Link className={styles.action_button} style={{width:"60px",height:"40px",display:"flex",justifyContent:"center",alignItems:'center'}} onClick={(e)=>{
                    e.stopPropagation()
                    deleteItem(item.id)
                  }}>
                                   {loading ?    <BeatLoader
        color={"#fff"} 
        size={5}
      />: <i className="bx bx-trash"></i>
      }
                  </Link>
                </div>
              </td>
            </tr>)
       }):<tr><td>Nothing found.</td></tr>}
          </tbody>
        </table>
      </section>}
      {/* Table section */}
      {closeForm && <div className={styles.hidden_div} onClick={() => { cancel() }}>
        {
          checkProfile === "student" ? <AddStudent cancelAndRefreshData={cancelAndRefreshData} /> : checkProfile === "teacher" ? <AddTeacher cancelAndRefreshData={cancelAndRefreshData} /> : checkProfile === "class" ? <AddClasses cancelAndRefreshData={cancelAndRefreshData} /> : ""



        }
      </div>}
    </div>
  )
}

export { Dashboard };
