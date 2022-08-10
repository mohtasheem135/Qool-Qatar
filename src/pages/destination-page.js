import mapboxGl from 'mapbox-gl';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import 'mapbox-gl/dist/mapbox-gl.css';
import "../assets/css/Pages.css"
const MainPage = React.lazy(() => import('../components/main-page/main-page'));
const ExperiencePlace = React.lazy(() => import('../components/destination-page/experience-place'));




const DestinationPage = () => {
    const [data, setData] = useState('');
    const cord = [{ lat: '23.344315', long: '85.296013' }, { lat: '23.324315', long: '85.266013' }, { lat: '23.544315', long: '85.096013' }]




    useEffect(() => {
        
        document.title = "Destination Page - Qool Qatar";
        setData(JSON.parse(localStorage.getItem('topPicks_destination')))

        // Map
        mapboxGl.accessToken = 'pk.eyJ1IjoibWVhemFkMTM1MCIsImEiOiJjbDVwbGNncTIwYmFpM2tuMnY3eHBlM2VhIn0._eM88ThriAOOttj-IY7OGQ';
        const map = new mapboxGl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [localStorage.getItem('topPicks_destination_lat'), localStorage.getItem('topPicks_destination_lng')], // starting position [lng, lat]
            // center: [85.296013, 23.344315], // starting position [lng, lat]
            zoom: 13, // starting zoom
            // projection: 'globe' // display the map as a 3D globe
        }, { attributionControl: false }
        )

        const marker = new mapboxGl.Marker({ color: "#ff0000", draggable: false })
            .setLngLat([localStorage.getItem('topPicks_destination_lat'), localStorage.getItem('topPicks_destination_lng')])
            .setPopup(new mapboxGl.Popup().setHTML(JSON.parse(localStorage.getItem('topPicks_destination')).name))
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





    return (
        <MainPage>
            <section className="destination-page">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul className="breadcrumb">
                                <li>Top Picks</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow" /></li>
                                <li>{data.name}</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="destination-info">
                        <Col lg={4}>
                            <div className="pick-left">
                                {/* <img src={require('../assets/images/Rectangle37-Palette.png')} alt="big"/> */}
                                <img src={data.photoUrl} alt="big" />
                                <div className="play-box">
                                    <img src={require('../assets/images/Play.png')} alt="play" />
                                </div>
                                <div className="volumn-box">
                                    <img src={require('../assets/images/volume-x.png')} alt="volumn" />
                                </div>
                                <ul className="img-list">
                                    <li><img src={require('../assets/images/Rectangle38.png')} alt="small" /></li>
                                    <li><img src={require('../assets/images/Rectangle39.png')} alt="small" /></li>
                                    <li><img src={require('../assets/images/Rectangle40.png')} alt="small" /></li>
                                    <li><img src={require('../assets/images/Rectangle41.png')} alt="small" /></li>
                                    <li><img src={require('../assets/images/Rectangle42.png')} alt="small" /></li>
                                    <li><img src={require('../assets/images/Rectangle43.png')} alt="small" /></li>

                                    {/* {Object.keys(data.photos).map((id, index) => {
                                        <li><img src={data.photos[id]} alt="small"/></li>
                                    })} */}

                                    {/* <li><img src={data.photos[2]} alt="small"/></li>
                                    <li><img src={data.photos[1]} alt="small"/></li>
                                    <li><img src={data.photos[2]} alt="small"/></li> */}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="pick-right">
                                <h1>{data.name}</h1>
                                <p className="location">{data.address}</p>
                                {/* <p className="pick-txt">Souq Waqif is a marketplace in Doha, in the state of Qatar. The souq sells traditional garments, spices, handicrafts, and souvenirs. <a href="/">Read more</a></p> */}
                                <p className="pick-txt">{data.description}<a href="/">Read more</a></p>
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
