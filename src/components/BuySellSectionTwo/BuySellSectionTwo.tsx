/* eslint-disable jsx-a11y/alt-text */
import styled  from "styled-components"
import OrangeBar from "../OrangeBar/OrangeBar"
import SignUpButton from "../ui-components/buttons/SignUpButton"
function BuySellSectionTwo(){
    return(
        <div>
            <div className="buy-sell-section" >
                <div className="overflow-hidden buysell-vector">
                    <BlueVector src="./vectors/blue-vector.svg" />
                </div>
                <div className="buysell-cardview-section">
                    <BuySellCardView className="card-view buysell-cardview" id="buysellsection" >
                        <p className="buysell-header text-align-center" >Buy and Sell from anywhere</p>
                        <OrangeBar />
                        <a className="no-link" href="https://swift-user-dashboard.netlify.app/"> 
                        <BuySellOptions className="display-flex-withspace buysell-options" >
                            <BuySellWidth className="buysell-width">
                                <div className="buysell-content">
                                    <img className="buysell-image" src="./vectors/bitcoin.svg" />
                                    <p> Bitcoin </p>
                                </div>
                            </BuySellWidth>
                            <BuySellWidth className="buysell-width">
                                <div className="buysell-content">
                                    <img className="buysell-image" src="./vectors/giftcards.svg" />
                                    <p> Gift Cards </p>
                                </div>
                            </BuySellWidth>
                        </BuySellOptions>
                        </a>

                    </BuySellCardView>
                </div>
                <div className="buysell-button">
                <SignUpButton class="blue-button pointer" />
                </div>
            </div>
        </div>
    )
}

export default BuySellSectionTwo




const BlueVector = styled.img `
    margin: 20px auto 0px auto;
    max-width: 1400px;
    width: 100%;
`


const BuySellCardView = styled.div `
   
`


const BuySellOptions = styled.div `
    // width: 610px;
    // margin 20px auto 30px auto;
`


const BuySellWidth = styled.div `
    // width: 260px;
    // height: 222px;
    // margin: 20px 0px 80px 0px;
    // border: 1px solid black;
    // border-radius: 16px
`

const Button = styled.button `
    margin: 40px auto 0px auto;
`