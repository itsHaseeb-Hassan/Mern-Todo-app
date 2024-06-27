import React, { useState } from 'react'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import { Link } from 'react-router-dom'
const SignupScreen = () => {
const [formdata,setformdata]=useState({
  name:'',
  email:'',
  password:''
})
  const handleInput=(e)=>{
    const {name,value}=e.target
    setformdata({...formdata,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formdata)

    setformdata({
      name:'',
      email:'',
      password:''
    })

  }
  return (
    <div>
          <h1 className='text-center p-9 text-3xl upercase'>Signup User</h1>
            <div className='mx-auto w-[30%] h-[50%] p-4 bg-gray-300 rounded-md backdrop-filter backdrop-blur-md bg-opacity-20'>
            <FormInput text="Name" type="text" placeholder="Enter your Name" value={formdata.name} name="name" onChange={handleInput}/>
        <FormInput text="Email" type="email" placeholder="Enter your Email" value={formdata.email} name="email" onChange={handleInput}/>

        <FormInput text="Password" type="password" placeholder="Enter your Password" value={formdata.password} name="password" onChange={handleInput}/>
        <div className='my-5'>
        <FormButton text="Sign Up" onClick={handleSubmit}/>
        <div className='my-3 text-center'> Do you have an account? <Link to='/'>Login</Link></div>
        </div>
</div>
    </div>
  )
}

export default SignupScreen