import React, { Component } from 'react';


export default class ContactPage extends Component {
  render() {
    return (
  <div className="m-5">       

      <form>
      <div className="form-group">
      <label> Your Email Address</label>
      <input type="email" className="form-control" placeholder="email@example.com"></input>
      </div>
      <div className="form-group">
      <label>Subject</label>
      <select className="form-control">
          <option>Question</option>
          <option>Suggestion</option>
          <option>Review</option>
      </select>                   
      </div>
  
      <div className="form-group">
      <label>Email Content</label>
      <textarea className="form-control" rows="12"></textarea>
      <div className="btn btn-primary mt-2">Send</div>
      </div>  
      </form>


      <div>
        <h2 style={styles.number}>Telephone: (513)555-5555</h2>
      </div>
      
  </div> 
    )
  }
}

const styles = {
  number: {
    textAlign: "center",
  }
}