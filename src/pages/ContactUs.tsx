
import React from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import ContactUsValueProposition from '../components/ContactUsValueProposition/ContactUsValueProposition';
import Footer from '../components/Footer/Footer';
import TopNav from '../components/TopNav/TopNav';



function ContactUs(){
    return(
        <div>
            <div className="contents">
                <TopNav />
                <ContactUsValueProposition />
                <ContactSection />
                <Footer />
            </div>
        </div>
    )
}


export default ContactUs;

