/* eslint-disable jsx-a11y/alt-text */
import React  from "react";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import AboutPageValueProposition from "../components/AboutPageValueProposition/AboutPageValueProposition";
import CEOTestimonial from "../components/CEOTestimonial/CEOTestimonial";
import MeetTheTeam from "../components/MeetTheTeam/MeetTheTeam";

import './AboutPage.css'
import './Homepage.css'

import TopNav from "../components/TopNav/TopNav";
import Footer from "../components/Footer/Footer";
import OurHistory from "../components/OurHistory/OurHistory";
function Aboutpage(){
    return(
        <div>
            <div className="dashboard-contents">
                <TopNav />
                <AboutPageValueProposition />
               <div className="page-body">
                    <CEOTestimonial />
                    <AboutCompany />
                    <OurHistory />
                    <MeetTheTeam />
              </div>
              <Footer/>
            </div>
        </div>
    )
}

export default Aboutpage;