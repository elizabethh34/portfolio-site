import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="home-container">
        <div className="name-container">
          <h1 className="home-name">Elizabeth Hellsten</h1>
          <h4 className="home-role">Junior Full Stack Web Developer</h4>
        </div>      
        <div className="info-container">
          <p className="about-info">I am Elizabeth Hellsten. I am currently a software development student at the Manitoba Institute of Trades and Technology. I have always been interested in technology, and during the pandemic my interest increased as I saw how tech became so important in our everyday lives. Whether it is working from home, shopping, entertainment, or socializing with friends, our whole lives have increasingly come to rely on technology. I love the idea that I can help to create tools that enable people to connect with each other, and make daily life easier. </p>
          <p className="about-info">Having learned the fundamentals of both front and back end development at MITT, I am excited to continue to learn new technologies and see all the possibilities.</p>
        </div>
        <Link to="/projects">
          <div className="projects-button about">View Projects<i className="fas fa-arrow-right"></i></div>
        </Link>
      </div>
  );
}
 
export default About;