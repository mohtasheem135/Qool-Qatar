import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import StripeCheckout from 'react-stripe-checkout';
import Axios from 'axios';
import { useNavigate } from 'react-router';
import "../assets/css/Pages.css"
const MainPage = React.lazy(() => import('../components/main-page/main-page'));

const Checkout = () => {
    const navigate = useNavigate();

    const [data, setData] = useState(JSON.parse(localStorage.getItem('selectedPackageData')));
    const [productDetails, setProductDetails] = useState();

    useEffect(() => {
        document.title = "Checkout - Qool Qatar";

        // setData(JSON.parse(localStorage.getItem('selectedPackageData')));
        setProductDetails({
            ...productDetails,
            firstName: localStorage.getItem('booking_name'),
            lastName: localStorage.getItem('booking_lastName'),
            email: localStorage.getItem('booking_email'),
            mobileNumber: localStorage.getItem('booking_mobileNumber'),
            guests: localStorage.getItem('booking_guests'),
            packageId: data._id,
            packageName: data.name,
            eventDate: data.eventDate,
            eventAddress: data.address,
            packageHours: data.hours,
            photoUrl: data.photoUrl,
            price: data.price,
            tax: data.tax || 0
        })
    

    }, []);



   
    const makePayment = async token => {
        const body = {
            ...token,
            ...productDetails
        }

        const headers = {
            "Content-Type": "application/json"
        }

        fetch('https://qoolqatar.com/api/v1/payment/init', {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
            .then(response => {
                // const {data} = await Axios.post('/payment/completed')
                console.log(response)
                const { ok } = response
                if (ok) {
                    sendData()
                }

                console.log(ok)
            })
            .catch(err => { console.log(err) })
    }

    async function sendData() {

        const formData = new FormData();
        // formData.append('productDetails', productDetails)
        formData.append('firstName', localStorage.getItem('booking_FirstName'))
        formData.append('lastName', localStorage.getItem('booking_LastName'))
        formData.append('email', localStorage.getItem('booking_Email'))
        formData.append('mobileNumber', localStorage.getItem('booking_Mobile'))
        formData.append('guests', localStorage.getItem('booking_Guests'))
        formData.append('packageName', data.name)
        formData.append('eventDate', data.eventDate)
        formData.append('eventAddress', data.eventAddress)
        formData.append('packageHours', data.hours)
        formData.append('photoUrl', data.photoUrl)
        formData.append('packageId', data.packageId)

        const { data } = await Axios.post('/payment/completed', formData);
        console.log(data)
        if (data.error != true) {
            navigate('/booking-after-payment')
            window.location.reload();
           
        }

    }

    function jj() {
        const formData = new FormData();
        // formData.append('productDetails', productDetails)
        formData.append('firstName', localStorage.getItem('booking_name'))
        formData.append('lastName', localStorage.getItem('booking_lastName'))
        formData.append('email', localStorage.getItem('booking_email'))
        formData.append('mobileNumber', localStorage.getItem('booking_mobileNumber'))
        formData.append('guests', localStorage.getItem('booking_guests'))
        // formData.append('packageName', data.name)
        // formData.append('eventDate', data.eventDate)
        // formData.append('eventAddress', data.address)
        // formData.append('packageHours', data.hours)
        // formData.append('photoUrl', data.photoUrl)

        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
    }


    return (
        <MainPage>
            <section className="booking-box1">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul className="breadcrumb">
                                <li>Events</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow" /></li>
                                <li>{data.name}</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow" /></li>
                                <li>Booking</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow" /></li>
                                <li>Checkout</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={10}>
                            <div className="booking-form">
                                <p className="title">Checkout</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="about-info checkblock1">
                        <Col lg={2}>
                            <img src={data.photoUrl} className="booking-img" alt="big" />
                        </Col>
                        <Col lg={10}>
                            <div className="booking-form checkout-box">
                                <p className="review">Review your booking details and proceed to payment</p>
                                <p className="selected">Selected Event</p>
                                <p className="item">{data.name}</p>
                                <div className="sub-item">
                                    <p>
                                        <span>Event ticket x {parseInt(productDetails?.guests)}</span>
                                        <span>QAR {productDetails?.price * parseInt(productDetails?.guests)}.00</span>
                                    </p>
                                    <p>
                                        <span>Tax</span>
                                        <span>QAR {productDetails?.tax * parseInt(productDetails?.guests)}</span>
                                    </p>
                                    <p className="total-price">
                                        <span>Total:</span>
                                        <span>QAR {productDetails?.price * parseInt(productDetails?.guests) + (productDetails?.tax * parseInt(productDetails?.guests))}</span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="about-info checkblock1">
                        <Col lg={2}>
                            <p className="sub-info"><img src={require('../assets/images/Calendar.png')} alt="calendar" /> Sat, 1 Oct</p>
                            <p className="sub-info"><img src={require('../assets/images/Location.png')} alt="location" /> {data.address}</p>
                            <p className="sub-info"><img src={require('../assets/images/Time-Circle.png')} alt="time" /> {data.hours} Hours</p>
                            <p className="sub-info"><img src={require('../assets/images/2User.png')} alt="user" /> All age group</p>
                        </Col>
                        <Col lg={10}>
                            <div className="booking-form sub-info1">
                                <div>
                                    <p className="detail1">Your Details</p>
                                    <p className="name">{localStorage.getItem('')} {localStorage.getItem('booking_lastName')}</p>
                                    <p className="contact">{localStorage.getItem('booking_email')}</p>
                                    <p className="contact">{localStorage.getItem('booking_mobileNumber')}</p>
                                </div>
                                <div className="no-guest">
                                    <p className="no1">{localStorage.getItem('booking_guests')}</p>
                                    <p className="no2">No. of Guests</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={10}>
                            <div className="booking-form">
                                {/* <a href='/booking-after-payment'><Button className="payment-btn">Proceed to Payment</Button></a> */}
                                {/* <a href='/payment'><Button className="payment-btn">Proceed to Payment</Button></a> */}
                                <StripeCheckout
                                    name={data.name}
                                    description={data.address}
                                    image={JSON.parse(localStorage.getItem('Profile_Data')).payload.profilePic}
                                    stripeKey={process.env.REACT_APP_PUBLISABLE_KEY}
                                    token={makePayment}
                                    currency={"QAR"}
                                    amount={productDetails?.price * parseInt(productDetails?.guests) + (productDetails?.tax * parseInt(productDetails?.guests))}
                                >
                                    <button className='payment-btn' style={{ backgroundColor: '#A2195B', border: 'none', color: 'white' }}>Proceed to pay</button>
                                </StripeCheckout>

                            </div>
                        </Col>
                    </Row>
                    {/* <button onClick={jj}>CLICK</button> */}
                </Container>
            </section>

        
        </MainPage>
    )
}

export default Checkout;
