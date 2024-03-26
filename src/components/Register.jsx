import  {  useState } from 'react'
import styles from  "../css/login-name.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Toaster,toast } from 'sonner';


function Register() {
const [unMountFirstPage,setunMountFirstPage]=useState(true)
const [checkPassword,setCheckPassword]=useState(true)
const [checkPassword2,setCheckPassword2]=useState(true)
const [formData,setFormData]=useState({})

const navigate=useNavigate()

let getInputValue=(e)=>{
  let{name,value}=e.target
setFormData({...formData,[name]:value})
}
let sendformData=async()=>{
  if(formData.username && formData.schoolName && formData.schoolEmail&&formData.password&&formData.confirm){
   
    if(formData.password!==formData.confirm){
toast.error("password and confirm aren't equal.")
    }else{
      let SFD=await fetch ("https://yusof.pythonanywhere.com/api/register/",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      SFD=await SFD.json()
      if(SFD.email){
        toast.error(SFD.email[0])
        setunMountFirstPage(true)
      }
      else if(SFD.username){
    toast.error("Username already exists")
    setunMountFirstPage(true)
      }else if(SFD===true){
    navigate("/login")
    toast.success("Account created Successfully.")
      }else{
        toast.error("please try again.")
        setunMountFirstPage(true)
      }
    }
    //////////////
 
  //////////////////
  }else{
    setunMountFirstPage(true)
    toast.error("please fill all inputs.")
  }

}




  return (
    <div className={styles.loginpagemain}>
    <Toaster richColors position='top-center'/>
    
    { unMountFirstPage? <div > <section className={styles.loginpage23}>
            <div className={styles.login_title}>
            
                <h3>Welcome, create your school account </h3>
            </div>
            <div className={styles.login_content}>
                <div className={styles.login_form}>
                    <div className={styles.form_group}>
                        <div className={styles.input_wrapper}>
                            <input
                                type="text"
                                className={styles.form_control}
                                id="admin-name"
                                placeholder="Enter username here"
                                onChange={(e)=>{
                                  getInputValue(e)
                                }}
                                name='username'
                            />
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <div className={styles.input_wrapper}>
                            <input
                                type="text"
                                className={styles.form_control}
                                id="school-name"
                                placeholder="Enter the name of school"
                                onChange={(e)=>{
                                  getInputValue(e)
                                }}
                                name='schoolName'
                            />
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <div className={styles.input_wrapper}>
                            <input
                                type="text"
                                className={styles.form_control}
                                id="school-email"
                                placeholder="Enter the school email"
                                onChange={(e)=>{
                                  getInputValue(e)
                                }}
                                name='schoolEmail'
                            />
                        </div>
                    </div>
                    <div className={styles.form_group}>

                    </div>
                    
                <button className={styles.button} onClick={()=>{setunMountFirstPage(false)}}>Next</button>
                    <p>Already have an account?<NavLink className={styles.already_have_a} to="/login" ><span>Login</span></NavLink></p>
                </div>
            </div>
            <div className={styles.login_progress}>
                <div className={styles.progress_wrapper}>
                    <div className={styles.progress_bar}></div>
                </div>
                <div className={styles.progress_item} onClick={()=>{setunMountFirstPage(true)}}>
                    <div className={styles.progress_icon}>
                        <i className={`bx bx-circle`}></i>
                    </div>
                    <div className={styles.progress_text}>
                        <h4>Your Details</h4>
                        <ul>
                            <li>
                                Name and Email
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.progress_item} onClick={()=>{setunMountFirstPage(false)}}>
                    <div className={`${styles.progress_icon} ${styles.disabled}`}>
                        <i className={`bx bx-circle`} ></i>
                    </div>
                    <div className={styles.progress_text}>
                        <h4>Choose password</h4>
                        <ul>
                            <li>
                                Choose a password
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section></div>:(<div>  <section className={styles.loginpage23}>
       <div className={styles.login_title}>
           <h3> Choose your password</h3>
       </div>
       <div className={styles.login_content}>
           <div className={styles.login_form}>
               <div className={styles.form_group}>
                   <label htmlFor="password">Choose a password</label>
                   <div className={styles.input_wrapper}>
                       <input
type={checkPassword ?"password":"text"}                           className={styles.form_control}
                           id="Password"
                           placeholder="Enter password"
                           onChange={(e)=>{
                                  getInputValue(e)
                                }}
                                name='password'
                       />
                        <i className={checkPassword ? `bx bx-hide`:`bx bx-show`} onMouseDown={()=>{
                        setCheckPassword(!checkPassword)
                       }}  onMouseUp={()=>{
                        setCheckPassword(!checkPassword)
                       }}></i>                   </div>
               </div>
               <div className={styles.form_group}>
                   <label htmlFor="confirmPassword">Confirm Password</label>
                   <div className={styles.input_wrapper}>
                       <input
                           type={checkPassword2 ?"password":"text"}  
                           className={styles.form_control}
                           id="confirmPassword"
                           placeholder="Confirm password"
                           onChange={(e)=>{
                                  getInputValue(e)
                                }}
                                name='confirm'
                       />
                        <i className={checkPassword2 ? `bx bx-hide`:`bx bx-show`} onMouseDown={()=>{
                        setCheckPassword2(!checkPassword2)
                        
                       }}  onMouseUp={()=>{
                        setCheckPassword2(!checkPassword2)
                        
                       }}></i>
                   </div>
               </div>
         
               <button className={styles.button} onClick={()=>{
                sendformData()
               }}>Register</button>
           </div>
       </div>
       <div className={styles.login_progress}>
           <div className={styles.progress_wrapper}>
               <div className={styles.progress_bar}></div>
           </div>
           <div className={styles.progress_item} onClick={()=>{setunMountFirstPage(true)}}>
               <div className={styles.progress_icon}>
                   <i className={`bx bx-check`}></i>
               </div>
               <div className={styles.progress_text}>
                   <h4>Your Details</h4>
                   <ul>
                       <li>
                           Name and Email
                       </li>
                   </ul>
               </div>
           </div>
           <div className={styles.progress_item} onClick={()=>{
            setunMountFirstPage(false)
           }}>
               <div className={styles.progress_icon}>
                   <i className={`bx bx-circle`} ></i>
               </div>
               <div className={styles.progress_text}>
                   <h4>Choose Password</h4>
                   <ul>
                       <li>
                           Choose a password
                       </li>
                   </ul>
               </div>
           </div>
       </div>
   </section></div>)
    }
   
  

    </div>
  )
}

export default Register