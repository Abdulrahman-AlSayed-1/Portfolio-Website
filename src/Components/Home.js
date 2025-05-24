// Desc: Home component of the website
import image from '../Images/Lamp.jpeg';
import {ReactTyped} from 'react-typed';

function Home() {
    return (
       <div className='homeContainer container-fluid vh-100'>
        <div className='container position-relative mt-5 pt-3' id='Home'>
         <div className='position-relative' >
          <div className='col-md-7 text-secondary lh-1
            position-absolute z-2 start-0 top-100'  style={{letterSpacing: '3px'}}>
           
            <button className='d-block mb-4 col-9 col-lg-6 fs-6 btn btn-outline-light py-3'>
                Welcome all in my Portfolio
            </button>
            <span className='fs-1 fw-bold' >
                 Hi!, I'm Abdulrahman Al-Sayed, 
            </span>
            <ReactTyped
             strings={['FrontEnd Developer','BackEnd Developer','FullStack Developer']}
             typeSpeed={400}
             backSpeed={300}
             loop
             className='fs-1 fw-bold'
             />
             <p className='fs-5 mt-3'>
               Hello everyone, i'm a junior web developer 
             </p>
             <p className='fw-bold fs-3 mt-5 text-light'>
                <span >Let's Connect</span>
                <i className='fa-solid fa-circle-arrow-right ms-3'></i>
             </p>
          </div>
          <div className='col-md-4 col-9 ms-auto' id="mainImage">
            <img className='img-fluid' id="mainImageChild" src={image} alt='developer'/>
          </div>
        </div>
       </div>
    </div>

      );
}

export default Home;