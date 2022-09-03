import React from 'react';
import { Container } from 'react-bootstrap';
import emailjs from "emailjs-com";
import "./Contact.css"

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_3mcv49u', 'template_vhev09l', e.target, 'w7Dc7v9ULweVgpKb_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

    }
    return (
        <div className='py-5 vh-100 bg-dark'>
            <h2 className='text-center mb-5 contact-text'>Contact Me</h2>

            <Container className='mx-auto text-center'>

                <form action="#" className='contact-form' onSubmit={sendEmail}>

                    <input className='form-control d-inline-block form-control-lg w-75' type="text" name='name' placeholder='Enter Your Name' />
                    <br />
                    <br />
                    <input className='form-control d-inline-block  w-75 form-control-lg' type="email" name='user_email' placeholder='Enter Your Email' />
                    <br />
                    <br />

                    <textarea
                        style={{
                            height: "250px"
                        }}
                        className='form-control d-inline-block  w-75 form-control-lg ' name='message' placeholder='Enter Your Message' />
                    <br />
                    <br />

                    <input

                    style={{
                        background : "#00B074",
                        color : "white",
                        padding : "13px 45px",
                        fontWeight : "bold",
                        borderRadius : "10PX"
                    }}
                    type="submit" value="Send" />
                </form>

            </Container>

        </div>
    );
};

export default Contact;