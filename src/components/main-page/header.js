import React, { Fragment, useEffect, useState } from 'react';
import { Col, Container, Row, Input } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Offcanvas, Form, FormGroup } from 'react-bootstrap';
import "../../assets/css/Pages.css"
import Countdown from 'react-countdown';
import {useNavigate} from "react-router-dom";


const Header = ({data}) => {

    const navigate = useNavigate();
    useEffect(() => {

        console.log("header")
        console.log(JSON.parse(localStorage.getItem('Profile_Data')))
    }, []);

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return null;
        } else {
          // Render a countdown
          return <span className="offer1">{hours}Hrs : {minutes}Mins :{seconds}Secs left</span>;
        }
      };

      const goToLightningDeals = () => {
        navigate("/lightining-deals");
      }
      

    // localStorage.getItem(JSON.parse(localStorage.getItem('Profile_Data')))

    // phoneNumber

    const handleClick = (e) => {
        // e.preventDefault()
        localStorage.removeItem('otp_signIn')
        localStorage.removeItem('userID')
        localStorage.setItem('@auth_token', null);
        // window.location.reload()
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
                                        {/* <a href='/profile-page?tab=editProfile'><img className='profile-img' src={JSON.parse(localStorage.getItem('Profile_Data')).payload.profilePic} alt="profile" /></a> */}
                                        {
                                            JSON.parse(localStorage.getItem('Profile_Data')).error ?
                                                <a href='/signIn'><img className='profile-img' src={require('../../assets/images/Group2402.png')} alt="profile" /></a>
                                                :
                                                <div className='mobile-profile-container' >
                                                    <a href='/profile-page?tab=editProfile'><img className='profile-img' src={JSON.parse(localStorage.getItem('Profile_Data')).payload.profilePic} alt="profile" />
                                                    </a>
                                                    <div className='mobile-profile-container-1'>
                                                        <p>{JSON.parse(localStorage.getItem('Profile_Data')).payload.name}</p>
                                                        {/* <p>{JSON.parse(localStorage.getItem('Profile_Data')).payload.phoneNumber}</p> */}
                                                        <p>{[JSON.parse(localStorage.getItem('Profile_Data')).payload.phoneNumber.slice(0, 3), " ", JSON.parse(localStorage.getItem('Profile_Data')).payload.phoneNumber.slice(3, 7), " ", JSON.parse(localStorage.getItem('Profile_Data')).payload.phoneNumber.slice(7)].join('')}</p>
                                                    </div>
                                                </div>
                                        }

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
                                    {/* Dekstop view Nav */}
                                    <Nav className="justify-content-end">
                                        {/* Notifications */}
                                        {
                                            JSON.parse(localStorage.getItem('Profile_Data')).error ?
                                                null
                                                :
                                                <a href='/profile-page?tab=notifications' className="meta-icon bbb"><img className='bbb' src={require('../../assets/images/notification.png')} alt="notification" /></a>
                                        }
                                        {/* Coins */}
                                        {
                                            JSON.parse(localStorage.getItem('Profile_Data')).error ?
                                                null
                                                :
                                                <a href="/profile-page?tab=loyaltyPoints" className="crown-box"><img src={require('../../assets/images/emojione-v1_crown.png')} alt="crown" /> {JSON.parse(localStorage.getItem('Profile_Data')).payload.coin}</a>
                                        }
                                        {/* My Bookings */}
                                        {
                                            JSON.parse(localStorage.getItem('Profile_Data')).error ?
                                                null
                                                :
                                                <a href='/profile-page?tab=myBookings' className="meta-icon"><img src={require('../../assets/images/hCalendar.png')} alt="calendar" /></a>

                                        }
                                        {/* WishList */}
                                        {
                                            JSON.parse(localStorage.getItem('Profile_Data')).error ?
                                                null
                                                :
                                                <a href='/profile-page?tab=myWishlist' className="meta-icon"><img src={require('../../assets/images/hHeart.png')} alt="heart" /></a>
                                        }
                                    </Nav>
                                    {/* Mobile-Nav */}
                                    <Nav className="justify-content-end-1">
                                        {/* Home */}
                                        <a href="/" className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/home_1.png')} alt="home" /><p className='mobile-nav-text'>Home</p></a>
                                        {/* Search  */}
                                        <a href="#" className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/Search.png')} alt="home" /><p className='mobile-nav-text'>Explore</p></a>
                                        {/* My Bookings */}
                                        {
                                            JSON.parse(localStorage.getItem('Profile_Data')).error ?
                                                null
                                                :
                                                <a href='/profile-page/?tab=myBookings' className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/hCalendar.png')} alt="calendar" /><p className='mobile-nav-text'>My Bookings</p></a>
                                        }
                                        {/* WishLists */}
                                        {
                                            JSON.parse(localStorage.getItem('Profile_Data')).error ?
                                                null
                                                :
                                                <a href='/profile-page?tab=myWishlist' className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/hHeart.png')} alt="heart" /><p className='mobile-nav-text'>My Wishlist</p></a>
                                        }
                                        {/* Notifications */}
                                        {
                                            JSON.parse(localStorage.getItem('Profile_Data')).error ?
                                                null
                                                :
                                                <a href='/profile-page?tab=notifications' className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/nNotificationn.png')} alt="heart" /><p className='mobile-nav-text'>My Notifications</p></a>
                                        }
                                        {/* Log Out */}
                                        {
                                            JSON.parse(localStorage.getItem('Profile_Data')).error ?
                                                null
                                                :
                                                <a href='/' onClick={handleClick} className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/logOut.png')} alt="logOut" /><p className='mobile-nav-text'>Log Out</p></a>
                                        }
                                        {/* <a href='/' style={{fontSize: "16px", color: '#A2195B', fontWeight: '700' }} onClick={handleClick} >Log Out</a> */}
                                    </Nav>
                                    <div className='profile-img-div'>
                                        {/* <a href='/profile-page?tab=editProfile'><img className='profile-img' src={JSON.parse(localStorage.getItem('Profile_Data')).payload.profilePic} alt="profile" /></a> */}
                                        {/* <a href='/signIn'><img className='profile-img' src={require('../../assets/images/Group2402.png')} alt="profile" /></a> */}

                                        {
                                            JSON.parse(localStorage.getItem('Profile_Data')).error ?
                                                <a href='/signIn'><img className='profile-img' src={require('../../assets/images/Group2402.png')} alt="profile" /></a>
                                                :

                                                <a href='/profile-page?tab=editProfile'><img className='profile-img' src={JSON.parse(localStorage.getItem('Profile_Data')).payload.profilePic} alt="profile" /></a>


                                        }

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
                            <div className="offer-line" onClick={goToLightningDeals}>
                            
                               
                                    <span className="offer1"> <Countdown date={"2022-08-31T12:16:37.301Z" || data?.endDate}   renderer={renderer}>

</Countdown></span>
                                    <span className="offer2">Get QAR {data?.discount}% off</span>
                                    <span><FontAwesomeIcon icon={faArrowRightLong} /></span>
                          
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </Fragment>
    )


    // return (
    //     <Fragment>
    //         <header className="sticky-top">
    //             {['lg'].map((expand) => (
    //                 <Navbar key={expand} expand={expand} className="header-menu">
    //                     <Container fluid>
    //                         <Navbar.Brand href="/">
    //                             <img src={require('../../assets/images/qool-qatar-logo.png')} alt="headerlogo" />
    //                         </Navbar.Brand>
    //                         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
    //                         <Navbar.Offcanvas
    //                             id={`offcanvasNavbar-expand-${expand}`}
    //                             aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
    //                             placement="end"
    //                         >
    //                             <Offcanvas.Header closeButton>
    //                                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
    //                                     {/* {console.log(data.error)} */}
    //                                     {data.error == true ? 
    //                                     <a href='/signIn'><img className='profile-img' src={require('../../assets/images/Group2402.png')} alt="profile" /></a> 
    //                                     :
    //                                     // <a href='/profile-page?tab=editProfile'><img className='profile-img' src={JSON.parse(localStorage.getItem('Profile_Data')).payload.profilePic} alt="profile" /></a>
    //                                     // <a href='/profile-page?tab=editProfile'><img className='profile-img' src={data.payload.profilePic} alt="profile" /></a>
    //                                     null
    //                                     }
    //                                 </Offcanvas.Title>
    //                             </Offcanvas.Header>
    //                             <Offcanvas.Body>
    //                                 <Form className="search-form">
    //                                     <FormGroup>
    //                                         <img src={require('../../assets/images/Search.png')} alt="search" />
    //                                         <Input
    //                                             type="text"
    //                                             name="search"
    //                                             placeholder="Search for Destinations, Activities, etc."
    //                                         />
    //                                     </FormGroup>
    //                                 </Form>
    //                                 <Nav className="justify-content-end">
    //                                     <a href='/profile-page?tab=notifications' className="meta-icon bbb"><img className='bbb' src={require('../../assets/images/notification.png')} alt="notification" /></a>
    //                                     {/* <a href="/profile-page?tab=loyaltyPoints" className="crown-box"><img src={require('../../assets/images/emojione-v1_crown.png')} alt="crown" /> {JSON.parse(localStorage.getItem('Profile_Data')).payload.coin}</a> */}
    //                                     <a href='/profile-page?tab=myBookings' className="meta-icon"><img src={require('../../assets/images/hCalendar.png')} alt="calendar" /></a>
    //                                     <a href='/profile-page?tab=myWishlist' className="meta-icon"><img src={require('../../assets/images/hHeart.png')} alt="heart" /></a>
    //                                 </Nav>
    //                                 <Nav className="justify-content-end-1">
    //                                     <a href="/" className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/home_1.png')} alt="home" /><p className='mobile-nav-text'>Home</p></a>
    //                                     <a href="#" className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/Search.png')} alt="home" /><p className='mobile-nav-text'>Explore</p></a>
    //                                     <a href='/profile-page/?tab=myBookings' className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/hCalendar.png')} alt="calendar" /><p className='mobile-nav-text'>My Bookings</p></a>
    //                                     <a href='/profile-page?tab=myWishlist' className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/hHeart.png')} alt="heart" /><p className='mobile-nav-text'>My Wishlist</p></a>
    //                                     <a href='/profile-page?tab=myWishlist' className="mobile-nav-icon"><img className="mobile-icon-img" src={require('../../assets/images/nNotification.png')} alt="heart" /><p className='mobile-nav-text'>My Notifications</p></a>
    //                                 </Nav>
    //                                 <div className='profile-img-div'>
    //                                     {/* <a href='/profile-page?tab=editProfile'><img className='profile-img' src={JSON.parse(localStorage.getItem('Profile_Data')).payload.profilePic} alt="profile" /></a> */}

    //                                     {data.error === true ? 
    //                                     <a href='/signIn'><img className='profile-img' src={require('../../assets/images/Group2402.png')} alt="profile" /></a> 
    //                                     :
    //                                     <a href='/profile-page?tab=editProfile'><img className='profile-img' src={JSON.parse(localStorage.getItem('Profile_Data')).payload.profilePic} alt="profile" /></a>
    //                                     // <a href='/profile-page?tab=editProfile'><img className='profile-img' src={data.payload.profilePic} alt="profile" /></a>
    //                                     // null
    //                                     }
    //                                 </div>
    //                             </Offcanvas.Body>
    //                         </Navbar.Offcanvas>

    //                         <a href="/" className="search-mob">
    //                             <img src={require('../../assets/images/Search.png')} alt="search" />
    //                         </a>
    //                     </Container>
    //                 </Navbar>
    //             ))}
    //             <div className='jjj' >
    //                 <h1>Hellooo</h1>
    //             </div>
    //             <Container fluid>
    //                 <Row>
    //                     <Col lg={12}>
    //                         <div className="offer-line">
    //                             <p>
    //                                 <a href="/lightining-deals" className="offer1">23 Mins  : 32 Seconds Left</a>
    //                                 <a href="/lightining-deals" className="offer2">Get QAR 50 off</a>
    //                                 <a href="/lightining-deals"><FontAwesomeIcon icon={faArrowRightLong} /></a>
    //                             </p>
    //                         </div>
    //                     </Col>
    //                 </Row>
    //             </Container>
    //         </header>
    //     </Fragment>
    // )
}

export default Header;
