import React from 'react'
import './AdminLogin.css';


const AdminLogin = () => {
  return (
    <div className="container-1 d-flex flex-column align-items-center justify-content-center ">
      <div>
        
      </div>
       <div className="login-form p-4 flex-grow-1">
        <h5 className='d-flex flex-column align-items-center justify-content-center'>Admin Login</h5>
        <p className='d-flex flex-column align-items-center justify-content-center'>Welcome onboard with us!</p>

        <div className="mb-3">
        <label htmlFor="email" className='form-label'>Admin Email</label>
        <input type="email" className='form-control' placeholder='Enter your username' />
       </div>

       <div className="mb-2"> 
        <label htmlFor="password" className='form-label'>Password</label>
        <input type="password" className='form-control' placeholder='Enter Your Password' />
       </div>

       <div className='text-end mb-3'>
        <a href="#" className='text-decoration-none small text-muted'>Forgot Password</a>
       </div>

       <button className='btn btn-warning w-100 fw-semibold'>LogIn as Admin</button>

       <div>
        <small className='d-flex flex-column align-items-center justify-content-center'>Are You a student? <a href="#" className='fw-bold text-decoration-none'>Login as a student</a></small>
       </div>
    </div>
       </div>
      
  )
}

export default AdminLogin