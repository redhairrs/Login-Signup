import React, { useState } from 'react';
import "./Login.css";
import { useEffect } from 'react';
const Login = () => {
    const handlelogin = () => {
        const container = document.getElementById('container-login');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login')
        registerBtn.addEventListener('click', () => {
            container.classList.add('active');
        });
        loginBtn.addEventListener('click', () => {
            container.classList.remove('active');
        });
    };    
    useEffect(() => {
        handlelogin();
        return () => {
            
        }
    }, [])

    return (
        <div className="container-login" id="container-login">
            <div className="form-container-login sign-up">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-icons-login">
                        <a href="#" className="icons-login"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" className="icons-login"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="icons-login"><i className="fa-brands fa-github"></i></a>
                        <a href="#" className="icons-login"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email to registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container-login sign-in">
                <form>
                    <h1>Sign In</h1>
                    <div className="social-icons-login">
                        <a href="#" className="icons-login"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" className="icons-login"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="icons-login"><i className="fa-brands fa-github"></i></a>
                        <a href="#" className="icons-login"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email/password</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forget your Password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="toggle-container-login">
                <div className="toggle-login">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your Personal details to use all of site features</p>
                        <button className="hidden" id="login">Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your Personal details to use all of site features</p>
                        <button className="hidden" id="register">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
