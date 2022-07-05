import React, { useEffect} from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));

const Checkout = () => {
    useEffect(() => {
        document.title = "Checkout - Qool Qatar";
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
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>Checkout</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={10}>
                            <div className="booking-form">
                                <p className="title">Checkout</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="about-info checkblock1">
                        <Col lg={2}>
                            <img src={require('../assets/images/event1.png')} className="booking-img" alt="big"/>
                        </Col>
                        <Col lg={10}>
                            <div className="booking-form checkout-box">
                                <p className="review">Review your booking details and proceed to payment</p>
                                <p className="selected">Selected Event</p>
                                <p className="item">Qatar Motor Show</p>
                                <div className="sub-item">
                                    <p>
                                        <span>Event ticket x 2</span>
                                        <span>$100.00</span>
                                    </p>
                                    <p>
                                        <span>Tax</span>
                                        <span>$0.00</span>
                                    </p>
                                    <p className="total-price">
                                        <span>Total:</span>
                                        <span>$100.00</span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="about-info checkblock1">
                        <Col lg={2}>
                            <p className="sub-info"><img src={require('../assets/images/Calendar.png')} alt="calendar" /> Sat, 1 Oct</p>
                            <p className="sub-info"><img src={require('../assets/images/Location.png')} alt="location" /> West Bay, Doha, Qatar</p>
                            <p className="sub-info"><img src={require('../assets/images/Time-Circle.png')} alt="time" /> 6 Hours</p>
                            <p className="sub-info"><img src={require('../assets/images/2User.png')} alt="user" /> All age group</p>
                        </Col>
                        <Col lg={10}>
                            <div className="booking-form sub-info1">
                                <div>
                                    <p className="detail1">Your Details</p>
                                    <p className="name">Robert Fox</p>
                                    <p className="contact">robertfox@gmail.com</p>
                                    <p className="contact">+974 9876543210</p>
                                </div>
                                <div className="no-guest">
                                    <p className="no1">02</p>
                                    <p className="no2">No. of Guests</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={10}>
                            <div className="booking-form">
                                <Button className="payment-btn">Proceed to Payment</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </MainPage>
    )
}

export default Checkout;
