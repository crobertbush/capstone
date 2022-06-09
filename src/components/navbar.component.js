import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
        <Link to="/" className="navbar-brand m-auto" style={{color: 'white', fontSize: '40px'}}>All About Cincy!</Link>
        <div className="collpase navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="navbar-item">
          <Link to="/" className="nav-link m-auto" style={{color: 'white', fontSize: '40px'}}>Home |</Link>
          </li>
          <li className="navbar-item">
          <Link to="/about" className="nav-link m-auto" style={{color: 'white', fontSize: '40px'}}>About |</Link>
          </li>
          <li className="navbar-item">
          <Link to="/attractions" className="nav-link m-auto" style={{color: 'white', fontSize: '40px'}}>Attractions |</Link>
          </li>
          <li className="navbar-item">
          <Link to="/contact" className="nav-link m-auto" style={{color: 'white', fontSize: '40px'}}>Contact</Link>
          </li> 
        </ul>
        </div>
      </nav>

    );
  }
}

const styles = {
  navbar: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: '100px',
  }
}