import React from 'react'
import BottomLeft from './Bottom/BottomLeft'
import BottomRight from './Bottom/BottomRight'

function Bottom({title}) {
  return (
    <div style = {{height : '50%', background : 'pink', display : 'flex'}}>

      <BottomLeft />
      <BottomRight title = {title} />

      
    </div>
  )
}

export default Bottom
