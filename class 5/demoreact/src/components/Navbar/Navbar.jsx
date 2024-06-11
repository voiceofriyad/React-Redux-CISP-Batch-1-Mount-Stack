import React from 'react'
import Menu from './Menu'

function Navbar() {
  return (
    <div className='h-[75px] flex justify-around items-center'> 

      {/* Logo */}
      <h1 className='text-5xl font-bold'>Riyad</h1>

      {/* Menu */}
      <Menu />

    </div>
  )
}

export default Navbar
