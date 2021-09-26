import React ,{ useState,useEffect}from 'react';
import  { db } from '../firebase.js';
import '../styles/currentuser.css';

const CurrentUser = (props) => {

    
    let id = props.id;
    const dataFromNewMessage = props.data;

    const user = [...dataFromNewMessage];
    const unique = [...new Map(user.map(item =>
        [item[id], item])).values()];

    return (
        <div>

        {unique.map(({photoURL,username,text}) => (

            <div className="main-container">
                    <img className="image"src={photoURL} />
                    <span className="name">{username}</span>
                    <span className="status">{text}</span>
                </div>


        ))}
        </div>

     );
        
     
}

 
export default CurrentUser;