import React, { Component } from 'react'

class TrendingShows extends Component {

  constructor(){
    super();
    this.state = {
      showsList: [
        { id: 1, name: 'Planet Earth', host: 'David Attenborough', isInWatchlist: false },
        { id: 2, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchlist: false },
        { id: 3, name: 'Ind Vs Aus Test #1', host: 'Gavaskar', isInWatchlist: false },
        { id: 4, name: 'Planet Earth 2', host: 'David Attenborough', isInWatchlist: false }
      ],
      showsCount: 5
    }

  }

  handleAddToWatchlist = () => {

    this.setState({
      showsList: [
        { id: 1, name: 'Planet Earth', host: 'David Attenborough', isInWatchlist: true },
        { id: 2, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchlist: false },
        { id: 3, name: 'Ind Vs Aus Test #1', host: 'Gavaskar', isInWatchlist: false },
        { id: 4, name: 'Planet Earth 2', host: 'David Attenborough', isInWatchlist: false }
      ]
    })
  }

  render() {

    // ideal place for you to loop
    // ideal place for the comp specific tranformations in JSX 
    // never change the state within render
    
    let shows = null;
    if(this.state.showsList && this.state.showsList.length > 0){
      shows = this.state.showsList.map( (show, index) => {
        return(
          <li className="list-group-item" key={show.id}>
            #{show.id}. {show.name} - hosted by {show.host}
            <button type="button" 
            className={ `btn btn-sm float-right ${ show.isInWatchlist? 'btn-success': 'btn-warning'}` }
            onClick={this.handleAddToWatchlist}>
              {show.isInWatchlist? 'In Watchlist': 'Add to Watchlist'}
            </button>
          </li>
        )
      });
    }

    return (
      <div>
        <h2>Trending Shows | Lists and Keys Demo</h2>
        <p>The Top {this.state.showsCount} Trending Shows</p>
        <div className="card text-left">
          <ul className="list-group list-group-flush">
            {  /* conditionals */ }
            
            {
              (shows && shows.length > 0)?
                shows
                :
                <div className='alert alert-danger'>No Trending Shows Found</div>
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default TrendingShows;