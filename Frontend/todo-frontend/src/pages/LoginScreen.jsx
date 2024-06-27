import React from 'react'
import FormInput from '../components/FormInput'

const LoginScreen = () => {
  return (
    <>
            <h1 className='text-center p-9 text-3xl upercase'>Login</h1>
            <div className='mx-auto w-[50%] h-[50%] p-4 bg-gray-300 rounded-md backdrop-filter backdrop-blur-md bg-opacity-20'>
    <div className='text-center'>
        <FormInput />
    </div>
</div>
    </>
  )
}

export default LoginScreen