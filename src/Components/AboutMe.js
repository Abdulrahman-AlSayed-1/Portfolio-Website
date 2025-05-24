import { responsive } from "./Skills";

function AboutMe() {
    return ( 
        <div id="AboutMe" className="mt-5 container-fluid">
            <p style={{fontStyle:"italic"}} className={`fs-${responsive(6,5)} text-secondary col-md-6 col-11 mx-auto text-center`}>
                Hello , My name is&nbsp;
                <span className="badge bg-dark text-light">
                    Abdulrahman Hani Al-Sayed
                </span>
                , FullStack Web Developer and IT student at FCI-ZU.
                 i live in Dakahlia Mit Ghamr, and i am {new Date().getFullYear()-2004} years old
            </p>
        </div>
     );
}

export default AboutMe;