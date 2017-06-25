import React,{Component} from "react"
import btn_1 from "./../../images/btn_acs.png"
import btn_2 from "./../../images/btn_tel.png"
import btn_3 from "./../../images/btn_store.png"

export default class Sidenav extends Component{
  render(){

  	return <div className="sidenav">
	    <ul>
          <li><img src={btn_1} alt="img1" /></li>
          <li><img src={btn_2} alt="img2" /></li>
          <li><img src={btn_3} alt="img3" /></li>



	    </ul>

  	</div>

  
  }


}