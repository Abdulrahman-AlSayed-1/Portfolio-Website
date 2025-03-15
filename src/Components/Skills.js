import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

export const responsive=(small,large)=> window.innerWidth<768? small:large;
function Skills() {
  const settings = {
    infinite: true,  
    speed: 500,
    slidesToShow: responsive(2,3), 
    slidesToScroll: 1,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>
  };
  
    return (
        <div className="container-fluid vh-100 position-relative" id="Skills">
            <div className=" col-md-8 col-10 d-flex flex-column align-items-center
            rounded-5 position-absolute start-50 top-50 translate-middle py-3">
               <h1 className="display-5 text-light">Skills</h1>
               <p className={`fs-${responsive(6,5)} col-md-5 col-11 text-center`}> All the skills are shown here</p>
               
               <Slider {...settings} className="d-flex gap-2 col-10 mt-5  text-center">
                  <div className="col-4">
                    <i className={`fa-solid fa-circle-notch fa-${responsive(6,8)}x `} data-ratio='90%'></i>
                    <p className={`mt-3 fs-${responsive(6,4)} text-light`}>HTML</p>
                  </div>
                  <div className="col-4 ">
                    <i className={`fa-solid fa-circle-notch fa-${responsive(6,8)}x `} data-ratio='80%'></i>
                    <p className={`mt-3 fs-${responsive(6,4)} text-light`}>CSS</p>
                  </div>
                  <div className="col-4">
                     <i className={`fa-solid fa-circle-notch fa-${responsive(6,8)}x `} data-ratio='70%'></i>
                    <p className={`mt-3 fs-${responsive(6,4)} text-light`}>JavaScript & OOP</p>
                  </div>
                  <div className="col-4 ">
                     <i className={`fa-solid fa-circle-notch fa-${responsive(6,8)}x `} data-ratio='85%'></i>
                     <p className={`mt-3 fs-${responsive(6,4)} text-light`}>Bootstrap</p>
                  </div>
                  <div className="col-4 ">
                     <i className={`fa-solid fa-circle-notch fa-${responsive(6,8)}x `} data-ratio='60%'></i>
                     <p className={`mt-3 fs-${responsive(6,4)} text-light`}>React Js </p>
                  </div>        
               </Slider>

            </div>
        </div>
      );
}
export default Skills;