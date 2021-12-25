import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import argentBantLogo from 'img/argentBankLogo.png'
import 'Components/Banner/Banner.css'
import { LOGOUT } from 'constant/actions';


const Banner = () => {
    const dispatch = useDispatch()
    const isUserLoggedIn = useSelector(state => state.Authentification.loggedIn)
    const first = useSelector(state => state.Authentification.firstName)

    return (
        <nav className="main-nav">
            <Link to='/' className="main-nav-logo">
                <img
                className="main-nav-logo-image"
                src={argentBantLogo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {
                isUserLoggedIn ? 
            <div className="loggedIn">
                <div className="user-loggedIn">
                    <i className="fa fa-user-circle fa-1x"></i>
                    <p>{first}</p>
                </div>
                <Link onClick={() => dispatch(LOGOUT)} to='/' className="main-nav-item">
                <i className="fa fa-sign-out fa-1x"></i>
                <p>Sign Out</p>
                </Link>
            </div>
            :
            <div className="loggedOut">
                <Link to='/login' className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    <p>Sign In</p>
                </Link>
            </div>

            }
        </nav>
    )
}

export default Banner