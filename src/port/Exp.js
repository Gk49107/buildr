import React from 'react'
import { Element } from 'react-scroll';
import '../Css/Exp.css'

export default function Exp() {
  return (
   <>
   <Element id='Experience'></Element>

   <div className="s-title">
    <h2>
     Experience

    </h2>
   
    </div>

   <div className='container experience'>
   <div class="row" >
   
  
   <div class="col  col-md-6 e-list" data-Aos ='fade-left' data-Aos-duration="2000" data-aos-anchor-placement="bottom-bottom">
   <img src="https://t3.ftcdn.net/jpg/04/19/70/14/360_F_419701462_FNWd4pdZQO0QYpeWRvstO6Ivqw9DkAcq.webp" className='img-fluid' />
   </div>
   <div class="col  col-md-6 e-list" data-Aos ='fade-right' data-Aos-duration="2000" data-aos-anchor-placement="bottom-bottom">
    <ul>
      <li>
       UI/UX
      </li>
      <li>
        SQL
        </li>


         <li>
        Springboot(java)
      </li> <li>
       Devops
        </li>
        <li>
        Linux
        </li>
    </ul>
  
  
  
   </div>
    </div>

   </div>
   
   </>
  );
}
