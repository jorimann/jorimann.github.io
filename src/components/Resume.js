// Resume.js 
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faFileDownload } 
    from '@fortawesome/free-solid-svg-icons'; 
import './style.css'; 

const Resume = () => { 
    return ( 
        <section id="resume"
            className="container text-center"> 
             <div className="row justify-content-center align-items-center"> 
                <div className="col-md-8"> 
                    <h2 className="section-title"> 
                        <FontAwesomeIcon icon={faFileDownload} 
                            className="mr-2" /> 
                        Resume 
                    </h2> 
                    <p className="section-description"> 
                        Download my resume to learn more 
                        about my professional experience and skills. 
                    </p> 
                    <a href="https://drive.google.com/uc?export=download&id=1eWyafLCdAih4JyzKytRA_JwB4svk_hSm"
                        className="resume-download-btn" download> 
                        Download Resume (English) 
                    </a> 
                    <a href="https://drive.google.com/uc?export=download&id=1Ai5kKI2XFAaqeAQbYR31bJ3WOJjLNHTM"
                        className="resume-download-btn" download> 
                        Download Resume (German) 
                    </a> 
                </div> 
            </div> 
        </section> 
    ); 
}; 

export default Resume;