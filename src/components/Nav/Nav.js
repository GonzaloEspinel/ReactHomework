import React from "react";
import "./nav.css";


const Nav = (props) => (

  <nav className="nav nav-pills nav-fill navbar">
   <li className="nav-item">
    <a className="nav-link title" href="/">Clicking Memory Game!</a>
  </li>
  <li className="nav-item">
     {props.text} 
  </li>
  <li className="nav-item">
    Score:   {props.count}   |   Top Score:   {props.topScore}
  </li>
   </nav>
);

export default Nav;
