import React from 'react'

const Button = ({ title, handleSubmit }) => {
  return (

    <button type='submit' className="Btn" onClick={handleSubmit}>{title}</button>

  )
}

export default Button
