import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBrain } from '@fortawesome/free-solid-svg-icons'; 

const Skills = () => {
    return ( 
        <section id="skills"
            className="container"> 
            <h2 className="section-title text-center"> 
                <FontAwesomeIcon icon={faBrain} 
                    className="mr-2" /> 
                Skills 
            </h2> 
            <div className="Row text-justify" >
                 <div className="text-center">
                    <p>Skills, Tools, experience can be found in Resume</p>
                </div>
             </div>
            </section>
    )
}

export default Skills