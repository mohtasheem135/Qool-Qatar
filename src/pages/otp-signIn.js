import React, { useEffect, useState } from 'react';
import firebase from '../firebase';
import { useNavigate } from 'react-router';
import PhoneInput from "react-phone-number-input";
// import "../App.css";
import "../OTPSignIn.css"
import "react-phone-number-input/style.css";
import OTPInput, { ResendOTP } from "otp-input-react";


const OTPSignIN = () => {

  const [number, setNumber] = useState('');
  const [click, setClick] = useState(false);
  const [OTP, setOTP] = useState("");
  const [code, setCode] = useState('QA');

  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      fetch(`http://api.geonames.org/findNearbyPlaceNameJSON?lat=${position.coords.latitude}&lng=${position.coords.longitude}&username=azad1350`)
        .then((response) => response.json())
        .then(data => {
          console.log(data.geonames[0].countryCode)
          setCode(data.geonames[0].countryCode)
        });
    });
  }, [])

  const configureCaptcha = () => {

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log("Recaptca varified")
        // handleNumber();
      },
      defaultCountry: code
    });
  }

  const handleNumber = (e) => {
    setClick(true)
    e.preventDefault()
    configureCaptcha()
    const phoneNumber = number
    // console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent")
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error)
        console.log("SMS not sent")
      });
  }

  const handleOTP = (e) => {
    // console.log("k"+OTP)
    e.preventDefault()
    const code = OTP
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      // console.log(JSON.stringify(user))
      alert("User is verified")
      navigate('/')
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

  const resend = (e) => {
    configureCaptcha()
    const phoneNumber = number
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent")
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error)
        console.log("SMS not sent")
      });
  }


  // Captcha


  return (
    <div>
      <div className='signIn-container'>
        {click == false ?
          <div className='signIn-container-1'>
            <p className='signIn-container-1-p'>Sign-in to experience the best of <p className='signIn-container-1-p-2'>Qatar</p></p>
            <label className='signIn-container-1-label'>Enter Phone Number</label>
            <PhoneInput
              defaultCountry={code}
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
              className='inp'
            />
            <div id='recaptcha-container'></div>
            <button onClick={handleNumber} className='signIn-container-1-btn'>Get OTP</button>

          </div>
          :
          <div className='signIn-container-1'>
            <div id='recaptcha-container'></div>
            <p className='signIn-container-1-p'>Enter OTP</p>
            <p className='signIn-container-1-p-3'>OTP Sent to {number}</p>
            <OTPInput className='otp-inp' value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure={false} />
            {/* <ResendOTP onResendClick={resend} /> */}
            <button onClick={handleOTP} className='signIn-container-1-btn'>Get Started</button>
          </div>
        }
      </div>
    </div>
  )
}

export default OTPSignIN