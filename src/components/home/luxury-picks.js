import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
// import { getPackages } from '../../api_utils';
// import { useQuery } from 'react-query';

// const dataa = [
// 	{
// 		id: 1,
// 		image: require('../../assets/images/a1.png'),
// 		title: "Luxury Activity Name"
// 	},
// 	{
// 		id: 2,
// 		image: require('../../assets/images/a2.png'),
// 		title: "Luxury Activity Name"
// 	},
// 	{
// 		id: 3,
// 		image: require('../../assets/images/a3.png'),
// 		title: "Luxury Activity Name"
// 	},
//     {
// 		id: 4,
// 		image: require('../../assets/images/a4.png'),
// 		title: "Luxury Activity Name"
// 	},
//     {
// 		id: 5,
// 		image: require('../../assets/images/a5.png'),
// 		title: "Luxury Activity Name"
// 	},
//     {
// 		id: 6,
// 		image: require('../../assets/images/a1.png'),
// 		title: "Luxury Activity Name"
// 	},
// ]

// const luxury = dataa.map(l => {
//     return(
//         <div className="pick-box">
//             <a href="/destination-page">
//                 <img src={l.image} alt="pick" />
//             </a>
//             <p className="pick-title">{l.title}</p>
//         </div>
//     )
// })

const LuxuryPicks = ({ data }) => {


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

    const jj = (event, param) => {
        localStorage.setItem("subcategories",JSON.stringify(param.subCategoryId));
        localStorage.setItem("categoryName",param.name);
        window.location.href=`/list-of-activities`;
    }

    return (
        <section className="top-picks activities-near">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h3>Luxury Picks</h3>
                        <a href='/list-of-activities-nearby'>View More <FontAwesomeIcon icon={faArrowRightLong} /></a>
                    </Col>
                    <Col lg={6}></Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Slider {...settings}>
                            {/* {luxury} */}
                            {data.error == false ? data.payload.luxuryPicks.map((e) => {
                        
                                    return (
                                        <div key={e} className="pick-box" onClick={event => jj(event, e)} >
                                            <a >
                                                <img src={e.photoUrl} alt="pick" />
                                            </a>
                                            <p className="pick-title">{e.name}</p>
                                        </div>
                                    )
                                // }
                                
                            }) : null}
                            
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LuxuryPicks;
