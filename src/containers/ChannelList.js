import React, { Component } from 'react';
import Channel from '../components/Channel';

// Class comp can have states 
// After react v 16.8 - functional comp can also have states
class ChannelList extends Component {

  // we can have data within comp -in state
  // state can be updated using setState()
  // setState() will result in re-rendering the comp and child comp tree also.
  // changing the state is okay in a simple react app.
  // but not okay in an enterprise app.
  // changing the state will result in unwanted behaviours in child comp tree.
  // changing the state will merge with existing state properties
  state = {
    tvChannelList: [
      {
        name: 'Start Sports', category: 'Sports', desc: '#1 Sports Channel', imageURL: 'https://via.placeholder.com/280x160'
      },
      {
        name: 'Discovery', category: 'Infotainment', desc: '#1 Infotainment Channel', imageURL: 'https://via.placeholder.com/280x160'
      },
      {
        name: 'NatGeo', category: 'Infotainment', desc: 'Best Infotainment Channel', imageURL: 'https://via.placeholder.com/280x160'
      }
    ],
    totalTVChannels: 3
  }

  // event handler method -- arrow fn will give you 'this' keyword - Recommended
  handleChannelNameChange = (event) => {
    console.log(this); 
    // use setState to modify the state
    this.setState({
      tvChannelList: [
        {
          name: 'Start Sports 1', category: 'Sports', desc: '#1 Sports Channel', imageURL: 'https://via.placeholder.com/280x160'
        },
        {
          name: 'Discovery', category: 'Infotainment', desc: '#1 Infotainment Channel', imageURL: 'https://via.placeholder.com/280x160'
        },
        {
          name: 'NatGeo', category: 'Infotainment', desc: 'Best Infotainment Channel', imageURL: 'https://via.placeholder.com/280x160'
        }
      ]
    });
  }

  render() {
    console.log('Inside Render');

    return (
      <div>
        <h2>Channel List | States Demo</h2>
        <p>Total TV Channels: {this.state.totalTVChannels}</p>
        <div className='row'>
          <Channel
            name={this.state.tvChannelList[0].name}
            category={this.state.tvChannelList[0].category}
            imagePath={this.state.tvChannelList[0].imageURL}>
            {this.state.tvChannelList[0].desc}
          </Channel>

          <Channel
            name={this.state.tvChannelList[1].name}
            category={this.state.tvChannelList[1].category}
            imagePath={this.state.tvChannelList[1].imageURL}>
            {this.state.tvChannelList[1].desc}
          </Channel>

          <Channel
            name={this.state.tvChannelList[2].name}
            category={this.state.tvChannelList[2].category}
            imagePath={this.state.tvChannelList[2].imageURL}>
            {this.state.tvChannelList[2].desc}
          </Channel>

        </div>
        
        <button type='button' className='btn btn-danger' onClick={this.handleChannelNameChange}>Change Channel Name</button>
      </div>
    )
  }
}

export default ChannelList;
