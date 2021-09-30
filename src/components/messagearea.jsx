import React, { useState , useEffect,useRef } from 'react';
import  { db , auth } from '../firebase.js';
import '../styles/messagearea.css';
import SendMessage from '../components/sendmessage';
import CurrentUser from '../components/currentuser';
import { HashRouter } from 'react-router-dom';


 function MessageArea(props){

    const scroll = useRef();
    const [key , setKey] = useState(props.user);

    if(props.user !== key) setKey(props.user);
   
    let to = key;
    let me = auth.currentUser.uid;
    

    //chatId initialization

    let outGoing = me + key;
    let inComing = key + me;
    

    
    





    //Query One && Query two
    const [messages , setMessages] = useState([]);
    const queryOne = db.collection('messages02').where('to','in',[outGoing,inComing]).orderBy('createdAt').limit(1000);
    


  useEffect(() => {

    queryOne.onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => doc.data()));

})

}, [outGoing])


    
    return(
        
        <div>
            <h1></h1>
            <CurrentUser data={messages} id={to}/>

        <div className="message-area-container ">
            {messages.map(({text,photoURL,uid,username}) => (

            
                    <div className={` ${uid === auth.currentUser.uid ? "message-receiver-section " : "message-sender-section "}`} key={uid}>

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
            <SendMessage toTwo={inComing}to={outGoing}scroll={scroll} />
        </div>
    </div>
    )


    }
 
export default MessageArea;