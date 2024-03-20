import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const ERROT_MESSAGE = {
        color: "red",
        fontWeight: "bold",
        marginTop: "10px",
        fontSize: "20px"
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const UserValidator = event => {
        event.preventDefault()

        if ((username === '') || (password === '')) setError("Please fill all field!")

        else {

            const data_set = {
                username: username,
                password: password
            }

            axios.post('http://127.0.0.1:4000/user/validate/', data_set)
            .then(response => {

                if (response.data.status === false) setError(response.data.message)
                else navigate('/dummy/')
        
            })
            .catch(error => console.log(error))

        }
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
                <input className='form-input' type="text" placeholder="Username" value={username} onChange={event => setUsername(event.target.value)}/>

                <label className='login-label' htmlFor="password">Password</label>
                <input className='form-input' type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/>

                <button className='login_button' onClick={event => UserValidator(event)}>Log In</button>
                
                <p style={ERROT_MESSAGE}>{error}</p>

            </form>

        </div>
    )
}

export default Login