import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import LandingPage from './components/landing-page.component';
import AboutPage from './components/about-page.component';
import Attractions from './components/attraction-page.component';
import ContactPage from './components/contact-page.component';

function App() {
  return (
    <Router>
      <Navbar />
        <br/>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/attractions" component={Attractions} />
        <Route path="/contact" component={ContactPage} />
    </Router>
  );
}

export default App;
