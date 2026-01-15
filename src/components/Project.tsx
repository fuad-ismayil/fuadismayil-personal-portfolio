import React from 'react'
import ProjectImage from './ProjectImage'
import ProjectTitle from './ProjectTitle'

interface ProjectProps {
  projectName: string;
  projectDescription: string;
  projectLink: string;
  projectImage: string;
  projectImagePosition: string;
}

const Project: React.FC<ProjectProps> = ({ projectName, projectDescription, projectLink, projectImage, projectImagePosition }) => {
  return (
    <div className={'project flex flex-wrap flex-col-reverse ' + projectImagePosition + ' bg-[#fff] lg:w-[992px] mx-auto justify-between rounded-[24px] shadow-[0px_0px_40px_-10px_rgba(0,_0,_0,_0.1)] overflow-hidden'}>
      <ProjectTitle name={projectName} description={projectDescription} link={projectLink} />
      <ProjectImage src={projectImage} />
    </div>
  )
}

export default Project