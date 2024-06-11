import React from 'react'
import { useState } from 'react'

function Counter() {
    let [num, setNum] = useState (1)
    let [name, setName] = useState ('')
  return (
    <div className='flex justify-center items-center h-[50vh] gap-20'>

        <div className='w-[300px] border-4 border-blue-500 p-5'>
            <div className='flex gap-[30px] h-[90px] items-center'>

                <button className='bg-red-600 text-white px-4 py-2 rounded-lg' 
                        onClick = { () => {
                            if (num <= 0) {
                                setNum (0)
                            } else {
                                setNum (num - 1) }}
                        }>
                                Minus
                </button>

                <h1 className='text-5xl'>{num}</h1>

                <button className='bg-green-600 text-white px-4 py-2 rounded-lg' 
                        onClick = { () => { setNum (num + 1) }}>
                            Plus
                </button>

            </div>

            <button className='bg-orange-600 text-white px-4 py-2 rounded-full w-full' 
                    onClick = { () => setNum (1)}>
                        Reset
            </button>

        </div>

        <div className='w-[25%] border-2 border-black/40 px-[80px] py-5 bg-slate-300 rounded-[30px]'>

            <input type="text" 
                className='p-2'
                placeholder = 'Enter Your Name'
                value = {name} //na liklay o kaj kore.
                onChange = { (e) => {setName (e.target.value) }}
            />
            <br />
            <h1 className='text-xl font-bold text-red-600'> {name} </h1>

        </div>
      
    </div>
  )
}

export default Counter
