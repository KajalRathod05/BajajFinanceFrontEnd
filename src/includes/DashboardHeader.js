import React from 'react'
import { Link } from 'react-router-dom'

function DashboardHeader() {

         let userJson=localStorage.getItem('User');
        const {accountType,username } =JSON.parse(userJson)
             
    return (
        <div>

            <nav className='d-flex bg-dark '>

                <div className='w-50 justify-content-start p-0 d-flex'>
                    <Link className='text-white fs-1 ms-2' to={'/'}><i className="bi bi-house-door-fill"></i></Link>
                    <div className='d-flex'>
                    <p className='text-white fs-4 ms-3 mt-3'>{accountType}</p>
                    <p className='text-white fs-4 ms-3 mt-3'>{username}</p>
                    </div>
                </div>
                <div className='w-50 text-end  justify-content-end d-flex'>
                    <h3 className='text-success mt-3 me-1'><i className="bi bi-person-circle"></i></h3>
                    <Link className='btn btn-outline text-white fs-5 me-3 mt-3' to={'profile'}>My Profile</Link>
                    <Link className='btn btn-outline text-white fs-5 mt-3' to={'/'}>Logout</Link>
                </div>
            </nav>
        </div>
    )
}

export default DashboardHeader