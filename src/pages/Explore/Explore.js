import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import "./Explore.css";
import Button from 'react-bootstrap/Button';


const Explore = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [singleDetail, setSingleDetail] = useState({});

    // load data useEffect uses
    useEffect(() => {
        // fetch(`/projectsData.JSON`)
        fetch(`/singleData.JSON`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    useEffect(() => {
        const foundDetail = details.find(detail => detail.id === id)
        setSingleDetail(foundDetail);
    }, [details])

    return (
        <div className='py-5 vh-100 bg-dark text-white'>
            <h2 className='text-center'>{singleDetail?.name} </h2>

            <div className='serial-image'>
                <Container>
                    <Row>
                        <Col lg={4} md={12}>
                            <div className='mb-3'>
                                <img className='w-100' src={singleDetail?.image1} alt="" />
                            </div>
                        </Col>

                        <Col lg={4} md={12}>
                            <div className='mb-3'>
                                <img className='w-100' src={singleDetail?.image2} alt="" />

                            </div>
                        </Col>

                        <Col lg={4} md={12}>
                            <div>
                                <img className='w-100' src={singleDetail?.image3} alt="" />

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <ul className='text-center p-0'>
                <li>1. {singleDetail?.description1}</li>
                <li>2. {singleDetail?.description2}</li>
                <li>3. {singleDetail?.description3}</li>
            </ul>
            {/* <Button>Github Client Repo</Button> */}
            <div className='text-center '>
                <Button className='github-client mb-3' href={singleDetail?.link1} target="_blank">Github Client Sepo</Button>
                <Button className='github-server mb-3' href={singleDetail?.link2} target="_blank">Github Server Repo</Button>
                <Button className='live-website mb-3' href={singleDetail?.link3} target="_blank">Llive Website</Button>

            </div>

        </div>
    );
};

export default Explore;