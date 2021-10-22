/* eslint-disable jsx-a11y/alt-text */
import React  from "react";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import AboutPageValueProposition from "../components/AboutPageValueProposition/AboutPageValueProposition";
import CEOTestimonial from "../components/CEOTestimonial/CEOTestimonial";
import TopNav from "../components/TopNav/TopNav";
function Aboutpage(){
    return(
        <div>
            <TopNav />
            <AboutPageValueProposition />
            <CEOTestimonial />
            <AboutCompany />

            


            <div className="meet-the-team-section">
                <p>Meet the team</p>
                <div className="divider" />
                <p>Meet the team that makes the process of this system fast and
                    poinless as possible to provide you with good result.
                </p>
                <div className="team-profile-section">
                    <div className="profile-image">
                        <img className="" src="./vectors/images" />
                        <p>CEO</p>
                        <p>Amanda Roth</p>

                    </div>
                </div>
            </div>
            
    </div>
    )
}

export default Aboutpage;