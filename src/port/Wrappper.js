import React from "react";

import "./wrapper.css";
import Navbar from "./Navbar";
import { Button } from "antd";



export default function Wrappper(props ) {
  const pic = props.pic ;
  return (
<>
     
      <div className="slide-container">
        <div className="slide-content ">
          <div className="wrapper">
            <div className="card">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img src={pic} alt="p" className="card-img image-fluid" />
                </div>
              </div>
<div className="card-content">    <h3 className="name">{ props.pname}</h3>


</div>



            </div>
          </div>
        </div>
      </div>
</>
  );
}
