import React, { useState } from "react";
import Button from "./Component/Button";

function App() {

  const [show, setShow] = useState (false)

  return (
    <div>

      <button 
        className = 'bg-red-500 hover:bg-gray-400 text-white px-4 py-2 m-5 font-bold rounded-lg'
        onClick = {() => setShow (!show)}>

        Click Me to See
      
      </button>

      {show && <Button />}

    </div>
  );
}

export default App;
