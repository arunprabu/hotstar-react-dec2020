import React, { Fragment } from 'react';
import Menu from './Menu';

// Functional Comp with Anonymous Fn
const Footer = function(){
  const year = 2020; 

  return(
    <Fragment>
      <hr />
      <Menu />
      <p>Copyright {year} | Arun</p>
    </Fragment>
  )
}

export default Footer;