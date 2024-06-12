import React, { useState } from 'react';
import "./Login.css";
import axios from "axios"
import { useEffect } from 'react';
import { Button, message, Space } from 'antd';
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

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    const [messageApi, contextHolder] = message.useMessage();

    const success1 = () => {
        messageApi.open({
            type: 'success',
            content: 'This username has Sign Up Successfully',
        });
    };

    const error1 = () => {
        messageApi.open({
            type: 'error',
            content: 'This username is already been created',
        });
    };

    const signUp = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/createuser", {
                name, email, username: userName, password
            })
                .then(res => {
                    console.log(res);
                    success1();
                })
                .catch(e => {
                    console.log(e.response.data);
                    if (e.response.data.Error) {
                        // alert("This username is already been created");
                        error1();
                    }
                })
            
        }
        catch (e) {
            console.log(e);

        }
    }

    const success2 = () => {
        messageApi.open({
            type: 'success',
            content: 'Login is Successfull',
        });
    };

    const error2 = () => {
        messageApi.open({
            type: 'error',
            content: 'Login details are Wrong',
        });
    };

    const signIn = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/login", {
                username: userName, password
            })
                .then(res => {
                    console.log(res);
                    success2();
                })
                .catch(e => {
                    console.log(e.response.data);
                    if (e.response.data.Error) {
                        // alert("This username is already been created");
                        error2();
                    }
                })
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="container-login" id="container-login">
            {contextHolder}
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
                    <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Name" />
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                    <input type="userName" onChange={(e) => { setUserName(e.target.value) }} placeholder="userName" />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                    <button onClick={signUp}>Sign Up</button>
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
                    <input type="userName" onChange={(e) => { setUserName(e.target.value) }} placeholder="userName" />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                    <a href="#">Forget your Password?</a>
                    <button onClick={signIn}>Sign In</button>
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
