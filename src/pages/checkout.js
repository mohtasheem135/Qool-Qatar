import React, { useEffect, useState} from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import StripeCheckout from 'react-stripe-checkout';
import Axios from 'axios';
import "../assets/css/Pages.css"
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));

const Checkout = () => {
    useEffect(() => {
        document.title = "Checkout - Qool Qatar";

        console.log(localStorage.getItem('booking_FirstName'))
        console.log(localStorage.getItem('booking_LastName'))
        console.log(localStorage.getItem('booking_Email'))
        console.log(localStorage.getItem('booking_Mobile'))
        console.log(localStorage.getItem('booking_Guests'))
        console.log(process.env.REACT_APP_PUBLISABLE_KEY)
        // fetchD()
        
        
      }, []);
      const fetchD= async ()=> {
        const {data} = await Axios.get(`/profile/self`)
        console.log(data);
      }

      const [product, setProduct] = useState({
          name: "Booking Event Name",
          price: '100',
      })

      const makePayment = token => {
        // const formData = new FormData();
        // formData.append('token', token)
        // formData.append('product', product)
          const body ={
              token,
              product
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
              console.log(response)
              const {status} = response
              console.log(status)
          })
          .catch(err => {console.log(err)})
      }

    return (
        <MainPage>
            <section className="booking-box1">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul className="breadcrumb">
                                <li>Events</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>Qatar Motor Show</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>Booking</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
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
                            <img src={require('../assets/images/event1.png')} className="booking-img" alt="big"/>
                        </Col>
                        <Col lg={10}>
                            <div className="booking-form checkout-box">
                                <p className="review">Review your booking details and proceed to payment</p>
                                <p className="selected">Selected Event</p>
                                <p className="item">Qatar Motor Show</p>
                                <div className="sub-item">
                                    <p>
                                        <span>Event ticket x 2</span>
                                        <span>$100.00</span>
                                    </p>
                                    <p>
                                        <span>Tax</span>
                                        <span>$0.00</span>
                                    </p>
                                    <p className="total-price">
                                        <span>Total:</span>
                                        <span>${product.price}</span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="about-info checkblock1">
                        <Col lg={2}>
                            <p className="sub-info"><img src={require('../assets/images/Calendar.png')} alt="calendar" /> Sat, 1 Oct</p>
                            <p className="sub-info"><img src={require('../assets/images/Location.png')} alt="location" /> West Bay, Doha, Qatar</p>
                            <p className="sub-info"><img src={require('../assets/images/Time-Circle.png')} alt="time" /> 6 Hours</p>
                            <p className="sub-info"><img src={require('../assets/images/2User.png')} alt="user" /> All age group</p>
                        </Col>
                        <Col lg={10}>
                            <div className="booking-form sub-info1">
                                <div>
                                    <p className="detail1">Your Details</p>
                                    <p className="name">{localStorage.getItem('booking_FirstName')} {localStorage.getItem('booking_LastName')}</p>
                                    <p className="contact">{localStorage.getItem('booking_Email')}</p>
                                    <p className="contact">{localStorage.getItem('booking_Mobile')}</p>
                                </div>
                                <div className="no-guest">
                                    <p className="no1">{localStorage.getItem('booking_Guests')}</p>
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
                                name="Qool Qatar"
                                description="Big Data Stuff"
                                image={JSON.parse(localStorage.getItem('Profile_Data')).payload.profilePic}
                                ComponentClass="mess"
                                stripeKey={process.env.REACT_APP_PUBLISABLE_KEY}
                                token={makePayment}
                                amount={product.price*100}
                                >
                                    <button className='payment-btn' style={{backgroundColor: '#A2195B', border: 'none', color:'white'}}>Proceed to pay</button>
                                </StripeCheckout>
                                {/* <button onClick={fetchD}>Click</button> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </MainPage>
    )
}

export default Checkout;
