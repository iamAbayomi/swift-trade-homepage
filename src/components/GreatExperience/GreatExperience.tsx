/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './GreatExperience.css'
import styled from 'styled-components';

function GreatExperience(){
    return (
        <div>
            <div className="great-experience-section display-flex-withspace">
                <FirstSection className="first-section">
                    <p className="medium-text" >
                        Greate Experience with Swift
                    </p>
                    <div className="orange-bar"/>
                        
                    <p className="body" >
                        Swift Trade is an online site and a p2admin platform that allows users to buy, sell and/ or
                        exchange digital and fiat assets safely. 
                        Owned and managed by Swift trade NG established and Incoperated in Nigeria.
                    </p>
                    <button className="blue-button" >
                        GET STARTED
                    </button>
                </FirstSection>
                <div className="second-section">
                    <Image className="great-experience-image" src="./vectors/application-display.svg" />
                </div>
            </div>

        </div>
    )
}


export default GreatExperience;


const FirstSection = styled.div `
    

`

const Image = styled.img`
    margin: -30px 0px 0px 0px;
`

