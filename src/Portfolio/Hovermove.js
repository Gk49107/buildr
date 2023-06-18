import React from 'react'
import './Hover.css'
import i1 from './Media/1.png'
import i2 from './Media/2.png'
import i3 from './Media/3.png'
import i4 from './Media/4.png'
import i5 from './Media/5.png'
import i6 from './Media/6.png'
import i7 from './Media/7.png'
import bg from './Media/bg3.jpg'
import i12 from './Media/12.png'
import { Element } from 'react-scroll'


export default function Hovermove() {
  document.addEventListener('mousemove', paralox)
 function paralox(e){
    document.querySelectorAll(".object").forEach(function(move){
        var moveing = move.getAttribute('data-value');
        var x = e.clientX * moveing / 250 ;
        var y = e.clientY * moveing /250 ;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
 }


  return (
    <>
 
    <div className='move ' >
   <h1 className='title object align-self-end col-md-6 col-6'   style={{}} data-Aos ='fade-up' data-Aos-duration="2000" data-aos-anchor-placement="bottom-bottom">

   Innovative Software Solutions 

   to make your Business Fly High
  <br/>
   <span className='title2 object' style={{}}>

   Keep your Business Flying with the Right Managed IT Services Partner
   </span>

   </h1>
   
   <img className='img-fluid object bg ' data-value={-0.5} src ={bg} alt='bg' style={{width:'100%'  }}/>

     <img className='object header col-1' data-value={3} src={i2}  alt=""style={{
    top:"80px",right:"100px"
   }}/>
      <img className='object header col-2' data-value={-2} src={i3}  alt="" style={{
    top:"250px",right:"300px"
   }}/>
     <img className='object header col-1' data-value={6} src={i2}  alt=""style={{
    top:"400px",left:"200px"
   }}/>
      <img className='object  header  col-2' data-value={-1} src={i12}  alt=""style={{ width:"100%", height:"100%" , objectFit:"fill" ,display:'none' }}/>
      <img className='object header col-1' data-value={-3} src={i1} alt="" style={{
    top:"100px",left:"100px"
   }}/>
    <img className='object header col-1' data-value={-1} src={i4}  alt=""style={{
    top:"400px",right:"100px"
   }}/><img className='object header col-2' data-value={10} src={i5}  alt=""style={{
    top:"200px",left:"300px"
   }}/><img className='object header col-1' data-value={6} src={i6}  alt=""style={{
    top:"510px",right:"300px"
   }}/><img className='object header col-2' data-value={-8} src={i7}  alt=""style={{
    top:"200px",left:"100px"
   }}/>
   
   
  </div>
</>
 
  )
}
