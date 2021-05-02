import React from 'react';
import './index1.css';
import { NavLink } from 'react-router-dom';
import web from '../src/images/w1.jpg';
import Navbar from "./Navbar";
 
const Commons=(props)=> {
  return (<>
  <Navbar/>
<section id = "header" className="d-flex align-items-center">
<div className="container fluid nav_bg">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
<div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column try">
    <h1>{props.name}</h1>
    <h4 className="mt-3 try1">
      {props.data}
    </h4>
    <div className="mt-3">
    <NavLink to={props.visit} className="btn-get--started">{props.btname}</NavLink>
    </div>
</div>

<div className = "col-lg-6 order-1 order-lg-2 header-img">
<img src={props.imgsrc} className="img-fluid animated"></img>
</div>
</div>
</div>
</div>

</div>

</section>
   </>
  );
}

export default Commons;
