import React from 'react'

interface ProjectTitleProps {
  name: string;
  description: string;
  link: string;
}

const ProjectTitle: React.FC<ProjectTitleProps> = ({ name, description, link }) => {
  return (
    <div className='w-full md:w-1/2 flex flex-col md:gap-[12px] lg:gap-[24px] p-[20px] md:px-[55px] justify-center  '>
      <h3 className='text-[#25282B] md:text-[25px] lg:text-[40px] font-bold'>{name}</h3>
      <article className='text-[#828282] text-[16px]'>{description}</article>
      <a href={link} target="_blank" className='text-[#25282B] text-[18px] flex border-2 border-[#25282B] h-[43px] w-[150px] justify-center items-center rounded-[24px] hover:scale-105 duration-300'>View Project</a>
    </div>
  )
}

export default ProjectTitle