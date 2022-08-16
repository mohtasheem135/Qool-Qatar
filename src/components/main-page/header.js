import React, { Fragment, useEffect, useState } from 'react';
import { Col, Container, Row, Input } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Offcanvas, Form, FormGroup } from 'react-bootstrap';
import "../../assets/css/Pages.css"
import Axios from 'axios';

const Header = () => {
    return (
        <Fragment>
            <header className="sticky-top">
                {['lg'].map((expand) => (
                    <Navbar key={expand} expand={expand} className="header-menu">
                        <Container fluid>
                            <Navbar.Brand href="/">
                                <img src={require('../../assets/images/qool-qatar-logo.png')} alt="headerlogo" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        <a href='/profile-page?tab=editProfile'><img className='profile-img' src={JSON.parse(localStorage.getItem('Profile_Data')).payload.profilePic} alt="profile" /></a>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Form className="search-form">
                                        <FormGroup>
                                            <img src={require('../../assets/images/Search.png')} alt="search" />
                                            <Input
                                                type="text"
                                                name="search"
                                                placeholder="Search for Destinations, Activities, etc."
                                            />
                                        </FormGroup>
                                    </Form>
                                    <Nav className="justify-content-end">
                                        <a href='/profile-page?tab=notifications' className="meta-icon bbb"><img className='bbb' src={require('../../assets/images/notification.png')} alt="notification" /></a>
                                        <a href="/profile-page?tab=loyaltyPoints" className="crown-box"><img src={require('../../assets/images/emojione-v1_crown.png')} alt="crown" /> 250</a>
                                        <a href='/profile-page?tab=myBookings' className="meta-icon"><img src={require('../../assets/images/hCalendar.png')} alt="calendar" /></a>
                                        <a href='/profile-page?tab=myWishlist' className="meta-icon"><img src={require('../../assets/images/hHeart.png')} alt="heart" /></a>
                                    </Nav>
                                    <Nav className="justify-content-end-1">
                                        <a href="/" className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/home_1.png')} alt="home" /><p className='mobile-nav-text'>Home</p></a>
                                        <a href="#" className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/Search.png')} alt="home" /><p className='mobile-nav-text'>Explore</p></a>
                                        <a href='/profile-page/?tab=myBookings' className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/hCalendar.png')} alt="calendar" /><p className='mobile-nav-text'>My Bookings</p></a>
                                        <a href='/profile-page?tab=myWishlist' className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/hHeart.png')} alt="heart" /><p className='mobile-nav-text'>My Wishlist</p></a>
                                        <a href='/profile-page?tab=myWishlist' className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/nNotification.png')} alt="heart" /><p className='mobile-nav-text'>My Notifications</p></a>
                                    </Nav>
                                    <div className='profile-img-div'>
                                        <a href='/profile-page?tab=editProfile'><img className='profile-img' src={JSON.parse(localStorage.getItem('Profile_Data')).payload.profilePic} alt="profile" /></a>

                                    </div>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>

                            <a href="/" className="search-mob">
                                <img src={require('../../assets/images/Search.png')} alt="search" />
                            </a>
                        </Container>
                    </Navbar>
                ))}
                <div className='jjj' >
                    <h1>Hellooo</h1>
                </div>
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <div className="offer-line">
                                <p>
                                    <a href="/lightining-deals" className="offer1">23 Mins  : 32 Seconds Left</a>
                                    <a href="/lightining-deals" className="offer2">Get QAR 50 off</a>
                                    <a href="/lightining-deals"><FontAwesomeIcon icon={faArrowRightLong} /></a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </Fragment>
    )
}

export default Header;
