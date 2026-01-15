import React from 'react'

interface ProjectImageProps {
  src: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src }) => {
  return (
    <div className='w-full md:w-1/2'>
      <img src={src} alt="" className='w-full' />
    </div>)
}

export default ProjectImage