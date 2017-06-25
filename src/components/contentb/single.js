import React,{Component} from "react"


export default class Single extends Component{
	render(){
          const {item}=this.props;
		return <div className="single-contentb">
		<div className="single-contentb-left">
         <img src={item.src} alt={item.alt} />
		</div>
         <div className="single-contentb-right">
            <h4>{item.title}</h4>
            <a>{item.href}</a>
            <p>{item.artcle}</p>
         </div>    
             


		</div>
	}
}