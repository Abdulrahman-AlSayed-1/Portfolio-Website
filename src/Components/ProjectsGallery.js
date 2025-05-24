import { useMemo } from "react"
import project1 from "../Images/project1.jpeg"
import project2 from "../Images/project2.jpeg"
import project3 from "../Images/project3.jpeg"
import project4 from "../Images/project4.jpeg"
import project5 from "../Images/project5.jpeg"
import project6 from "../Images/project6.jpeg"

function ProjectsGallery() {
   const projects=useMemo(()=>[project1,project2,project3,project4,project5,project6],[])
    return ( 
         <div className="mx-auto mt-5 col-11 justify-content-center" id="gallery">
           {
            projects.map((project,index)=>{
                return(
                 <div key={project} className="project position-relative overflow-hidden rounded-4 ">
                    <img className='h-100 w-100' src={project} alt={`project ${index+1}`} loading="lazy"/>
                    
                    <h1 className="desc opacity-0 col-12 text-center position-absolute top-50 start-50">
                        Project {index+1}
                    </h1>
                </div>
                )
            })
           }
        </div>
     );
}

export default ProjectsGallery;