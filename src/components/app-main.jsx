import React, { useState,useEffect} from 'react';
import  { db } from '../firebase.js';
import NavBar from '../components/navbar';
import SearchMessage  from '../components/searchmessage';
import NewMessage  from '../components/newmessage';
import MessageArea  from '../components/messagearea';

function AppMain (){


  const [messages , setMessages] = useState([]);

  useEffect(() => {

    db.collection('messages02').orderBy('createdAt').limit(200).onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => doc.data()));

})

}, [])


  let [user = "KvMFMR9VtsQIeBLuk17Qa1omtV92" , setCurrentUser] = useState();

  useEffect(() => {
    setCurrentUser = (uid)=>{

      user = uid;


    }
  }, [])



         return (
         <React.Fragment>
            <div class="container">
            <div class="row">
              <NavBar />
            </div>
            <div class="row">
              <div class="col-4">
                <SearchMessage />
                <NewMessage data={messages} myId={user} currentUser={setCurrentUser} />
              </div>
              <div class="col">
                <MessageArea data={messages}user={user}/>
                <div class="row">
            </div>
    
              </div>
              
              </div>
               </div>
            </React.Fragment>
         )
    }
 
export default AppMain;