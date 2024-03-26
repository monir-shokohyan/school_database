import styles from  "../css/login-name.module.css";
import { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

export default function Login() {
    const [checkPassword,setCheckPassword]=useState(true)
    const [formData,setFormData]=useState({})

    const navigate=useNavigate()

    let getInputValue=(e)=>{
        let{name,value}=e.target
      setFormData({...formData,[name]:value})
      }
      
      const sendformData_login=async()=>{
        if(formData.username && formData.password){
              let SFD=await fetch ("https://yusof.pythonanywhere.com/api/login/",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
          })
          SFD=await SFD.json()
          if(SFD){
            localStorage.setItem("token",SFD.token)
            localStorage.setItem("username",SFD.name)
            localStorage.setItem("schoolname",SFD.schoolName)
            navigate("/dashboard")
          }else{
            toast.error("Username or password is incorrect.")
          }
        }
      else{
        toast.error("fill the inputs.")
      }
      }
  return (
   <>   
   <section className={styles.loginpage23}>
   <Toaster richColors position="top-center" />
       <div className={styles.login_title}>
           <h3>It is our great pleasure to have you on board!</h3>
       </div>
       <div className={styles.login_content}>
           <div className={styles.login_form}>
               <div className={styles.form_group}>
                   <label htmlFor="SchoolName">Username</label>
                   <div className={styles.input_wrapper}>
                       <input
                           type="text"
                           className={styles.form_control}
                           id="SchoolName"
                           placeholder="Username"
                           onChange={(e)=>{
                                  getInputValue(e)
                                }}
                                name="username"
                       />
                     
                   </div>
               </div>
               <div className={styles.form_group}>
                   <label htmlFor="confirmPassword">Password</label>
                   <div className={styles.input_wrapper}>
                       <input
                           type={checkPassword ?"password":"text"}
                           className={styles.form_control}
                           id="Password"
                           placeholder="Password"
                           onChange={(e)=>{
                                  getInputValue(e)
                                }}
                                name="password"
                       />
                       <i className={checkPassword ? `bx bx-hide`:`bx bx-show`} onClick={()=>{
                        setCheckPassword(!checkPassword)
                       }}></i>
                   </div>
               </div>
            
               <button className={styles.button} onClick={()=>{
                sendformData_login()
               }}>Login</button>
               <p>Create a new account. <NavLink className={styles.already_have_a} to="/register" ><span>Signup</span></NavLink></p>
           </div>
       </div>
      
   </section>
</>
  )
}