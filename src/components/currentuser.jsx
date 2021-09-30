import React ,{useState,useEffect}from 'react';
import '../styles/currentuser.css';

const CurrentUser = (props) => {

    
    let id = props.id;
    let dataFromMessage = props.data;

     const unique = [...new Map(dataFromMessage.map(item =>
        [item[id], item])).values()];

 return (
        <div className="general-container">
            {unique.map(({photoURL,uid,username}) => (

                <div key={uid} className="main-container">
                        <img className="image"src={photoURL} />
                        <span className="username">{username}</span>
                        <span className="status">{id}</span>
                    </div>
            ))}

        </div>

     );
        
     
}

 
export default CurrentUser;