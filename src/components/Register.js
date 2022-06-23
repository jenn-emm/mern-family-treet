import React from "react"
import RegisterUserEntry from "./login-register/RegisterUserEntry"
import Copyright from "./multi-use/Copyright"
import Navbar from "./multi-use/Navbar"

function Register() {
  return (
    <div>
        <Navbar />
        <RegisterUserEntry />
        <Copyright />
    </div>
  )
}

export default Register