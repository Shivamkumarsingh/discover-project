import React from 'react';
import ProjectCard from './ProjectCard'
const ProjectContainer = (props) =>{
  return(
    <div>
      <h4>{props.title}</h4>
    <br/>
   {
    props.projects.map((project)=>{
          return <ProjectCard project={project}/>
        })
      }
    </div>

  )
}

export default ProjectContainer;
