import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

const ExperienceWorld = () => {
    return (
        <section className="experience-world">
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className="txt-box">
                            <h1>Experience a World Beyond</h1>
                            <Button>Explore</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ExperienceWorld;