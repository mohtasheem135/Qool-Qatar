import React, { useEffect} from 'react';
import { Col, Container, Row } from 'reactstrap';
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));
const ExperiencePlace = React.lazy(()=> import('../components/destination-page/experience-place'));

const DestinationPage = () => {
    useEffect(() => {
        document.title = "Destination Page - Qool Qatar";
      }, []);

    return (
        <MainPage>
            <section className="destination-page">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul className="breadcrumb">
                                <li>Top Picks</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>Souq Waqif</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="destination-info">
                        <Col lg={4}>
                            <div className="pick-left">
                                <img src={require('../assets/images/Rectangle37-Palette.png')} alt="big"/>
                                <div className="play-box">
                                    <img src={require('../assets/images/Play.png')} alt="play" />
                                </div>
                                <div className="volumn-box">
                                    <img src={require('../assets/images/volume-x.png')} alt="volumn" />
                                </div>
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
                                <h1>Souq Waqif</h1>
                                <p className="location">Doha, Qatar</p>
                                <p className="pick-txt">Souq Waqif is a marketplace in Doha, in the state of Qatar. The souq sells traditional garments, spices, handicrafts, and souvenirs. <a href="/">Read more</a></p>
                                <img src={require('../assets/images/Mapsicle-Map.png')} alt="map" />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <div className="destination-bottom"></div>
                </Container>
            </section>
            <ExperiencePlace />
        </MainPage>
    )
}

export default DestinationPage;
