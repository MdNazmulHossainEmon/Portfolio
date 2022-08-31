import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyPortfolio = (props) => {
    
    const {id, name, img, description } = props.portfolioData;
    // console.log(props)
    return (
        <div>

            <Col >
            <Card className='mb-4 text-center' style={{
                height : "460px"
            }}>
                <Card.Img className='w-100' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>

                    <Card.Text>

                        {description}
                    </Card.Text>

                    <Link to={`/explore/${id}`}>
                        <Button 
                        style={{
                            background : "#00B068",
                            border: 'none'
                        }}
                        >Explore {name} </Button>
                    </Link>

                </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default MyPortfolio;