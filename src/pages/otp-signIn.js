import React, { useEffect, useState } from 'react';
import firebase from '../firebase';
import { Button, Form, FormCheck, FormGroup, FormLabel } from 'react-bootstrap';
import { Input } from 'reactstrap';
import { useNavigate } from 'react-router';
import PhoneInput from "react-phone-number-input";
import "../assets/css/OTPSignIn.css"
import "../assets/css/Pages.css"
import "react-phone-number-input/style.css";
import OtpInput from 'react-otp-input';
import { MdOutlineCancel } from 'react-icons/md';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Axios from 'axios';
import { BASE_URL } from '../api_utils';



const OTPSignIN = () => {

  const navigate = useNavigate();

  const [number, setNumber] = useState('');
  // const [click, setClick] = useState(false);
  const [numberPage, setNumberPage] = useState(true);
  const [otpPage, setOtpPage] = useState(false);
  const [profilePage, setProfilePage] = useState(false);
  const [OTP, setOTP] = useState("");
  const [code, setCode] = useState('IN');

  const [token, setToken] = useState('');

  const [user1, setUser1] = useState({});

  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')


  const [selectedImage, setSelectedImage] = useState(null);


  // Handel the Profile image and send it to "Upload Image" API
  // In return get the URL of the Image

  async function handelImgChange(e) {
    console.log(e.target.files[0]);
    setSelectedImage(e.target.files[0]);
    // console.log(URL.createObjectURL(e.target.files[0]))

    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      headers: {
        'Content-type': 'image/png',
        'Content-Type': 'application/json',
        'Content-Type': 'image/jpeg'
      },
      body: JSON.stringify({
        image: URL.createObjectURL(e.target.files[0])
        // image: e.target.files[0]
      })
    };
    fetch('https://qoolqatar.com/api/v1/upload/assets/image', requestOptions)
      .then(response => response.json())
      // .then(data => this.setState({ postId: data.id }));
      .then(data => console.log(data));
  };

  // Handel the Input fileds of the signUp form
  const [initialState, setInitialState] = useState({});
  const { name, email, mobile } = initialState;
  initialState.mobile = number

  const handleInpChange = (e) => {
    let { name, value } = e.target;
    setInitialState({
      ...initialState,
      [name]: value,
    })
  }


  // Submit to create new User Profile
  async function send() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: initialState.name,
        phoneNumber: initialState.mobile,
        gender: "male",
        email: initialState.email,
        profilePic: "https://asdasd.sgp1.cdn.digitaloceanspaces.com/assets/ced2a84a-6617-495e-9145-69b9887a2965Screenshot%202022-06-18%20at%2012.00.09%20AM.png",
        uid: "00000100000"
      })
    };
    fetch('https://qoolqatar.com/api/v1/profile/create', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        navigate('/profile-page?tab=editProfile')
        window.location.reload();
      });

    // 62de7cce579f101ae84ff956

  }



  useEffect(() => {

    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLng(position.coords.longitude)
      fetch(`https://api.geonames.org/findNearbyPlaceNameJSON?lat=${position.coords.latitude}&lng=${position.coords.longitude}&username=azad1350`)
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
    if (number != '') {
      setNumberPage(false)
      setOtpPage(true)
      e.preventDefault()
      configureCaptcha()
      const phoneNumber = number
      // console.log(phoneNumber)
      const appVerifier = window.recaptchaVerifier;
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(async (confirmationResult) => {
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")

          const token = await firebase.auth().currentUser.getIdToken();
          console.log({ token })
          // setting tokenin localStorage
          // await
          localStorage.setItem('@auth_token', token);
          Axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
          console.log(Axios.defaults.headers.common['Authorization']);

          // Getting Current Profile Data
          const { data } = await Axios.get(`/profile/self`);
          localStorage.setItem('Profile_Data', JSON.stringify(data));

          if (data.error == false) {
            
            // Getting Home Data
            const home = await Axios.get(`/customer/home?lat=${lat}&lng=${lng}`);
            // const home = await axios.get(`${BASE_URL}/customer/home?lat=22.8046&lng=86.2029`);
            localStorage.setItem('Home_Data',JSON.stringify(home))
            
          }


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

  const handleOTP = async (e) => {
    // console.log("k"+OTP)
    setOtpPage(false)
    e.preventDefault()
    const code = OTP
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      const user = result.user;


      if (JSON.parse(localStorage.getItem('Profile_Data')).error) {
        // Send to profile creation page
        setOtpPage(false);
        setNumberPage(false)
        setProfilePage(true)
      } else {
        // Redirect to Home Page
        
        console.log(JSON.parse(localStorage.getItem('Home_Data')))
        localStorage.setItem('otp_signIn', "Successfull")
        // navigate('/profile-page?tab=editProfile')
        navigate('/')
        window.location.reload()
        // The data.payload will be stored in context or localstorage
      }

    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      console.log("Error")
      localStorage.setItem('@auth_token', null);
      localStorage.setItem('Home_Data', null);
      alert("Try Again ")
      window.location.reload();
    });
  }

  const handelIcon_1 = (e) => {
    e.preventDefault()
    navigate("/")
    window.location.reload()
  }

  const handelIcon_2 = (e) => {
    e.preventDefault()
    setNumberPage(true)
    setOtpPage(false)
  }




  return (
    <div>
      <div className='signIn-container'>
        {numberPage == true ?
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
          : null}
        {otpPage == true ?
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
            <button onClick={handleOTP} className='signIn-container-2-btn'>Verify</button>
          </div> : null
        }
        {profilePage == true ?
          <div className='signIn-container-1'>
            <MdOutlineCancel className='icon-1' onClick={handelIcon_1} />
            <IoIosArrowRoundBack className='icon-2' onClick={handelIcon_2} />
            <div className="rounded-box-1">
              <div className="outer-1">
                {/* {selectedImage === null ? <img className="outer" src={require('../../assets/images/Group2402.png')} alt="user" className="user" /> : */}
                {selectedImage === null ? <img className="outer-1" src={require('../assets/images/user20023.png')} alt="user" /> :
                  <img className="outer-1" src={URL.createObjectURL(selectedImage)} alt="user" />
                }
                <div className="inner-1">
                  <input
                    className="inputfile-1"
                    type="file"
                    name="myImage"
                    onChange={handelImgChange}
                  />
                  <label><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg></label>

                </div>
                <div className="del-box-1">
                  <img onClick={() => setSelectedImage(null)} src={require('../assets/images/Delete.png')} alt="delete" />

                </div>
              </div>
            </div>

            <Form className="edit-form-1">
              <FormGroup>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleInpChange}
                  placeholder="Robert Fox"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInpChange}
                  placeholder="robertfox@gmail.com"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  type="text"
                  name="mobile"
                  value={mobile}
                  onChange={handleInpChange}
                  placeholder="+974 987654321"
                />
              </FormGroup>
            </Form>

            {/* <div className="edit-profile">
              <div className="upload-box">
                <div>
                  
                </div>
                <div className="del-box">
                  <img onClick={() => setSelectedImage(null)} src={require('../assets/images/Delete.png')} alt="delete" />

                </div>
              </div>
              
            </div> */}

            <button onClick={send} className='signIn-container-3-btn'>Send</button>
          </div> : null
        }
      </div>
    </div>
  )
}

export default OTPSignIN