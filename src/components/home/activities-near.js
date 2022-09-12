import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

// const data = [
// 	{
// 		id: 1,
// 		image: require('../../assets/images/a1.png'),
// 		title: "Activity Name"
// 	},
// 	{
// 		id: 2,
// 		image: require('../../assets/images/a2.png'),
// 		title: "Activity Name"
// 	},
// 	{
// 		id: 3,
// 		image: require('../../assets/images/a3.png'),
// 		title: "Activity Name"
// 	},
//     {
// 		id: 4,
// 		image: require('../../assets/images/a4.png'),
// 		title: "Activity Name"
// 	},
//     {
// 		id: 5,
// 		image: require('../../assets/images/a5.png'),
// 		title: "Activity Name"
// 	},
//     {
// 		id: 6,
// 		image: require('../../assets/images/a1.png'),
// 		title: "Activity Name"
// 	},
// ]

// const activities = data.map(a => {
//     return(
//         <div key={a} className="pick-box">
//             <a href="/destination-page">
//                 <img src={a.image} alt="pick" />
//             </a>
//             <p className="pick-title">{a.title}</p>
//         </div>
//     )
// })

const ActivitiesNear = ({ data }) => {
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

    const redirectTo = (param) => {
        localStorage.setItem("subcategories",JSON.stringify(param.subCategoryId));
        localStorage.setItem("categoryName", "Activities Nearby");
        window.location.href=`/list-of-activities`;
    }


    return (
        <section className="top-picks activities-near">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h3>Activities Nearby</h3>
                        {/* <a href={() => true}>View More <FontAwesomeIcon icon={faArrowRightLong} /></a> */}
                        <a href='list-of-activities-nearby'>View More <FontAwesomeIcon icon={faArrowRightLong} /></a>
                    </Col>
                    <Col lg={6}></Col>
                </Row>
                <Row className="bottom-line">
                    <Col>
                        <Slider {...settings}>
                            {/* {activities} */}
                            
                            {data.error == false ? data.payload.nearByPackages.map((e) => {
                                return (
                                    <div key={e} className="pick-box" onClick={() => redirectTo(e)}>
                                        <a> <img src={e.photoUrl} alt="pick" />
                                        </a>
                                        <p className="pick-title">{e.name}</p>
                                        <p className="pick-des">{e.subCategoryId.packages.length>=1 && e.subCategoryId.packages.length + " Partners Available"}</p>
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

export default ActivitiesNear;
