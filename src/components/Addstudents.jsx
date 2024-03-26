import {useEffect, useState}from 'react'
import styles from "../css/dashboard.module.css";
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { BeatLoader } from 'react-spinners';
import PropTypes from 'prop-types';

function AddStudent({cancelAndRefreshData}) {
  const [name,setName]=useState("")
    const [loading,setLoading]=useState(false)
    const [className,setClassName]=useState("")
    const [gender,setGender]=useState("")
    const [phnum,setPhnum]=useState("")
    const [email,setEmail]=useState("")
    const [file,setFile]=useState("")
    const [dataTSC,setDataTSC]=useState(false)

    let token=localStorage.getItem("token")
    const formdata=new FormData()

    let handleSubmit=async()=>{
         formdata.append("name",name);
         formdata.append("class_id",className);
         formdata.append("gender",gender);
         formdata.append("phnum",phnum);
         formdata.append("email",email);
         formdata.append("photo",file);
         formdata.append("token",token);
         if(name.length>0&&className.length>0&&gender.length>0&&phnum.length>0&&email.length>0&&file){
try{        setLoading(true)
  let sendClass=await fetch("https://yusof.pythonanywhere.com/api/students/",{
             method:"POST",
           
             body:formdata
         })
         sendClass=await sendClass.json()
         console.log(sendClass)
  if(sendClass.email){
    toast.error(sendClass.email[0])
    setLoading(false)

  }
 else if(sendClass===true){
     toast.success("className Saved Successfully.")
     setTimeout(() => {
      setLoading(false)
      cancelAndRefreshData()
     }, 1000);
 }else{
     toast.error("className Saving failed.")
     setTimeout(() => {
      setLoading(false)
     }, 1000);
 }}catch(error){
     console.log(error)
     toast.error("problem in saving check console.")
     setTimeout(() => {
      setLoading(false) 
     }, 1000);
 }
         }else{
          toast.error("please fill all inputs.")

         }
 
       
     }

     useEffect(()=>{
      let getData = async () => {
        let res = await fetch(`https://yusof.pythonanywhere.com/api/classes/?token=${token}`, {
          method: "GET",
        })
        let data = await res.json()
        if (data) {
          setDataTSC(data)
        } else {
          setDataTSC(false)
        }
      }
      getData()
     },[token])
 
  return (
   <>
    <div className={styles.hide_section} onClick={(e)=>{e.stopPropagation()}}>
    <Toaster richColors position='top-center'/>

      <div className={styles.title} >
        <h1>Add Student</h1>
      </div>
      <div className={styles.feature}>
         <Link   className={styles.button_1}></Link>{" "}
         <Link   className={styles.button_1}></Link>
      </div>
      <div className={styles.inputs}>
        <div className={styles.inputs_group}>
          <div className={styles.input_name}>
            <div>
              <label htmlFor="name">Name</label>
            </div>
            <div>
              <input required type="text" className={styles.input} id="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
            </div>
          </div>
        
            <div className={styles.input_name}>
      <select name="" id="" className={styles.button_3} value={className} onChange={(e)=>{setClassName(e.target.value)
      }} required>
        <option value="" disabled>Classes</option>
       {
        dataTSC ? dataTSC.map((item)=>{
          return(<option key={item.id} value={item.id}>{item.name}</option>)
          
        }):<option disabled>No Classes available</option>
       }
        
      </select>
    </div>
          
          <div className={styles.input_gender}>
            <select name="" id="" className={styles.button_3} value={gender} onChange={(e)=>{setGender(e.target.value)}} required>
              <option value="" >Gender</option>
              <option value="male" >Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className={styles.inputs_group}>
          <div className={styles.input_name}>
            <div>
              <label htmlFor="name">Whatsapp Number</label>
            </div>
            <div>
              <input required type="number" className={styles.input} id="name" value={phnum} onChange={(e)=>{setPhnum(e.target.value)}} />
            </div>
          </div>
          <div className={styles.input_name}>
            <div>
              <label htmlFor="name">Email Address</label>
            </div>
            <div>
              <input required type="email" className={styles.input} id="name" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
          </div>
        </div>
        <div className={`${styles.inputs_group} ${styles.input_file}`}>
          <div className={styles.input_name}>
            <div>
              <label htmlFor="upload">Upload image</label>
            </div>
            <div className={styles.button_wrapper}>
              <span className={styles.label}><i className='bx bx-upload'></i> </span>
              <input required
                type="file"
                name="upload"
                id="upload"
                className={styles.upload_box}
                placeholder="Upload File"
                accept='image/*'
                onChange={(e)=>{
                  setFile(e.target.files[0])
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.input_buttons}>
     
           <Link className={`${styles.button_2} ${styles.add_student}`} onClick={()=>{
            handleSubmit()
           }}>
            {loading ?    <BeatLoader
        color={"#fff"} 
        size={10}
      />:
      "Add Student"}
          </Link>
        </div>
      </div>
    </div></>
   
 
  )
}

AddStudent.propTypes = {
  cancelAndRefreshData: PropTypes.func.isRequired,
 

};

export default AddStudent





