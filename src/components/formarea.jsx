import React, { Component } from 'react';
import '../styles/formarea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
class FormArea extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className ="form-container" >
                    <form className = "message-send-form">
                        <textarea placeholder="Type your message ..." type="text-area" id="message-input" name="fname" ></textarea>
                        <button id = "send-button"><FontAwesomeIcon className= "send-button-icon"icon={faPaperPlane} /></button>
                    </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default FormArea;