import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import img from "../../assets/images/a1.png"

const data = [
	{
		id: 1,
		image: require('../../assets/images/a1.png'),
		title: "Luxury Activity Name"
	},
	{
		id: 2,
		image: require('../../assets/images/a2.png'),
		title: "Luxury Activity Name"
	},
	{
		id: 3,
		image: require('../../assets/images/a3.png'),
		title: "Luxury Activity Name"
	},
    {
		id: 4,
		image: require('../../assets/images/a4.png'),
		title: "Luxury Activity Name"
	},
    {
		id: 5,
		image: require('../../assets/images/a5.png'),
		title: "Luxury Activity Name"
	},
    {
		id: 6,
		image: require('../../assets/images/a1.png'),
		title: "Luxury Activity Name"
	},
]

const luxury = data.map(l => {
    return(
        <div className="pick-box">
            <a href="/">
                <img src={l.image} alt="pick" />
            </a>
            <p className="pick-title">{l.title}</p>
        </div>
    )
})

const LuxuryPicks = () => {

    const [luxury, setLuxury] = useState({})

    useEffect(() => {
        fetch(`https://qoolqatar.com/qool_qatar/api/homedata`)
            .then((response) => response.json())
            // .then((data) => setletExplore(data.luxury_picks));
            .then((data) => setLuxury(data.luxury_picks));
    }, [])

    var settings = {
        dots: false,
        lazyLoad: 'progressive',
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
    };

    return (
        <section className="top-picks activities-near">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h3>Luxury Picks</h3>
                        <a href={() => true}>View More <FontAwesomeIcon icon={faArrowRightLong} /></a>
                    </Col>
                    <Col lg={6}></Col>
                </Row>
                <Row>
                    <Col>
                        <Slider {...settings}>
                            {/* {luxury} */}
                            {Object.keys(luxury).map((id, index) => {
                                return(
                                    <div className="pick-box">
                                        <a href="/">
                                            <img src={img} alt="pick" />
                                        </a>
                                        <p className="pick-title">{luxury[id].BusinessName}</p>
                                    </div>
                                )
                            })}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LuxuryPicks;
