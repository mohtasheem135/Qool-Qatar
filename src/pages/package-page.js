import React, { useEffect, useState} from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));

const PackagePage = () => {
    useEffect(() => {
        document.title = "Package Page - Qool Qatar";

       
      }, []);
    const [data, setData] = useState(JSON.parse(localStorage.getItem("selectedPackageData")));
    return (
        <MainPage>
            <section>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul className="breadcrumb">
                                <li>Adventure</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>List of Vendors</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>Package</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5}>
                            <img src={require('../assets/images/unsplash_8uuc3uH6tfg.png')} className="pac-img" alt="package" />
                        </Col>
                        <Col lg={7}>
                            <div className="package-info">
                                <p className="title">{data.name}</p>
                                <p className="location">{data.address}</p>
                                <p className="price"><span>${data.price}/</span>person</p>
                                <p className="content">{data.description}<a>Read more</a></p>
                                <p className="additional">Additional Info</p>
                                <ul className="features">
                                    <li><img src={require('../assets/images/clock.png')} alt="clock" /> Duration: {data.hours} Hours</li>
                                    <li><img src={require('../assets/images/cloud.png')} alt="cloud" /> Opening Hours: Monday - Sunday</li>
                                    <li><img src={require('../assets/images/check.png')} alt="check" /> Taking Covid-19 Safety Measures</li>
                                    <li><img src={require('../assets/images/home.png')} alt="home" /> Hotel Pickup Offered</li>
                                </ul>
                                <a href='/book-package'><Button className="book-btn">Book now</Button></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </MainPage>
    )
}

export default PackagePage;
