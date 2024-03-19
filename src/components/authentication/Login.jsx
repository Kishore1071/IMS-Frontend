import React, { useState } from 'react'
import './Login.css'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, serError] = useState('')

    const UserValidator = event => {
        event.preventDefault()

        console.log(username)
        console.log(password)
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

            </form>

        </div>
    )
}

export default Login