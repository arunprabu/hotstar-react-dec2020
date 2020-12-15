import React, { Component } from 'react';
import Program from '../components/Program';

// Class Component
class ProgramList extends Component{
 
  render(){
    // should return JSX
    return(
      <div>
        <h2>Program List | Props Demo and Event Demo</h2>
        
        <Program 
          title='Man Vs Wild' 
          category='Infotainment' 
          time='8PM'>
          Wild Adventure Program by Bear Grylls in Discovery Channel
        </Program>

        <Program 
          title='Ind Vs Aus Test #1' 
          category='Sports' 
          time='9AM' >
          Boxing Day Test of 2020
        </Program>

        <Program 
          title='Ind Vs Aus Test #2' 
          category='Sports' 
          time='9AM' >
          First Test of 2021
        </Program>

      </div>
    )
  }
}

export default ProgramList;