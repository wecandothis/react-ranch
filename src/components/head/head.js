import React,{Component} from "react"
import Carousel from "./carousel"
import Headli from "./head-li"
import Sidenav from "./sidenav"
import no1 from "./../../images/no1.jpg"
import no2 from "./../../images/no2.jpg"
import no3 from "./../../images/no3.jpg"

import "./head.css"

const items=[
{urll:no1,title:"this is demo",index:0},
{urll:no2,title:"this is demo",index:1},
{urll:no3,title:"this is demo",index:2}
]

export default class Head extends Component{
	constructor(props){
		super(props);
		this.state={
			nowlocal:0
		}
	}
	goplay(){
       this.timer=setInterval(()=>{this.trun(1)},2000)  

	}
	pause(){
		clearInterval(this.timer)
	}
	trun(n){
		let prenum=this.state.nowlocal-n;
		if(prenum<-2){
			prenum=0
		}
		this.setState({nowlocal:prenum})
	}
	componentDidMount(){

		this.goplay()
	}
	render(){

        return (<div className="contain">
        	<Sidenav />
            {items.map((item,index)=><Carousel item={item} key={index} nowlocal={this.state.nowlocal} pause={this.pause.bind(this)} goplay={this.goplay.bind(this)}  />)} 

            
            <Headli />
        	</div>)


	}
}