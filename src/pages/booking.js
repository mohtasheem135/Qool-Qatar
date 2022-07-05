import React, { useEffect} from 'react';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import NumericInput from 'react-numeric-input';
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));

const Booking = () => {
    useEffect(() => {
        document.title = "Booking - Qool Qatar";
      }, []);

    return (
        <MainPage>
            <section className="booking-box1">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul className="breadcrumb">
                                <li>Events</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>Qatar Motor Show</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>Booking</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="about-info">
                        <Col lg={3}>
                            <img src={require('../assets/images/event1.png')} className="booking-img" alt="big"/>
                            <p className="sub-info"><img src={require('../assets/images/Calendar.png')} alt="calendar" /> Sat, 1 Oct</p>
                            <p className="sub-info"><img src={require('../assets/images/Location.png')} alt="location" /> West Bay, Doha, Qatar</p>
                        </Col>
                        <Col lg={9}>
                            <div className="booking-form">
                                <p className="title">Qatar Motor Show</p>
                                <p className="sub">Your Details</p>
                                <p className="des">Please Tell us about yourself</p>
                                <Form>
                                    <FormGroup>
                                        <Label>First Name</Label>
                                        <Input type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Last Name</Label>
                                        <Input type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input type="email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Mobile Number</Label>
                                        <Input type="tel" />
                                        <span>You will receive text message updates about your booking*</span>
                                    </FormGroup>
                                    <FormGroup className="guest-box">
                                        <Label className="big-txt">Number of Guests</Label>
                                        <NumericInput mobile value="2" className="form-control numeric-box" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" value="Next" className="booking-btn" />
                                    </FormGroup>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </MainPage>
    )
}

export default Booking;
