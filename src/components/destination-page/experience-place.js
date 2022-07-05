import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";

const data = [
	{
		id: 1,
		image: require('../../assets/images/unsplash_qyAka7W5uMY.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
	{
		id: 2,
		image: require('../../assets/images/unsplash_qyAka7W5uMY.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
	{
		id: 3,
		image: require('../../assets/images/unsplash_qyAka7W5uMY.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
    {
		id: 4,
		image: require('../../assets/images/unsplash_qyAka7W5uMY.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
    {
		id: 5,
		image: require('../../assets/images/unsplash_qyAka7W5uMY.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
    {
		id: 6,
		image: require('../../assets/images/unsplash_qyAka7W5uMY.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
    {
		id: 7,
		image: require('../../assets/images/unsplash_qyAka7W5uMY.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
    {
		id: 8,
		image: require('../../assets/images/unsplash_qyAka7W5uMY.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
    {
		id: 9,
		image: require('../../assets/images/unsplash_qyAka7W5uMY.png'),
		title: "Doha Night City Tour Package Name",
		tour: "Falcon Tours",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
]

const places = data.map(p => {
    return(
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
                    <Button>Choose Package</Button>
                </div>
            </div>
        </div>
    )
})

const ExperiencePlace = () => {
    var settings = {
        dots: false,
        lazyLoad: 'progressive',
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 3,
        responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
                    rows: 1
				}
			}
		]
    };

    return (
        <section className="experience-place">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h3>Experience this place</h3>
                        <p className="experience-txt">Explore different ways to experience this place.</p>
                        <Slider {...settings}>
                            {places}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ExperiencePlace;
