import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { EDIT_PROFILE_URL } from 'constant/URL';
import 'pages/Login/Login.css'


export const GetUserDetails = (token) => {

    const dispatch = useDispatch()
    console.log(useSelector(state => state))

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
    };
    if(useSelector(state => state.Authentification.loggedIn))
    {
        console.log('hi');
        fetch(EDIT_PROFILE_URL, requestOptions)
        .then(response => response.json())
        .then(result => {
            dispatch({
                type: 'UPDATE_NAME',
                firstName: result.body.firstName,
                lastName: result.body.lastName,
            })
        })
        .catch(error => console.log('error', error));
    }
}