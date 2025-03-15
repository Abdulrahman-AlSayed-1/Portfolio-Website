import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NotFound404() {
    const navigate=useNavigate()
    const location=useLocation()
    useEffect(()=>{

        if(location.pathname === '/')
          navigate('/Project5-React')

    },[location.pathname])
    return (
        <h1 className="position-absolute fs-3 top-50 start-50 
        translate-middle text-light">404 - Page Not Found 🥱</h1>
      );
}

export default NotFound404;