import React from 'react'
import Project from './Project'

const Projects: React.FC = () => {
  return (
    <section className="projects-section flex flex-col gap-[80px] px-[20px] md:px-[50px] lg:px-[120px]">
      <h1 className='text-center text-[48px] font-bold pt-[255px] pb-[80px]'>
        P
        <span className='underline decoration-4 decoration-[#FDC435] underline-offset-[20px]'>
          rojec
        </span>
        ts
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
      projectName="Artificial Intelligence" 
      projectDescription="This is my third website project, created using HTML, CSS, and JavaScript. It represents my initial step into web development and showcases the foundational skills I have learned so far." 
      projectLink="https://github.com/fuad-ismayil/Artificial-Intelligence" 
      projectImage="/images/projects/project.jpg"
      projectImagePosition="md:flex-row" />
    </section>
  )
}

export default Projects