import React, { useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import { useNavigate } from 'react-router';
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));

const AboutEvent = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "About Event - Qool Qatar";
      }, []);

      const handleClick=()=> {
          navigate('/booking');
          window.location.reload()
      }

    return (
        <MainPage>
            <section className="destination-page">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul className="breadcrumb">
                                <li>Events</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>Qatar Motor Show</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="destination-info about-info">
                        <Col lg={4}>
                            <div className="pick-left">
                                <img src={require('../assets/images/event1.png')} alt="big"/>
                                <ul className="img-list">
                                    <li><img src={require('../assets/images/Rectangle38.png')} alt="small"/></li>
                                    <li><img src={require('../assets/images/Rectangle39.png')} alt="small"/></li>
                                    <li><img src={require('../assets/images/Rectangle40.png')} alt="small"/></li>
                                    <li><img src={require('../assets/images/Rectangle41.png')} alt="small"/></li>
                                    <li><img src={require('../assets/images/Rectangle42.png')} alt="small"/></li>
                                    <li><img src={require('../assets/images/Rectangle43.png')} alt="small"/></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="pick-right">
                                <h1>Qatar Motor Show</h1>
                                <Row>
                                    <Col lg={6}>
                                        <p className="price-with"><span>$50.00</span>/person</p>
                                        <p className="sub-info"><img src={require('../assets/images/Calendar.png')} alt="calendar" /> Sat, 1 Oct</p>
                                        <p className="sub-info"><img src={require('../assets/images/Location.png')} alt="location" /> West Bay, Doha, Qatar</p>
                                        <p className="more-txt">More Information</p>
                                        <p className="sub-info"><img src={require('../assets/images/Time-Circle.png')} alt="time" /> 6 Hours</p>
                                        <p className="sub-info"><img src={require('../assets/images/2User.png')} alt="user" /> All age group</p>
                                        <p className="about-txt">About</p>
                                    </Col>
                                    <Col lg={6}>
                                        <img src={require('../assets/images/Group2440.png')} className="about-map" alt="map" />
                                    </Col>
                                </Row>
                                <p className="about-des">Held under the patronage of H.E. Abdullah bin Nasser bin Khalifa Al Thani, Prime Minister of the State of Qatar, the Qatar Motor Show is one of the most important consumer events in Qatar.</p>

                                <p className="about-des">Qatar Motor Show brings together some of the most notable international car makers showcasing their latest models.</p> 

                                <p className="about-des">Exhibitors include many sports, luxury and mid-range car dealers as well as car accessory companies.</p>

                                <p className="about-des">An event not to be missed ! </p>
                                <Button onClick={handleClick} className="about-btn">Book now</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </MainPage>
    )
}

export default AboutEvent;
