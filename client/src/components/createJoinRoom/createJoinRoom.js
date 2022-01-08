import React from "react"
import "./createJoinRoom.css"
import createBg from "../../images/createImg.png"
import joinBg from "../../images/joinImg.png"

class CreateJoinRoom extends React.Component {
    render() {
        return (
            <div className="create-join-room">
                <div className="create-join-room-header">
                    Come on, let's play!
                </div>
                <div className="create-join-room-options">
                    <div className="create-room">
                        {/* <div className="create-room-img">
                            <img src={createBg} />
                        </div> */}
                        <div className="create-room-header">
                            CREATE A ROOM
                        </div>
                        <div className="create-room-button">
                            <button>CREATE</button>
                        </div>
                    </div>
                    <div className="join-room">
                        {/* <div className="join-room-img">
                            <img src={joinBg} />
                        </div> */}
                        <div className="join-room-header">
                            JOIN A ROOM
                        </div>
                        <div className="join-room-button">
                            <button>JOIN</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateJoinRoom;