import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { ProgressBar } from 'react-bootstrap';

const data = [
	{
		id: 1,
		image: require('../../assets/images/Ellipse17.png'),
		title: "Jane Cooper",
        star: "5.0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque ullamcorper pellentesque nec vitae.",
        r1: '',
        r2: '',
        r3: ''
	},
	{
		id: 2,
		image: require('../../assets/images/Ellipse17.png'),
		title: "Jane Cooper",
		star: "5.0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque ullamcorper pellentesque nec vitae.",
        r1: '',
        r2: '',
        r3: ''
	},
    {
		id: 3,
		image: require('../../assets/images/Ellipse17.png'),
		title: "Jane Cooper",
        star: "5.0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque ullamcorper pellentesque nec vitae.",
        r1: require('../../assets/images/r1.png'),
        r2: require('../../assets/images/r2.png'),
        r3: require('../../assets/images/r3.png')
	},
	{
		id: 4,
		image: require('../../assets/images/Ellipse17.png'),
		title: "Jane Cooper",
		star: "5.0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque ullamcorper pellentesque nec vitae.",
        r1: require('../../assets/images/r1.png'),
        r2: require('../../assets/images/r2.png'),
        r3: require('../../assets/images/r3.png')
	},
]

const reviews = data.map(r => {
    return(
        <div className="review-box">
            <div className="d-flex align-content-center mb-3">
                <img src={r.image} alt="wishlist" className="user-img" />
                <div>
                    <p className="my-txt">{r.title}</p>
                    <p className="my-star"><img src={require('../../assets/images/Group3.png')} alt="star" /> {r.star}</p>
                </div>
            </div>
            <p className="">{r.description}</p>
            <div className="multi-imgs">
                <img src={r.r1} className="user-img" />
                <img src={r.r2} className="user-img" />
                <img src={r.r3} className="user-img" />
            </div>
        </div>
    )
})

const Reviews = () => {
    return (
        <section className="my-reviews reviews-box">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="review-left">
                            <h3>Reviews</h3>
                            <a href={() => true}>View More <FontAwesomeIcon icon={faArrowRightLong} /></a>
                            <div className="total-star">
                                <p className="total">5.0</p>
                                <div>
                                    <img src={require('../../assets/images/Group3.png')} alt="star" />
                                    <p className="based">based on 30 reviews</p>
                                </div>
                            </div>
                            <div>
                                <div className="progress-block">
                                    <span>Excellent</span>
                                    <ProgressBar now={80} />
                                </div>
                                <div className="progress-block">
                                    <span>Good</span>
                                    <ProgressBar now={50} />
                                </div>
                                <div className="progress-block">
                                    <span>Average</span>
                                    <ProgressBar now={40} />
                                </div>
                                <div className="progress-block">
                                    <span>Below Average</span>
                                    <ProgressBar now={20} />
                                </div>
                                <div className="progress-block">
                                    <span>Poor</span>
                                    <ProgressBar now={10} />
                                </div>
                            </div>
                            <Button className="review-btn">Write a review</Button>
                            <p className="write-txt">Write a review & earn loyalty points to get discounts, offers on packages.</p>
                        </div>
                    </Col>
                    <Col lg={8}>
                        {reviews}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Reviews;
