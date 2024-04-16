import React from 'react'
import obj from './bottomLeft.module.css'

function BottomLeft() {
  return (
    <div style = {{width : '50%', background : 'teal'}}>
      <h1 className = {obj.title}>Zihad</h1>

      <p className = {obj.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi officiis, nulla accusantium quibusdam repudiandae cum perspiciatis velit provident labore, in illum, doloribus rerum aliquid rem. Natus quibusdam dolores impedit ab.</p>
    </div>
  )
}

export default BottomLeft
