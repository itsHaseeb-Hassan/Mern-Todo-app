import React from 'react'
import './App.css'
import { Routes , Route  } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen'
import SignupScreen from './pages/SignupScreen'
function App() {
  return (
    <>
    <div className=" bg-blue-300 w-full h-[100vh]">
     <Routes >
      <Route path='/' element={<LoginScreen />}/>
      <Route path='/signup' element={<SignupScreen />}/>
      <Route path='/todos' />
     </Routes>
     </div>
    </>
  )
}

export default App
