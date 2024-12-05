import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './style.css'
import './Header.css'

const About = () => {
    return (
        <section id="about" className="container mt-5">
            <div className="Row">
                <div className="col-md-8 offset-md-2">
                    <h2 className = "section-title text-center">
                        <FontAwesomeIcon icon={faUser} className="ms-2 mt-auto" />
                        About Me
                    </h2>
                    <div className="profile-image-container">
                        <img src="/assets/user.png"
                            alt="my face"
                            className="rounded-circle profile-image" />
                    </div>
                    <p> 
                    Results-driven QA professional with over 18 years of experience in software quality assurance, including 10+ years in leadership roles. Proven expertise in test management, strategy development, and process optimization. Skilled in implementing scalable QA solutions, driving test automation, and ensuring high-quality software delivery in Agile environments. Adept at fostering collaboration across cross-functional teams and managing resources effectively.
                    </p> 
                </div>
            </div>
        </section>
    )
}
export default About;