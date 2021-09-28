import React, { useState , useEffect,useRef } from 'react';
import  { db , auth } from '../firebase.js';
import '../styles/messagearea.css';
import SendMessage from '../components/sendmessage';
import CurrentUser from '../components/currentuser';

 function MessageArea(props){


    const [key , setKey] = useState(props.user);

    if(props.user !== key) setKey(props.user);
    
    let to = key;
    let me = auth.currentUser.uid;
    const dataFromMain = props.data;
    const scroll = useRef();

    const [messages , setMessages] = useState([]);

  useEffect(() => {

    db.collection('messages02').where('uid','==',to).orderBy('createdAt').limit(200).onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()));

})

}, [to])
    
    return(
        <div>

            <CurrentUser mess={messages}data={dataFromMain} id={to}/>

        <div className="message-area-container ">
        <h1>{'to'+' '+to}</h1>
        <h1>{'key'+' '+key}</h1>
        <h1>{me}</h1>
            {messages.map(({id,text,photoURL,uid,username}) => (

            
                    <div key={uid} className={` ${uid === auth.currentUser.uid ? "message-receiver-section " : "message-sender-section "}`} key={id}>

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
            <SendMessage to={key}scroll={scroll} />
        </div>
    </div>
    )

    }
 
export default MessageArea;