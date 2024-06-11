import React from 'react'
import BottomLeft from './Bottom/BottomLeft'
import BottomRight from './Bottom/BottomRight'

function Bottom({bTitle}) {
  return (
    <div style = {{height : '50%', background : 'pink', display : 'flex'}}>

      <BottomLeft />
      <BottomRight rTitle = {bTitle} />

      
    </div>
  )
}

export default Bottom
