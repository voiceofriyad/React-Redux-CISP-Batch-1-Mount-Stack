import React from 'react'

function AboutMe() {
  return (
    <div className='mt-[100px] py-[30px] min-h-[400px]'>

      <p className='text-center'>Get To Know More</p>
      <h1 className='text-center text-4xl font-bold my-1'>About Me</h1>

      <div className='my-[150px] flex justify-center gap-[50px]'>

        <div className='w-[25%]'>
            <img className='rounded-[50px] mt-[50px]' src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/about-pic.png" alt="" srcset="" />
        </div>

        <div className='w-[45%]'>

            <div className='flex gap-[100px]'>

                <div className='w-[50%] border-2 border-black/30 rounded-[35px] px-5 py-10'>
                    <img className='h-[30px] mx-auto' src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/experience.png" alt="" />
                    <h3 className='text-2xl font-bold text-center'>Experience</h3>
                    <h4 className='text-gray-600 text-center'>2+ years</h4>
                    <h4 className='text-gray-600 text-center'>Frontend Development</h4>
                </div>

                <div className='w-[50%] border-2 border-black/30 rounded-[35px] px-5 py-10'>
                    <img className='h-[30px] mx-auto' src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/education.png" alt="" />
                    <h3 className='text-2xl font-bold text-center'>Education</h3>
                    <h4 className='text-gray-600 text-center'>B.Sc. Bachelors Degree</h4>
                    <h4 className='text-gray-600 text-center'>M.Sc. Masters Degree</h4>
                </div>

            </div>

            <p className='m-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis quos esse quibusdam quasi repudiandae, illo error, reprehenderit repellat debitis eum veritatis illum labore! Iste illo veniam est placeat provident?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis quos esse quibusdam quasi repudiandae, illo error, reprehenderit repellat debitis eum veritatis illum labore! Iste illo veniam est placeat provident?</p>

        </div>

      </div>

    </div>
  )
}

export default AboutMe
