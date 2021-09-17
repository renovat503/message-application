import React, { Component } from 'react';
import '../styles/searchmessage.css';
class SearchMessage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className ="search-area-div">
                    <h1 className = "search-message-title">Messages</h1>
                    <form>
                        <input  placeholder = "search messages" className = "search-message-input" type = "text" />
                    </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default SearchMessage;