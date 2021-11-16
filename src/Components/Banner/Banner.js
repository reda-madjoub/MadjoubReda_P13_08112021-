import React from 'react'
import { Link } from 'react-router-dom';
import argentBantLogo from 'img/argentBankLogo.png'
import 'Components/Banner/Banner.css'

const Banner = () => {
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
            <div>
                <Link to='/login' className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Banner