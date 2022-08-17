import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { useNavigate } from 'react-router';
import 'mapbox-gl/dist/mapbox-gl.css';
import "../assets/css/Pages.css"
import mapboxGl from 'mapbox-gl';
import Axios from 'axios';
import { Link } from 'react-router-dom';
const MainPage = React.lazy(() => import('../components/main-page/main-page'));

const AboutEvent = () => {



    const navigate = useNavigate();
    const [data, setData] = useState('');
    const [url, setUrl] = useState('/signIn')

    useEffect(() => {
        document.title = "About Event - Qool Qatar";

        setData(JSON.parse(localStorage.getItem('upComingEvents_aboutEvent')))

        mapboxGl.accessToken = 'pk.eyJ1IjoibWVhemFkMTM1MCIsImEiOiJjbDVwbGNncTIwYmFpM2tuMnY3eHBlM2VhIn0._eM88ThriAOOttj-IY7OGQ';
        const map = new mapboxGl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [JSON.parse(localStorage.getItem('upComingEvents_aboutEvent')).location.coordinates[0], JSON.parse(localStorage.getItem('upComingEvents_aboutEvent')).location.coordinates[1]], // starting position [lng, lat]
            zoom: 13, // starting zoom
            projection: 'globe' // display the map as a 3D globe
        }, { attributionControl: false }
        )

        const marker = new mapboxGl.Marker({ color: "#A2195B", draggable: false })
            .setLngLat([JSON.parse(localStorage.getItem('upComingEvents_aboutEvent')).location.coordinates[0], JSON.parse(localStorage.getItem('upComingEvents_aboutEvent')).location.coordinates[1]])
            .setPopup(new mapboxGl.Popup().setHTML(JSON.parse(localStorage.getItem('upComingEvents_aboutEvent')).name))
            .addTo(map);
        marker.togglePopup();
        marker.setRotation(10);
        const lngLat = marker.getLngLat();
        console.log(`Longitude: ${lngLat.lng}, Latitude: ${lngLat.lat}`);


        map.addControl(new mapboxGl.NavigationControl({ visualizePitch: false }), 'top-left');

        map.addControl(new mapboxGl.FullscreenControl());

        map.addControl(new mapboxGl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        }));

    }, []);


    const events = (event, param) => {
        console.log(param);
        localStorage.setItem('vendorOage_aboutEvent', param);
        
    }


    return (
        <MainPage>
            <section className="destination-page">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul className="breadcrumb">
                                <li>Events</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow" /></li>
                                <li>{data.name}</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="destination-info about-info">
                        <Col lg={4}>
                            <div className="pick-left">
                                {/* <img src={require('../assets/images/event1.png')} alt="big" /> */}
                                <img src={data.photoUrl} alt="big" />
                                <ul className="img-list">
                                    <li><img src={require('../assets/images/Rectangle38.png')} alt="small" /></li>
                                    <li><img src={require('../assets/images/Rectangle39.png')} alt="small" /></li>
                                    <li><img src={require('../assets/images/Rectangle40.png')} alt="small" /></li>
                                    <li><img src={require('../assets/images/Rectangle41.png')} alt="small" /></li>
                                    <li><img src={require('../assets/images/Rectangle42.png')} alt="small" /></li>
                                    <li><img src={require('../assets/images/Rectangle43.png')} alt="small" /></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="pick-right">
                                <h1>{data.name}</h1>
                                <Row>
                                    <Col lg={6}>
                                        <p className="price-with"><span>${data.price}.00</span>/person</p>
                                        {/* <p className="sub-info"><img src={require('../assets/images/Calendar.png')} alt="calendar" /> Sat, 1 Oct</p> */}
                                        <p className="sub-info"><img src={require('../assets/images/Calendar.png')} alt="calendar" /> {data.eventDate}</p>
                                        <p className="sub-info"><img src={require('../assets/images/Location.png')} alt="location" /> {data.address}</p>
                                        <p className="more-txt">More Information</p>
                                        <p className="sub-info"><img src={require('../assets/images/Time-Circle.png')} alt="time" /> {data.hours}</p>
                                        <p className="sub-info"><img src={require('../assets/images/2User.png')} alt="user" /> All age group</p>
                                        <p className="sub-info"><img src={require('../assets/images/2User.png')} alt="user" /> By <a onClick={event => events(event, data.vendorId)} href='/vendor-page'>{data.vendorName}</a></p>
                                        <p className="about-txt">About</p>
                                    </Col>
                                    <Col lg={6}>
                                        {/* <img src={require('../assets/images/Group2440.png')} className="about-map" alt="map" /> */}
                                        <div id='map' className="aboutMap" />
                                    </Col>
                                </Row>
                                <br />
                                <p className="about-des">{data.description}</p>

                                {/* <p className="about-des">Held under the patronage of H.E. Abdullah bin Nasser bin Khalifa Al Thani, Prime Minister of the State of Qatar, the Qatar Motor Show is one of the most important consumer events in Qatar.</p> */}
                                {/* 
                                <p className="about-des">Qatar Motor Show brings together some of the most notable international car makers showcasing their latest models.</p>

                                <p className="about-des">Exhibitors include many sports, luxury and mid-range car dealers as well as car accessory companies.</p>

                                <p className="about-des">An event not to be missed ! </p> */}
                                <a href={url} >
                                    <Button  className="about-btn">Book now</Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </MainPage>
    )
}

export default AboutEvent;
