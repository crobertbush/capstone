import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg  ">
        <Link to="/" className="navbar-brand">All About Cincy!</Link>
        <div className="collpase navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="navbar-item">
          <Link to="/attractions" className="nav-link">Attractions</Link>
          </li>
          <li className="navbar-item">
          <Link to="/contact" className="nav-link">Contact</Link>
          </li> 
        </ul>
        </div>
      </nav>

    );
  }
}