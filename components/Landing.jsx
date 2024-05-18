import React from 'react';
import './Landing.css'; 
import { useHistory } from 'react-router-dom';

const Landing = () => {
  const history = useHistory();

    const handleSignUpClick = () => {
        history.push("/signlog");
    };
  return (
    
    // <div className="landing-container">
    //   <nav className="navbar">
    //     <div className="navbar-brand">Your Website</div>
    //     <ul className="nav-items">
    //       <li className="nav-item">Home</li>
    //       <li className="nav-item">About Us</li>
    //       <li className="nav-item">Contact Us</li>
    //       <li className="nav-item">Login/Signup</li>
    //     </ul>
    //   </nav>
    <div className='land'>
    <div className="landing-container">
  <nav className="navbar">
    <div className="navbar-brand">Safenet</div>
    <ul className="nav-items">
      <li className="nav-item">Home</li>
      <li className="nav-item">About Us</li>
      <li className="nav-item">Contact Us</li>
      <li className="nav-item" onClick={handleSignUpClick}>Login/Signup</li>
    </ul>
  </nav>
      <header className="header">
        <div className="news-card">
          Latest News:
          {/* Add your news content here */}
        </div>
      </header>
      <footer className="footer">
        <marquee direction="left">Alert! Cyber crooks are lurking in the shadows, ready to snatch your digital identity. Safeguard your data fortress with the shield of awareness. Stay savvy, stay secure, for your digital safety is paramount in the cyber wilderness.</marquee>
      </footer>
    </div>
    </div>
  );
};

export default Landing;
