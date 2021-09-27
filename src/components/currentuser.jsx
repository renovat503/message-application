import React ,{useState}from 'react';
import '../styles/currentuser.css';

const CurrentUser = (props) => {

    
    let id = props.id;
    let dataFromMessage = props.data;

    let [user , setUser] = useState([id]);
    setUser=()=>{
        user = id;
    }
    

    const unique = [...new Map(dataFromMessage.map(item =>
    [item[user], item])).values()];

 return (
        <div>
            {unique.map(({photoURL,uid}) => (

                <div key={uid} className="main-container">
                        <img className="image"src={photoURL} />
                        <span className="status">{uid}</span>
                    </div>
            ))}

        </div>

     );
        
     
}

 
export default CurrentUser;