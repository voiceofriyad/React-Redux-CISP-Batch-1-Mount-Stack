import React from 'react'

function Hero() {
  return (
    
    <div className='min-h-[600px] flex flex-col md:flex-row justify-center gap-[50px] items-center mt-[150px]'>
        {/* image */}
        <div>
            <img className='h-[300px] md:h-[450px] my-10' src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/profile-pic.png" alt="" srcset="" />
        </div>

        {/* information */}

        <div className='w-[550px]'>
            <h3 className='text-2xl font-bold text-center py-2'>Hello, I'm</h3>
            <h1 className='text-5xl font-bold text-center py-3'>Md Faysal Alam Riyad</h1>
            <h2 className='text-3xl font-bold text-center py-2'>Frontend Developer</h2>

            <div className='flex flex-col md:flex-row gap-[20px] justify-center py-5'>
              <button className='bg-black text-white py-2 px-4 rounded-full'>Download CV</button>
              <button className='bg-black text-white py-2 px-4 rounded-full'>Contact Info</button>
            </div>

            <div className='flex justify-center gap-[25px] py-3'>
              <img src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/linkedin.png" alt=""  className='h-[50px]'/>
              <img src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/github.png" alt=""  className='h-[50px]'/>
            </div>
        </div>

      
    </div>
  )
}

export default Hero
