import { NavLink, useLocation} from "react-router-dom";
import { responsive } from "./Skills";
import { useEffect } from "react";

function Projects () {
    const location =useLocation()
    useEffect(()=>{
         let element;
        if(location.hash)
           element=document.querySelector(location.hash)
        else if(location.pathname !== '/')
          element =document.querySelector(`#${location.pathname.split('/').at(-1)}`);
    
        if(element)
          element.scrollIntoView({behavior:'smooth' , block:'center'})
    
    },[location.hash , location.pathname])
    const active=({isActive})=>isActive ? 'Active-link' : 'text-light bg-dark'
    return ( 
        <div className="container-fluid d-flex justify-content-center align-items-center pb-5">
            <div id="Projects" className="col-md-10 d-flex flex-column align-items-center">
                 <h1 className="display-5 text-light">Projects</h1>
                 <p className={`my-4 fs-${responsive(6,5)} col-md-9 col-11 text-center`}> 
                   this is the projects and tasks I've worked on
                </p>
                <ul className="nav nav-pills col-lg-8 col-8 col-md-12">
                    <li className="nav-item col-12 col-md text-center"><NavLink className={({isActive})=>`${active({isActive})} fs-${responsive(6,5)} nav-link fw-bold text-nowrap py-4 rounded-start-5 rounded-0 border-0`} to='/Project5-React#gallery' end>Projects Gallery</NavLink></li>
                    <li className="nav-item col-12 col-md text-center"><NavLink  className={({isActive})=>`${active({isActive})} fs-${responsive(6,5)} nav-link fw-bold text-nowrap rounded-0 py-4  border-0 `} to='GetInTouch' end>Get In Touch</NavLink></li>
                    <li className="nav-item col-12 col-md text-center"><NavLink  className={({isActive})=>`${active({isActive})} fs-${responsive(6,5)} nav-link fw-bold text-nowrap py-4 rounded-end-5 rounded-0 border-0 `} to='GetInTouch/AboutMe'>About Me</NavLink></li>
                </ul>
            </div>      
        </div>
     );
}
 
export default Projects;