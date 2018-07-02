import React from "react";


// By extending the React.Component class, Counter inherits functionality from it

const Counter = props => (

      <p>Score : {props.cont} | Top Score : {props.topScore}</p>
  
);


export default Counter;
