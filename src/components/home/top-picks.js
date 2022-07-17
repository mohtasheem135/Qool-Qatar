import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";

const dataa = [
    {
        id: 1,
        image: require('../../assets/images/Rectangle11.png'),
        title: "Sauq Waqif",
        meta: "Doha, Qatar"
    },
    {
        id: 2,
        image: require('../../assets/images/Rectangle12.png'),
        title: "Katara Cultural Village",
        meta: "Doha, Qatar"
    },
    {
        id: 3,
        image: require('../../assets/images/Rectangle13.png'),
        title: "Museum of Islamic Art",
        meta: "Doha, Qatar"
    },
    {
        id: 4,
        image: require('../../assets/images/Rectangle14.png'),
        title: "National Museum of Qatar",
        meta: "Doha, Qatar"
    },
    {
        id: 5,
        image: require('../../assets/images/Rectangle11.png'),
        title: "Sauq Waqif",
        meta: "Doha, Qatar"
    },
]



const picks = dataa.map(p => {
    return (
        <div className="pick-box">
            <a href="/">
                <img src={p.image} alt="pick" />
            </a>
            <p className="pick-title">{p.title}</p>
            <p className="pick-des">{p.meta}</p>
        </div>
    )
})


const TopPicks = ({ data, isLoading, isSuccess, isError }) => {
    var settings = {
        dots: false,
        lazyLoad: 'progressive',
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
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
        <section className="top-picks pick-box1">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h3>Top Picks</h3>
                    </Col>
                    <Col lg={6}></Col>
                </Row>
                <Row className="bottom-line">
                    <Col lg={12}>
                        <Slider {...settings}>
                            {picks}
                            {/* {isSuccess == true ? data.top_picks.map((e) => {
                                return (
                                    <div className="pick-box">
                                        <a href="/">
                                            <img src={e.Profilepic} alt="pick" />
                                        </a>
                                        <p className="pick-title">{e.BusinessName}</p>
                                        <p className="pick-des">{e.Name}</p>
                                        <hr />
                                    </div>
                                )
                            }) : null} */}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TopPicks;
