import React from 'react'
import Project from './Project'

const Projects: React.FC = () => {
  return (
    <section className="projects-section flex flex-col gap-[55px] md:gap-[80px] px-[20px] md:px-[50px] lg:px-[120px]">
      <h1 className='text-center text-[48px] font-bold  '>
        P
        <span className='underline decoration-4 decoration-[#FDC435] underline-offset-[20px]'>
          roject
        </span>
        s
      </h1>
      <Project 
      projectName="Artificial Intelligence" 
      projectDescription="This is my first website project, created using HTML, CSS, and JavaScript. It represents my initial step into web development and showcases the foundational skills I have learned so far." 
      projectLink="https://github.com/fuad-ismayil/Artificial-Intelligence" 
      projectImage="/images/projects/project.jpg" 
      projectImagePosition="md:flex-row"/>
      <Project 
      projectName="Area" 
      projectDescription="This is my second website project, created using HTML, CSS, and JavaScript. It represents my initial step into web development and showcases the foundational skills I have learned so far." 
      projectLink="https://github.com/fuad-ismayil/Area" 
      projectImage="/images/projects/project2.jpg" 
      projectImagePosition="md:flex-row-reverse" />
      <Project 
      projectName="Personal Portfolio" 
      projectDescription="This is my personal portfolio built using React, TypeScript, and Tailwind CSS. It marks an important step in my journey into modern web development and demonstrates the skills I’m currently learning." 
      projectLink="https://github.com/fuad-ismayil/fuadismayil-personal-portfolio" 
      projectImage="/images/projects/project3.png"
      projectImagePosition="md:flex-row" />
    </section>
  )
}

export default Projects