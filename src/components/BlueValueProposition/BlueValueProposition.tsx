/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import './BlueValueProposition.css'

function Valueproposition(){
    return(
        <div>
            <div className="value-proposition">
                <div className="value-proposition-text text-align-center" >
                    <p className="value-prop-heading header-text" > We provide easy solution to exchange your Bitcoin/ GiftCard for money.
                    </p>
                    <p className="value-prop-subtitle subtitle-text" >Swift Trade is a platform for trading your bitcoin and
                        giftcard at the best rate, why not give us a trial.
                    </p>
                    <a href="/signup" className="text-link" >
                        <Button className="blue-button get-started">GET STARTED</Button>
                    </a>
                </div>
                <div className="value-proposition-icon">
                    <img className="value-proposition-icon" src="./vectors/vp-vector.svg" />
                </div>
            </div>

        </div>
    )
}


export default Valueproposition


const Button = styled.button `
    margin: 10px 0px 0px 0px;
`