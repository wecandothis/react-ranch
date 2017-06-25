import React,{Component} from "react"
import no5 from "./../../images/no5.png"
import nav1 from "./../../images/img_nav01.png"
import nav2 from "./../../images/img_nav02.png"
import nav3 from "./../../images/img_nav03.png"
import nav4 from "./../../images/img_nav04.png"
import nav5 from "./../../images/img_nav05.png"
import nav6 from "./../../images/img_nav06.png"
import nav7 from "./../../images/na7.png"
import nav8 from "./../../images/na8.png"
import nav9 from "./../../images/na9.png"
import nav10 from "./../../images/na10.png"
import nav11 from "./../../images/na11.png"
import nav12 from "./../../images/na12.png"

export default class Headli extends Component{

  render(){
        return <div className="headli">

               <img className="logoimg" src={no5}/>
               <div className="nav-left">
               <img src={nav8} alt="img5" className="animationMouse"/>
               <img src={nav10} alt="img4" className="animationMouse"/>
    
               <img src={nav9} alt="img6" className="animationMouse"/>
               <img src={nav1} alt="img1" />
               <img src={nav2} alt="img2" />
               <img src={nav3} alt="img3" />
              

               </div>
               <div className="nav-right">
              
               <img src={nav12} alt="img4" className="animationMouse"/>
               <img src={nav11} alt="img5" className="animationMouse"/>
               <img src={nav7} alt="img6" className="animationMouse"/>
                <img src={nav4} alt="img1" />
               <img src={nav5} alt="img2" />
               <img src={nav6} alt="img3" />


               </div>
               <div className="footContain"></div>
           

        </div>


  }

}