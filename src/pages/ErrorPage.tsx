/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './ErrorPage.css'

function error (){
    return(
        <div>
            <div className="error-page" >
                <div className="error-page-contents">
                    <img className="error-image" src="./vectors/404-iconimage.png" />
                    <p className="error-heading">OOPS!</p>
                    <p className="error-subtitle">PAGE NOT FOUND</p>
                    <a className="text-link" href="/">  
                        <button className="error-button">GO BACK HOME</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default error;