/* eslint-disable jsx-a11y/alt-text */

import './Testimonial.css'

function testimonial(){
    return(
        // <div className="testimonial-background" style ={ { backgroundImage: "url('./vectors/cutbackground.png')" } }>
        <div className="testimonial-background" >
            {/* <img src="/vectors/testimonial.svg" /> */}
            <div className="typography text-align-center">
                {/* <img src="./vectors/cut-background.png"></img> */}
                <p className="subtitle-text"> 10,0000 satisfied clients around the world </p>
                <p className="body-text"> Yeah we are proud with numbers. We have helped thousands of clients all around the world 
                    with our bespoke services. Hover on top of them pic to view their testimonials.
                </p>
                <div className="testimonial-icon-div">
                    <img className="testimonial-icon" src="./vectors/testimonial-icon.jpg"/>
                </div>
            </div>
            {/* <img src="./vectors/happycustomers.svg" /> */}
        </div>
    )
}

export default testimonial;