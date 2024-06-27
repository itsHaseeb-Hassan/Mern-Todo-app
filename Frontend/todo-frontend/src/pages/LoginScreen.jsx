import React,{useState} from 'react'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
  const handleInput=()=>{

  }
  return (
    <>
            <h1 className='text-center p-9 text-3xl upercase'>Login User</h1>
            <div className='mx-auto w-[30%] h-[50%] p-4 bg-gray-300 rounded-md backdrop-filter backdrop-blur-md bg-opacity-20'>
    
        <FormInput text="Email" type="email" placeholder="Enter your Email" onChange={handleInput}/>

        <FormInput text="Password" type="password" placeholder="Enter your Password" onChange={handleInput}/>
        <div className='my-5'>
        <FormButton text="Login"/>
        <div className='my-3 text-center'> Don't have an account? <Link to='/signup'>Signup</Link></div>
        </div>
</div>
    </>
  )
}

export default LoginScreen