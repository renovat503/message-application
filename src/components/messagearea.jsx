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

    //Query One
    const [messages , setMessages] = useState([]);

  useEffect(() => {

    db.collection('messages02').orderBy('createdAt').limit(1000).onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()));

})

}, [to])

//Query Two
const [messagesTwo , setMessagesTwo] = useState([]);

  useEffect(() => {

    db.collection('messages02').where('uid','==',to).where('to','==',to).orderBy('createdAt').limit(1000).onSnapshot(snapshot => {
     setMessagesTwo(snapshot.docs.map(doc => doc.data()));

})

}, [to])

//Merging results
let data = messages.concat(messagesTwo);
let data1 = data.sort();




    
    return(
        <div>

            <CurrentUser mess={messages}data={messages} id={to}/>

        <div className="message-area-container ">
            {messages.map(({text,photoURL,uid,username}) => (

            
                    <div key={uid} className={` ${uid === auth.currentUser.uid ? "message-receiver-section " : "message-sender-section "}`} key={to}>

                        <img className={` ${uid === auth.currentUser.uid ? "receiver-picture " : "sender-picture "}`} src={photoURL} />
                        <div className ={` ${uid === auth.currentUser.uid ? "bar" : "bar-sender"}`}>
                            <h6 className={` ${uid === auth.currentUser.uid ? "receiver-name" : "sender-name-ta"}`}>{username}</h6>
                            <h6 className={` ${uid === auth.currentUser.uid ? "receiver-text-time " : "sender-text-time "}`}>8:34</h6>
                        </div>
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