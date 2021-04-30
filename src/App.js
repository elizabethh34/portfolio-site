import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import ProjectsPage from './components/ProjectsPage';
import About from './components/About';
import './App.css';

class App extends Component {
  state = {
    allProjects: [
      {
        id: 1,
        name: "Bus Route Finder",
        image: "images/route-finder.png",
        description: "Built with React, users can enter origin and destination to find available bus routes",
        technologies: "JavaScript, HTML/CSS, APIs",
        site: "https://mitt-route-finder.netlify.app/",
        code: "https://github.com/elizabethh34/api-final",
        isHosted: true
      },
      {
        id: 2,
        name: "World Capitals Quiz",
        image: "images/capitals-quiz.png",
        description: "Users can test their knowledge of world capitals",
        technologies: "React, JavaScript, HTML/CSS",
        site: "https://capitalcitiesquiz.netlify.app/",
        code: "https://github.com/elizabethh34/quiz-app",
        isHosted: true
      },
      {
        id: 3,
        name: "Ecommerce Cart",
        image: "images/shopping-cart.png",
        description: "Built with React, products can be added and removed from an ecommerce shopping cart",
        technologies: "React, React Router, APIs, JavaScript",
        site: "https://react-mouseheavan.netlify.app/",
        code: "https://github.com/elizabethh34/react-shopping-cart-2",
        isHosted: true
      },
      {
        id: 4,
        name: "Find Next Bus",
        image: "images/stop-finder.png",
        description: "Utilizing the Winnipeg Transit API, users can search for a street to see a list of the next buses along that street",
        technologies: "JavaScript, APIs, HTML/CSS",
        site: "https://winnipegtransit-bustimes-finder.netlify.app/",
        code: "https://github.com/elizabethh34/API-assignment1",
        isHosted: true
      },
      {
        id: 5,
        name: "POI Finder",
        image: "images/group-map.png",
        description: "Using MapBox, users can search for points of interest and display them on a map",
        technologies: "JavaScript, APIs",
        site: "https://map-group-project.netlify.app/",
        code: "https://github.com/elizabethh34/map-group-project",
        isHosted: true
      },
      {
        id: 6,
        name: "To-do List",
        image: "images/todo-list.png",
        description: "Users can add, remove and mark tasks as complete",
        technologies: "JavaScript, HTML/CSS",
        site: "https://todolistapp-toolsandautomation.netlify.app/",
        code: "https://github.com/elizabethh34/personal-project",
        isHosted: true
      },
      {
        id: 7,
        name: "React Movie List",
        image: "images/movie-list.png",
        description: "Users can search for movies to add to their favourites list",
        technologies: "React, React Router, APIs",
        code: "https://github.com/elizabethh34/react-movie-list",
        isHosted: false
      },
      {
        id: 8,
        name: "RPG Monster Game",
        image: "images/rpg-game.png",
        description: "C# text console game where the user is the hero and they are trying to stay alive while fighting monsters",
        technologies: "C#",
        code: "https://github.com/elizabethh34/RPG-game",
        isHosted: false
      },
      {
        id: 9,
        name: "Budget Calculator",
        image: "images/budget-calculator.png",
        description: "Users can add and track income and expenses",
        technologies: "JavaScript, HTML/CSS",
        site: "https://budget-calculator-mitt.netlify.app/",
        code: "https://github.com/elizabethh34/budget-calculator",
        isHosted: true
      },
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
            render={props => <Home {...props}/>}
          />
          <Route
            exact path="/about"
            render={props => <About {...props}/>}
          />
          <Route
            exact path="/projects"
            render={props => <ProjectsPage allProjects={allProjects} {...props}/>}
          />
        </Switch>
      </Fragment>
    );
  }
}
 
export default App;
