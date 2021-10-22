/* eslint-disable jsx-a11y/alt-text */
// import AboutCompany from ''
import './AboutCompany.css'
function AboutCompany(){
    return(
        <div>
            <div className="about-company-section">
                <img className="about-us-img" src="./vectors/about-us-image.png" />
                <div className="about-company-text">
                    <p>About Company</p>
                    <p className="about-company-subtitle">Company is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. 
                    Owned and managed by CoinBase Business Services established and Incoperated in Nigeria. </p>
                </div>
                <div className="about-company-logo">
                    <img src="./vectors/" />
                    <img src="./vectors/" />
                    <img src="./vectors/" />
                    <img src="./vectors/" />
                </div>
            </div>
        </div>
        )
}
export default AboutCompany