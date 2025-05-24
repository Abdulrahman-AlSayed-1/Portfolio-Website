import logo from '../Images/Logo.png'
import EmailViewer from './EmailViewer';
import { responsive } from './Skills';
function Footer() {
    return ( 
        <div id='footer' className="container-fluid position-relative p-0" style={{height:'60vh'}}>
           <hr className='position-absolute start-50 translate-middle bg-light col-11 rounded-5' style={{height:'5px',top:"40%"}}/>
           <div className="d-flex h-100">
             <div className="mt-auto col-12 row justify-content-center">
                <div className="col-4 col-md-3 col-lg-4 mt-auto">
                    <img src={logo} alt="logo" className='col-12 col-lg-4'/>
                </div>
                <div className="col-7 col-md-8 col-lg-6 p-0 d-flex">
                
                    <ul className={`nav ms-auto mt-auto fs-${responsive(6,5)} gap-2 mb-md-3 mb-2`}>
                      <li className="nav-item">
                        <a className="nav-link icon" href=''>
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="nav-item">
                         <a className="nav-link icon" href='https://github.com/Abdulrahman-AlSayed-1' target='_blank' rel='noopener noreferrer'>
                           <i className="fab fa-github"></i>
                         </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link icon" href='https://www.linkedin.com/in/abdulrahmanal-sayed' target='_blank' rel='noopener noreferrer'>
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                      </li>
                    </ul>

                </div>     
                <p className="col-12 col-lg-10 ms-3 fs-6 text-secondary text-center text-lg-end">
                        --Copyrights &copy; 2025-- All Rights Reserved here By Abdulrahman Hani Al-Sayed
                </p>
                
             </div>
           </div>

           <EmailViewer/>

        </div>
     );
}

export default Footer;