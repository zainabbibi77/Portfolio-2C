import React from 'react';
import "../app/styles/about.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <h2 className="about-title" data-aos="zoom-in-up">About me</h2>
      <p className="about-text" data-aos="zoom-in-up">
        I&apos;m a computer science student looking for an entry-level software development career where I can put my coding expertise, problem-solving skills, and love of innovation to use. I am eager to learn new skills, to be efficient and productive for the company&apos;s growth, and to broaden my professional skill set. I&apos;m looking forward to working as a programmer in a multinational corporation and meeting worldwide clientele.
      </p>

      <div className="education-section">
        <h2 className="education-title" data-aos="zoom-in-up">Education</h2>
        <p className="education-item" data-aos="zoom-in-up"><b>Bachelor of Computer Science:</b> From Fuuast (Ongoing)</p>
        <p className="education-item" data-aos="zoom-in-up"><b>Intermediate:</b> ICS from BAMM PECHS Govt College for Women Karachi</p>
        <p className="education-item" data-aos="zoom-in-up"><b>Matriculation:</b> From Board of Secondary Education, Karachi</p>
        <p className="education-item" data-aos="zoom-in-up"><b>Artificial Intelligence, Web 3.0 & Metaverse:</b> From Governer House Karachi (Ongoing)</p>
      </div>
    </div>
  );
}

export default About;
