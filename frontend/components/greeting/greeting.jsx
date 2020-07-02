import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (<>
    <nav className="login-signup">
        <ul className="navbar-ul">
        <li className="navbar-li-1"><Link to="/signup" ><button type="button" className="navbar-button">Get Started</button></Link></li>
        <li className="navbar-li"><Link to="/login" style={{ textDecoration: 'none' }}>Sign In</Link></li>
        <h2><li className="navbar-li-logo"><Link to="/">Curbside</Link></li></h2>
      </ul>
    </nav>
    </>
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