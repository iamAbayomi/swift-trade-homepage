/* eslint-disable jsx-a11y/alt-text */
// import AboutCompany from ''
import DivisionBar from '../DivisionBar/DivisionBar'
import OrangeBar from '../OrangeBar/OrangeBar'
import './AboutCompany.css'
function AboutCompany(){
    return(
        <div>
            <div className="about-company-section">
              <div className="about-company-contents">
                <img className="about-us-img" src="./vectors/about-us-image.png" />
                <div className="about-company-text">
                    <p className="about-company-title">About Company</p>
                    <OrangeBar/>
                    <p className="about-company-subtitle">Company is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. 
                    Owned and managed by CoinBase Business Services established and Incoperated in Nigeria. </p>
                </div>
                <div className="about-company-logo">
                    <img className="about-company-logo"  src="./vectors/qualities.png" />
                </div>
            </div>
          </div>
        </div>
        )
}
export default AboutCompany