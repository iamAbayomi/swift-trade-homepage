
import React from 'react';
import Footer from '../components/Footer/Footer';
import TopNav from '../components/TopNav/TopNav';



function ContactUs(){
    return(
        <div>
            <TopNav />
            <div className="contact-section">
                <p>Please note that all message will be replied within the next 12 hours</p>
                <div className="contact-section-editfield">
                    <div className="">
                        <input name="" placeholder="Name" />
                        <input name="" placeholder="Email" />
                        <textarea name="" placeholder="Your Comment" />
                        <button>Send</button>
                    </div>
                    <div className="contact-section-map">

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default ContactUs;

