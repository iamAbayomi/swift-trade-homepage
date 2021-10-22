/* eslint-disable jsx-a11y/alt-text */
import './ContactSection.css'


function ContactSection(){
    return(
        <div>
            <div className="contact-section">
                <p className="contact-section-text">Please note that all message will be replied within the next 12 hours</p>
                <div className="contact-section-editfield">
                    <div className="">
                        <input className="input-field" name="name" placeholder="Name*" />
                        <input className="input-field" name="email" placeholder="Email*" />
                        <textarea className="text-area" name="Your Comment" placeholder="Your Comment*" />
                        <button className=" blue-button contact-button">Send</button>
                    </div>
                    <div className="contact-section-map">
                        <img src="./vectors/map.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection