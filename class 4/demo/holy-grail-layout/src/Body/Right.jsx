import React from 'react'
import Top from './Top'
import Bottom from './Bottom'

function Right({title}) {
  return (
    <div style={{width : '70%', background : 'lime'}}>
      
      <Top />

      <Bottom title = {title} />
    </div>
  )
}

export default Right
