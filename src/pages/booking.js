import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import NumericInput from 'react-numeric-input';
import { useNavigate } from 'react-router';
import dateFormat from "dateformat";
const MainPage = React.lazy(() => import('../components/main-page/main-page'));

const Booking = () => {
    const navigate = useNavigate();

    const [data, setData] = useState('');

    useEffect(() => {
        document.title = "Booking - Qool Qatar";

        setData(JSON.parse(localStorage.getItem('upComingEvents_aboutEvent')))

    }, []);

    const handleClick = () => {
        navigate('/checkout');
        window.location.reload()
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem('booking_FirstName', e.target[0].value)
        localStorage.setItem('booking_LastName', e.target[1].value)
        localStorage.setItem('booking_Email', e.target[2].value)
        localStorage.setItem('booking_Mobile', e.target[3].value)
        localStorage.setItem('booking_Guests', e.target[4].value)
        navigate('/checkout')
        window.location.reload()
    }

    return (
        <MainPage>
            <section className="booking-box1">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul className="breadcrumb">
                                <li>Events</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow" /></li>
                                <li>{data.name}</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow" /></li>
                                <li>Booking</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="about-info">
                        <Col lg={3}>
                            <img src={data.photoUrl} className="booking-img" alt="big" />
                            <p className="sub-info"><img src={require('../assets/images/Calendar.png')} alt="calendar" /> {dateFormat(data?.eventStartDate, "DDD, mmm dS, yyyy")} - {dateFormat(data?.eventEndDate, "DDD, mmm dS, yyyy")}</p>
                            <p className="sub-info"><img src={require('../assets/images/Location.png')} alt="location" /> {data.address}</p>
                        </Col>
                        <Col lg={9}>
                            <div className="booking-form">
                                <p className="title">{data.name}</p>
                                <p className="sub">Your Details</p>
                                <p className="des">Please Tell us about yourself</p>
                                <Form onSubmit={handleSubmit}>
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
                                        {/* <Button onClick={handleClick} className="about-btn">Next</Button> */}
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
