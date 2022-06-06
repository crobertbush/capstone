import React, { Component } from 'react';
import Video from '../components/ohio.mp4'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <video autoPlay loop muted>
          <source src={Video} type='video/mp4'/>
        </video>
        <h1>About Cincinnati</h1>
        <div className="row">

        <div className="col-4 logo"></div>
        <div className="text-center col-4 justify-content-center">

        <p className='history'>Cincinnati is in southwest ohio. 
        It was founded in 1788, Cincinnati has a population of 302,687 people. 
        In 1820s cincinnati was named the Queen Of The West. 
        Cincinnati is most known for it's food, colleges and universities, beer, and having the first mlb team.
         We have the best hospitals, parks, museums, and culture.</p>
        </div>
         <div className="col-4 logo"></div>
        </div>

<div class="footer">
  <p>This is the footer</p>
</div>
</div>
    )
  }
}