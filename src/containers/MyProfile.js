import React, { Component } from 'react'

class MyProfile extends Component {

  state = {
    userName: 'arun',
    accountCreated: '10/Dec/2020'
  }

  handleUserNameChange = (event) =>{
    console.log(event.target.value);
    this.setState({
      userName: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>My Profile | Two Way Binding</h2>
        <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}/>
        <p>Username is: {this.state.userName}</p>
        <p>Account Created on: {this.state.accountCreated}</p>
      </div>
    )
  }
}

export default MyProfile;