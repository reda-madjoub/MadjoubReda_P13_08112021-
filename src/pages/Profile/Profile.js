import React from 'react'
import 'Components/Account/Account'
import 'pages/Profile/Profile.css'
import Account from 'Components/Account/Account'
import { ACCOUNTS_DETAILS } from 'constant/userBankInformations'
import ProfileEdit from 'Components/ProfileEdit/ProfileEdit'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'


const Profile = () => {
    const data = useSelector(state => state)
    if(data.Authentification.loggedIn === false) return <Navigate to='/login'/>
    return (
        <main className="main bg-dark">
            <ProfileEdit/>
            <h2 className="sr-only">Accounts</h2>
            {
                ACCOUNTS_DETAILS.map(({amount, id}) => (
                        <Account
                            key={id}
                            amount= {amount}
                        />
                    )
                )
            }
        </main>
    )
}

export default Profile