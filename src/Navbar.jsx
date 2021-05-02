import React from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import HomeIcon from '@material-ui/icons/Home';
import DvrSharpIcon from '@material-ui/icons/DvrSharp';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
 
const Navbar=()=> {
  return (<>
      <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/">VitPass</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink activeClassName="menu_active" aria-current="page" className="nav-link" to="/"><HomeIcon></HomeIcon>  Student</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/courses"><DvrSharpIcon></DvrSharpIcon>  Parent</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/contact"><ContactsRoundedIcon></ContactsRoundedIcon>  Mentor</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/about"><InfoRoundedIcon></InfoRoundedIcon>  Warden</NavLink>
        </li>
      </ul>
      
    </div>
            </nav>
            </div>
          </div>
      </div>

  
   
    
      
    
    
  

</>
  );
}

export default Navbar;
