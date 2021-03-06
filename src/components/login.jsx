import React from 'react';
import firebase from 'firebase';
import '../styles/login.css';
import {auth} from '../firebase.js';
import logo from '../images/chat.png';


class Login extends React.Component {

    render() {

        function signInWithGoogle(e) {

            e.preventDefault() ;

            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithRedirect(provider)
        }

        return <React.Fragment>

                    <main className="form-signin">
                        <img src={logo}alt=""className="logo-login"/>
                    <form>
                        <h1 className="h3 mb-3 fw-normal titles">Please sign in</h1>
                        <button onClick={signInWithGoogle} className="w-100 btn btn-lg btn-primary" type="submit">Sign in with Google</button>
                        <button className="w-100 btn btn-lg btn-primary disabled">Sign in with GitHub</button>
                        <p class="mt-5 mb-3 text-muted">Message App &copy; 2021</p>
                    </form>
                    </main>
                
                </React.Fragment>;
    }
}
 
export default Login;