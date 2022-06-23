import React from "react"
import DashboardHeader from "./user-sections/DashboardHeader";
import FamilyCard from "./user-sections/FamilyCard";
import RecipeCard from "./user-sections/RecipeCard";


function UserDashboard() {
  return (
    <div className="col-lg-10 user-dashboard">
        <DashboardHeader greeting="Hello, Jenn!" />

        <div className="row dashboard-card-section">
            <RecipeCard />
            <FamilyCard />  
        </div>
        
    </div>
  )
}

export default UserDashboard