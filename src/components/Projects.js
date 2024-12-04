import React from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import './style.css'

const Projects = () => { 
    return ( 
        <section id="projects"
            className="container text-center"> 
            <h2 className="section-title"> 
                <FontAwesomeIcon icon={faCode} 
                    className="mr-2" /> 
                Projects 
            </h2> 
            <div className="row"> 
                {/* Project 1 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h8 className="card-title"> 
                                Simple Weather App
                            </h8> 
                            <p className="card-text"> 
                                Weather Application based on React and FastApi.
                                <br/>
                                <a href="https://console.firebase.google.com/?_gl=1*1xbqp2w*_ga*NDczNDgzMzIzLjE3MzMzNDI1NTg.*_ga_CW55HF8NVT*MTczMzM0MjU1Ny4xLjAuMTczMzM0MjU1Ny4wLjAuMA..&pli=1" target='_blank' rel="noreferrer">Link to app</a>
                                <br/>
                                <a href="https://github.com/jorimann/weather-app" target='_blank' rel="noreferrer">Link to repository</a>
                            </p> 
                        </div> 
                    </div> 
                </div> 
                {/* Project 2 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h8 className="card-title"> 
                                Project 2 
                            </h8> 
                            <p className="card-text"> 
                                Description for Project 2
                            </p> 
                        </div> 
                    </div> 
                </div> 
                {/* Project 3 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h8 className="card-title"> 
                                Project 3 
                            </h8> 
                            <p className="card-text"> 
                                Description for Project 3
                            </p> 
                        </div> 
                    </div> 
                </div> 
                {/* Project 4 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h8 className="card-title"> 
                                Project 4 
                            </h8> 
                            <p className="card-text"> 
                                Description for Project 4 
                            </p> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </section> 
    ); 
}; 

export default Projects;