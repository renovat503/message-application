import React, { Component } from 'react';
import '../styles/navbar.css';
import image1 from '../images/user3.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../firebase';
class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className ="nav-container">
                    <div className ="nav-wrap">

                        <div className ="nav-drop">
                            <FontAwesomeIcon onClick={() => auth.signOut()}className= "nav-icons"icon={faSignOutAlt} />
                        </div> 
                        <div className ="nav-profile-pic">
                            <img className = "profile-picture" src ={auth.currentUser.photoURL} />
                        </div> 
                        <div className ="nav-notifications">
                            <FontAwesomeIcon className= "nav-icons"icon={faBell} />
                            <div className = "notifications-count">
                                <h6 className ="not-count">{this.props.notifications}</h6>
                            </div>
                        </div>
                    </div>     
                </div>
            </React.Fragment>
         );
    }
}
 
export default NavBar;