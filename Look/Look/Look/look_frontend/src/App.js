import React from 'react'
import { Routes,Route, useNavigate} from 'react-router-dom'
import Login from './components/Login'
import Home from './container/Home'
import  Posts  from './components/Fourm'
import Reply  from './components/Freply';
 
const App = () => {
  return (
  <Routes>
    <Route path ='login' element={<Login/>}/>
    <Route path ='/*' element={<Home/>}/>
    <Route path ='Fourm' element={ <Posts/>}  element1= {<Reply/>}  />
  </Routes>  
  )
};
 
export default App

