import React, { Fragment } from 'react';
import { Col, Container, Row, Input } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Offcanvas, Form, FormGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Header = () => {

    const navigate = useNavigate();

    const handleClick =()=> {
        navigate('/profile-page')
        window.location.reload();
    }

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
                            <img src={require('../../assets/images/Group2402.png')} alt="signIn" /> Sign in/Sign up
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
                                <Nav.Link href="#" className="crown-box"><img src={require('../../assets/images/emojione-v1_crown.png')} alt="crown" /> 250</Nav.Link>
                                <Nav.Link href="#" className="meta-icon"><img src={require('../../assets/images/hCalendar.png')} alt="calendar" /></Nav.Link>
                                <Nav.Link href="#" className="meta-icon"><img src={require('../../assets/images/hHeart.png')} alt="heart" /></Nav.Link>
                            </Nav>
                            <img onClick={handleClick} src={require('../../assets/images/Ellipse1.png')} alt="profile" />
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <a href="/" className="search-mob">
                            <img src={require('../../assets/images/Search.png')} alt="search" />
                        </a>
                    </Container>
                    </Navbar>
                ))}
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
