import React, {useState} from 'react'
import Form from "./Components/Form"
import Show from "./Components/Show"

function App() {
  let student =[
    {name: 'Afsar', age: 30, isMarried : true},
    {name: 'Shimul', age: 32, isMarried : false},
    {name: 'NSI', age: 27, isMarried : false},
    {name: 'Fardin', age: 25, isMarried : true},
  ]

  function myMap (cb) {
    let final = []
    for (let i = 0; i < student.length; i++) {
      let result = cb (student[i], i, student)
      final.push (result)
    }

    return final
  }

  let [name, setName] = useState ('')
  let [colors, setColors] = useState ([]) 

  function getData (n) {
    setName (n)
  }
  function getData2 (c) {
    setColors ([...colors, c])
  }

  return (
    <div className="p-[100px]">
      {
        // student.map ((stu) => {
        //   if (stu.isMarried) {
        //     return ( 
        //       <div className="flex my-3 gap-[30px]" key={stu.name}>
        //         <h1>{stu.name}</h1>
        //         <h1>{stu.age}</h1>
        //       </div>
        //     )
        //   }
        // })    
        
        myMap ((stu) => {
          if (stu.isMarried) {
            return (
              <div className="flex my-3 gap-[30px]" key={stu.name}>
                <h1>{stu.name}</h1>
                <h1>{stu.age}</h1>
              </div>
            )
          }
        })  
      }


      <Form getData = {getData} getData2 = {getData2}/>

      <Show name = {name} colors = {colors}/>

      

    </div>

  );
}

export default App;
