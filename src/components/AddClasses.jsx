import { useState } from 'react'
import styles from "../css/dashboard.module.css";
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { BeatLoader } from 'react-spinners';
import PropTypes from 'prop-types';


function AddClasses({cancelAndRefreshData}) {
    const [selectGrade1,setSelectGrade1]=useState("")
    const [roomNumber,setRoomNumber]=useState("")
    const [className,setClassName]=useState("")
    const [classPhoto,setClassPhoto]=useState("")
    const [loading,setLoading]=useState(false)
    
    let token=localStorage.getItem("token")
    let formdata=new FormData()
    
    
    
    
    let handleSubmit=async()=>{
        
        formdata.append("grade",selectGrade1);
        formdata.append("room",roomNumber);
        formdata.append("name",className);
        formdata.append("photo",classPhoto);
        formdata.append("token",token);
if(selectGrade1.length>0&&roomNumber.length>0&&className.length>0&&classPhoto){
  try{       setLoading(true)
   let sendClass=await fetch("https://yusof.pythonanywhere.com/api/classes/",{
            method:"POST",
          
            body:formdata
        })
        sendClass=await sendClass.json()
        
if(sendClass){
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

  return (
   <>
    <div className={styles.hide_section} onClick={(e)=>{e.stopPropagation()}}>
    <Toaster richColors position='top-center'/>
      <div className={styles.title} >
        <h1>Add Classes</h1>
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
              <input type="text" className={styles.input} id="name" value={className} onChange={(e)=>{
                setClassName(e.target.value)
              }} required/>
            </div>
          </div>
          <div className={styles.input_className}>
            <select required name="" id="" className={styles.button_3} value={selectGrade1} onChange={(e)=>{
                setSelectGrade1(e.target.value)
            }}>
              <option value="" disabled>Grades</option>
              <option value="Grade1">Grade-1</option>
              <option value="Grade2">Grade-2</option>
              <option value="Grade3">Grade-3</option>
              <option value="Grade4">Grade-4</option>
              <option value="Grade5">Grade-5</option>
              <option value="Grade6">Grade-6</option>
              <option value="Grade7">Grade-7</option>
              <option value="Grade8">Grade-8</option>
              <option value="Grade9">Grade-9</option>
              <option value="Grade10">Grade-10</option>
           
            </select>
          </div>
          
        </div>
        <div className={styles.inputs_group}>
          <div className={styles.input_name}>
            <div>
              <label htmlFor="room">Room Number</label>
            </div>
            <div>
              <input type="text" className={styles.input} id="room" value={roomNumber} onChange={(e)=>{
setRoomNumber(e.target.value)
              }} required />
            </div>
          </div>
       
        </div>
        <div className={`${styles.inputs_group} ${styles.input_file}`}>
          <div className={styles.input_name}>
            <div className={styles.button_wrapper}>
              <span className={styles.label}><i className='bx bx-upload'></i></span>
              <input
                type="file"
                name="upload"
                id={styles.upload}
                className={styles.upload_box}
                placeholder="Upload File"
                accept='image/*'
                onChange={(e)=>{
                    setClassPhoto(e.target.files[0])
                }}
                required
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
      "Add Classes"}
          </Link>
        </div>
      </div>
    </div></>
   
 
  )
}

AddClasses.propTypes = {
  cancelAndRefreshData: PropTypes.func.isRequired,
 

};

export default AddClasses





