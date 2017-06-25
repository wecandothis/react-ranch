import React,{Component} from "react"
import "./content.css"
import Single from "./single"
import img1 from "./../../images/img001.jpg"
import img2 from "./../../images/img002.jpg"
import img3 from "./../../images/img003.jpg"
import img4 from "./../../images/img004.jpg"
import img5 from "./../../images/img005.jpg"
import img6 from "./../../images/img006.jpg"
import title11 from "./../../images/title_blog.png"
import title12 from "./../../images/title_impress.png"
import title13 from "./../../images/com_blog.png"
import title14 from "./../../images/com_impress.png"
import bgimg from "./../../images/no4.png"
import green1 from "./../../images/green1.png"
import green2 from "./../../images/green2.png"
import green3 from "./../../images/green3.png"
import green4 from "./../../images/green4.png"
import green5 from "./../../images/green5.png"
import green6 from "./../../images/green6.png"
import logofoot from "./../../images/logo_foot.png"
import pagtop from "./../../images/btn_pagetop.png"

const itema=[
{src:img1,alt:"img1",title:"2017.2.1",href:"aaaa",artcle:"aaaaaaaaaaa"},
{src:img2,alt:"img2",title:"2015.5.1",href:"bbbb",artcle:"aaaaaaadafsgsgsfaaaa"},
{src:img3,alt:"img3",title:"2016.2.10",href:"bbb",artcle:"aaaaaagdgsgsfsfaaaaa"}];
const itemb=[
{src:img4,alt:"img4",title:"2017.2.1",href:"aaaa",artcle:"aaaaaaaaaaa"},
{src:img5,alt:"img5",title:"2015.5.1",href:"bbbb",artcle:"aaaaaaadafsgsgsfaaaa"},
{src:img6,alt:"img6",title:"2016.2.10",href:"bbb",artcle:"aaaaaagdgsgsfsfaaaaa"}
]

export default class Contentb extends Component{

render(){
	return <div className="contentb">
             <div className="left-contentb">
                <div className="contentb-head-left">
                   <img className="left-contentb-first" src={title11} alt="title11"/>
                   <img className="left-contentb-second" src={title13} alt="title13"/>
                </div>
                <div className="contentb-contain-left">
                  <div className="contentb-absolute">
                  {itema.map((item,index)=><Single item={item} key={index} />)}
                  <button>add</button>
                  </div>
                

                </div>                      
             </div>

             <div className="right-contentb">
                <div className="contentb-head-right">
                   <img className="right-contentb-first" src={title12} alt="title12"/>
                   <img className="right-contentb-second" src={title14} alt="title14"/>
               </div>
                 <div className="contentb-contain-right">
                     <div className="contentb-absolute">
                  {itemb.map((item,index)=><Single item={item} key={index} />)}
                  <button>add</button>
                  </div>

                </div>


             </div>

             <div className="contentb-foot">
             <img className="contentb-footimg" src={bgimg} alt="123" />
              <img src={green1} alt="green1" className="contentb-foot-img-a"/>
              <img src={green2} alt="green2" className="contentb-foot-img-b"/>
              <img src={green3} alt="green3" className="contentb-foot-img-c"/>
              <img src={green4} alt="green4" className="contentb-foot-img-d"/>
              <img src={green5} alt="green5" className="contentb-foot-img-e"/>
              <img src={green6} alt="green6" className="contentb-foot-img-f-a"/>
              <img src={green6} alt="green6" className="contentb-foot-img-f-b"/>
              <img src={green6} alt="green6" className="contentb-foot-img-f-c"/>
              <img src={pagtop} alt="pagtop" className="contentb-foot-img-g"/>
              <img src={logofoot} alt="logofoot" className="contentb-foot-img-h"/>
              <ul className="contentb-foot-li">
                <li>exampel</li>
                <li>exampel</li>
                <li>exampel</li>
                <li>exampel</li>
                <li>exampel</li>

              </ul>
              <p className="contentb-foot-p">this is demo dad1 ad1 da dad dd</p>
             </div>
               
               

		  </div>
	}
}