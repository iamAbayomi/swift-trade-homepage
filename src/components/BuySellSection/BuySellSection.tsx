/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import './BuySellSection.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    // BrowserRouter
  } from 'react-router-dom';



  function BuySellSection(){
      return(
        <div className="the-rate-section">
            <div className="header-section display-flex-withspace">
                <div className="our-section-text our-rates">
                    <p>Our Rates</p>
                </div>
                <div className="our-section-text our-reserves">
                    <p>Our Reserves</p>
                </div>
                <div className="our-section-text latest-exchanges">
                    <p>Latest Exchanges</p>
                </div>
            </div>
            <div className="divider" />
            <div className="body-section display-flex-withspace">
                <div className="our-rate-body-section">

                        <div className="display-flex-withspace">
                            <div className="display-flex-withspace">
                                <img src="./vectors/bitcoin.svg" />
                                <p>BTC</p>
                            </div>
                            <div>
                                    <p>We Buy @ N350/s</p>
                                    <p>We Buy @ n370/s</p>
                            </div>
                        </div>

                        <div className="display-flex-withspace"> 
                            <div className="display-flex-withspace">
                                <img src="./vectors/etherum.svg" />
                                <p>ETH</p>
                            </div>
                            <div>
                                    <p>We Buy @ N350/s</p>
                                    <p>We Buy @ n370/s</p>
                            </div>
                        </div>
                </div>
                <div className="our-reserves-section">
                        <div className="">
                            <p>NGN</p>
                            <p>#3452030300303.24/s</p>
                        </div>
                        <div className=""> 
                            <p>399.98</p>
                            <p>BTC</p>
                        </div>
                        <div className=""> 
                            <p>1000.00</p>
                            <p>ETH</p>
                        </div>
                </div>

                <div className="latest-exchanges-section">
                    <button>8 hours ago</button>
                        <div className="">
                            <p>Bitcoin BTC</p>
                            <p>Bank</p>
                            <p>Transfer NGN</p>
                        </div>
                    
                    <div className="">
                            <p>1.16 BTC </p>
                    </div>
                    
                    <div className="">
                            <p>Amazon Card</p>
                            <p>Bank</p>
                            <p>Transfer NGN</p>
                    </div>
                </div>
            </div>
        </div>

      )
  }


  export default BuySellSection;