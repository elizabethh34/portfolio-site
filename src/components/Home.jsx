import React from 'react';
import { Link } from 'react-router-dom';
import home from '../images/home.jpg';

const Home = () => {
  return (
    <div className="home-image" style={{ backgroundImage: `linear-gradient(to top, rgba(138, 209, 231, 0.4), rgba(8, 40, 49, 0.9)), url(${home})` }}>
      <div className="home-container">
        <div className="name-container">
          <h1 className="home-name">Elizabeth Hellsten</h1>
          <h4 className="home-role">Junior Full Stack Web Developer</h4>
        </div>      
        <div className="info-container">
          <p className="about-info">I am a software development student at the Manitoba Institute of Trades and Technology. I look forward to continuing to expand my knowledge and skills on web development.</p>
        </div>
        <Link to="/projects">
          <div className="projects-button">View Projects</div>
        </Link>
      </div>
    </div>
  );
}
 
export default Home;