import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-15 mt-6  '>
        <div className='grid md:grid-cols-2 gap-2 items-center '>
            <div>
                <h2 className='text-5xl  mb-4 md:text-5xl  '>Technical Skills</h2>
            
          <div className=' grid grid-cols-2  text:accent text-2xl sm:text mt-9'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    </div>
                    <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Css</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    </div>
                <p className='text-white-500 pt-9'>As a skilled web developer, I excel in HTML, CSS, Javascript, React, and Next.js. I craft dynamic, user friendly applications and stay updated with emerging technologies to drive efficiency.</p>
            </div>
            </div>
           
            
        </div>

    </div>
  )
}

export default Skills