import React, { useEffect, useState} from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import women from "../assets/images/women.png";
import { getSlotsPackage } from '../api_utils';
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));


const PackagePage = () => {
    const [url, setUrl] = useState();

    useEffect(() => {
        document.title = "Package Page - Qool Qatar";
        (async () => {
            const data = await getSlotsPackage(JSON.parse(localStorage.getItem('selectedPackageData'))?._id);
            // setData(!data.error && data.payload);

            localStorage.setItem("slotsAvailable", JSON.stringify(!data.error && data.payload));
            if(JSON.parse(localStorage.getItem('Profile_Data')).error) {
                setUrl(`/signIn/?booking=true&slot=${data?.payload?.times?.length}`);
            }else if(data.payload?.times.length > 0) {
                setUrl("/book-package");
            } else {
                setUrl(
                    "/booking"
                );
            }
        })();
      }, []);
    const [data, setData] = useState(JSON.parse(localStorage.getItem("selectedPackageData")));
    return (
        <MainPage>
            <section>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul className="breadcrumb">
                                <li>Adventure</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>List of Vendors</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>Package</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5}>
                        <div className="pick-left">
                            <img src={data?.photoUrl} className="pac-img" alt="package" />
                            <ul className="img-list">
                                {data?.photos?.map((id) => 
                                        <li><img src={id} alt="small"/></li> 
                                        )}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="package-info">
                                <div style={{display:
                                    "flex", justifyContent: "spaceBetween", alignItems: "center"}}>
                                    <p className="title">{data.name}</p>
                                    {data.isFemale && <img src={women}/>}

                                </div>
                               
                                <p className="location">{data.address}</p>
                                <p className="price"><span>QAR {data.price}/</span>person</p>
                                <p className="content">{data.description}</p>
                                <p className="additional">Additional Info</p>
                                <ul className="features">
                                    <li><img src={require('../assets/images/clock.png')} alt="clock" /> Duration: {data.startHour} - {data.endHour}</li>
                                    <li><img src={require('../assets/images/cloud.png')} alt="cloud" /> Opening Hours: Monday - Sunday</li>
                                    <li><img src={require('../assets/images/check.png')} alt="check" /> Taking Covid-19 Safety Measures</li>
                                    <li><img src={require('../assets/images/home.png')} alt="home" /> Hotel Pickup Offered</li>
                                </ul>
                                <a href={url}><Button className="book-btn">Book now</Button></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </MainPage>
    )
}

export default PackagePage;
