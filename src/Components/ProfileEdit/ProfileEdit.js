import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import updateProfile from 'service/updateProfile';
import 'Components/ProfileEdit/ProfileEdit.css'

const ProfileEdit = () => {
    const [isClicked, setIsClicked] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const first = useSelector(state => state.Authentification.firstName)
    const last = useSelector(state => state.Authentification.lastName)
    const token = useSelector(state => state.Authentification.token)

    const dispatch = useDispatch()


    const handleChangeFirst = (e) => {
        setFirstName(e.target.value)
    }
    const handleChangeLast = (e) => {
        setLastName(e.target.value)
    }
    const updateData = () => {
        dispatch({
            type: 'UPDATE_NAME',
            firstName: firstName,
            lastName: lastName,
        })
        // console.log(firstName, first);
        updateProfile(firstName, lastName, token)
    }
    const showContent = () =>{
        setIsClicked(isClicked => !isClicked)
    }

    console.log(useSelector(state => state.Authentification));
    useSelector(state => state.Authentification.firstName)
    return (
        <div className="header">
            <h1>Welcome back<br />{`${first} ${last}`}!</h1>
            <button onClick={showContent} className="edit-button">Edit Name</button>
            {
                isClicked && (
                    <div className="edit-section">
                        <div className="container-input">
                            <input onChange={handleChangeFirst} value={firstName} type="text" placeholder={first}/>
                            <input onChange={handleChangeLast} value={lastName} type="text" placeholder={last}/>
                        </div>
                        <div className="container-buttons">
                            <button onClick={updateData}>Save</button>
                            <button onClick={showContent}>Cancel</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ProfileEdit