import React from 'react'

function Show({name, colors}) {
    
    return (
        <div className='border-4 border-black/70 m-[auto] p-5 mt-[50px] w-[70%]'>
            
            <h1>This is Lifting: {name}</h1>

            <br />

            <h2 className='text-center' >This is Lifting Color: </h2>

            <br />
                
            <div className='flex flex-wrap justify-center items-center gap-5'> 

                {colors.map((c, i)=> {

                    return (
                        <div className='bg-yellow-400 py-1 px-4 rounded-md ' key = {i}>
                                <p>{c}</p>
                        </div>
                    )
                })}

            </div>
 
            <br /> <br /> <br /> 
                
            

            <div className='flex flex-wrap justify-center items-center gap-5'>
                {
                    colors.map ((color, i) => {
                        return (
                            <div 
                                style={{backgroundColor: color}}
                                className = 'border-2 border-green-900 w-[100px] h-[100px] flex justify-center items-center'
                                key = {i}> 

                                <p> {color} </p> 

                            </div>
                        )
                    })
                }
            </div>     
            
                
        </div>
    )
}

export default Show
