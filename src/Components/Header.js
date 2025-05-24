import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../Images/Logo.png';
import { responsive } from './Skills';
function Header() {
  const location =useLocation()
  useEffect(()=>{
       let element;
      if(location.hash)
         element=document.querySelector(location.hash)
      else if(location.pathname!=='/') {
        const segment=location.pathname.split('/').at(-1);
        const id='#' + segment.charAt(0).toUpperCase() + segment.slice(1)
        element=document.querySelector(id);
      }
      if(element)
        element.scrollIntoView({behavior:'smooth' , block:'center'})
  
    },[location.hash , location.pathname])

    return ( 
       <nav className='navbar navbar-expand-md navbar-dark pt-lg-2 pt-4 fixed-top'>
         <div className="container-fluid">
            <Link className="navbar-brand col-md-2 col-3 text-md-center p-0 fs-1" to='/#Home'>
              <img className='col-12 col-lg-10' src={image} alt='portfolio logo'/>
            </Link> 
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse col-8 justify-content-center gap-4" id="mynavbar">
             <ul className={`navbar-nav fs-${responsive(6,5)}`}>

                <li className="nav-item  ">
                 <Link className='nav-link position-relative scroll-link' to='/#Home' >Home</Link> 
                </li>

                <li className="nav-item ">
                 <Link className='nav-link position-relative scroll-link' to='/#Skills'>Skills</Link>
                </li>

                <li className="nav-item ">
                 <Link className=' nav-link position-relative scroll-link' to='/#Projects'>Projects</Link>
                </li>

                <li className="nav-item d-flex gap-2 mt-md-0 mt-1">
                  <a className="nav-link ms-md-1 icon" href=''>
                   <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a className="nav-link ms-md-1 icon" href='https://github.com/Abdulrahman-AlSayed-1' target='_blank' rel='noopener noreferrer'>
                   <i className="fab fa-github"></i>
                  </a>
                  <a className="nav-link ms-md-1 icon" href='https://www.linkedin.com/in/abdulrahmanal-sayed' target='_blank' rel='noopener noreferrer'>
                   <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>

             </ul>
             <button className={`bg-transparent text-light border-light mt-md-0 mt-3 fs-${responsive(6,5)} px-lg-5 px-4 py-3 rounded-0 contact-btn position-relative`}>
              <Link className='nav-link' to='/getInTouch'>Let's Connect</Link>
             </button>

            </div>
        </div>
       </nav>
     );
}

export default Header ;