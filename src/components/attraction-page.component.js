import React, { Component } from 'react';
import axios from 'axios';

//Attractions
const Attraction = (props) => {
  return (
    
      
        <div className="card mb-4 mt-4 m-auto" style={cardStyles.container}>
          <img className="card-img-top img-fluid" style={cardStyles.image} src={props.attraction.imageUrl} alt="img" />
          <div className="card-title" style={cardStyles.title}>{props.attraction.name}</div>
          <p className="card-body" style={cardStyles.p}>{props.attraction.description}</p>
          <a className="btn btn-dark" href={props.attraction.website}>Visit Website</a>
        </div>
      
    
  )
}

//Card Styles
const cardStyles = {

  container: {
    border: "transparent, 1px",
    maxWidth: "30em",
    backgroundColor: "white",
    borderColor: "black",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
  },

  p: {
    backgroundColor: "white",
    textAlign: "center",
    alignItems: "center"
  },

  image: {
    width: "100%",
    height: "500px"
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
      }).catch((error) => {
        console.log(error)
      });
  }

  attractionList() {
    return this.state.attractions.map((currentAttraction) => {
      return <Attraction attraction={currentAttraction} key={currentAttraction._id} />
    })
  }

  render() {
    return (
      this.state.loading === false ?
        <div className="container-fluid">
          <div className="row">

            <div className="d-flex flex-wrap">{this.attractionList()}</div>
          </div>
        </div>
        :
        <h1>Loading....</h1>

    );
  }
}