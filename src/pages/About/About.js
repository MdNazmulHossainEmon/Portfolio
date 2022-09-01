import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import "./About.css"

const About = () => {
    return (
        <div className='text-center  bg-dark text-white'>
            <div>
                <Container>
                    <Row>
                        <h2 className='about'>About US</h2>

                        <Col lg={6} md={12}>
                            <div >
                                <img className='w-75 mb-3' src="https://i.ibb.co/MDjj2n6/nazmul.jpg" alt="" />
                                <h2 className='py-2'>I am Md Nazmul Hossain Emon</h2>
                                <p
                                    className='pera'
                                >I am a Junior Web Developer/React Web Developer from bangladesh.  I have one plus year of experience in web development, designing and developing user interfaces, testing, and debugging. Web Development and Design is my passion.
                                </p>
                            </div>
                        </Col>

                        <Col lg={6} md={12}>
                            <div className='about-right '
                            >
                                <h3 className='py-2'>Personal Info</h3>
                                <p>Full Name : Md Nazmul Hossain Emon</p>
                                <p>Age : 23 Years</p>
                                <p>Nationality : Bangladeshi</p>
                                <p>Address : Islamabad Road, Jurain, Dhaka-1204</p>
                                <p>Freelance : Availabe</p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

            <Footer ></Footer>
        </div>
    );
};

export default About;