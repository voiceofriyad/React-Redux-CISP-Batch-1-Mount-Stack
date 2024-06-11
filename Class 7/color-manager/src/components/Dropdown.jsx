import React, {useState} from 'react'
import Select from "react-select"

function Dropdown() {
    let group = [
        {value: 'Faysal', label: 'Faysal'},
        {value: 'Alam', label: 'Alam'},
        {value: 'Riyad', label: 'Riyad'}
    ]

    let [dataSet, setDataSet] = useState ('')

    // let [selectedData, setSelectedData] = useState ('')  
    function myMap (cb) {
        let final = []
        for (let i = 0; i < dataSet.length; i++) {
          let result = cb (dataSet[i], i, dataSet)
          final.push (result)
        }
    
        return final
      }
    
    
    return (
        <div className="w-[50%] ml-[30%]">
            <Select
            options={group}
            defaultValue={dataSet}
            onChange={(e) => setDataSet(e.value)}
            />

        <div className='flex flex-wrap justify-center items-center gap-5 mt-5'>
            {
                    myMap ((name) => {
                        return (
                            <div 
                                style={{backgroundColor: '#DAA520'}}
                                className = 'border-2 border-green-900 w-[100px] h-[100px] flex justify-center items-center'> 

                                <p>{name}</p>

                            </div>
                        )
                    })
            }
        </div>


        


      
        </div>
    )
}

export default Dropdown
