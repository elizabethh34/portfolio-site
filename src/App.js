import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
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
        description: "Built with React, users can enter origin and destination to find available bus routes",
        site: "https://mitt-route-finder.netlify.app/",
        code: "https://github.com/elizabethh34/api-final"
      },
      {
        id: 2,
        name: "React Movie List",
        image: "images/movie-list.png",
        description: "Built with React, users can search for movies to add to their favourites list",
        site: "https://mitt-react-movie-list.netlify.app/",
        code: "https://github.com/elizabethh34/react-movie-list"
      },
      {
        id: 3,
        name: "Ecommerce Cart",
        image: "images/shopping-cart.png",
        description: "Built with React, products can be added and removed from an ecommerce shopping cart",
        site: "https://react-mouseheavan.netlify.app/",
        code: "https://github.com/elizabethh34/react-shopping-cart-2"
      },
      {
        id: 4,
        name: "Find Next Bus",
        image: "images/stop-finder.png",
        description: "Utilizing the Winnipeg Transit API, users can search for a street to see a list of the next buses along that street",
        site: "https://winnipegtransit-bustimes-finder.netlify.app/",
        code: "https://github.com/elizabethh34/API-assignment1"
      },
      {
        id: 5,
        name: "POI Finder",
        image: "images/group-map.png",
        description: "Using MapBox, users can search for points of interest and display them on a map",
        site: "https://map-group-project.netlify.app/",
        code: "https://github.com/elizabethh34/map-group-project"
      },
      {
        id: 6,
        name: "To-do List",
        image: "images/todo-list.png",
        description: "Users can add, remove and mark tasks as complete",
        site: "https://todolistapp-toolsandautomation.netlify.app/",
        code: "https://github.com/elizabethh34/personal-project"
      }
    ]
  }

  render() { 
    const { allProjects } = this.state;

    return (
      <Fragment>
        <Header />
        <Switch>
          <Route
            exact path="/"
            render={props => <Home {...props}/>}/>
          <Route
            exact path="/projects"
            render={props => <ProjectsPage allProjects={allProjects} {...props}/>}/>
        </Switch>
      </Fragment>
    );
  }
}
 
export default App;
