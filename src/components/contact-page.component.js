import React, { Component } from 'react';
import axios from 'axios';


export default class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      body: ''
    }
  }  
  
  componentDidMount() {
    this.setState({
      email: '',
      body: ''
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeBody(e) {
    this.setState({
      body: e.target.value
    });
  }
  
  onSubmit(e) {
    e.preventDefault();

    const email = {
      email: this.state.email,
      body: this.state.body
    };

    console.log(email);

    axios.post('http://localhost:5000/emails/add', email)
    .then(res => console.log(res.data));

  }
  
  render() {
    return (
      
  <div className="mb-5 mt-5">       
       
      <div className="container">
        
        <h1 style={styles.title}>Contact Us</h1>
      
        <form method="post" action="/" style={styles.form} onSubmit={this.onSubmit}>

          <div className="form-group">
            <label> Your Email Address</label>
            <input type="email" className="form-control" placeholder="email@example.com" name="email" value={this.state.email} onChange={this.onChangeEmail} required></input>
          </div>
  
          <div className="form-group">
            <label>Email Content</label>
            <textarea className="form-control" rows="12" name="body" value={this.state.body} onChange={this.onChangeBody} required></textarea>
          </div> 
          
          <input className="btn btn-dark mt-2" type='submit' value='send' />
        
        </form>
      
      </div>

      <div>
        <h2 style={styles.number}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
        </svg> (555)555-5555</h2>
      </div>
      
  </div> 
    )
  }
}

const styles = {
  number: {
    textAlign: "center",
    marginTop: "1em"
  },
  title: {
    textAlign: "center",
    marginBottom: "1em",
    color: "white"
  },
  form: {
    maxWidth: "600px",
    margin: "auto"
  }
}