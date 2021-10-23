/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { ChangeEvent, MouseEventHandler, useState } from 'react'
import './TopNav.css';
import styled from 'styled-components'
import SignUpButton from '../ui-components/buttons/SignUpButton';
import Login from '../../authentication/Login';

const menuItems =  [ { link: '/', name: 'Home'}, { link: '/about', name: 'About Us'}, { link: '/contact' , name: 'Contact Us'},{ link: '/#buysellsection' , name: 'Sell Bitcoin/GiftCard'}]


function TopNav(){
    const [isActive, setisActive] = useState(false)

    const [isLogin, setLogin] = useState(false)
    
    function showDashboard(){
        setisActive(!isActive)   
    }

    function closeDashbaord(){
        // setOpen(!isOpen)
        setisActive(!isActive)   
    }

    function login(){
        setLogin(!isLogin)
    }

    return(
        <div className="top-nav display-flex-withspace">
            <a className="no-link" href="/">    
                <div className="brand-logo">
                    <img src="./vectors/swift-logo.svg" />
                </div>
            </a>
            <div className="top-nav-menu display-flex-withspace">
                {menuItems.map((menu) =>
                    <a href={menu.link} className="top-nav-menu-text text-link">
                        {menu.name}
                    </a>
                    )
                }                
            </div>
            <div className="top-nav-action-section display-flex-withspace">
                
                    <LoginText 
                        className="text-button login-button"
                        onClick={login}
                        >
                        Login
                    </LoginText>
                
                
                {/* Created a component and pass the props as class */}
                <SignUpButton class="blue-button top-nav-button" />
            </div>
            <div className={`mobile-menu ${isActive ? "is-open" : "" }`}>
                <img className="close-icon" 
                    src="./vectors/cancel-icon.svg"
                    onClick={closeDashbaord}
                />
                {menuItems.map((menu) =>
                    <a href={menu.link} className="mobile-menu-text text-link">
                        {menu.name}
                    </a>
                    )
                }                
            </div>
            <img className="menu-toggle" id="toggle-menu" 
                    src="/vectors/menu.svg"
                    onClick={showDashboard}
                />
            {
                isLogin ? <Login/> : <div style={ {display : `none`}}/>
            }
        </div>
    )
}

export default TopNav;


const LoginText = styled.p `
    margin: 20px 60px 0px 20px !important;
`