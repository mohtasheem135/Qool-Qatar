import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

const data = [
	{
		id: 1,
		image: require('../../assets/images/v1.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
	{
		id: 2,
		image: require('../../assets/images/v2.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
	{
		id: 3,
		image: require('../../assets/images/v3.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
    {
		id: 4,
		image: require('../../assets/images/v4.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
    {
		id: 5,
		image: require('../../assets/images/v5.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
    {
		id: 6,
		image: require('../../assets/images/v6.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
]

const places = data.map(p => {
    return(
        <Col lg={6}>
            <div className="pick-box deal-box place-box">
                <div className="place1">
                    <a href="/">
                        <img src={p.image} className="place-img" alt="place" />
                    </a>
                    <div className="like-box">
                        <img src={require('../../assets/images/heart.png')} alt="heart" />
                    </div>
                </div>
                <div className="place2">
                    <p className="pick-title">{p.title}</p>
                    <p className="pick-by">By {p.tour}</p>
                    <p className="pick-des">{p.location}</p>
                    <p><span className="offer-txt">{p.offer}</span> <span className="txt1">{p.discount}</span></p>
                    <p className="start-from">Starts from</p>
                    <div className="price-box">
                        <p><span className="main-price">{p.price}</span><span className="txt1">/Per Person</span></p>
                        <a href='/package-page'><Button>Choose Package</Button></a>
                        
                    </div>
                </div>
            </div>
        </Col>
    )
})

const RecommendedPackages = () => {
    return (
        <section className="recommended">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h3>Recommended Packages</h3>
                    </Col>
                </Row>
                <Row>
                    {places}
                </Row>
            </Container>
            <Container fluid>
                <div className="destination-bottom"></div>
            </Container>
        </section>
    )
}

export default RecommendedPackages;
