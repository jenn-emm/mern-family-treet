import React from "react"
import UserNavbar from "./user-pages/UserNavbar"
import SideNav from "./user-pages/SideNav"
import Copyright from "./multi-use/Copyright"
import SettingsDashboard from "./settings-pages/SettingsDashboard"

function Settings() {
  return (
    <div>
    <UserNavbar />
    <div className="container-fluid">
      <div className="row">
          <SideNav />
          <SettingsDashboard />
      </div>
      </div>
    <Copyright />
    </div>
  )
}

export default Settings