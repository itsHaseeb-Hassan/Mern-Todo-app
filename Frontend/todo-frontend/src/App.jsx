import React from 'react'
import './App.css'
import { Routes , Route  } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen'
import SignupScreen from './pages/SignupScreen'
import { useSelector } from 'react-redux'
import TodoScreen from './pages/TodoScreen'
function App() {

  const state=useSelector(state=>state.user.loginInfo)
  const accessToken=state.accessToken
  return (
    <>
    <div className=" bg-blue-300 w-full h-[100vh]">
     <Routes >
      <Route path='/' element={<LoginScreen />}/>
      <Route path='/signup' element={<SignupScreen />}/> 
     </Routes>

     <Routes>
     {
        accessToken &&  <Route path='/todos' element={<TodoScreen />} />
      }
     </Routes>
     </div>
    </>
  )
}

export default App
