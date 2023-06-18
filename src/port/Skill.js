import { Element } from "react-scroll";
import React, { useEffect } from 'react'
import '../Css/Skill.css'
import Wrapper from './Wrappper.js'



export default function Skill() {





  return (
   
    <Element className="Skill" id="skill">
 
<h2 className="container s-title" data-Aos ='fade-down' data-Aos-duration="2000" data-aos-anchor-placement="bottom-bottom">

  Skills
 </h2>
<div className='container s-item'>
     <div class="row ">
    <div class="col  col-md-4" data-Aos ='fade-right' data-Aos-duration="2000" data-aos-anchor-placement="bottom-bottom">
    <Wrapper pic={"https://essentialistengineer.com/wp-content/uploads/2022/10/Java_Docker_SpringBoot_Thumbnail.png"}/>

    </div>
    <div class="col col-md-4 " data-Aos ='fade-down' data-Aos-duration="3000" data-aos-anchor-placement="bottom-bottom" >
    <Wrapper pic={"https://kyle.pericak.com/images/aws.png"}/>

    </div>
    <div class="col col-md-4"  data-Aos ='fade-left' data-Aos-duration="2000" data-aos-anchor-placement="bottom-bottom">
    <Wrapper pic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoePxiB18gfSq8EvjUguq4HgTjrc-flESvWA&usqp=CAU"}/>


    </div>
  </div>



  <div class="row pt-5">
    <div class="col col-md-4"  data-Aos ='fade-up-right' data-Aos-duration="2000" data-aos-anchor-placement="bottom-bottom">
    <Wrapper pic={"https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"}/>

    </div>
    <div class="col-6 col-md-4" data-Aos ='fade-up' data-Aos-duration="3000" data-aos-anchor-placement="bottom-bottom">
  
        
    <Wrapper pic={"https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"}/>

      
   
    </div>
    
    <div class="col col-md-4"  data-Aos ='fade-up-left' data-Aos-duration="2000" data-aos-anchor-placement="bottom-bottom" >
    <Wrapper pic={"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.techchef.in/wp-content/uploads/2022/07/sql.png"}/>

    </div>
  </div>
  </div>
 
 


    </Element>
   
  )
}
