import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import MyPortfolio from '../MyPortfolio/MyPortfolio';
import "./Home.css"

const Home = () => {
    const [portfolioDatas, setPortfolioDatas] = useState([]);
    useEffect(() => {
        fetch("./projectsData.JSON")
            .then(res => res.json())
            .then(data => setPortfolioDatas(data))
    }, [])
    return (
        <div>
            <div className='bg-dark home-top text-white'>
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col lg={5} >
                            <div className='home-top-right mb-4'>
                                <img
                                    className='w-75'
                                    src="https://i.ibb.co/MDjj2n6/nazmul.jpg" alt="" />
                            </div>

                        </Col>
                        <Col lg={7}>
                            <div>
                                <h2>Hi There,
                                </h2>
                                <h3>I am Md <span className='text-green'>
                                    Nazmul Hossain Emon
                                </span></h3>
                                <h5>Web developer
                                </h5>
                                <p>In my experience of developing user interface application and professional web applications using HTML5, CSS, CSS3, PSD To Html, Figma To Html, Github, Netlify, Bootstrap4, Bootstrap5, JavaScript, ES6, Reactjs, Nodejs, Firebase, MongoDB, Expressjs.

                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='bg-dark home-bottom'>
                <Container>
                    <h2 className='text-center mb-5 works-text'>My Portfolio</h2>
                    <Row lg={3} md={2} sm={1}>

                        {
                            portfolioDatas.map(portfolioData => <MyPortfolio
                                key={portfolioData.id}
                                portfolioData={portfolioData}

                            >
                            </MyPortfolio>)
                        }

                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;