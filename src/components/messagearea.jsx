import React, { useState , useEffect,useRef } from 'react';
import  { db , auth } from '../firebase.js';
import '../styles/messagearea.css';
import SendMessage from '../components/sendmessage';

 function MessageArea(){

    
    const scroll = useRef();
    const [messages , setMessages] = useState([]);

    useEffect(() => {

        db.collection('messages01').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            
            setMessages(snapshot.docs.map(doc => doc.data()));

        })

    }, [])

    return(
        <div>
        <div className="message-area-container ">
            {messages.map(({id,text,photoURL,uid,username}) => (

            
                    <div className={` ${uid === auth.currentUser.uid ? "message-receiver-section " : "message-sender-section "}`} key={id}>

                        <span className={` ${uid === auth.currentUser.uid ? "receiver-name" : "sender-name-ta"}`}>{username}</span>
                        <span className={` ${uid === auth.currentUser.uid ? "receiver-text-time " : "sender-text-time "}`}>8:34</span>
                        <img className={` ${uid === auth.currentUser.uid ? "receiver-picture " : "sender-picture "}`} src={photoURL} />
                        <div className={` ${uid === auth.currentUser.uid ? "receiver-text-div " : "sender-text-div "}`}>
                            <span className={` ${uid === auth.currentUser.uid ? "receiver-text-body " : "sender-text-body "}`}>{text}</span>
                        </div>

                </div>
                
                
            ))}
            
            <div ref={scroll}></div>
        </div>
        <div className="send-message-c">
            <SendMessage scroll={scroll} />
        </div>
    </div>
    )




    }
 
export default MessageArea;