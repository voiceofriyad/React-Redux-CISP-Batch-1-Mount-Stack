import React, {useState} from 'react'

function Form({getData, getData2}) {
  let [name, setName] = useState ('')   
  let [colorCode, setColorCode] = useState ('')   
  let [cat, setCat] = useState ('')
  // let [colors2, setColors2] = useState ([]) 
  let [colorName, setColorName] = useState ([])

  function myMap2 (cb) {
    let final = []
    for (let i = 0; i < colorName.length; i++) {
      let result = cb (colorName[i], i, colorName)
      final.push (result)
    }

    return final
  }

  // function getData3 (c) {
  //   setColors2 ([...colors2, c])
  // }
  function getData3 (c) {
    setColorName ([...colorName, c])
  }
  return (
    <div>    

        <input className='border-2 border-black p-3' type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName (e.target.value)}/>

        <button className='bg-black/70 text-white py-1 px-4 rounded-lg ml-5'
        onClick={() => getData (name)}
        >Share</button> 

        <h1 className='text-red-600'>{name}</h1>


        <br /> <br />
        <br /> <br />

        <input className='border-2 border-black p-3' type="color" value={colorCode} onChange={(e) => setColorCode (e.target.value)}/>

        <button className='bg-black/70 text-white py-1 px-4 rounded-lg ml-5'
        onClick={() => getData2 (colorCode)}
        >Share</button>

        <br /> <br />
        <br /> <br />

        <div>
            <select 
              className='border-4 border-slate-400 py-2 px-4' 
              name='category' 
              value={cat} 
              onChange={(e) => setCat (e.target.value)} >

              <option>Select</option>
              <option value="programming">Programming</option>
              <option value="Funny">Funny</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>

            </select>

            <br /> <br />

            <h1>You Select {cat}; Now Pick a Color</h1>

            <br /> <br />

            <input className='border-2 border-black p-3' type='color' value={colorName} onChange={(e) => setColorName (e.target.value)}/>


            <button className='bg-green-600 text-white py-1 px-4 rounded-lg ml-5' onClick={() => getData3 (colorName) }>Add Color</button>

            {/* <p>{colorName}</p> */}

            <div className='flex flex-wrap justify-center items-center gap-5'>
                {
                    myMap2 ((c, i) => {
                        return (
                            <div 
                                style={{backgroundColor: c}}
                                className = 'border-4 border-green-900 w-[100px] h-[100px] flex justify-center items-center'
                                key = {i}> 

                                <p> {c} </p> 

                            </div>
                        )
                    })
                }
            </div>
            
            
        </div>   

      
    </div>
  )
}

export default Form
