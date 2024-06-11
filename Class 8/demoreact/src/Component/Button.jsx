import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Button() {

  const [count, setCount] = useState (0)
  const [users, setusers] = useState ([])

  // useEffect (() => {

  //   console.log ('Button is Mounted.')

  //   return function () {
  //     console.log ('Button is Unmounted.')
  //   }
  // }, [count])  empty array means useEffect call only one time.

  useEffect (() => {
    (
      async function () {
        try {
          const {data} = await axios.get ('https://jsonplaceholder.typicode.com/users')
          // console.log (data)
          setusers (data)
        } catch (error) {
          
        } 
      }
    )()
      
  }, []) 

  
  return (
    <div className='p-8 m-8 border-2 border-red-300 w-[50%]'>

      <button 
        className = 'bg-blue-500 hover:bg-green-400 text-white px-4 py-2 font-bold rounded-lg' 
        onClick = {() => setCount (count + 1)}
      >
        Button
      </button>

      <h1 
        className='text-5xl p-4 border-2 border-black/30 w-[100px] m-[50px]'>

        {count}

      </h1> 

      <table >

        <thead>
          <tr>
            <th> ID </th>
            <th> Name </th>
            <th> Email </th>
          </tr> 
        </thead>

        <tbody>
          {
            users.map (user => 
              <tr key = {user.id}  >
                <td className='p-3'> {user.id} </td>
                <td className='p-3'> {user.name} </td>
                <td className='p-3'> {user.email} </td>
              </tr>
            )
          }

        </tbody>

      </table>

    </div>
  )
}

export default Button
