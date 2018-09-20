var React=require('React');
require('./player.css');
class Player extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <li className="li">
            <div className="contact">
                <img className="photo" src={this.props.photo} alt="photo"/>
                <div className="name">{this.props.name}</div>
                <div className="number">{this.props.number}</div>
            </div>
        </li>
        )
    }
}
module.exports=Player;