import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";
import ReactPlayer from 'react-player';
import HoverVideoPlayer from 'react-hover-video-player';
import "../../assets/css/Pages.css"

// const data = [
//     {
//         id: 1,
//         image: require('../../assets/images/Rectangle21750.png'),
//         title: "Sightseeing",
//         meta: "28 Activites"
//     },
//     {
//         id: 2,
//         image: require('../../assets/images/Rectangle21751.png'),
//         title: "Spa & Wellness",
//         meta: "28 Activites"
//     },
//     {
//         id: 3,
//         image: require('../../assets/images/Rectangle21752.png'),
//         title: "Museum of Islamic Art",
//         meta: "28 Activites"
//     },
//     {
//         id: 4,
//         image: require('../../assets/images/Rectangle21750.png'),
//         title: "Sightseeing",
//         meta: "28 Activites"
//     },
// ]

// const picks = data.map((pick, index) => {
//     return (
//         <div className="pick-box">
//             <a href="/">
//                 <img src={pick.image} key={index} alt="pick" />
//             </a>
//             <p key={index} className="pick-title">{pick.title}</p>
//             <p key={index} className="pick-des">{pick.meta}</p>
//         </div>
//     )
// })

const LetExplore = ({ data }) => {

    var settings = {
        dots: false,
        lazyLoad: 'progressive',
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2.95,
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


                            {data.error == false ? data.payload.category.map((e) => {
                                return (
                                    <div key={e} className="pick-box">
                                        {/* <a href="/list-of-activities"> <img src={e.photoUrl} alt="pick" />
                                        </a> */}

                                        <ReactPlayer
                                            className="videoFrame"
                                            // url='https://asdasd.sgp1.cdn.digitaloceanspaces.com/assets/463c6439-47e1-4ac0-8ae3-a3d688561fc0Pocket_Watch_a10___25s___4k_res.mp4'
                                            url={e.videoUrl}
                                            // light={e.photoUrl}
                                            width="90%"
                                            height="70%"
                                            playIcon
                                            // width={400}
                                            // height={240}
                                            playing
                                            muted
                                            // controls
                                            loop
                                        />
                                        <p className="pick-title">{e.name}</p>
                                        <p className="pick-des">28 Activities</p>
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
