var React = require ("react");


var Characters = React.createClass({
  render: function(){
    var characterNodes = this.props.characters.map(function(character, index){
      return (
        
        <div className = "character" key={index}>
          <h1>{character.name}</h1>
        </div>

        );
    });

    return(
      <div className = "characters">
      {characterNodes}
      
      </div>
      );
  }
});

module.exports = Characters;