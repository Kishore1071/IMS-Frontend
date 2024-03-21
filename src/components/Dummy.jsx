import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopNavbar from './TopNavbar'
import SideNavbar from './SideNavbar'

export const Dummy = () => {

    const navigate = useNavigate()
  return (
    <>

        <TopNavbar></TopNavbar>

        <div className='body-container'>

            <SideNavbar></SideNavbar>

            <div className='component-container'>
                <h1>Dummy page for now</h1>
                <button onClick={() => navigate('/')}>Back to Login</button>
            </div>
        </div>
    
        
    </>
  )
}
