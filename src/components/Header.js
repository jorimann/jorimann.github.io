import React, { useState } from 'react'; 
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faInfoCircle, faCode, faFileAlt, faEnvelope, faBrain, faAward } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom'; 

import './Header.css'; 
import './style.css'; 

const Header = () => { 
    const [showContactCard, setShowContactCard] = useState(false);

    const toggleContactCard = () => {
        setShowContactCard(!showContactCard);
    };

    return (
        <Navbar collapseOnSelect bg="dark" expand="sm" fixed="top" className="custom-navbar shadow-sm d-flex flex-column">
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="#about" offset={50} duration={500} className="contact-link"> 
                            <span>About</span> 
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2 ms-2 text-light ho" /> 
                        </Nav.Link> 
                        <Nav.Link as={Link} to="#projects" offset={50} duration={500} className="contact-link"> 
                            <span>Projects</span> 
                            <FontAwesomeIcon icon={faCode} className="me-2 ms-2 text-light ho" / > 
                        </Nav.Link> 
                        <Nav.Link as={Link} to="#skills" className="contact-link"> 
                            <span>Skills</span> 
                            <FontAwesomeIcon icon={faBrain} className="me-2 ms-2 text-light ho" /> 
                        </Nav.Link> 
                        <Nav.Link as={Link} to="#resume" className="contact-link"> 
                            <span>Resume</span> 
                            <FontAwesomeIcon icon={faFileAlt} className="me-2 ms-2 text-light ho" /> 
                        </Nav.Link> 
                        <Nav.Link as={Link} to="#learnings" className="contact-link"> 
                            <span>Certificates</span> 
                            <FontAwesomeIcon icon={faAward} className="me-2 ms-2 text-light ho" /> 
                        </Nav.Link> 
                        
                        <Nav.Link onClick={toggleContactCard} style={{ cursor: 'pointer' }} className="contact-link"> 
                            <span>Contact</span> 
                            <FontAwesomeIcon icon={faEnvelope} className="ms-2 text-light ho" /> 
                        </Nav.Link> 
                    </Nav> 
                    <Nav className="ms-auto"> 
                         <Nav.Link href="https://github.com/jorimann?tab=repositories" target='_blank'> 
                            <span className="sr-only">Github</span> 
                            <FontAwesomeIcon icon={faGithub} size="lg" className='text-light ho' /> 
                        </Nav.Link> 
                        <Nav.Link href="https://www.linkedin.com/in/yevhen-kravchenko-7430312" target='_blank'> 
                            <span className="sr-only">Linkedin</span> 
                            <FontAwesomeIcon icon={faLinkedin} size="lg" className='text-light ho' /> 
                        </Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>

            {showContactCard && (
                <div className="contact-card">
                    <p><strong>Name:</strong> Yevhen Kravchenko</p>
                    <p><strong>Email:</strong> <a href="mailto:ievgen.kravchenko@outlook.com">ievgen.kravchenko@outlook.com</a></p>
                    <p><strong>Phone:</strong> +49 160 950 661 58</p>
                </div>
            )}
        </Navbar>
    ); 
}; 

export default Header;