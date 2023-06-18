import React from 'react'
import '../Css/contact.css'
import AiFillFacebook from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'
import { Element } from 'react-scroll'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <Element id="Contact">
<div className='container-fluid contact' >
<h1 data-Aos ='fade-down' data-Aos-duration="2000" data-aos-anchor-placement="center-bottom">
    Contact Me
</h1>
<div className='content'>
  <h4>
    
    Email : <span>
        gopikrishna49107@gmail.com
    </span>
    </h4>
    <h4>
    
    Phone : <span>
        +916369771943
    </span>
    </h4>
    <div className='icons'>
  
    
 <a href='https://www.facebook.com/' target='_blank' data-Aos ='fade-right' data-Aos-duration="1000" data-aos-anchor-placement="center-bottom"> <FaFacebookSquare /> </a>
  <a href='https://www.linkedin.com/in/gopi-krishna-b446a524a/' target='_blank' data-Aos ='fade-right' data-Aos-duration="2000" data-aos-anchor-placement="center-bottom"><FaLinkedin ></FaLinkedin> </a>
  <a href='https://github.com/Gk49107' target='_blank' data-Aos ='fade-right' data-Aos-duration="3000" data-aos-anchor-placement="center-bottom"> <FaGithub/> </a>

   </div>
       </div>  
   


    
    
     </div>

     </Element>
  )
}
