import React from 'react'

const FormInput = ({ text,type,placeholder,value,onChange ,name}) => {
  return (
    <div className='my-3'>
      <label htmlFor={placeholder} className='text-lg '>{text}</label>
         <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            id={placeholder}
            className={`px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
    </div>
  )
}

export default FormInput