import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const data = [
	{
		id: 1,
		image: require("../../assets/images/vendor1.png")
	},
	{
		id: 2,
		image: require("../../assets/images/vendor1.png")
	},
]

const vendorImg = data.map(v => {
	return (
		<img className="content-image" src={v.image} alt="big" />
	)
})

const VendorBlock = ({data}) => {
    var settings = {
		dots: true,
		lazyLoad: 'progressive',
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1
	};

    console.log(data)

    return (
        <section className="destination-page">
            <Container>
                <Row>
                    <Col lg={12}>
                        <ul className="breadcrumb">
                            <li>Top Destinations</li>
                            <li><img src={require('../../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                            <li>Falcon Tours</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="destination-info vendor-info">
                    <Col lg={4}>
                        <div className="pick-left">
                            <Slider {...settings}>
                                {vendorImg}
                            </Slider>
                            {/* <div className="arrows-block">
                                <img src={require('../../assets/images/Group84.png')} className="left1" alt="left" />
                                <img src={require('../../assets/images/Group83.png')} className="right1" alt="right" />
                            </div> */}
                            <div className="all-txt">All Photos</div>
                            <ul className="img-list">
                                <li><img src={require('../../assets/images/Rectangle38.png')} alt="small"/></li>
                                <li><img src={require('../../assets/images/Rectangle39.png')} alt="small"/></li>
                                <li><img src={require('../../assets/images/Rectangle40.png')} alt="small"/></li>
                                <li><img src={require('../../assets/images/Rectangle41.png')} alt="small"/></li>
                                <li><img src={require('../../assets/images/Rectangle42.png')} alt="small"/></li>
                                <li><img src={require('../../assets/images/Rectangle43.png')} alt="small"/></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="pick-right">
                            <h1>{data.payload.name}</h1>
                            <p className="my-star">
                                <img src={require('../../assets/images/Group3.png')} alt="star" /> 2500 reviews
                            </p>
                            <p className="location">Doha, Qatar</p>
                            <p className="pick-txt">Souq Waqif is a marketplace in Doha, in the state of Qatar. The souq sells traditional garments, spices, handicrafts, and souvenirs. <a href="/">Read more</a></p>
                            <img src={require('../../assets/images/Mapsicle-Map.png')} alt="map" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <div className="destination-bottom"></div>
            </Container>
        </section>
    )
}

export default VendorBlock;
