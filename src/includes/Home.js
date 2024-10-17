import React from 'react';
import Navbar from './Navbar.js';
import ImageSlider from '../template/ImageSlider.js';
import Footer from '../template/Footer.js';
import EMICalc from '../template/EMICalc.js';
import '../style/Home.css';
import { Route, Routes } from 'react-router-dom';
import Enquiry from '../modules/Enquiry/Enquiry.js';
import Login from '../includes/Login.js';
import Dashboard from './Dashboard.js';

function Home() {
  return (
    
      <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="emicalc" element={<EMICalcPage />} />
          <Route path="enquiry" element={<EnquiryPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        <Footer />
      </div>
   
  );
}

function HomePage() {
  return (
    <div style={{ flex: 1 }}> 
      <Navbar />
      <ImageSlider />
      <EMICalc />
    </div>
  );
}

function EMICalcPage() {
  return (
    <div style={{ flex: 1 }}> 
      <Navbar />
      <EMICalc />
    </div>
  );
}

function EnquiryPage() {
  return (
    <div style={{ flex: 1 }}> 
      <Navbar />
      <Enquiry />
    </div>
  );
}

function LoginPage() {
  return (
    <div style={{ flex: 1 }}> {/* Make this area flexible */}
      <Navbar />
      <Login />
    </div>
  );
}

export default Home;
