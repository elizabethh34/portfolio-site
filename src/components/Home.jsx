import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="name-container">
        <h1 className="home-name">Elizabeth Hellsten</h1>
        <h4 className="home-role">Junior Full Stack Web Developer</h4>
      </div>      
      <div className="info-container">
        <p className="about-info">I am a software development student at the Manitoba Institute of Trades and Technology</p>
      </div>
      <Link to="/projects">
        <div className="projects-button">View Projects</div>
      </Link>
    </div>
  );
}
 
export default Home;