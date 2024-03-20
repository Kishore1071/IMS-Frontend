import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Dummy = () => {

    const navigate = useNavigate()
  return (
    <div>
        <h1>Dummy page for now</h1>
        <button onClick={() => navigate('/')}>Back to Login</button>
    </div>
  )
}
