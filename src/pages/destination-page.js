import mapboxGl from 'mapbox-gl';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import ReactPlayer from 'react-player';
import 'mapbox-gl/dist/mapbox-gl.css';
import "../assets/css/Pages.css";
import { getSingleSubCategory } from '../api_utils';

const MainPage = React.lazy(() => import('../components/main-page/main-page'));
const ExperiencePlace = React.lazy(() => import('../components/destination-page/experience-place'));




const DestinationPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
     
        document.title = "Destination Page - Qool Qatar";
         var packageData;
        let id =  localStorage.getItem("packageCategoryId");
        (async () => {
            packageData = await getSingleSubCategory(id);
            setData(packageData?.payload);

        let lat = packageData?.payload?.coordinates?.[1];
        let long = packageData?.payload?.coordinates?.[0];
        localStorage.setItem("packageData", JSON.stringify(packageData?.payload));

       //MAP
        mapboxGl.accessToken = 'pk.eyJ1IjoibWVhemFkMTM1MCIsImEiOiJjbDVwbGNncTIwYmFpM2tuMnY3eHBlM2VhIn0._eM88ThriAOOttj-IY7OGQ';
        const map = new mapboxGl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [long, lat], // starting position [lng, lat]
            zoom: 13, // starting zoom
            // projection: 'globe' // display the map as a 3D globe
        }, { attributionControl: false }
        )

        const marker = new mapboxGl.Marker({ color: "#A2195B", draggable: false })
            .setLngLat([long, lat])
            .setPopup(new mapboxGl.Popup().setHTML(packageData?.payload?.name))
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
    })();
 
}, []);


    return (
        <MainPage>
            <section className="destination-page">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul className="breadcrumb">
                                <li>Top Picks</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow" /></li>
                                <li>{data?.name}</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="destination-info">
                        <Col lg={4}>
                            <div className="pick-left">
                                
                                <ReactPlayer url={data?.videoUrl} className="video-player" width="100%" height="450" controls volume/>
                                {/* <img src={require('../assets/images/Rectangle37-Palette.png')} alt="big"/> */}
                                {/* <img src={data.photoUrl} alt="big" />
                                <div className="play-box">
                                    <img src={require('../assets/images/Play.png')} alt="play" />
                                </div>
                                <div className="volumn-box">
                                    <img src={require('../assets/images/volume-x.png')} alt="volumn" />
                                </div> */}
                                <ul className="img-list">
                                   
                                    {data?.photos?.map((id) => 
                                       <li><img src={id} alt="small"/></li> 
                                    )}

                                </ul>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="pick-right">
                                <h1>{data?.name}</h1>
                                <p className="location">{data?.address}</p>
                                {/* <p className="pick-txt">Souq Waqif is a marketplace in Doha, in the state of Qatar. The souq sells traditional garments, spices, handicrafts, and souvenirs. <a href="/">Read more</a></p> */}
                                <p className="pick-txt">{data?.description}<a href="/">Read more</a></p>
                                {/* <img src={require('../assets/images/Mapsicle-Map.png')} alt="map" /> */}

                                <div id='map' className='mapp' />

                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <div className="destination-bottom"></div>
                </Container>
            </section>
            <ExperiencePlace />
        </MainPage>
    )
}

export default DestinationPage;
