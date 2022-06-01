import React from 'react'
import LoginUserEntry from './login-register/LoginUserEntry'
import Copyright from './multi-use/Copyright'
import Navbar from './multi-use/Navbar'

function Login() {
  return (
    <div>
        <Navbar />
        <LoginUserEntry />
        <Copyright />
    </div>
  )
}

export default Login