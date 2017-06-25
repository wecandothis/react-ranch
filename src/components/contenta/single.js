import React,{Component} from "react"


export default class Single extends Component{
    constructor(props){
    	super(props);
    	this.state={
    		on:true
    	}
    }
    changeon(){
        this.setState({
        	on:false
        })
    }
    changeoff(){
    	 this.setState({
        	on:true
        })
    }
   
	render(){
            const {item}=this.props;
            let src=this.state.on?item.src:item.src1;

           return <img src={src} alt={item.alt} onMouseOver={this.changeon.bind(this)} onMouseOut={this.changeoff.bind(this)} />


	}
}