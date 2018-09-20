var React=require('react');
var Player=require('./player.jsx');
require('./playerlist.css');
var mas=[
	{
		photo:"public/img/17.jpg",
		name:"Голодюк Олег",
		number:17
	},
	{
		photo:"public/img/19.jpg",
		name:"Мемешев Редван",
		number:19
	},
	{
		photo:"public/img/21.jpg",
		name:"Гладкий Олександр",
		number:21
	},
	{
		photo:"public/img/33.jpg",
		name:"Мякушко Сергій",
		number:33
	},
	{
		photo:"public/img/35.jpg",
		name:"Швед Мар'ян",
		number:35
	},
	{
		photo:"public/img/4.jpg",
		name:"Перрейра Федеріко",
		number:4
	},
	{
		photo:"public/img/5.jpg",
		name:"Нестеров Андрій",
		number:5
	},
	{
		photo:"public/img/7.jpg",
		name:"Ксьонз Павло",
		number:7
	},
	{
		photo:"public/img/9.jpg",
		name:"Гуцуляк Олексій",
		number:9
	},
	{
		photo:"public/img/93.jpg",
		name:"Дебелко Роман",
		number:93
	}
	]
class PlayerList extends React.Component{
    constructor(props){
        super(props);
        this.state={list:mas};
        this.handler=this.handler.bind(this);
    }
    eachlist(item,i){
        return(
        <Player key={i} index={i}
        photo={item.photo} 
        name={item.name} 
        number={item.number}/>
        )
    }
    handler(event){
        var text=event.target.value;
        var search=mas.filter(function(item){
            var name=item.name.toLowerCase();
            var pos=name.indexOf(text.toLowerCase());
            return pos!=-1;
        })
        this.setState({list:search});
    }
    render(){
        var list=this.state.list;
        return(
            <div className="list">
            <input className="inp" onChange={this.handler}/> 
            <ul>
                {
                    list.map(this.eachlist)
                }
            </ul>
            </div>
        )
    }
}
module.exports=PlayerList;