import React, { Component } from 'react';
import NavBar from './components/navbar';
import MessageArea from './components/messagearea';
import NewMessage from './components/newmessage';
import FormArea from './components/formarea';
import SearchMessage from './components/searchmessage';

class App extends Component {

  state = {
    notifications : 4 
  }
  render() { 
    return ( 

          <div class="container">
            <div class="row">
              <NavBar notifications = {this.state.notifications}/>
            </div>
            <div class="row">
              <div class="col-4">
                <SearchMessage />
                <NewMessage />
              </div>
              <div class="col">
                <MessageArea />
                <div class="row">
              <FormArea />
            </div>
    
              </div>
              
              </div>
            </div>
      );
  }
}
 
export default App;