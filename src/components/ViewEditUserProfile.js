import React from "react"
import UserNavbar from "./user-pages/UserNavbar"
import SideNav from "./user-pages/SideNav"
import Copyright from "./multi-use/Copyright"
import ViewEditProfileDashboard from "./settings-pages/ViewEditProfileDashboard"

function ViewEditUserProfile() {
    return (
        <div>
            <UserNavbar />
            <div className="container-fluid">
            <div className="row">
                <SideNav />
                <ViewEditProfileDashboard />
            </div>
            </div>
            <Copyright />
        </div>
      )
}

export default ViewEditUserProfile