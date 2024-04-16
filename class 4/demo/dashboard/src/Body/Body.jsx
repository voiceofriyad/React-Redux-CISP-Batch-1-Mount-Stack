import React from 'react'
import Left from './Left/Left'
import Right from './Right/Right'

function Body() {
  return (
    <div style = {{height : '90vh', display : 'flex'}}>

        {/* Left */}
        <Left />

        {/* Right */}
        <Right />
      
    </div>
  )
}

export default Body
