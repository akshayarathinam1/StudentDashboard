import React, { useState } from 'react';
import './StudentLogin.css';
import { Link, useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const navigate = useNavigate();

  const STUDENT_ID = 'student@iitb.com';
  const STUDENT_PASS = 'stud123';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === STUDENT_ID && password === STUDENT_PASS) {
      navigate('/student-dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container-1 d-flex flex-column align-items-center justify-content-center">
      <div className="login-form p-4 flex-grow-1">
        <h5 className='text-center'>Student Login</h5>
        <p className='text-center'>Welcome onboard with us!</p>

        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className='form-label'>Student Email</label>
            <input
              type="email"
              className='form-control'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className='form-label'>Password</label>
            <input
              type="password"
              className='form-control'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className='text-end mb-3'>
            <Link to="/student-forgot-password" className='text-decoration-none small text-muted'>Forgot Password?</Link>
          </div>

          <button type="submit" className='btn btn-warning w-100 fw-semibold'>
            LogIn as Student
          </button>
        </form>

        <div className='mt-2'>
          <small className='d-flex flex-column align-items-center justify-content-center'>
            Have Admin Access?{' '}
            <Link to="/" className='fw-bold text-decoration-none'>LogIn as an Admin</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
