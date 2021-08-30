/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import BuySellSection from './components/BuySellSection/BuySellSection'
import Footer from './components/Footer/Footer'
import GreatExperience from './components/GreatExperience/GreatExperience'
import Oursection from './components/Oursection'
import TopNav from './components/TopNav/TopNav'

import Valuepropositon from './components/ValueProposition/Valuepropositon'

import './Homepage.css'

export default class Homepage extends React.Component{
    render(){
        return(
            <div>
                <div className="header">
                    <TopNav />
                    <Valuepropositon />
                    <BuySellSection />
                    
                    <GreatExperience />

                    <div className="buy-sell-section">
                        <div className="overflow-hidden">
                            <BlueVector src="./vectors/blue-vector.svg" />
                        </div>
                        <BuySellCardView className="card-view" >
                            <p className="buysell-header subtitle-text text-align-center" >Buy and Sell from anywhere</p>
                            <BuySellOptions className="display-flex-withspace" >
                                <BuySellWidth className="">
                                    <div className="buysell-content">
                                        <img src="./vectors/bitcoin.svg" />
                                        <p> Bitcoin </p>
                                    </div>
                                </BuySellWidth>
                                <BuySellWidth className="">
                                    <div className="buysell-content">
                                        <img src="./vectors/giftcards.svg" />
                                        <p> Gift Cards </p>
                                    </div>
                                </BuySellWidth>
                            </BuySellOptions>
                        </BuySellCardView>
                        <div className="buysell-button">
                            <Button className="blue-button" >GET STARTED</Button>
                        </div>
                    </div>

                    


                    <div className="over-view-section">
                        <div className="typography">
                            <p> 10,0000 satisfied clients around the world </p>
                            <p> Yeah we are proud with numbers. We have helped thousands of clients all around the world 
                                with our bespoke services. Hover on top of them pic to view their testimonials.
                            </p>
                        </div>
                        <img src="our-view-section" />
                    </div>
                    
                    <div className="download-app-section">
                        <p>Download our app</p>
                        <p>Discover exclusive deals and discounts with our mobile experience</p>
                        <div className="display-flex">
                            <img src="" />
                            <img src="" />
                        </div>
                        <div className="display-flex">
                            <img />
                            <img />
                        </div>
                    </div>

                 <Footer/>

                </div>
            </div>
        )
    }
}




const BlueVector = styled.img `
    margin 20px 0px 0px 0px;
    height: 485px;
`


const BuySellCardView = styled.div `
   width: 900px;
   margin 0px auto 30px auto;
`


const BuySellOptions = styled.div `
    width: 610px;
    margin 20px auto 30px auto;
`


const BuySellWidth = styled.div `
    width: 260px;
    height: 222px;
    margin: 20px 0px 80px 0px;
    border: 1px solid black;
    border-radius: 16px
`

const Button = styled.button `
    margin: 40px auto 0px auto;
`