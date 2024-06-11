import React, { useState } from "react";
import Select from "react-select";

function Form() {
  let color = [
    { value: "Blue", label: "Blue", color: "#4169E1" },
    { value: "Brown", label: "Brown", color: "#DAA520" },
    { value: "Purple", label: "Purple", color: "#EE82EE" },
    { value: "Green", label: "Green", color: "#2E8B57" },
    { value: "Black", label: "Black", color: "#000" },
    { value: "Yellow", label: "Yellow", color: "#FFD700" },
    { value: "Red", label: "Red", color: "#CD5C5C" },
    { value: "Orange", label: "Orange", color: "#FFA500" },
  ];
 
  let colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "#c7ecee" }),
    option: (styles, { data }) => {
      return { ...styles, color: data.color };
    },
  };

  let [name, setName] = useState("");
  let [colorValue, setColorValue] = useState("");
  let [colorCollection, setColorCollection] = useState({});

  function addColors() {
    setColorCollection({
      ...colorCollection,
      
        [name]: colorCollection[name]?.concat(colorValue) || [colorValue],

    });
    
  }

  return (
    
    <div className="w-[40%] ml-[30%]">

      <Select
        options={color}
        styles={colorStyles}
        defaultValue={name}
        onChange={(e) => setName(e.value)}
      />

      <br />

      <p>you select {name}</p>

      <br />

      <h1 className="text-xl font-semibold">Please Select a Color:</h1>

      <br />

      <input
        type="color"
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
      <button onClick={addColors}>Click</button>

      
      <div className='w-full p-5 m-2 bg-white border-2 rounded-md text-black-900'>


        {  Object.keys(colorCollection).map((key) => (

            <div key={key} className="w-full p-3">
                <h3 className="w-full pb-2 text-xl font-semibold text-left border-b-2 text-gray"> {key} </h3>

                <div className="flex flex-wrap items-center justify-start gap-5">

                    {colorCollection[key].map((value, index) => (

                    // Render each value
                    <div
                        key={index}
                        style={{ backgroundColor: value }}
                        className=" p-[40px] text-center  my-3 text-white">
                        {value}

                    </div>
                    ))}

                </div>

            </div>
        ))}
    </div>
    {/* {console.log (colorCollection)} */}

  </div>
  );
}
export default Form;
