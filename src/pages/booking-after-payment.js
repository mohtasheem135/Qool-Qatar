import React, { useEffect, useState} from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));

const BookingAfterPayment = () => {

    const [data, setData] =useState('');

    useEffect(() => {
        document.title = "Booking After Payment - Qool Qatar";

        setData(JSON.parse(localStorage.getItem('upComingEvents_aboutEvent')))

        console.log(JSON.parse(localStorage.getItem('upComingEvents_aboutEvent')))
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
                                <li>{data.name}</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>Booking</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>Checkout</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="green-box">
                                <img src={require('../assets/images/teenyicons_tick-circle-solid.png')} alt="check" />
                                <h3>Booking Successful</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row className="about-info checkblock1">
                        <Col lg={2}>
                            <img src={data.photoUrl} className="booking-img" alt="big"/>
                        </Col>
                        <Col lg={10}>
                            <div className="booking-form checkout-box">
                                <p className="selected">Booking Details</p>
                                <p className="item">data.name</p>
                                <div className="sub-item">
                                    <p>
                                        <span>Event ticket x {localStorage.getItem('booking_Guests')}</span>
                                        <span>{data.price}</span>
                                    </p>
                                    <p>
                                        <span>Tax</span>
                                        <span>$0.00</span>
                                    </p>
                                    <p className="total-price">
                                        <span>Total:</span>
                                        <span>${data.price}.00</span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="about-info checkblock1">
                        <Col lg={2}>
                            <p className="sub-info"><img src={require('../assets/images/Calendar.png')} alt="calendar" /> {data.eventDate}</p>
                            <p className="sub-info"><img src={require('../assets/images/Location.png')} alt="location" />{data.address}</p>
                            <p className="sub-info"><img src={require('../assets/images/Time-Circle.png')} alt="time" /> {data.hours}</p>
                            <p className="sub-info"><img src={require('../assets/images/2User.png')} alt="user" /> All age group</p>
                        </Col>
                        <Col lg={10}>
                            <div className="booking-form sub-info1">
                                <div>
                                    <p className="detail1">Your Details</p>
                                    <p className="name">{localStorage.getItem('booking_FirstName')} {localStorage.getItem('booking_LastName')}</p>
                                    <p className="contact">{localStorage.getItem('booking_Email')}</p>
                                    <p className="contact">{localStorage.getItem('booking_Mobile')}</p>
                                </div>
                                <div className="no-guest">
                                    <p className="no1">{localStorage.getItem('booking_Guests')}</p>
                                    <p className="no2">No. of Guests</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={10}>
                            <div className="booking-form">
                                <a href='/'><Button className="payment-btn">Done</Button></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </MainPage>
    )
}

export default BookingAfterPayment;
