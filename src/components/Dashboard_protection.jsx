import { useEffect } from "react"
import {  Outlet, useNavigate } from "react-router-dom"

function Dashboard_protection() {
  let navigate=useNavigate()
    const token =localStorage.getItem("token")
    useEffect(()=>{
      if(!token){
        navigate("/login")
      }
    },[token,navigate])
  return (<>
   
   {token && <Outlet></Outlet>}</>
  )
}

export default Dashboard_protection