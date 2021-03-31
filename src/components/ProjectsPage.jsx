import React, { Fragment } from 'react';
import Project from './Project';

const ProjectsPage = (props) => {
  const { allProjects } = props;

  return (
    <Fragment>
      <h3 className="projects-heading">Projects</h3>
      <div className="projects-container">
        {allProjects.map(project => {
          return <Project key={project.id} project={project}/>
        })}
      </div>
    </Fragment>    
  );
}
 
export default ProjectsPage;