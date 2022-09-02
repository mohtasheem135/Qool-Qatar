import React, {useState} from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";
import Axios from 'axios';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/css/Pages.css";



const BestDeals = ({data}) => {
    const [responseData, setAddedData] = useState([]);
    var settings = {
        dots: false,
        lazyLoad: 'progressive',
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow:1,
					slidesToScroll: 1
				}
			}
		]
    };

    async function addToWishlist(id) {
        const { data } = await Axios.post('/customer/addtowishlist', {
            userId: JSON.parse(localStorage.getItem('Profile_Data'))?.payload?.uid,
            packageId: id
        });
       !data.error && setAddedData([...responseData, id]);
    }
    
    async function removeFromWishlist(id) {
        const { data } = await Axios.post('/customer/removetowishlist', {
            userId: JSON.parse(localStorage.getItem('Profile_Data'))?.payload?.uid,
            packageId: id
        });
        let newList = !data.error && responseData?.filter(addedId=> id !== addedId);
        setAddedData(newList);
    }
    
    const deals = (data) => {
        const {packageId: d} = data;
        return (
            <div key={d._id} className="pick-box deal-box">
            <a href="/">
                <img src={d.photoUrl} alt="pick" />
            </a>
            <>
                <div className="like-box">
                    { responseData?.includes(d._id) ? <img src={require('../../assets/images/red-heart.png')} alt="heart" onClick={()=>removeFromWishlist(d._id)}></img>
                        : <img src={require('../../assets/images/heart.png')} alt="heart" onClick={()=>addToWishlist(d._id)} />  
                        
                        }
                </div>
                <p className="pick-title">{d.name}</p>
                <p className="pick-des">{d.address}</p>
                <p>
                    <span className="offer-txt">${d.originalPrice}</span> 
                    <span className="txt1">{d.discount && `(${d.discount}% Off)`}</span>
                </p>
                <p className="start-from">Starts from</p>
                <div className="price-box">
                    <p><span className="main-price">${d?.price}</span><span className="txt1">/Per Person</span></p>
                    <a href='/profile-page?tab=myBookings'><Button>Book</Button></a>
                </div>
            </>
        </div>
       )
    }

    return (
        // <section className="top-picks deal-picks">
        <section className="top-picks deal-picks">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h3>Best Monthly Deals</h3>
                        <a className='best-deals-view-link' href='/best-dealss'>View More <FontAwesomeIcon icon={faArrowRightLong} /></a>
                    </Col>
                    {/* <Col lg={6}></Col> */}
                </Row>
                <Row className="bottom-line">
                    <Col>
                        <Slider {...settings}>
                            {data?.payload?.monthDeal?.packages?.map(pack=> deals(pack))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BestDeals;
