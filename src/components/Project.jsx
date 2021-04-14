import React from 'react';

const Project = (props) => {
  const { project } = props;

  return (   
    <div className="project">
      <h3 className="project-name">{project.name}</h3>
      <div className="image-container">
        <img className="project-image" src={project.image} alt={project.name}/>
        <div className="overlay">          
          <p className="description">{project.description}. <span className="technologies">Technologies Used: {project.technologies}</span></p>             
        </div>                  
      </div>  
      <div className="options">
        <a className="view-button" href={project.site}>View Project</a>
        <a className="view-button" href={project.code}>View Code</a>        
      </div>
    </div>       
  );
}
 
export default Project;