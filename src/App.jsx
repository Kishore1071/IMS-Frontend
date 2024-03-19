import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/authentication/Login.jsx'
import Signup from './components/authentication/Signup.jsx'

const App = () => {

    return (
        <>
            <Routes>

                <Route path='/' element={<Login />} />
                <Route path='/signup/' element={<Signup />} />

            </Routes>
        </>
    )
}

export default App
