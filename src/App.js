import React, { Component } from 'react';
import Header from './components/Header';
import ProjectsPage from './components/ProjectsPage';
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
        site: "https://mitt-react-movie-list.netlify.app/",
        code: "https://github.com/elizabethh34/react-movie-list"
      },
      {
        id: 3,
        name: "Ecommerce Cart",
        image: "images/shopping-cart.png",
        site: "https://react-mouseheavan.netlify.app/",
        code: "https://github.com/elizabethh34/react-shopping-cart-2"
      },
      {
        id: 4,
        name: "Find Next Bus",
        image: "images/stop-finder.png",
        site: "https://winnipegtransit-bustimes-finder.netlify.app/",
        code: "https://github.com/elizabethh34/API-assignment1"
      },
      {
        id: 5,
        name: "POI Finder",
        image: "images/group-map.png",
        site: "https://map-group-project.netlify.app/",
        code: "https://github.com/elizabethh34/map-group-project"
      },
      {
        id: 6,
        name: "To-do List",
        image: "images/todo-list.png",
        site: "https://todolistapp-toolsandautomation.netlify.app/",
        code: "https://github.com/elizabethh34/personal-project"
      }
    ]
  }

  render() { 
    const { allProjects } = this.state;

    return (
      <div>
        <Header />
        <ProjectsPage allProjects={allProjects}/>
      </div>
    );
  }
}
 
export default App;
