import React from 'react'

import '../Css/Prolist.css'

export default function Prolist(props) {
    const pic = props.pic ;
  return (
 
    <div className="slide-container1">
    <div className="slide-content1 ">
      <div className="wrapper">
        <div className="card">
          <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img src={pic} alt="p" className="card-img image-fluid" />
            </div>
          </div>
<div className="card-content">    <h3 className="name">{ props.pname}</h3>
  { props.desc}
  
</div>
</div> </div></div></div>
  )
}

