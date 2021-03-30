import React from 'react';

const Project = (props) => {
  const { project } = props;

  return (   
    <div className="project">
      <img className="project-image" src={project.image} alt={project.name}/>
      <h4 className="project-name">{project.name}</h4>
      <div className="options">
        <button>View the Project</button>
        <button>View the Code</button>
      </div>
    </div>      
  );
}
 
export default Project;