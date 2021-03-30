import React, { Component } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import './App.css';

class App extends Component {
  state = { 
    allProjects: [
      {
        id: 1,
        name: "Bus Route Finder",
        image: "images/route-finder.png",
        site: "https://mitt-route-finder.netlify.app/",
        code: "https://github.com/elizabethh34/api-final"
      },
      {
        id: 2,
        name: "React Movie List",
        image: "images/route-finder.png",
        site: "https://mitt-route-finder.netlify.app/",
        code: "https://github.com/elizabethh34/api-final"
      },
      {
        id: 3,
        name: "React Movie List",
        image: "images/route-finder.png",
        site: "https://mitt-route-finder.netlify.app/",
        code: "https://github.com/elizabethh34/api-final"
      },
      {
        id: 4,
        name: "Bus Route Finder",
        image: "images/route-finder.png",
        site: "https://mitt-route-finder.netlify.app/",
        code: "https://github.com/elizabethh34/api-final"
      },
      {
        id: 5,
        name: "React Movie List",
        image: "images/route-finder.png",
        site: "https://mitt-route-finder.netlify.app/",
        code: "https://github.com/elizabethh34/api-final"
      },
      {
        id: 6,
        name: "React Movie List",
        image: "images/route-finder.png",
        site: "https://mitt-route-finder.netlify.app/",
        code: "https://github.com/elizabethh34/api-final"
      }
    ]
  }

  render() { 
    const { allProjects } = this.state;

    return (
      <div>
        <Header />
        <div className="projects-container">
          {allProjects.map(project => {
            return <Project key={project.id} project={project}/>
          })}
        </div>
      </div>
    );
  }
}
 
export default App;
