import React, { useEffect, useState } from 'react';
import firebase from '../firebase';
import { useNavigate } from 'react-router';
import PhoneInput from "react-phone-number-input";
// import "../App.css";
import "../assets/css/OTPSignIn.css"
import "react-phone-number-input/style.css";
// import OTPInput, { ResendOTP } from "otp-input-react";
import OtpInput from 'react-otp-input';
import { MdOutlineCancel } from 'react-icons/md';
import { IoIosArrowRoundBack } from 'react-icons/io';



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
    if(number!='') {
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
    } else {
      alert('Enter the Mobile Number')
    }
    
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

  const handelIcon_1 = (e) => {
    e.preventDefault()
    navigate("/")
    window.location.reload()
  }

  const handelIcon_2 = (e) => {
    e.preventDefault()
    setClick(false)
    // navigate("/")
    // window.location.reload()
  }


  return (
    <div>
      <div className='signIn-container'>
        {click == false ?
          <div className='signIn-container-1'>
            <MdOutlineCancel className='icon-1' onClick={handelIcon_1} />
            <p className='signIn-container-1-p'>Sign-in to experience the best of </p>
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
            <MdOutlineCancel className='icon-1' onClick={handelIcon_1} />
            <IoIosArrowRoundBack className='icon-2' onClick={handelIcon_2} />
            <div id='recaptcha-container'></div>
            <p className='signIn-container-2-p'>Enter OTP</p>

            <p className='signIn-container-1-p-3'>OTP Sent to &nbsp;<p className='signIn-container-1-p-4'> {number}</p></p>

            <div className='otp-inp-container'>
            <OtpInput
              value={OTP}
              onChange={setOTP}
              numInputs={6}
              separator={<span>-</span>}
              className='otp-inp-box'
            />
              </div>
            {/* <OTPInput className='otp-inp' value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure={false} /> */}
            {/* <ResendOTP onResendClick={resend} /> */}
            <button onClick={handleOTP} className='signIn-container-2-btn'>Get Started</button>
          </div>
        }
      </div>
    </div>
  )
}

export default OTPSignIN