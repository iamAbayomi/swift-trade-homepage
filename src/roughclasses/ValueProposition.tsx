/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import './ValueProposition.css'

/** 
    This is props determines color of the landingpagecolor.
**/ 
type props = {
     landingpagecolor: string,
     backgroundcolor: string
}

const Valuepropositon: React.FC<props> = (props) => {
    useEffect(() => {
        console.log('This is the window path name '+ window.location.pathname)
        console.log('The props name is '+ props.landingpagecolor)
    })
    return(
        <div>
            <div className="value-proposition" style={{ backgroundColor: `${props.backgroundcolor}`}}>
                <div className="value-proposition-text text-align-center" >
                    <p className="value-prop-heading header-text" style={{ color: `${props.landingpagecolor}`}}> We provide easy solution to exchange your Bitcoin/ GiftCard for money.
                    </p>
                    <p className="value-prop-subtitle subtitle-text" style={{ color: `${props.landingpagecolor}`}}>Swift Trade is a platform for trading your bitcoin and
                        giftcard at the best rate, why not give us a trial.
                    </p>
                    <Button className="blue-button get-started">GET STARTED</Button>
                </div>
                <div className="value-proposition-icon">
                    <img className="value-proposition-icon" src="./vectors/vp-vector.svg" />
                </div>
            </div>

        </div>
    )
}


export default Valuepropositon


const Button = styled.button `
    margin: 10px 0px 0px 0px;
`