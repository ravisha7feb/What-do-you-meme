import React from "react"
import "./landingPage.css"
//import bgImg from "../../images/landingImg.png"

class LandingPage extends React.Component {
    render (){
        return (
            <div className="landing-page">
                <div className="landing-page-left">
                    <div className="landing-page-left-header">
                        What do you MEME?
                    </div>
                    <div className="landing-page-left-description">
                        Ready to "meme" along your buddies?
                    </div>
                    <div className="landing-page-left-button">
                        <button>GET STARTED</button> 
                    </div>
                </div>
                {/* <div className="landing-page-bg">
                    <img src={bgImg} alt="bg"></img>
                </div>
                 */}
            </div>
        );
    }

}

export default LandingPage;