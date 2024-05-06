import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input required type="text" placeholder='username' value={username} onChange={handleUsernameChange} />
        <input required type="email" placeholder='email' value={email} onChange={handleEmailChange} />   
        <input required type="password" placeholder='password' value={password} onChange={handlePasswordChange} />
        <button>Register</button>
        <p>this is an error</p>
        <span>Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register