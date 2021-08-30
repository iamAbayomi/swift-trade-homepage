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
                {/* The rate section contents */}
                <div className="our-rate-body-section">
                    <div className="display-flex-withspace">
                        <div className="display-flex-withspace">
                            <img className="btc-logo" src="./vectors/bitcoin.svg" />
                            <p className="btc-text">BTC</p>
                        </div>
                        <div className="btc-text-price">
                            <p>We Buy @ <span className="bold-currency">N350/$ </span></p>
                            <p>We Buy @ <span className="bold-currency">N370/$ </span></p>
                        </div>
                    </div>
                    <div className="display-flex-withspace"> 
                        <div className="display-flex-withspace">
                            <img src="./vectors/etherum.svg" />
                            <p>ETH</p>
                        </div>
                        <div>
                        <p>We Buy @ <span className="bold-currency">N345/$ </span></p>
                        <p>We Buy @ <span className="bold-currency">N350/$ </span></p>
                        </div>
                    </div>
                </div>
                {/* The reserves section */}
                <div className="our-reserves-section">
                        <div className="">
                            <div className="display-flex-withspace">
                                <img src="./vectors/bank-building.svg" />
                                <p>Bank Transfer</p>
                                <p>NGN</p>
                            </div>
                            <p>#3452030300303.24/$</p>
                        </div>
                        
                        <div className="display-flex-withspace"> 
                            <div className="display-flex">
                                    <img className="btc-logo" src="./vectors/bitcoin.svg" />
                                    <p>Bitcoin</p>
                            </div>
                            <div className="display-flex">
                                <p>399.98</p>
                                <p>BTC</p>
                            </div>
                        </div>

                        <div className="display-flex-withspace"> 
                            <div className="display-flex-withspace">
                                <img src="./vectors/etherum.svg" />
                                <p>ETH</p>
                            </div>
                            <div className="display-flex">
                                <p>1000.00</p>
                                <p>ETH</p>
                            </div>
                        </div>
                </div>
                {/* The exchanges section.  */}
                <div className="latest-exchanges-section">
                    <button className="blue-button">8 hours ago</button>
                        <div className="">
                            <div className="display-flex">
                                <p>Bitcoin BTC</p>
                                <img src="./vectors/transfer.svg" />
                                <p>Bank</p>
                            </div>
                            <p>Transfer NGN</p>
                        </div>
                    
                    <div className="display-flex">
                            <p>1.16 BTC </p>
                            <img src="./vectors/double-transfer.svg" />
                            <p>696152299929.23 NGN</p>
                    </div>

                    <div className="divider" />
                    
                    <div className="">
                        <div className="display-flex">
                            <p>Amazon Card</p>
                            <img src="./vectors/transfer.svg" />
                            <p>Bank</p>
                        </div>
                            <p>Transfer NGN</p>
                    </div>
                </div>
            </div>
        </div>

      )
  }


  export default BuySellSection;