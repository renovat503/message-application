
import React, { useState,useEffect} from 'react';
import  { db } from '../firebase.js';
function Messages() {

    const [mess , setMessages] = useState([]);
    useEffect(() => {

            db.collection('messages01').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()));

        })

    }, [])
    return mess;
}
export default Messages;