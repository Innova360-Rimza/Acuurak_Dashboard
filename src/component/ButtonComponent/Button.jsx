import React from 'react'

const Button = ({label, icon:Icon, className}) => {
  return (
    <>
    <button
    className={`flex items-center gap-2 px-3 py-1 bg-cyan-700 text-white rounded transition text-sm ${className}`} 
    >
        {label}
        {Icon && <Icon size={16} />}

    </button>
      
    </>
  )
}

export default Button;


