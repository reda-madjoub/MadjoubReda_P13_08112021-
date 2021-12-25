import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import 'Components/ProfileEdit/ProfileEdit.css'
import EditFirstNameLastName from 'Components/EditFirstNameLastName/EditFirstNameLastName'

const ProfileEdit = () => {
    const [isClicked, setIsClicked] = useState()
    const first = useSelector(state => state.Authentification.firstName)
    const last = useSelector(state => state.Authentification.lastName)
    console.log(useSelector(state => state.Authentification.firstName));

    const showContent = () => setIsClicked(isClicked => !isClicked)
    console.log(isClicked)

    return (
        <div className="header">
            <h1>Welcome back<br />{`${first} ${last}`}!</h1>
            <button onClick={showContent} className="edit-button">Edit Name</button>
            {
                isClicked && (
                    <EditFirstNameLastName/>
                )
            }
        </div>
    )
}

export default ProfileEdit