import React from 'react'

interface ProjectTitleProps {
  name: string;
  description: string;
  link: string;
}

const ProjectTitle: React.FC<ProjectTitleProps> = ({ name, description, link }) => {
  return (
    <div className='w-full md:w-1/2 flex flex-col gap-[10px] md:gap-[12px] lg:gap-[24px] p-[20px] md:pl-[30px] lg:pl-[55px] md:pr-[40px] justify-center  '>
      <h3 className='text-[#25282B] text-[20px] md:text-[26px] lg:text-[40px] font-bold'>{name}</h3>
      <article className='text-[#828282] text-[14px]'>{description}</article>
      <a href={link} target="_blank" className='text-[#25282B] text-[16px] flex border-2 border-[#25282B] h-[40px] w-[144px] justify-center items-center rounded-[24px] hover:scale-105 hover:bg-[#25282B] hover:text-white duration-300'>View Project</a>
    </div>
  )
}

export default ProjectTitle