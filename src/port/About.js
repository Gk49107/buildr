import React from 'react'
import { Element } from 'react-scroll'
import '../Css/About.css'

export default function About() {
  return (
    <div className='aboutus '>  
     
   <img className='img-fluid imga' data-Aos ='fade-up' data-Aos-duration="2000" data-aos-anchor-placement="center-bottom" style={{width:'100%'  }} src={"https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
   <Element id='aboutus'></Element>
   <h1 className='name object align-self-end col-md-6 col-6'   style={{}} data-Aos ='fade-up' data-Aos-duration="2000" data-aos-anchor-placement="bottom-bottom">
  Gopi Krishna
<br/>

<span className=' object' style={{color:"orangered"}}>

Software Engineer
</span>
<h4 data-Aos ='fade-up' data-Aos-duration="3000" data-aos-anchor-placement="bottom-bottom">
I am a professional UI/UX Designer and Front-End Developer creating modern and responsive designs for Web and Mobile. Let us work together. Thank you
</h4>

</h1>

   </div> 
   
  )
}


