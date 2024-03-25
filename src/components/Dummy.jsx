import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNavbar from './TopNavbar'
import SideNavbar from './SideNavbar'
import axios from 'axios'

export const Dummy = () => {

    const navigate = useNavigate()

    const [data, setData] = useState([])

    const GetUsers = event => {

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('Bearer')}`
        };

        axios.get('http://127.0.0.1:4000/user/all/', { headers })
        .then(response => {
            setData(response.data.user_data);
            console.log(response.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    const PostUsers = event => {

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('Bearer')}`
        };

        const dataset = {
            person_name: "Thor"
        }

        axios.post('http://127.0.0.1:4000/user/test/', dataset, { headers })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    return (
        <>

            <TopNavbar></TopNavbar>

            <div className='body-container'>

                <SideNavbar></SideNavbar>

                <div className='component-container'>
                    <h1>Dummy page for now</h1>
                    <button onClick={() => navigate('/')}>Back to Login</button>
                    <button onClick={event => GetUsers(event)}>Get Users</button>
                    <button onClick={event => PostUsers(event)}>Post Users</button>
                    {data.length > 0 && JSON.stringify(data)}
                </div>
            </div>
        
            
        </>
    )
}
