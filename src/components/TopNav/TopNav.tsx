/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './TopNav.css';
import styled from 'styled-components'

const menuItems =  [ { link: '/', name: 'Home'}, { link: '/about', name: 'About Us'}, { link: '/contact' , name: 'Contact Us'}, { link: '/sellbitcoin' , name: 'Sell Bitcoin/GiftCard'}]

function TopNav(){
    return(
        <div className="top-nav display-flex-withspace">
            <div className="brand-logo">
                <img src="./vectors/swift-logo.svg" />
            </div>
            <div className="top-nav-menu display-flex-withspace">
                {menuItems.map((menu) =>
                    <a href={menu.link} className="top-nav-menu-text text-link">
                        {menu.name}
                    </a>
                    )
                }                
            </div>
            <div className="top-nav-action-section display-flex-withspace">
                <a href="/login" className="text-link" >
                    <LoginText className="text-button login-button">
                        Login
                    </LoginText>
                </a>
                <a href="/signup" className="text-link" > 
                    <button className="blue-button">
                            GET STARTED
                    </button>
                </a>
            </div>
        </div>
    )
}

export default TopNav;


const LoginText = styled.p `
    margin: 20px 60px 0px 20px !important;
`