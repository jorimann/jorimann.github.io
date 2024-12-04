import React from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAward } from '@fortawesome/free-solid-svg-icons'; 
import './style.css'

const Learnings = () => { 
    return ( 
        <section id="learnings"
            className="container text-center"> 
            <h2 className="section-title"> 
                <FontAwesomeIcon icon={faAward} 
                    className="mr-2" /> 
                Certificates 
            </h2> 
            <div className="row"> 
                {/* Project 1 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h8 className="card-title"> 
                                Google Cloud Associate Cloud Engineer (Expired)
                            </h8> 
                            <p className="card-text"> 
                                <p></p>
                                <a href="https://google.accredible.com/da025577-ec33-4687-a9cc-8b9804e12134#acc.owFqTkjI" target='_blank' rel="noreferrer">Link to Certificate</a>
                            </p> 
                        </div> 
                    </div> 
                </div> 
                {/* Project 2 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h8 className="card-title"> 
                                ScrumMaster (CSM) (ScrumAlliance) 
                            </h8> 
                            <p className="card-text"> 
                                <p></p>
                                <a href="https://isqi.skillsclub.com/45bbd7d3-6c3c-4e4d-bb68-0fadea458f30?username=yevhenkravchenko18647" target='_blank' rel="noreferrer">Link to Certificate</a>
                            </p> 
                        </div> 
                    </div> 
                </div> 
                {/* Project 3 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h8 className="card-title"> 
                                ISQTB Certified Test Advanced Level Test Manager 
                            </h8> 
                            <p className="card-text"> 
                                <p></p>
                                <a href="https://isqi.skillsclub.com/dc97235c-5bfc-4e1b-9ec1-042c0ca8a58c#acc.Hcrbevm9" target='_blank' rel="noreferrer">Link to Certificate</a>
                            </p> 
                        </div> 
                    </div> 
                </div> 
                {/* Project 4 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                        <h8 className="card-title"> 
                                ISQTB Certified Tester Foundation Level 4.0 
                            </h8> 
                            <p className="card-text"> 
                                <p></p>
                                <a href="https://skillshub.isqi.org/6e91e0bd-ad3b-4780-b66a-375d68f1b856#acc.eTDPiUb8" target='_blank' rel="noreferrer">Link to Certificate</a>
                            </p> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </section> 
    ); 
}; 

export default Learnings;