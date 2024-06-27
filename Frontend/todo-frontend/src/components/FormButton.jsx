import React from 'react'

const FormButton = ({text,onClick}) => {
  return (
    <div>
           <button
            onClick={onClick}
            className={`px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600`}
        >
         {text}   
        </button>
    </div>
  )
}

export default FormButton