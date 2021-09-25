import React, { Component } from 'react';
import  { db } from '../firebase.js';
import NavBar from '../components/navbar';
import SearchMessage  from '../components/searchmessage';
import NewMessage  from '../components/newmessage';
import MessageArea  from '../components/messagearea';

class AppMain extends React.Component {
    
  state = {
    notifications: 4,
    messages: []
  }


    render() { 
      
      console.log(this.state.messages);

         return <React.Fragment>
            <div class="container">
            <div class="row">
              <NavBar notifications = {this.state.notifications}/>
            </div>
            <div class="row">
              <div class="col-4">
                <SearchMessage />
                <NewMessage mess={this.state.messages} notifications={this.state.notifications} />
              </div>
              <div class="col">
                <MessageArea />
                <div class="row">
            </div>
    
              </div>
              
              </div>
               </div>
            </React.Fragment>;
    }
  }
 
export default AppMain;