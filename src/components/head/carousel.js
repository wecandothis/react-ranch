import React,{Component} from "react"

export default class Carousel extends Component{

pause(){
	this.props.pause()
}
goplay(){
	this.props.goplay()
}
    render(){ 	
    	const {item,nowlocal}=this.props;
    	let canshow=item.index+nowlocal===0;
    	let num=canshow?1:0;
    	let numm=canshow?3:1

    	const style={"backgroundImage":`url(${item.urll})`,"opacity":num,"zIndex":numm}
    	return (<div className="carousel-div" style={style} onMouseOver={this.pause.bind(this)} onMouseOut={this.goplay.bind(this)} >
               <h2>{this.props.item.title}</h2>
                

    		</div>)

    }


}