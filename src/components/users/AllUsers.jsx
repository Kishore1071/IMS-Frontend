import React, { useEffect, useState } from 'react'
import TopNavbar from '../TopNavbar'
import SideNavbar from '../SideNavbar'
import axios from 'axios'

const AllUsers = () => {

    const [user_data, setUserData] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:4000/user/all/')
        .then(response => {
            setUserData(response.data.user_data)
            console.log(response.data.user_data)
        })
        .catch(error => console.log(error))
    }, [])

    const all_users = user_data.length === 0 ? <tr style={{fontWeight: 'bold'}}><td>No Data Found</td></tr> :
    user_data.map((user, index) => {

        let role = ""

        if (user.admin === true) role = 'Admin'
        else if (user.manager === true) role = 'Manager'
        else if (user.team_leader === true) role = 'Team Leader'
        else if (user.employee === true) role = 'Employee'

        return (
            <tr key={user._id}>

                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{(user.joined_date).slice(0,10)}</td>
                <td>{(user.birth_date).slice(0,10)}</td>
                <td>{role}</td>
                <td style={{textAlign: 'center'}}>
                    <button className='user-edit' >Edit</button>
                </td>

            </tr>
        )

    })



    return (
        <>

            <TopNavbar></TopNavbar>

            <div className='body-container'>

                <SideNavbar />

                <div className='component-container'>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Sno</th>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Joined Date</th>
                                <th>Birth Date</th>
                                <th>Role</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {all_users}
                        </tbody>
                    </table>

                </div>
            </div>
        
        </>
    )
}

export default AllUsers