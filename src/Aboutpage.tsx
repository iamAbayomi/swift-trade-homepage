/* eslint-disable jsx-a11y/alt-text */
import React  from "react";
function Aboutpage(){
    return(
        <div>
        <div className="value-propositon">
            <div className="value-proposition-text">
                <p className="value-prop-heading"> We provide easy solution to exchange your Bitcoin/ GiftCard for money.
                </p>
                <p className="value-prop-subtitle" >Swift Trade is a platform for trading your bitcoin and
                    giftcard at the best rate, why not give us a trial.
                </p>
            </div>
            <div className="value-prop-image">
                <img src="./vectors/" />
            </div>
        </div>
        <div className="testimonial-section">
            <p>“Morbi sagittis ultricies ex, a tempus lorem suscipit non.
                 Donec semper leo ut lobortis condimentum. 
                 Orci varius natoque penatibus et magnis”
            </p>
            <div className="divider" />
            <p>Ramon Ridwan. CEO Company</p>
        </div>

        <div className="about-company-section">
            <img src="./vectors/about-company.svg" />
            <div className="about-company-text">
                <p>About Company</p>
                <p>Company is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. 
                Owned and managed by CoinBase Business Services established and Incoperated in Nigeria. </p>
            </div>
            <div className="about-company-logo">
                <img src="./vectors/" />
                <img src="./vectors/" />
                <img src="./vectors/" />
                <img src="./vectors/" />
            </div>
        </div>

        <div className="our-history-section">
            <p className="our-history-text">Our History</p>
            <div className="our-history-section">
                <p className="our-history-section-header">May 2010</p>
                <p className="our-history-section-text">
                    Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. 
                    Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum. Nulla facilisi. 
                    Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse
                </p>
            </div>

            <div className="our-history-section">
                <p className="our-history-section-header">May 2017</p>
                <p className="our-history-section-text">
                    Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. 
                    Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum. Nulla facilisi. 
                    Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse
                </p>
            </div>


            <div className="our-history-section">
                <p className="our-history-section-header">May 2019</p>
                <p className="our-history-section-text">
                    Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. 
                    Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum. Nulla facilisi. 
                    Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse
                </p>
            </div>
        </div>

        <div className="meet-the-team-section">
            <p>Meet the team</p>
            <div className="divider" />
            <p>Meet the team that makes the process of this system fast and
                poinless as possible to provide you with good result.
            </p>
            <div className="team-profile-section">
                <div className="profile-image">
                    <img className="" src="./vectors/images" />
                    <p>CEO</p>
                    <p>Amanda Roth</p>

                </div>
            </div>

        </div>


    </div>
    )
}

export default Aboutpage;