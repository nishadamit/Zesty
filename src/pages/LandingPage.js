import React from 'react';
import HomeNavbar from '../components/Layout/Navbar';
import '../styles/landing.scss';
import { Container } from 'react-bootstrap';
import LandingHeader from '../components/Layout/LandingHeader';
import MealCardList from '../components/Layout/MealList';
import LandingFeatures from '../components/Layout/LandingFeature';
import LandingCheckPlan from '../components/Layout/LandingCheckPlan';
import Footer from "../components/Layout/Footer";
function LandingPage() {
  return (
    <>
      <div className="header" >
        <HomeNavbar />
        <LandingHeader />
      </div>
      <div className="about-meals" >
        <MealCardList />
        <LandingFeatures />
      </div>
      <div className="customer-review-section" >
        <LandingCheckPlan />
      </div>
      <div className="footer" >
        <Footer />
      </div>
    </>
  )
}
export default LandingPage;