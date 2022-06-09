import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar} fixed='top'>
        <Link to="/" className="navbar-brand" style={{color: 'white', fontSize: '40px'}}>All About Cincy!</Link>
        <div className="navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="navbar-item">
            <Link to="/" className="nav-link" style={{color: 'white', fontSize: '30px'}}>Home</Link>
            </li>
            <li className="navbar-item">
            <Link to="/about" className="nav-link" style={{color: 'white', fontSize: '30px'}}>About</Link>
            </li>
            <li className="navbar-item">
            <Link to="/attractions" className="nav-link" style={{color: 'white', fontSize: '30px'}}>Attractions</Link>
            </li>
            <li className="navbar-item">
            <Link to="/contact" className="nav-link" style={{color: 'white', fontSize: '30px'}}>Contact</Link>
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
  }
}