import React, { useState , useEffect } from 'react';
import  { db } from '../firebase.js';
import '../styles/messagearea.css';

 function MessageArea(){

    const [messages , setMessages] = useState([]);

    useEffect(() => {

        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            
            setMessages(snapshot.docs.map(doc => doc.data()));

        })

    }, [])

    console.log(messages);

    return(
        <div className="message-area-container ">
            {messages.map(({id,text,photoURL}) => (
                <div className="message-receiver-section" key={id}>

                    <span className="receiver-name ">Fox Green</span>
                    <span className="receiver-text-time">8:34</span>
                    <img className="receiver-picture" src={photoURL} />
                    <div className="receiver-text-div ">
                        <p className="sender-text-body">{text}</p>
                    </div>

                </div>
            ))}
        </div>
    )




    }
 
export default MessageArea;