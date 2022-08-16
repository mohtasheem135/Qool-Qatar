import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";
// import { getSubCategory } from "../../api_utils"
import { getSubCategory } from '../../api_utils';
import { useQuery } from 'react-query';

// const dataa = [
//     {
//         id: 1,
//         image: require('../../assets/images/Rectangle11.png'),
//         title: "Sauq Waqif",
//         meta: "Doha, Qatar"
//     },
//     {
//         id: 2,
//         image: require('../../assets/images/Rectangle12.png'),
//         title: "Katara Cultural Village",
//         meta: "Doha, Qatar"
//     },
//     {
//         id: 3,
//         image: require('../../assets/images/Rectangle13.png'),
//         title: "Museum of Islamic Art",
//         meta: "Doha, Qatar"
//     },
//     {
//         id: 4,
//         image: require('../../assets/images/Rectangle14.png'),
//         title: "National Museum of Qatar",
//         meta: "Doha, Qatar"
//     },
//     {
//         id: 5,
//         image: require('../../assets/images/Rectangle11.png'),
//         title: "Sauq Waqif",
//         meta: "Doha, Qatar"
//     },
// ]



// const picks = dataa.map(p => {
//     return (
//         <div key={p} className="pick-box">
//             <a href="/destination-page">
//                 <img src={p.image} alt="pick" />
//             </a>
//             <p className="pick-title">{p.title}</p>
//             <p className="pick-des">{p.meta}</p>
//         </div>
//     )
// })




// const TopPicks = ({ data }) => {
const TopPicks = () => {
    const { data, isLoading, isError, isSuccess } = useQuery('subCategory', getSubCategory);
    


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

    const jj = (event, param) => {
        console.log(param);
        console.log(param.coordinates.lat);
        // console.log(JSON.stringify(param.coordinates.lat));
        localStorage.setItem('topPicks_destination', JSON.stringify(param));
        // localStorage.setItem('topPicks_destination_lat', JSON.stringify(param.location.coordinates[0]));
        // localStorage.setItem('topPicks_destination_lng', JSON.stringify(param.location.coordinates[1]));
        localStorage.setItem('topPicks_destination_lat', JSON.stringify(param.coordinates.lat));
        localStorage.setItem('topPicks_destination_lng', JSON.stringify(param.coordinates.long));
        Object.keys(param.photos).map((id, index) => {
            console.log("gg " + param.photos[id])
        })
    }

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
                            {/* {picks} */}

                            {/* {data.error == false ? data.payload.topPicks.map((e) => {

                                return (
                                    <div key={e} className="pick-box">
                                        <a onClick={event => jj(event, e)} href='/destination-page' >
                                            <img src={e.photoUrl} alt="pick" />
                                        </a>

                                        <p className="pick-title">{e.name}</p>
                                    </div>
                                )

                            }) : null} */}

                            {isSuccess == true ? data.payload.map((e) => {
                                return (
                                    <div key={e} className="pick-box">
                                        <a onClick={event => jj(event, e)} href='/destination-page' >
                                        {/* <a onClick={event => jj(event, e)}  > */}
                                            <img src={e.photoUrl} alt="pick" />
                                        </a>
                                        <p className="pick-title">{e.name}</p>
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

export default TopPicks;
