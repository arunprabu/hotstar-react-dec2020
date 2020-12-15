import React from 'react';

const Program = (props) => { // receiving props from parent comp

  // props - an Object
  // props are read-only
  // props can have children
  // recommended name to receive props is 'props'
  console.log(props);

  // Event Handler with Arrow Function - 
  // event object is baked by react - on synthetic event onClick
  const handleWatchThis = (event) => {
    console.log(event);
    event.target.innerText = 'Watching...';
  }

  return (
    <div className="card text-left mb-2">
      <div className="card-header">
        Featured
        <span className="badge badge-pill badge-warning float-right">
          {props.category}
        </span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.children}</p>
        <button className="btn btn-primary" onClick={handleWatchThis}>Watch this...</button>
      </div>
      <div className="card-footer">
        {props.time}
      </div>
    </div>
  )
}

export default Program;
