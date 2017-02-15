var React = require("react");
var ReactDOM = require("react-dom");
var StarWarsBox = require("./components/StarWarsBox.jsx");
var Characters = require("./components/Characters.jsx");
var Home = require("./components/Home.jsx");
import {Router, Route, IndexRoute, hashHistory} from 'react-router';



window.onload = function () {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={StarWarsBox} />
        <Route path="Home" component={Home} />
        <Route path="Characters" component={StarWarsBox} />
      </Route>
    </Router>,
    document.getElementById("app")
  );
}
