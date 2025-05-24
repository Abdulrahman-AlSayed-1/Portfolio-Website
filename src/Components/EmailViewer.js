import { useContext, useEffect, useRef, useState } from "react";
import { sendEmailToEmailViewer } from "./Main";


function EmailViewer() {

  const emailViewerRef=useRef(null);
  const [stylesToggeler , setstylesTogeller]=useState('blur')
  useEffect(()=>{
    emailViewerRef.current.style.color= stylesToggeler === 'focus' ? '#C0C0C0' : '#212529'
    emailViewerRef.current.style.backgroundColor= stylesToggeler === 'focus' ? '#212529' : '#C0C0C0' 
  },[stylesToggeler])
  const[emailInputValue,setEmailInputValue]=useState('')
  const email=useContext(sendEmailToEmailViewer)
  useEffect(()=>{
    setEmailInputValue(email)
  },[email])
  return (
       <div className="container-fluid d-flex justify-content-center position-absolute p-0" id="EmailViewer">
            <div ref={emailViewerRef} className="row col-10 col-lg-9 py-md-5 py-4 px-md-3 px-2 rounded-5" style={{backgroundColor:'#C0C0C0', transition: 'all 500ms'}}>
                <div className="col-md-6">
                    <h1 className="fs-5 text-center fw-bold" style={{letterSpacing:"2px"}}>
                      Here the Email Address you entered             
                    </h1>
                    <p className="fs-6 text-center">
                      If there is an error, you can edit it before submitting.
                    </p>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div id="emailViewerInputDiv" className="col-12 position-relative">
                      <input onFocus={()=>setstylesTogeller('focus')} onBlur={()=>setstylesTogeller('blur')} type="email" placeholder="Email Address" value={emailInputValue} onChange={(e)=>setEmailInputValue(e.target.value)} className="col-12 py-4 ps-3 border-0 rounded-4"/>
                      <button className="border-0 fs-6">SUBMIT</button>
                    </div>
                </div>
            </div>    
        </div>
      );
}

export default EmailViewer;