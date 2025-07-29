import React from 'react'

const Button = ({label, icon:Icon, className}) => {
  return (
    <>
    <button
    className={`flex items-center gap-2 px-3 py-1 bg-cyan-700 text-white rounded transition text-sm ${className}`} 
    >
        {Icon && <Icon size={16} />}
        {label}

    </button>
      
    </>
  )
}

export default Button;


