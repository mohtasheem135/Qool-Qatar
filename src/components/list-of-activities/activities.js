import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useNavigate } from 'react-router';



const data = [
    {
        id: 1,
		image: require('../../assets/images/of1.png'),
		title: "Sauq Waqif",
		company: "Day n Tours",
        category: "Sightseeing"
    },
    {
        id: 2,
		image: require('../../assets/images/of2.png'),
		title: "Sea Facing Spa",
		company: "Falcon Tours",
        category: "Luxury"
    },
    {
        id: 3,
		image: require('../../assets/images/of3.png'),
		title: "Desert Safari",
		company: "Falcon Tours",
        category: "Adventure"
    },
    {
        id: 4,
		image: require('../../assets/images/of3.png'),
		title: "Desert Safari",
		company: "Falcon Tours",
        category: "Adventure"
    },
    {
        id: 5,
		image: require('../../assets/images/of2.png'),
		title: "Sea Facing Spa",
		company: "Falcon Tours",
        category: "Luxury"
    },
    {
        id: 6,
		image: require('../../assets/images/of4.png'),
		title: "Trecking",
		company: "Falcon Tours",
        category: "Adventure"
    },
    {
        id: 7,
		image: require('../../assets/images/of3.png'),
		title: "Desert Safari",
		company: "Falcon Tours",
        category: "Adventure"
    },
    {
        id: 8,
		image: require('../../assets/images/of2.png'),
		title: "Sea Facing Spa",
		company: "Falcon Tours",
        category: "Luxury"
    },
    {
        id: 9,
		image: require('../../assets/images/of4.png'),
		title: "Trecking",
		company: "Falcon Tours",
        category: "Adventure"
    },
]


const activities = data.map(a => {
    return(
        <Col lg={4}>
            <div className="activity">
                <img src={a.image} alt="place" />
                <p className="title">{a.title}</p>
                <p className="company">By <a href='/vendor-page'>{a.company}</a></p>
                <p className="my-cat">{a.category}</p>
            </div>
        </Col>
    )
})

const Activities = () => {

    const navigate = useNavigate();

    const handelClick=()=> {
        navigate('/destination-page')
        window.location.reload()
    }

    return (
        <section className="activity-box">
            <Container onClick={handelClick}>
                <Row>
                    {activities}
                </Row>
            </Container>
        </section>
    )
}

export default Activities;
