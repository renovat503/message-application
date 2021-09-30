import React, { Component } from 'react';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt , faBell,faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../firebase';
import logo from '../images/chat.png';
class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className ="nav-container">
                <div className="logo-wrapper">
                    <img className = "logo"src={logo}alt="" />
                </div>
                    <div className ="nav-wrap">

                        <div className ="nav-drop">
                            <FontAwesomeIcon onClick={() => auth.signOut()}className= "nav-icons"icon={faArrowAltCircleRight} />
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