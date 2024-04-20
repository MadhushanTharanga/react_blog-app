import React from 'react'

function Login() {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='username' />
        <input required type="password" placeholder='password' />
        <button>Login</button>
        <p>this is an error</p>
        <span>Don't you have an account? <br/>
          <a href='register'>Register</a>
        </span>
      </form>
    </div>
  )
}

export default Login