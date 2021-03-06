import React from "react"
import Copyright from "./multi-use/Copyright"
import UserNavbar from "./user-pages/UserNavbar"
import EditDashboard from "./user-pages/EditDashboard"
import SideNav from "./user-pages/SideNav"

function AddEditRecipe() {
  return (
    <div>
        <UserNavbar />
        <div className="container-fluid">
          <div className="row">
              <SideNav />
              <EditDashboard />
          </div>
        </div>
        <Copyright />
    </div>
  )
}

export default AddEditRecipe