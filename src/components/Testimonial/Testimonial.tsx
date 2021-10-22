/* eslint-disable jsx-a11y/alt-text */

import './Testimonial.css'
import background from './testimonial-icon.jpg'

function testimonial(){
    return(
        <div className="testimonial-background" style ={ { backgroundImage: "url(./vectors/testimonial.svg)" } }>
          {/* <div className="testimonial-background" > */}
            {/* <img src="/vectors/testimonial.svg" /> */}
            <div className="typography text-align-center">
                {/* <img src="./vectors/cut-background.png"></img> */}
                <p className="subtitle-text typography-header "> 10,0000 satisfied clients around the world </p>
                <div className="brown-bar"/>
                <p className="body-text typography-body"> Yeah we are proud with numbers. We have helped thousands of clients all around the world 
                    with our bespoke services. Hover on top of them pic to view their testimonials.
                </p>
                {/* <div className="testimonial-icon-div">
                    
                </div> */}
                <img className="testimonial-icon" src="./vectors/testimonial-pic.png"/>
            </div>
            {/* <img src="./vectors/happycustomers.svg" /> */}
        </div>
    )
}

export default testimonial;