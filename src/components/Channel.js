import React from 'react';

const Channel = (props) => {

  console.log(props);

  return (
    <div className="col-md-3">
      <div className="card">
        <img src={props.imagePath} className='card-img-top' alt='Channel Logo'/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
          <p className="card-text">{props.children}</p>
          <button type='button' className='btn btn-primary' onClick={props.addToFav}>Add to Fav</button>
        </div>
      </div>
    </div>
  )
}

export default Channel;
