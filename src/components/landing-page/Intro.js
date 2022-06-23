import React from "react"
import background from "../../images/background-food.jpg";

function Intro() {
  return (
    <div className="intro-home" style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover"}}>

      <h1 className="company-name">FamilyTreet</h1>
      <h3 className="intro-subheading">Family Recipes, Together</h3>
    </div>
  )
}

export default Intro