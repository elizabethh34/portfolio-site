import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <div className="name">Elizabeth Hellsten</div>
        </Link>        
        <ul>
          <Link to="/">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/projects">
            <li className="nav-item">Projects</li>
          </Link>
          <li className="nav-item"><a href="https://github.com/elizabethh34">GitHub</a></li>
        </ul>
      </div>      
    </nav>   
  );
}
 
export default Header;