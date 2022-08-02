import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './assets/css/style.scss';
import './assets/css/responsive.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = React.lazy(()=> import('./pages/home'));
const LightiningDeals = React.lazy(()=> import('./pages/lightining-deals'));
const DestinationPage = React.lazy(()=> import('./pages/destination-page'));
const ProfilePage = React.lazy(()=> import('./pages/profile-page'));
const PackagePage = React.lazy(()=> import('./pages/package-page'));
const VendorPage = React.lazy(()=> import('./pages/vendor-page'));
const ListOfActivities = React.lazy(()=> import('./pages/list-of-activities'));
const ListOfActivitiesNearBy = React.lazy(()=> import('./pages/list-of-activities-nearby'));
const AboutEvent = React.lazy(()=> import('./pages/about-event'));
const Booking = React.lazy(()=> import('./pages/booking'));
const Checkout = React.lazy(()=> import('./pages/checkout'));
const BookingAfterPayment = React.lazy(()=> import('./pages/booking-after-payment'));
const BookPackage = React.lazy(()=> import('./pages/book-package'));
const BlankReview = React.lazy(()=> import('./pages/blank-review'));
const BlankReview1 = React.lazy(()=> import('./pages/blank-review1'));
const OTPSignIN = React.lazy(()=> import('./pages/otp-signIn'));
const MyBookings = React.lazy(()=> import('./pages/home'));
const BestDDeals = React.lazy(()=> import('./pages/list-best-deals'));
const ContactUs = React.lazy(()=> import('./pages/contact-us'));

const App = () =>{
  return(
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/lightining-deals' element={<LightiningDeals />} />
          <Route path='/destination-page' element={<DestinationPage />} />
          <Route path='/profile-page' element={<ProfilePage />} />
          <Route path='/package-page' element={<PackagePage />} />
          <Route path='/vendor-page' element={<VendorPage />} />
          <Route path='/list-of-activities' element={<ListOfActivities />} />
          <Route path='/list-of-activities-nearby' element={<ListOfActivitiesNearBy />} />
          <Route path='/about-event' element={<AboutEvent />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/booking-after-payment' element={<BookingAfterPayment />} />
          <Route path='/book-package' element={<BookPackage />} />
          <Route path='/blank-review' element={<BlankReview />} />
          <Route path='/blank-review1' element={<BlankReview1 />} />
          <Route path='/signIn' element={<OTPSignIN />} />
          <Route path='/mybookings' element={<MyBookings />} />
          <Route path='/best-dealss' element={<BestDDeals />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </Router>
  )
}

export default App;