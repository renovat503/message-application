import React, { Component } from 'react';
import '../styles/messagearea.css';
import image1 from '../images/user3.jpeg';
import image2 from '../images/user1.png';
class MessageArea extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className = "message-area-container">
                    <div className ="message-receiver-section">
                        <img src={image1} className = "receiver-picture" />
                        <h6 className = "receiver-name">Fox Green</h6>
                        <h6 className ="receiver-text-time">8 : 34 AM</h6>
                        <div className = "receiver-text-div">
                            <h6 className ="receiver-text-body">Hey there ! Hope you had a good day</h6>

                        </div>

                    </div>

                    <div className ="message-sender-section">
                        <img src={image2} className = "sender-picture" />
                        <h6 className = "sender-name-ta">Scott moore</h6>
                        <h6 className ="sender-text-time">8 : 34 AM</h6>
                        <div className = "sender-text-div">
                            <h6 className ="sender-text-body">Hey there ! Hope you had a good day</h6>

                        </div>

                    </div>
                </div> 
            </React.Fragment>
         );
    }
}
 
export default MessageArea;