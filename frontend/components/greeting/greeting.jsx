import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
        <ul className="navbar-ul">
        <li className="navbar-li"><Link to="/login">Sign In</Link></li>
        <li className="navbar-li"><Link to="/signup">Get Started</Link></li>
      </ul>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  ); 
  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;