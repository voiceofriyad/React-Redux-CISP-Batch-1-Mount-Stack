import React from 'react'

function Menu() {
  return (
    <div>
      <ul className='flex gap-[50px]'>
        <li className='text-2xl hover:font-bold'>About</li>
        <li className='text-2xl hover:font-bold'>Experience</li>
        <li className='text-2xl hover:font-bold'>Project</li>
        <li className='text-2xl hover:font-bold'>Contact</li>
      </ul>
    </div>    
  )
}

export default Menu
