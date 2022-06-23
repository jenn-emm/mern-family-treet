import React from "react"
import Copyright from "./multi-use/Copyright"
import Navbar from "./multi-use/Navbar"
import ResetPasswordUserEntry from "./forgot-reset-pw/ResetPasswordUserEntry"

function ResetPassword() {
    return (
        <div>
          <Navbar />
          <ResetPasswordUserEntry />
          <Copyright />
        </div>
      )
}

export default ResetPassword