import React from 'react';
import Commons from './Commons';
import web1 from '../src/images/w2.png';
import Navbar from './Navbar';

 
const About=()=> {
  return (<div>
 
<Commons data = "Login as a Warden. Handle leave Requests easily. Zero PaperWork!!" name='Warden Login' imgsrc={web1} visit='/login4' btname='Login'></Commons>
</div>
  );
}

export default About;
