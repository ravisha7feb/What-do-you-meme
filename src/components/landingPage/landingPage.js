import React from "react"
import "./landingPage.css"
import bgImg from "../../images/landingImg.png"

class LandingPage extends React.Component {
    render (){
        return (
            <div className="landing-page">
                <div className="landing-page-bg">
                    <img src={bgImg} alt="bg"></img>
                </div>
                
            </div>
        );
    }

}

export default LandingPage;