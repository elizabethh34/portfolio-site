import React from 'react';
import { Link } from 'react-router-dom';
import home from '../images/home.jpg';

const Home = () => {
  return (
    <div className="home-image" style={{ backgroundImage: `linear-gradient(to top, rgba(138, 209, 231, 0.5), rgba(8, 40, 49, 1)), url(${home})` }}>
      <div className="home-container">
        <div className="name-container">
          <h1 className="home-name">Elizabeth Hellsten</h1>
          <h3 className="home-role">Junior Full Stack Software Developer</h3>
        </div>      
        <div className="info-container">
          <p className="about-info">I am a software development student at the Manitoba Institute of Trades and Technology. I look forward to continuing to expand my knowledge and skills on web development.</p>
        </div>
        <div className="home-buttons-container">
          <Link to="/about">
            <div className="projects-button">About Me<i className="fas fa-arrow-right"></i></div>
          </Link>
          <Link to="/projects">
            <div className="projects-button">View Projects<i className="fas fa-arrow-right"></i></div>
          </Link>
        </div>        
      </div>
    </div>
  );
}
 
export default Home;