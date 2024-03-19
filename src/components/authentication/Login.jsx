import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, serError] = useState('')

    const UserValidator = event => {
        event.preventDefault()

        console.log(username)
        console.log(password)

        axios.post('http://127.0.0.1:4000/', {username: username, password:password})
        .then(response => {
            console.log(response)
            localStorage.setItem('Bearer', response.data.access_token)
        })
    }

    const VieWData = event => {
        event.preventDefault()

        const token = localStorage.getItem('Bearer')

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }

        axios.get('http://127.0.0.1:4000/', {headers})
        .then(response => {
            console.log(response)
        })
    }

    return (
        <div className='main-container'>

            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>

            <form className='login-form'>

                <h3>Login Here</h3>

                <label className='login-label' htmlFor="username">Username</label>
                <input className='form-input' type="text" placeholder="Email or Phone" value={username} onChange={event => setUsername(event.target.value)}/>

                <label className='login-label' htmlFor="password">Password</label>
                <input className='form-input' type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/>

                <button className='login_button' onClick={event => UserValidator(event)}>Log In</button>
                <button className='login_button' onClick={event => VieWData(event)}>View</button>

            </form>

        </div>
    )
}

export default Login