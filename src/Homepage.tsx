/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import BuySellSection from './components/BuySellSection/BuySellSection'
import BuySellSectionTwo from './components/BuySellSectionTwo/BuySellSectionTwo'
import Footer from './components/Footer/Footer'
import GreatExperience from './components/GreatExperience/GreatExperience'
import Oursection from './components/Oursection'
import Testimonial from './components/Testimonial/Testimonial'
import TopNav from './components/TopNav/TopNav'

import Valuepropositon from './components/ValueProposition/Valuepropositon'

import './Homepage.css'

export default class Homepage extends React.Component{
    render(){
        return(
            <div>
                <div className="header">
                  <div className="dashboard-contents"> 
                    <TopNav />
                    <Valuepropositon />
                    <BuySellSection />
                    
                    <GreatExperience />

                    <BuySellSectionTwo />                    
                    {/* <Testimonial /> */}
                    
                    <div className="download-app-section text-align-center">
                        <p className="buysell-header" > Download our app</p>
                        <p className="buysell-text" >Discover exclusive deals and discounts with our mobile experience</p>
                        <div className="play-storeapp  display-flex">
                            <img src="./vectors/app-store-logo.png" />
                            <img src="./vectors/google-play.png" />
                        </div>
                        <div className="iphone-store-container  display-flex">
                            <img src="./vectors/iphonex1.png" />
                            <img src="./vectors/iphonex2.png" />
                        </div>
                    </div>

                 <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}




const BlueVector = styled.img `
    margin: 20px auto 0px auto;
    max-width: 1200px;
    width: 100%;
`


const BuySellCardView = styled.div `
   
`


const BuySellOptions = styled.div `
    // width: 610px;
    // margin 20px auto 30px auto;
`


const BuySellWidth = styled.div `
    // width: 260px;
    // height: 222px;
    // margin: 20px 0px 80px 0px;
    // border: 1px solid black;
    // border-radius: 16px
`

const Button = styled.button `
    margin: 40px auto 0px auto;
`