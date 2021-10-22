/* eslint-disable jsx-a11y/alt-text */
import OrangeBar from "../OrangeBar/OrangeBar"
import './OurHistory.css'

function OurHistory(){
    return(
        <div>
            <div className="ourhistory-section">
                <div className="ourhistory-contents">
                    <p className="page-text ourhistory-header">Our History</p>
                    <OrangeBar />
                    <div className="history-section">
                        <div className="first-history-section">
                            <div className="our-history-section addspace">
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
                        </div>
                        <div className="treesvg">
                            <img src="./vectors/tree.svg" />
                        </div>
                        <div className="second-history-section">
                            <div className="our-history-section">
                                <p className="our-history-section-header">May 2019</p>
                                <p className="our-history-section-text">
                                    Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. 
                                    Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum. Nulla facilisi. 
                                    Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurHistory