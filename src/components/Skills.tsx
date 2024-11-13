import React from 'react';
import "../app/styles/skills.css"; // Import the custom CSS file

const Skills = () => {
  return (
    <div id='skills' className='container'>
      <div className='skills-grid'>
        <div data-aos="zoom-in-up" className='skills-text'>
          <h2 className='heading'>Technical Skills</h2>
          <p className='description'>
          As a skilled web developer, I excel in HTML, CSS, JavaScript, React, and Next.js. I specialize in crafting dynamic, user-friendly applications while staying up-to-date with emerging technologies to drive efficiency.
          </p>
        </div>
        <div className='skills-list'>
          <div className='skill-column'>
            <h2 data-aos="zoom-in-up">Typescript</h2>
            <h2 data-aos="zoom-in-up">Next.js</h2>
            <h2 data-aos="zoom-in-up">React.js</h2>
          </div>
          <div className='skill-column'>
            <h2 data-aos="zoom-in-up">CSS</h2>
            <h2 data-aos="zoom-in-up">Node.js</h2>
            <h2 data-aos="zoom-in-up">Tailwind</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
