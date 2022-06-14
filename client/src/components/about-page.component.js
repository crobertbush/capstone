import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Group from './img/us.jpg'
export default class AboutPage extends Component {
  render() {
    return (

      <Card className="bg-dark text-white">

      <Card.Img src={Group} alt="Card image" className='img-fluid'/>
      
      <Card.ImgOverlay>

        <Card.Title>What We Are About</Card.Title>

        <Card.Text>
        Here at "All About Cincy!", we are here to help you have the time of your life while your in Cincinnati. 
        You will enjoy many different activities such as parks, zoos, museums, and the very close Newport aquarium
        
        for some family fun. For those interested in the nightlife of downtown Cincinnati you will be in for a real 
        treat we have an eclectic asortment of clubs, bars and speakeasy's, making Cincinnati a must visit location
        while you're in Ohio. If you are looking for a fun weekend getaway,or if you are new to
        the city then this is the website for you, the queen city awaits!
        </Card.Text>

      <Card.Text>

      </Card.Text>

        <Card.Text>Fun fact: The city of Cincinnati became known as “The Queen of the West” as its population grew in the late
         18th Century with Americans pushing westward along the Ohio Valley.</Card.Text>
     
      </Card.ImgOverlay>
    </Card>

    )
  }
}