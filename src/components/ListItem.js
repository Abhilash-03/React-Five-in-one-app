import React from 'react'

const ListItem = ({value, handleDelete}) => {
  return (
    <li>
      <span className="item"> {value}</span>
      <button className='deleteBtn' onClick={() => {handleDelete(value)}}>x</button>
    </li>
  )
}

export default ListItem
