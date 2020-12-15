import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Before Submitting....');
    // 1. Read the form data from input fields
    console.log(this.nameInput.value );
    console.log(this.emailInput.value );
    console.log(this.phoneInput.value );
    
    const formData = {
      name: this.nameInput.value,
      email: this.emailInput.value,
      phone: this.phoneInput.value
    }
    // 2. submit the above data to the rest api backend.
    // What's the REST API Endpoint? http://jsonplaceholder.typicode.com/users
    // What's the HTTP Method? POST 
    // What's the REST Api client tool? // npm i axios
    axios.post('http://jsonplaceholder.typicode.com/users', formData)
      .then( (res) => {
        console.log(res);
        alert('Saved Successfully!');
      })
      .catch( (err)=> {
        console.log(err);
      })
      .finally( ()=> {
        console.log('It is over!');
      });
  }

 
  render() {
    return (
      <div>
        <h2>Contact Form | Form Submission and AJAX</h2>
        <form className='text-left col-md-6' onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputName1">Name</label>
            <input type="text" className="form-control" 
              id="exampleInputName1" ref={ (inputEl) => { this.nameInput = inputEl } }/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" 
              id="exampleInputEmail1" ref={ (inputEl) => { this.emailInput = inputEl } }/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPhone1">Phone</label>
            <input type="text" className="form-control" 
              id="exampleInputPhone1" ref={ (inputEl) => { this.phoneInput = inputEl } }/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default ContactForm;