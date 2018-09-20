var React=require('react');
var ReactDOM=require('react-dom');
require('./components/app.css');
var PlayerList=require('./components/playerlist.jsx');
ReactDOM.render(
    <PlayerList/>,
    document.getElementById("app")
)