import React from 'react'
import { Element } from 'react-scroll'
import '../Css/Project.css'
import Prolist from './Prolist'


function Projects() {
  return (
   
  <Element id="project"> 
  <div class="project1" >

    <h3 data-Aos ='fade-down' data-Aos-duration="2000" data-aos-anchor-placement="bottom-bottom">Projects</h3> 
    </div>
   <div className='project'>
 
   
   <div class="row " >

   <div className="col col-md-6" data-Aos ='fade-right' data-Aos-duration="2000" data-aos-anchor-placement="bottom-bottom">

  <Prolist desc="E-commerce Text-tiles" 
  pic="https://img.freepik.com/premium-psd/fashion-sale-social-media-post-web-banner-template_169307-2141.jpg"/>

   </div>

   <div className="col col-md-6" data-Aos ='fade-left' data-Aos-duration="2000" data-aos-anchor-placement="bottom-bottom">
   <Prolist 
   desc="E-commerce Shopping"
   pic="https://thumbs.dreamstime.com/z/online-shopping-vector-sale-banner-design-text-smartphone-cart-paper-bag-elements-internet-buying-selling-service-app-199752113.jpg"/>

    
</div> 



    </div>
   </div>






</Element>
  )
}

export default Projects