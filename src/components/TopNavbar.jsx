import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const TopNavbar = () => {

    const navigate = useNavigate()

    const LogoutHandler = () => {

        const dataset = {
            refresh_token: localStorage.getItem('Refresh')
        }

        axios.post('http://127.0.0.1:4000/user/logout/', dataset)
        .then(response => {
            localStorage.clear()
            navigate('/')
        })
    }

    return (
        <div className='top-navbar-container'>

            <div className='title-container'>
            </div>

            <div className='logout-div'>
                <button className='logout-button' onClick={LogoutHandler}>Logout</button>
            </div>

        </div>
    )
}

export default TopNavbar