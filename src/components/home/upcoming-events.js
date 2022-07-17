import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const data = [
	{
		id: 1,
		image: require('../../assets/images/u1.png'),
		title: "Event Name",
        date: "Sat, 1 Oct"
	},
	{
		id: 2,
		image: require('../../assets/images/u2.png'),
		title: "Event Name",
        date: "Sat, 1 Oct"
	},
	{
		id: 3,
		image: require('../../assets/images/u3.png'),
		title: "Event Name",
        date: "Sat, 1 Oct"
	},
    {
		id: 4,
		image: require('../../assets/images/u4.png'),
		title: "Event Name",
        date: "Sat, 1 Oct"
	},
    {
		id: 5,
		image: require('../../assets/images/u5.png'),
		title: "Event Name",
        date: "Sat, 1 Oct"
	},
    {
		id: 6,
		image: require('../../assets/images/u1.png'),
		title: "Event Name",
        date: "Sat, 1 Oct"
	},
]

const upcoming = data.map(u => {
    return(
        <div className="pick-box">
            <a href="/about-event">
                <img src={u.image} alt="event" />
            </a>
            <p className="pick-title">{u.title}</p>
            <p className="date-box"><img src={require('../../assets/images/Calendar.png')} alt="calendar" /> {u.date}</p>
        </div>
    )
})

const UpcomingEvents = ({ data, isLoading, isSuccess, isError }) => {

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
        <section className="top-picks activities-near upcoming-box">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h3>Upcoming Events</h3>
                        <a href={() => true}>View More <FontAwesomeIcon icon={faArrowRightLong} /></a>
                    </Col>
                    <Col lg={6}></Col>
                </Row>
                <Row>
                    <Col>
                        <Slider {...settings}>
                            {upcoming}
                            {/* {isSuccess == true ? data.event.map((e) => {
                                return(
                                    <div className="pick-box">
                                        <a href="/">
                                            <img src={e.event_image} alt="event" />
                                        </a>
                                        <p className="pick-title">{e.event_name}</p>
                                        <p className="date-box"><img src={require('../../assets/images/Calendar.png')} alt="calendar" /> {e.start_time}</p>
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

export default UpcomingEvents;
