/* eslint-disable jsx-a11y/alt-text */

import './Footer.css'

// const companyLinks = ['Home', 'About Us', 'Blog', 'Sell', 'Contact Us']
const companyLinks =  [ { link: '/', name: 'Home'}, { link: '/about', name: 'About Us'},  { link: '/blog' , name: 'Blog'}, { link: '/#buysellsection' , name: 'Sell'} , { link: '/contact' , name: 'Contact Us'}]
const contactUs = ['(+234) 137632128', 'Company@yahoo.com', 'Address goes here', 'Download Our App']

const imagesBackground = ['grey-background', 'grey-add-background', 'grey-background', 'grey-background', 
                            'grey-background','grey-background','grey-background', 'grey-background' ]

function Footer(){
    return(
        <div className="footer-section">
            <div className="company-info">
                <div>
                    <div className="swft-logo" >
                        <img src="./vectors/swift-logo.svg" />
                    </div>
                    <p className="company-info-text footer-highlight">
                    Fusce ut elit aliquet, fermentum leo vel, tempus nunc. 
                    Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                    </p>
                    <div className="social-media-handles">
                        <img src="./vectors/social-media-handles.svg" />
                    </div>
                </div>
                <p className="footer-copyright">@ 2022 Swift Trade NG</p>
            </div>

            <div className="footer-links">
                <div className="company-links">
                    <p className="footer-header"> Company Links</p>
                    {companyLinks.map((item) =>

                        <a href={item.link} className="footer-highlight" >{item.name}</a>
                    )}
                </div>

                
                <div className="company-us">
                    <p className="footer-header">Contact Us</p>
                    {contactUs.map((item)  =>
                     <p className="footer-highlight" >{item}</p>
                    )}
                </div>
            </div>

                <div className="company-instagram">
                    <p className="footer-header">Company Instagram </p>
                    <div className="instagram-section">
                        {
                            imagesBackground.map((item) => 
                                <img className="ig-image" src={`./vectors/${item}.svg`}/>
                            )
                        }
                        
                    </div>
                </div>
            </div>
            
    )
}

export default Footer