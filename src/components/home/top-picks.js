import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";
import { getSubCategory } from '../../api_utils';
import { useQuery } from 'react-query';

const TopPicks = () => {
    const { data, isLoading, isError, isSuccess } = useQuery('subCategory', getSubCategory);
    
    localStorage.setItem("subcategories",JSON.stringify(data?.payload));
        

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
    
        localStorage.setItem('packageCategoryId', param._id);
       
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
                            {isSuccess == true ? data.payload.map((e) => {
                                return (
                                    <div key={e} className="pick-box">
                                        <a onClick={event => jj(event, e)} href='/destination-page' >
                                       
                                            <img src={e.photoUrl} alt="pick" />
                                        </a>
                                        <p className="pick-title">{e.name}</p>
                                        <p className="pick-des">{e.address}</p>

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
