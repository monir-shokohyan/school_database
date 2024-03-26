import Register from './Register'
import Home from './Home'
import { BrowserRouter,Route,  Routes } from 'react-router-dom'
import Login from './Login'
import { Dashboard } from './Dashboard'
import Dashboard_protection from './Dashboard_protection'
import Notfound from './Notfound'

function Route_bozurg() {

  return (
    
  <BrowserRouter>
  
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route element={<Dashboard_protection/>}>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Route>
      <Route path='/*' element={<Notfound/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Route_bozurg