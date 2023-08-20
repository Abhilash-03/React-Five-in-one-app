import React, { useState } from 'react'

const AccordianList = ({val}) => {
const [toggle, setToggle] = useState(false);

  return (
    <li className='lists-item'>
        <div className="question-list">
           {val.question} 
          <button type='button' className='toggleBtn' onClick={()=> setToggle(!toggle)}>
            {toggle ? '-' : '+'}
            </button>
         
         </div>
         {
            toggle && (
                <p className='txt'>{val.answer}</p>
            )
          }
    </li>
  )
}

export default AccordianList
