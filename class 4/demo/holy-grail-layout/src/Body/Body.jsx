import React from 'react'
import Left from './Left'
import Right from './Right'

function Body() {
  return (
    <div style = {{height : '80vh', background : 'purple', display : 'flex'}}>

        <Left />

        <Right title = 'My name is Riyad' />
      
    </div>
  ) 
}

export default Body
