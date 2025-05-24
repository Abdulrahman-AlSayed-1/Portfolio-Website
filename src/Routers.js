import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import NotFound404 from "./Components/NotFound404";
import ProjectsGallery from "./Components/ProjectsGallery";
import GetInTouch from "./Components/GetInTouch";
import AboutMe from "./Components/AboutMe";

const Routers = () => {
    return (
        <Router basename="/Project5-React">
            <Header />
            <Routes>
               <Route path="/" element ={<Main/>} >
                 <Route index element={<ProjectsGallery/>}/>    
                 <Route path="getInTouch" element ={<GetInTouch/>}>
                    <Route path="aboutMe" element ={<AboutMe/>}/>
                 </Route>
               </Route>
               <Route path='*' element ={<NotFound404/>}/>
            </Routes>
        </Router>
    )
}
export default Routers;