import React from 'react';
import Commons from './Commons';
import web from '../src/images/w1.jpg';
 
const Contact=()=> {
  return (
<Commons name='Mentor Login ' data="Login as a Mentor. 
                                      Handle leave Requests easily.
                                              Zero PaperWork!!" imgsrc={web} visit='/login3' btname='Login'></Commons>
   
  );
}

export default Contact;
