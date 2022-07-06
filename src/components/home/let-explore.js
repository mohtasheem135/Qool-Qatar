import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";

// const data = [
// 	{
// 		id: 1,
// 		image: require('../../assets/images/Rectangle21750.png'),
// 		title: "Sightseeing",
// 		meta: "28 Activites"
// 	},
// 	{
// 		id: 2,
// 		image: require('../../assets/images/Rectangle21751.png'),
// 		title: "Spa & Wellness",
// 		meta: "28 Activites"
// 	},
// 	{
// 		id: 3,
// 		image: require('../../assets/images/Rectangle21752.png'),
// 		title: "Museum of Islamic Art",
// 		meta: "28 Activites"
// 	},
//     {
// 		id: 4,
// 		image: require('../../assets/images/Rectangle21750.png'),
// 		title: "Sightseeing",
// 		meta: "28 Activites"
// 	},
// ]

// const picks = data.map((pick, index) => {
// return(
//     <div className="pick-box">
//         <a href="/">
//             <img src={pick.image} key={index} alt="pick" />
//         </a>
//         <p key={index} className="pick-title">{pick.title}</p>
//         <p key={index} className="pick-des">{pick.meta}</p>
//     </div>
// )
// })

const LetExplore = ({ data, isLoading, isSuccess, isError }) => {

    var settings = {
        dots: false,
        lazyLoad: 'progressive',
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3.11,
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
        <section className="top-picks explore-block">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h3>Let’s Explore</h3>
                    </Col>
                    <Col lg={6}></Col>
                </Row>
                <Row className="bottom-line">
                    <Col>
                        <Slider {...settings}>
                            {/* {picks} */}
                            {isSuccess == true ? data.categories.map((e) => {
                                return (
                                    <div className="pick-box">
                                        <a href="/">
                                            <img src={e.categories_img} alt="pick" />
                                        </a>
                                        <p className="pick-title">{e.categories_name}</p>
                                        <p className="pick-des">ME</p>
                                    </div>
                                )
                            }) : null}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LetExplore;
