import React from 'react';
import { Container, Button } from 'react-bootstrap';
import "./Contact.css"

const Contact = () => {
    return (
        <div className='py-5 vh-100 bg-dark'>
            <h2 className='text-center mb-5 contact-text'>Contact Me</h2>
            <Container className='mx-auto text-center'>
                <form action="#" className='contact-form'>
                    <input className='form-control d-inline-block form-control-lg w-75' type="text" placeholder='Enter Your Name' />
                    <br />
                    <br />
                    <input className='form-control d-inline-block  w-75 form-control-lg' type="text" placeholder='Enter Your Email' />
                    <br />
                    <br />
                    <input className='form-control d-inline-block  w-75 form-control-lg' type="text" placeholder='Enter Your Subject' />
                    <br />
                    <br />
                    <textarea
                        style={{
                            height: "250px"
                        }}
                        className='form-control d-inline-block  w-75 form-control-lg ' type="text" placeholder='Enter Your Message' />
                    <br />
                    <br />
                    <Button
                    style={{
                        background : "#00B074",
                        border : "none"
                    }}
                    >SEND MAIL</Button>
                </form>

            </Container>



        </div>
    );
};

export default Contact;