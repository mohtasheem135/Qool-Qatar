import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";


const ExperiencePlace = () => {
    var settings = {
        dots: false,
        lazyLoad: 'progressive',
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        rows:2,
        responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
                    rows: 1
				}
			}
		]
    };

    const data = JSON.parse(localStorage.getItem("packageData"));

    const selectPackage = (pckg) => {
        localStorage.setItem('selectedPackageData', JSON.stringify(pckg));
    }
    
const places = (pckg) => {
    return pckg?.map(data => {
       const p = data.packageId;
       return(
           <div className="pick-box deal-box place-box">
               <div className="place1">
                   <a href="/">
                       <img src={p.photoUrl} className="place-img" alt="place" width="100" height="160"/>
                   </a>
                   {/* <div className="like-box">
                       <img src={require('../../assets/images/heart.png')} alt="heart" />
                   </div> */}
               </div>
               <div className="place2">
                   <p className="pick-title">{p.name}</p>
                   <p className="pick-by"><a href='/vendor-page' >By {p.vendorName}</a></p>
                   <p className="pick-des">{p.address}</p>
                   <p style={{width:"100%"}}>
                        {p?.offer ? <span className="offer-txt">{ p.offer}</span> : <span className="offer-txt"></span> }
                        {p?.discount ? <span className="txt1">{ p.discount}</span> : <span className="txt1"/>}
                    </p>
                   <p className="start-from">Starts from</p>
                   <div className="price-box">
                       <p><span className="main-price">QAR {p.price}</span><span className="txt1">/Per Person</span></p>
                       <a href='/package-page' onClick={()=>selectPackage(p)}><Button>Book Now</Button></a>
                       
                   </div>
               </div>
           </div>
       )
    
   })
   };
    return (
        <section className="experience-place">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h3>Experience this place</h3>
                        <p className="experience-txt">Explore different ways to experience this place.</p>
                        <Slider {...settings}>
                            {places(data?.packages)}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ExperiencePlace;
