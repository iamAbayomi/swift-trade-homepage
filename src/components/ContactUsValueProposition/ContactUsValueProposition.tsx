/* eslint-disable jsx-a11y/alt-text */
import '../AboutPageValueProposition/AboutPageValueProposition.css'

function ContactUsValueProposition(){
    return(
        <div>
            <div className="about-value-proposition">
                <div className="about-vp-contents display-flex">
                    <div className="about-value-proposition-text">
                        <p className="about-value-prop-heading"> 
                            24/7 Customer Support Including weekends.
                        </p>
                        <p className="about-value-prop-subtitle" >
                            We're always there to help regardless the number of queries at hand.
                        </p>
                    </div>
                    <div className="about-value-prop-image">
                        <img className="abvp-img" src="./vectors/about-vp-vector.svg" />
                    </div>
                </div>
                <img className="path-icon" src="./vectors/path-section.svg" />
            </div>
        </div>
    )
}

export default ContactUsValueProposition