import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { GetUserDetails } from 'service/UserDetail'
import axios from 'axios';
import { LOGIN_URL } from 'constant/URL';
import 'pages/Login/Login.css'

const Login = () => {
    // const raw = {"email":"tony@stark.com","password":"password123"};
    const [userInput, setUserInput] = useState({"email": "", "password": ""})
    const dispatch = useDispatch()

    const handleChangeUsername = (e) => {
        setUserInput(() => {
            return {
                ...userInput,
                email:e
            }
        })
    }

    const handleChangePassword = (e) => {
        setUserInput(() => {
            return {
                ...userInput,
                password:e
            }
        })
    }
    
    const show = (el) => {
        el.style.display = "block"
    }
    const hide = (el) => {
        el.style.display = "none"
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        hide(document.getElementById('failLog'))

        axios.post(LOGIN_URL, userInput)
            .then(response => {
                dispatch({
                    type: 'LOGIN',
                    token: response.data.body.token,
                    logIn: true,
                })
                return response.data.body.token
            })
            .catch(err =>{
                show(document.getElementById('failLog'))
                console.error(err)
            })
    
        }
        
    // ADD FIRSTNAME AND LASTNAME TO GLOBAL STATE
    GetUserDetails(useSelector(state => state.Authentification.token))
    // IF USER NOT LOGIN REDIRECT TO PROFILE PAGE
    if(useSelector(state => state.Authentification.loggedIn)) return <Navigate to="/profile"/>

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input onInput={(e) => handleChangeUsername(e.target.value)} value={userInput.email} type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input onInput={(e) => handleChangePassword(e.target.value)} value={userInput.password}  type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* SHOULD BE THE BUTTON BELOW  */}
                    <br />
                    <p id="failLog" style={{color: "red", display: "none"}}>Please fill out credentials</p>
                    
                
                    <button className="sign-in-button">Sign In</button> 
                </form>
            </section>
        </main>
    )
}

export default Login