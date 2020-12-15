import React from 'react';
import Menu from './Menu';

// Functional Comp with Anonymous Fn
const Footer = function(){
  const year = 2020; 

  return(
    <div>
      <hr />
      <Menu />
      <p>Copyright {year} | Arun</p>
    </div>
  )
}

export default Footer;