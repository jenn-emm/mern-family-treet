import React from "react"
import UserNavbar from "./user-pages/UserNavbar"
import SideNav from "./user-pages/SideNav"
import Copyright from "./multi-use/Copyright"
import ViewDashboard from "./user-pages/ViewDashboard"


const ViewRecipe = () => {

  return (
    <div>
        <UserNavbar />
        <div className="container-fluid">
          <div className="row">
              <SideNav />
              <ViewDashboard/>
          </div>
        </div>
        <Copyright />
    </div>
  )
}

export default ViewRecipe