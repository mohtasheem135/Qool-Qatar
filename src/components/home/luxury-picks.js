import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { getPackages } from '../../api_utils';
import { useQuery } from 'react-query';


// const data = [
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

// const luxury = data.map(l => {
//     return(
//         <div className="pick-box">
//             <a href="/destination-page">
//                 <img src={l.image} alt="pick" />
//             </a>
//             <p className="pick-title">{l.title}</p>
//         </div>
//     )
// })

const LuxuryPicks = ({ data, isLoading, isSuccess, isError }) => {


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
        console.log(param);
        localStorage.setItem('topPicks_destination', JSON.stringify(param));
        localStorage.setItem('topPicks_destination_lat', JSON.stringify(param.location.coordinates[0]));
        localStorage.setItem('topPicks_destination_lng', JSON.stringify(param.location.coordinates[1]));
        Object.keys(param.photos).map((id, index) => {
            console.log("gg " + param.photos[id])
        })
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
                            {isSuccess == true ? data.payload.luxuryPicks.map((e) => {
                                // console.log(e.isTopPicks)
                                // if(e.isLuxuryPicks==true){
                                    return (
                                        <div key={e} className="pick-box">
                                            <a onClick={event => jj(event, e)} href='/destination-page'>
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
