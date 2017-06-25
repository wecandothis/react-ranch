import React,{Component} from "react"
import Single from "./single"
import "./content.css"
import title14 from "./../../images/title_14.png"
import c1 from "./../../images/c1.png"
import c2 from "./../../images/c2.png"
import c3 from "./../../images/c3.png"
import c4 from "./../../images/c4.png"
import c5 from "./../../images/c5.png"
import na10 from "./../../images/na10.png"
import btn1 from "./../../images/btn_01_off.png"
import btn2 from "./../../images/btn_01_on.png"
import btn3 from "./../../images/btn_02_off.png"
import btn4 from "./../../images/btn_02_on.png"
import btn5 from "./../../images/btn_03_off.png"
import btn6 from "./../../images/btn_03_on.png"
import btn7 from "./../../images/btn_04_off.png"
import btn8 from "./../../images/btn_04_on.png"
import btn9 from "./../../images/btn_05_off.png"
import btn10 from "./../../images/btn_05_on.png"
import btn11 from "./../../images/btn_06_off.png"
import btn12 from "./../../images/btn_06_on.png"
import btn13 from "./../../images/btn_07_off.png"
import btn14 from "./../../images/btn_07_on.png"
import btn15 from "./../../images/btn_08_off.png"
import btn16 from "./../../images/btn_08_on.png"
import top1 from "./../../images/img_top01.png"
import top2 from "./../../images/img_top02.png"
import top3 from "./../../images/img_top03.png"
import top4 from "./../../images/img_top04.png"
import top5 from "./../../images/img_top05.png"

const items=[
{src:btn1,src1:btn2,alt:"1"},
{src:top1,src1:top1,alt:"2"},
{src:btn3,src1:btn4,alt:"3"},
{src:btn5,src1:btn6,alt:"4"},
{src:top2,src1:top2,alt:"5"},
{src:btn7,src1:btn8,alt:"6"},
{src:top3,src1:top3,alt:"7"},
{src:btn9,src1:btn10,alt:"8"},
{src:top4,src1:top4,alt:"9"},
{src:btn11,src1:btn12,alt:"10"},
{src:btn13,src1:btn14,alt:"11"},
{src:top5,src1:top5,alt:"12"},
{src:btn15,src1:btn16,alt:"13"}


]
export default class Contenta extends Component{
changein(){
	console.log("123")
}
	render(){
		return <div className="contenta">
         <div className="row-contenta"></div>
         <div className="contain-contenta">
      <img src={title14} alt="title" className="title14-img" />         
          <img src={c2} alt="c2" />
          <img src={c3} alt="c3" />
          <img src={c1} alt="c1" />
          <img src={c4} alt="c4" />
          <img src={c5} alt="c5" />
          <img src={na10} alt="na10"/>
          <img src={c1} alt="c1" />   
       {items.map((item,index)=><Single item={item} key={index} change={this.changein.bind(this)} />)}

             <button></button>

         </div>
          



		</div>
	}
}