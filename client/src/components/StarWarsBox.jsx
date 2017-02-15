var React = require("react");
var Characters = require("./Characters");


var StarWarsBox = React.createClass({
  getInitialState: function(){
    return {characters: []};
  },

  componentDidMount: function(){
    var url = "http://swapi.co/api/people/";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload= function(){
      if (request.status === 200){
        var data = JSON.parse(request.responseText);
        console.log(data);
        this.setState({characters: data.results});
      }
    }.bind(this);
    request.send();
  },

  render: function(){
    return (
      <div className = "star-wars-box">
      <h1>Star Wars Characters</h1>
      <Characters characters = {this.state.characters}/>
      </div>
      );
  }
});

module.exports = StarWarsBox;