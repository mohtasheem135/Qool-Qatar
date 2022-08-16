import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './assets/css/style.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = React.lazy(()=> import('./pages/home'));
const LightiningDeals = React.lazy(()=> import('./pages/lightining-deals'));
const DestinationPage = React.lazy(()=> import('./pages/destination-page'));
const ProfilePage = React.lazy(()=> import('./pages/profile-page'));
const PackagePage = React.lazy(()=> import('./pages/package-page'));

const App = () =>{
  return(
    
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/lightining-deals' element={<LightiningDeals />} />
          <Route path='/destination-page' element={<DestinationPage />} />
          <Route path='/profile-page' element={<ProfilePage />} />
          <Route path='/package-page' element={<PackagePage />} />
        </Routes>
      </Router>
  )
}

export default App;