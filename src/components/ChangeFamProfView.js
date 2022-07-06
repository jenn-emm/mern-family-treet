import React from "react"
import UserNavbar from "./user-pages/UserNavbar"
import SideNav from "./user-pages/SideNav"
import Copyright from "./multi-use/Copyright"
import ChangeFamProfileViewDashboard from "./settings-pages/ChangeFamProfileViewDashboard"

function ChangeFamProfView() {
  return (
    <div>
    <UserNavbar />
    <div className="container-fluid">
      <div className="row">
          <SideNav />
          <ChangeFamProfileViewDashboard />
      </div>
      </div>
    <Copyright />
    </div>
  )
}

export default ChangeFamProfView