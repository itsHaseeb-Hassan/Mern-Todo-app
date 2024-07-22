import React, { useState } from 'react';
import { createUser } from '../Lib/API/userApi';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const SignupScreen = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        profileImage: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await createUser(formData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }

        setFormData({
            name: '',
            email: '',
            password: '',
            profileImage: null,
        });
    };

    return (
        <div>
      <h1 className='text-center p-9 text-3xl uppercase'>Signup User</h1>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <div className='mx-auto w-[30%] h-[50%] p-4 bg-gray-300 rounded-md backdrop-filter backdrop-blur-md bg-opacity-20'>
          <FormInput text="Name" type="text" placeholder="Enter your Name" value={formData.name} name="name" onChange={handleChange} />
          <FormInput text="Email" type="email" placeholder="Enter your Email" value={formData.email} name="email" onChange={handleChange} />
          <FormInput text="Password" type="password" placeholder="Enter your Password" value={formData.password} name="password" onChange={handleChange} />
          <input  type="file" name="profileImage" onChange={handleChange} /> {/* Consistent naming */}
          <div className='my-5'>
            <FormButton text="Sign Up" />
            <div className='my-3 text-center'>Do you have an account? <Link to='/'>Login</Link></div>
          </div>
        </div>
      </form>
    </div>
    );
};

export default SignupScreen;
