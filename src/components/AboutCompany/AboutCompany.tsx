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
                    <p className="about-company-subtitle">
                        Swift Trades Global Concept is a cryptocurrency trading platform based in Lagos, Nigeria. 
                      Cryptocurrency trade and other financial services related to cryptocurrency are made easy with us for everyone. 
                      We also provide investment advisory and safe investment schemes which allows investors to become life-long partners. Investment schemes comes with 1% - 4% monthly return.
                      </p>
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