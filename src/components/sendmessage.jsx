import React, {useState} from 'react';
import firebase from 'firebase';
import { db ,auth} from '../firebase.js';
import '../styles/formarea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
function SendMessage(){

    const [msg , setMsg] = useState('');

    async function sendMessage(e){

        e.preventDefault();
        const {uid , photoURL} = auth.currentUser;

        await db.collection('messages').add({
            text : msg,
            photoURL,
            uid,
            createdAt : firebase.firestore.FieldValue.serverTimestamp()

        })

        setMsg('');


    }


    return(
        <React.Fragment>
                <div className ="form-container" >
                    <form onSubmit ={sendMessage}className = "message-send-form">
                        <textarea onChange={(e) => setMsg(e.target.value) }value ={msg}placeholder="Type your message ..." type="text-area" id="message-input" name="fname" ></textarea>
                        <button type="submit" id = "send-button"><FontAwesomeIcon className= "send-button-icon"icon={faPaperPlane} /></button>
                    </form>
                </div>
            </React.Fragment>
    )
}
export default SendMessage;