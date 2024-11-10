import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-15 '>
        <div className='grid md:grid-cols-2 gap-2 items-center '>
            <div data-aos="zoom-in-up">
                <h2 className='text-5xl md:text-6xl '>Technical Skills</h2>
                <p className='text-white-500 pt-4'>As a skilled web developer, I excel in HTML, CSS, Javascript, React, and Next.js. I craft dynamic, user friendly applications and stay updated with emerging technologies to drive efficiency.</p>
            </div>
            <div className='grid grid-cols-2 text:accent text-2xl sm:text:2xl mt-6'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up" >Typescript</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    </div>
                    <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Css</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Skills