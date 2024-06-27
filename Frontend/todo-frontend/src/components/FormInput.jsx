import React from 'react'

const FormInput = ({type,placeholder,value,onChange}) => {
  return (
    <div>
         <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
    </div>
  )
}

export default FormInput