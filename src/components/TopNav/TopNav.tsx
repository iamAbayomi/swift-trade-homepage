/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './TopNav.css';
import styled from 'styled-components'

const menuItems =  ['Home', 'About Us', 'Contact Us', 'Sell Bitcoin/GiftCard']

function TopNav(){
    return(
        <div className="top-nav display-flex-withspace">
            <div className="brand-logo">
                <img src="./vectors/swift-logo.svg" />
            </div>
            <div className="top-nav-menu display-flex-withspace">
                {menuItems.map((menu) =>
                    <p className="top-nav-menu-text">
                        {menu}
                    </p>
                    )
                }                
            </div>
            <div className="top-nav-action-section display-flex-withspace">
                <LoginText className="text-button">
                    Login
                </LoginText>
                <button className="blue-button">
                        GET STARTED
                </button>
            </div>
        </div>
    )
}

export default TopNav;


const LoginText = styled.p `
    margin: 20px 60px 0px 20px !important;
`