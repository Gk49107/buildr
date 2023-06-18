import React, { useEffect, useState } from 'react'

import '../Css/Navbar.css'
import CV from '../CV/cv.pdf'

import { Link } from 'react-scroll'


const  Navbar = () => {
let theEnd= 0,
navbar =document.getElementById('nav');
window.addEventListener('scroll',function(){

var scrolltop=window.pageXOffset || this.document.documentElement.scrollTop;
if (scrolltop >theEnd){
 var top='-70px';
}
else{
  top='0px';
}
theEnd=scrolltop;

})

let [top ,setTop] = useState('0')





  window.addEventListener('scroll',function(){

    var scrolltop=window.pageXOffset || this.document.documentElement.scrollTop;
    if (scrolltop >theEnd){
      setTop='-70px';
    }
    else{
      setTop='0px';
    }
    theEnd=scrolltop;
    
    })

console.log=(top)


  return (
   
   <div className=' navti '  >

<div className="header_r">
<Link to='move' smooth={true} duration={500}>
    <h1 className="" style={{cursor:"pointer"}} >
     Develop<span>er</span>
    </h1>
    </Link>
     </div>

     <div className="header_l">
   <Link to='aboutus' smooth={true} duration={500}>
   <h1>
        About Me
    </h1>
 </Link>
 
    <Link to='project' smooth={true} duration={500}>
    <h1 className="" >
      Projects
    </h1>
    </Link>
    <Link to='Experience' smooth={true} duration={500}>
    <h1 className="" >
     Experience
    </h1>
    </Link>
    <Link to='Skill' smooth={true} duration={500}>
    <h1 className="" >
     Skills
    </h1>
    </Link>
     <Link to='Contact' smooth={true} duration={500}>
    <h1 className="" >
     Contact Me
    </h1>
    </Link>
    
    <a href={CV} download="gopiresume.pdf" target='_blank'>   
     <button className='btn btn-danger'>
      Download CV
    </button>
    
    </a>

    </div>


   </div>

  )
}

export default Navbar;
