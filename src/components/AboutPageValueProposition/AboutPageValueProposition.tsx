import './AboutPageValueProposition.css'
/* eslint-disable jsx-a11y/alt-text */
function AboutPageValueProposition(){
    return(
        <div>
            <div className="about-value-proposition">
                <div className="about-vp-contents display-flex">
                    <div className="about-value-proposition-text">
                        <p className="about-value-prop-heading"> 
                            Great Service Professional Support
                        </p>
                        <p className="about-value-prop-subtitle" >
                        Company is a platform for trading your bitcoin and giftcard
                        for the best rate, why not give us a trial.
                        </p>
                    </div>
                    <div className="about-value-prop-image">
                        <img className="abvp-img" src="./vectors/about-us-vector.svg" />
                    </div>
                </div>
                <img className="path-icon" src="./vectors/path-section.svg" />
            </div>
        </div>
    )
}

export default AboutPageValueProposition