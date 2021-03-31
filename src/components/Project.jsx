import React from 'react';

const Project = (props) => {
  const { project } = props;

  return (   
    <div className="project">
      <div className="image-container">
        <img className="project-image" src={project.image} alt={project.name}/>
        <h5 className="project-name">{project.name}</h5>
      </div>      
      <div className="options">
        <a className="view-button" href={project.site}>View Project</a>
        <a className="view-button" href={project.code}>View Code</a>        
      </div>
    </div>      
  );
}
 
export default Project;