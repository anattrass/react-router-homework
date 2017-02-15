import React from 'react';
var StarWarsBox = require("./StarWarsBox.jsx");
import {Link} from 'react-router';


class Home extends React.Component{
  render(){
    return(
      <div>
        <h4> Home </h4>
        <p> Home Page </p>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/Characters">Characters</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Home;