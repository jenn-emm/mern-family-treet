import React from "react"
import Copyright from "./multi-use/Copyright"
import UserNavbar from "./user-pages/UserNavbar"
import SideNav from "./user-pages/SideNav"
import UserDashboard from "./user-pages/UserDashboard"



function UserHomePage() {
  return (
    <div>
    <UserNavbar />
      <div className="row">
          <SideNav />
          <UserDashboard />
      </div>
    <Copyright />
    </div>
  )
}

export default UserHomePage