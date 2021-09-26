import React, { useState,useEffect} from 'react';
import '../styles/newmessage.css';

function NewMessage(props) {

    const key = 'uid';
    const messages = (props.data);

    const unique = [...new Map(messages.map(item =>
    [item[key], item])).values()];



        return ( 

            <React.Fragment>
                <div className = "message-container">

                    {unique.map(({text,photoURL,username,uid}) => (
                        
                        <div onClick={() =>props.currentUser(uid)} className ="message">
                        <img className = "message-profile-picture"src={photoURL} />
                        <div className = "user-status">
                        </div>
                        <div className = "message-count-div">
                            <h5 className = "message-count">2</h5>
                        </div>
                        <h5 className ="sender-name">{username}</h5>
                        <h5 className ="time-elapsed">8 : 34 AM</h5>
                        <h5 className ="message-descriptions">{text}</h5>
                        </div> 


                    ))}
                    
                     </div>
            </React.Fragment>
            
         );
    }

 
export default NewMessage;