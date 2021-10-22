/* eslint-disable jsx-a11y/alt-text */
import OrangeBar from '../OrangeBar/OrangeBar'
import './MeetTheTeam.css'
function MeetTheTeam(){
    return(
        <div>
            <div className="meet-the-team-section">
              <div className="meet-the-team-contents">
                <p className="page-text meet-the-team-header">Meet the team</p>
                <OrangeBar />
                <p className="meet-the-team-subtitle">Meet the team that makes the process of this system fast and
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

        </div>
    )
}

export default MeetTheTeam