import React, { Component } from 'react';
import {Switch,Route, Redirect} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Login from "./Login";
import Login2 from "./Login2";
import Login3 from "./Login3";
import Login4 from "./Login4";
import Student from "./Student";
import Request from "./Request";
import Delete from "./Delete";
import "./index1.css";
import Parent from './Parent';
import Warden from "./Warden";
import Mentor from "./Mentor";
import View from "./View";
 
const App=()=> {
  return (
    <>
  
    <Switch>
<Route exact path="/" component={Home}></Route>
<Route  exact path="/About" component={About}></Route>
<Route  exact path="/Courses" component={Courses}></Route>
<Route  exact path="/Mentor" component={Mentor}></Route>
<Route   exact path="/Contact" component={Contact}></Route>
<Route   exact path="/Login" component={Login}></Route>
<Route   exact path="/Login2" component={Login2}></Route>
<Route   exact path="/Login3" component={Login3}></Route>
<Route   exact path="/Login4" component={Login4}></Route>
<Route   exact path="/Student" component={Student}></Route>
<Route   exact path="/Request" component={Request}></Route>
<Route   exact path="/Delete" component={Delete}></Route>
<Route   exact path="/Parent" component={Parent}></Route>
<Route   exact path="/Warden" component={Warden}></Route>
<Route   exact path="/View" component={View}></Route>
<Redirect to="/"></Redirect>
</Switch>
</>
  );

  }
export default App;
