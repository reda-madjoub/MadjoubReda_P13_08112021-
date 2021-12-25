import React from 'react'
import { useSelector } from 'react-redux';
import 'Components/ProfileEdit/ProfileEdit.css'

const ProfileEdit = () => {
    const first = useSelector(state => state.Authentification.firstName)
    const last = useSelector(state => state.Authentification.lastName)
    console.log(useSelector(state => state.Authentification.firstName));
    return (
        <div className="header">
            <h1>Welcome back<br />{`${first} ${last}`}!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
    )
}

export default ProfileEdit