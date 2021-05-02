import React from 'react';
import Commons from './Commons';
import web from '../src/images/log.gif';
import Navbar from "./Navbar";
const Home=()=> {
  return (
    <>
   
<Commons data= "Login as a Student. Submit your leave Requests easily. Zero PaperWork!!" name='Student Login' imgsrc={web} visit='/login' btname='Login'></Commons>
   </>
  );
}

export default Home;
