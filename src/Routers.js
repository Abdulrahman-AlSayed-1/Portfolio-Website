import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import NotFound404 from "./Components/NotFound404";
import ProjectsGallery from "./Components/ProjectsGallery";
import GetInTouch from "./Components/GetInTouch";
import AboutMe from "./Components/AboutMe";

const Routers = () => {
    return (
        <Router>
            <Header />
            <Routes>
               <Route path="/project5-React" element ={<Main/>} >
                 <Route index element={<ProjectsGallery/>}/>    
                 <Route path="GetInTouch" element ={<GetInTouch/>}>
                    <Route path="AboutMe" element ={<AboutMe/>}/>
                 </Route>
               </Route>
               <Route path='*' element ={<NotFound404/>}/>
            </Routes>
        </Router>
    )
}
export default Routers;