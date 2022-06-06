import React, { Component } from 'react';
import axios from 'axios';
import { name } from 'ejs';

//Attractions
const Attraction = (props)=> {
  return (
    <div className="row">
      <div className="container mb-4 col-md-12 col-lg-6" style={cardStyles.container}>
        <div className="card-title" style={cardStyles.title}>{props.attraction.name}</div>
        <img className="card-img-top" style={cardStyles.image} src={props.attraction.imageUrl} alt="" />
        <p className="card-text">{props.attraction.description}</p>
        <a className="btn btn-primary" href={props.attraction.website}>Visit Website</a>
      </div>
    </div>
  )
}

//Card Styles
const cardStyles = {

container: {
  maxWidth: "40em"
},

image: {
  width: "100%",
  height: "400px",
},

title: {
  fontSize: "2em",
  textAlign: "center"
}
};



export default class Attractions extends Component {
  constructor(props) {  
    super(props)
   this.state = {
     attractions: [],
     loading: true
  };  
  }

  componentDidMount() {
      axios.get('http://localhost:5000/attractions')
      .then(response => {
        this.setState({
          attractions: response.data,
          loading: false
        })
        console.log('heres the list of attractions')
      }).catch((error)=> {
        console.log(error)
      });
  }

  attractionList(){
    return this.state.attractions.map((currentAttraction) => {
      return <Attraction attraction={currentAttraction} key={currentAttraction._id}/>
    })
  }

  render() {
    return (
      this.state.loading === false ? 
        <div className="">{this.attractionList()}</div>
       : 
        <h1>Loading....</h1>
      
    );
  }
}