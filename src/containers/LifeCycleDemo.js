// Class comp can have lifecycle hooks
// React v 16.8+ enables fn comp to have life cycle hook equivalents 
import React, { Component } from 'react';

class LifeCycleDemo extends Component {

  constructor( props ){ // receive props from parent comp
    super(props);
    console.log('1. [Inside Constructor]');
  }

  componentDidMount(){
    console.log('3. [Inside componentDidMount]');
    // this will be called after the rendering is over
    // will be called once the comp comes into the view
    // This is the ideal place for you to send ajax calls
  }

  componentWillUnmount(){
    // will be called when the comp is going out of the view
    // ideal place -- clear intervals, timeouts, remove unneccessary data
    console.log('4. [Inside componentWillUnmount...]');
  }

  render() {
    console.log('2. [Inside render]');
    return (
      <div>
        <h2>LifeCycle Hooks Demo -- Refer console.logs</h2>
        <p>{this.props.feature}</p>
      </div>
    )
  }
}

export default LifeCycleDemo;