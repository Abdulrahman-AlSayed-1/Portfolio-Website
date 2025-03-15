import { Outlet } from 'react-router-dom';
import formImage from '../Images/FormImage.png'
import { responsive } from './Skills';
import { useContext, useEffect, useState } from 'react';
import { sendEmailToMain } from './Main';

function GetInTouch() {
    const [emailAddress,setEmail]=useState('')
    const sendEmail=useContext(sendEmailToMain)
    useEffect(()=>{
       sendEmail(emailAddress)
    },[emailAddress])
    return (
       <>  
        <Outlet/>
        <div className="container-fluid" id="GetInTouch">
            <div className="row">
                <div className="col-md-6 col-lg-4 mx-lg-auto p-0" >
                  <img className='img-fluid'  src={formImage} alt="Form Image" />
                </div>
                <div className="col-md-6 d-flex flex-column pt-5 ">
                    <h1 className={`display-${responsive(6,5)} mx-md-0 mx-auto pb-2`} style={{letterSpacing:"2px", color:"antiquewhite"}}>
                        Get In Touch
                    </h1>
                   
                    <form className='col-lg-10' onSubmit={(e)=>e.preventDefault()}>
                       <input className='pb-4 pt-2 ps-3 rounded-4 bg-dark border-0' type="text" placeholder='First Name'/>
                       <input className='pb-4 pt-2 ps-3 rounded-4 bg-dark border-0' type="text" placeholder='Last Name'/>
                       <input className='pb-4 pt-2 ps-3 rounded-4 bg-dark border-0' type="email" placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}/>
                       <input className='pb-4 pt-2 ps-3 rounded-4 bg-dark border-0' type="number" placeholder='Phone No.'/>
                       <textarea className='pb-4 pt-2 ps-3 rounded-4 bg-dark border-0'  placeholder='Message'/>
                   </form>
                   <input className='col-md-4 col-6 mx-md-0 mx-auto btn btn-light mt-4 rounded-3 fs-5 fw-bold' value='Send' type="button" />
                
                </div>
            </div>
        </div>
       
       </> 
     );
}

export default GetInTouch;