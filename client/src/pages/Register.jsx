import React from 'react'

function Register() {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' />
        <input required type="email" placeholder='email' />   
        <input required type="password" placeholder='password' />
        <button>Register</button>
        <p>this is an error</p>
        <span>Do you have an account? <br/>
          <a href='login'>Login</a>
        </span>
      </form>
    </div>
  )
}

export default Login