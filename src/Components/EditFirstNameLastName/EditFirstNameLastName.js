import React from 'react'
import { useSelector } from 'react-redux';
import 'Components/EditFirstNameLastName/EditFirstNameLastName.css'

export default function EditFirstNameLastName() {
    const first = useSelector(state => state.Authentification.firstName)
    const last = useSelector(state => state.Authentification.lastName)
    return (
        <div className="edit-section">
            <div className="container-input">
                <input 
                    type="text" 
                    placeholder={first}    
                />
                <input 
                    type="text" 
                    placeholder={last}
                />
            </div>
            <div className="container-buttons">
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}
