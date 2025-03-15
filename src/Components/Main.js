import { Outlet } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import { createContext, useState } from "react";

export const sendEmailToMain=createContext()
export const sendEmailToEmailViewer=createContext()

function Main() {
   const[email,setEmail]=useState('')
   const addEmail=(getInTouchEmail)=>{
     setEmail(getInTouchEmail)
   }
   
    return ( 
        <>
         <Home />
         <Skills />
         <Projects/>

         <sendEmailToMain.Provider value={addEmail}>
           <Outlet />     {/* projectsGallery & GetInTouch & Aboutme*/ }
         </sendEmailToMain.Provider>

         <sendEmailToEmailViewer.Provider value={email} >
           <Footer/>     {/* Footer & EmailViewer*/ }
         </sendEmailToEmailViewer.Provider>
        </>
     );
}

export default Main; 