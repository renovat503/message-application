import React  from 'react';
import AppMain from './components/app-main';
import Login from './components/login';
import {auth} from './firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth';



const App = () => {

  const [user] = useAuthState(auth);
  return ( 
    

      <React.Fragment>

          { user ? <AppMain /> : <Login /> }

          </React.Fragment>
          
      );
  }
 
export default App;







