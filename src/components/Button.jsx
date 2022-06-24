import React from 'react'

const Button = ({as = 'btn', onClick, children}) => {
  return (
    <button 
    as={as} 
    onClick={onClick}>
        {children}
    </button>
  )
}

export default Button