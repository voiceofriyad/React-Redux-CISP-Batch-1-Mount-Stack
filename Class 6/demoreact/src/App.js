import { useState } from 'react'
import Counter from './Counter';

function App() {
  // let num = 100
  let [num, setNum] = useState (1) //[value, function]
  return (
    <>
      <div className="flex justify-center items-center h-[50vh]">

        <div>

          <h1 className = "text-5xl"> {num} </h1>

          <button className = "mt-5 bg-black text-white px-4 py-2 rounded-lg" onClick = { () => {
            setNum (num + 1)
          }}>
            Click Me
          </button>

        </div>

      </div>   

      <Counter />   
      
    </>
  );
}

export default App;
