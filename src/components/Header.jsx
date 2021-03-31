import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="name">Elizabeth Hellsten</div>
        <ul>
          <li className="nav-item">Home</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item"><a href="https://github.com/elizabethh34">GitHub</a></li>
        </ul>
      </div>      
    </nav>   
  );
}
 
export default Header;