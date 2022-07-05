import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";

const data = [
	{
		id: 1,
		image: require('../../assets/images/unsplash_EdzsUFqHbaY.png'),
		title: "Restaurant Name",
		location: "Doha, Qatar",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
	{
		id: 2,
		image: require('../../assets/images/Rectangle16.png'),
		title: "Activity Package Name",
		location: "Doha, Qatar",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
	{
		id: 3,
		image: require('../../assets/images/Rectangle17.png'),
		title: "Skating Show in Doha Package",
		location: "Doha, Qatar",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
    {
		id: 4,
		image: require('../../assets/images/Rectangle18.png'),
		title: "Package Name",
		location: "Doha, Qatar",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
    {
		id: 5,
		image: require('../../assets/images/unsplash_EdzsUFqHbaY.png'),
		title: "Restaurant Name",
		location: "Doha, Qatar",
        offer: "$50",
        discount: "(10% off)",
        price: "$48.65"
	},
]

const deals = data.map(d => {
    return(
        <div className="pick-box deal-box">
            <a href="/">
                <img src={d.image} alt="pick" />
            </a>
            <div className="deal-sub">
                <div className="like-box"><img src={require('../../assets/images/heart.png')} alt="heart" /></div>
                <p className="pick-title">{d.title}</p>
                <p className="pick-des">{d.location}</p>
                <p><span className="offer-txt">{d.offer}</span> <span className="txt1">{d.discount}</span></p>
                <p className="start-from">Starts from</p>
                <div className="price-box">
                    <p><span className="main-price">{d.price}</span><span className="txt1">/Per Person</span></p>
                    <Button>Book</Button>
                </div>
            </div>
        </div>
    )
})

const BestDeals = () => {
    var settings = {
        dots: false,
        lazyLoad: 'progressive',
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
                    rows: 3
				}
			}
		]
    };

    return (
        <section className="top-picks deal-picks">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h3>Best Deals</h3>
                    </Col>
                    <Col lg={6}></Col>
                </Row>
                <Row className="bottom-line">
                    <Col>
                        <Slider {...settings}>
                            {deals}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BestDeals;
