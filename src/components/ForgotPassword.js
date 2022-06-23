import React from "react"
import Copyright from "./multi-use/Copyright"
import Navbar from "./multi-use/Navbar"
import ForgotPasswordUserEntry from "./forgot-reset-pw/ForgotPasswordUserEntry"


function ForgotPassword() {
  return (
    <div>
      <Navbar />
      <ForgotPasswordUserEntry />
      <Copyright />
    </div>
  )
}

export default ForgotPassword