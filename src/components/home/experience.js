import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { useNavigate } from 'react-router';

const ExperienceWorld = () => {

    const navigate = useNavigate();

    const handelClick=(e)=> {
        e.preventDefault();
        navigate('/list-of-activities')
        window.location.reload()
    }

    return (
        <section className="experience-world">
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className="txt-box">
                            <h1>Experience a World Beyond</h1>
                            <Button onClick={handelClick}>Explore</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ExperienceWorld;