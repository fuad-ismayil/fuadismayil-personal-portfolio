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

const Project: React.FC<ProjectProps> = (props) => {
  return (
    <div className={'project flex flex-wrap flex-col-reverse ' + props.projectImagePosition + ' bg-[#fff] lg:w-[992px] mx-auto justify-between rounded-[24px] shadow-[0px_0px_40px_-10px_rgba(0,_0,_0,_0.1)] overflow-hidden'}>
      <ProjectTitle name={props.projectName} description={props.projectDescription} link={props.projectLink} />
      <ProjectImage src={props.projectImage} />
    </div>
  )
}

export default Project