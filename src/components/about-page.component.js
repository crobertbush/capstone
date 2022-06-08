import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Group from './img/group.jpg'
export default class AboutPage extends Component {
  render() {
    return (

      <Card className="bg-dark text-white">
      <Card.Img src={Group} alt="Card image" className='img-fluid'/>
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        Cincinnati has many different fun family activities and also many adult festivities for those interested in the nightlife of downtown Cincinnati, making it one of the best tourism spots in the Ohio. If you are looking for a fun weekend getaway,
        or if you are new to the city then this is the website for you, the queen city awaits!
        </Card.Text>
        <Card.Text>Fun fact: The city of Cincinnati became known as “The Queen of the West” as its population grew in the late 18th Century with Americans pushing westward along the Ohio Valley.</Card.Text>
      </Card.ImgOverlay>
    </Card>

    )
  }
}