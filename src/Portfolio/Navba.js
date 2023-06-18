import React from 'react'
import { Link } from 'react-router-dom'
import './Navba.css'

export default function Navba() {
  return (
    <div className=" navti"  >
      <div className="header_r">
    <h1 className="" >
     Develop<span>er</span>
    </h1>
     </div>

     <div className="header_l">
      <Link to='about' smooth={true} duration={500}>
    <h1 className="" >
     About Me
    </h1>
    </Link>
    <Link to='project' smooth={true} duration={500}>
    <h1 className="" >
      Projects
    </h1>
    </Link>
    <Link to='exp' smooth={true} duration={500}>
    <h1 className="" >
     Experience
    </h1>
    </Link>
    <Link to='Skills' smooth={true} duration={500}>
    <h1 className="" >
     Skills
    </h1>
    </Link>
     <Link to='Contact' smooth={true} duration={500}>
    <h1 className="" >
     Contact Me
    </h1>
    </Link>
    <Link to='Join' smooth={true} duration={500}>
    <h1 className="" >
     Join With Me
    </h1>
    </Link>
     </div>




    </div>
  )
}

