import React, { Component } from 'react';
import '../styles/register.css'
class Register extends React.Component {
    render() { 
        return <React.Fragment>
            <main class="form-signin">
                    <form>
                        <h1 class="h3 mb-3 fw-normal titles">Create Account</h1>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="enter email or phone" />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="enter password" />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="retype password" />
                        </div>
                        <div class="mb-3">
                            <label for="formFileSm" class="form-label select">Select your picture below</label>
                            <input class="form-control form-control-sm" id="formFileSm" type="file" />
                        </div>

                        <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                    </form>
                    </main>
        </React.Fragment>;
    }
}
 
export default Register;