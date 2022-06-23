import React from "react"
import DashboardHeader from "./user-sections/DashboardHeader"

const testRecipe = {
    name:"Fish Tacos",
    img:"",
    prepTime:"30 mins",
    cookTime:"15mins",
    servings:"4",
    description:"Delicious fish tacos",
    category:"mexican",
    ingredients:["tortillas", "tilapia", "cabbage", "jalapenos", "mayo", "lime"],
    directions:["In a small bowl, combine the sour cream, mayonnaise, lime juice, and hot sauce (if using) for the taco sauce. Stir until combined.",
    "In a medium bowl, combine the shredded cabbage with 3 tablespoons of the taco sauce. Stir to coat and add more taco sauce if you like.",
    "Sprinkle the fish on both sides with chili powder and salt. Gently rub in the seasonings with your fingers to make sure the fish is entirely coated",
"Warm a large cast iron or nonstick skillet on the stovetop over medium-high heat. When hot, add one tablespoon of olive oil and tilt the pan to entirely coat the bottom.",
"Add the fish to the pan and cook for 2 minutes. Flip the fish and cook another 2 minutes. Flip and cook 1-2 minutes longer if needed; the fish is done when it is opaque all the way through and breaks apart easily. If any smaller, thinner pieces of the fish start to break off as you flip, just scoop them out and transfer them to a serving platter. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
"enjoy!"]
}

const RecipeDashboard= React.forwardRef((props, ref) => {


  return (
    <div ref={ref} className="container recipe-dashboard-section">

        <DashboardHeader greeting={testRecipe.name} />
        
            <form className="form-horizontal recipe-dashboard-form">

                <div className="row">
                    <div  className="col-lg-4">
                        <div className="form-group">
                            <img className="view-recipe-img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190307-fish-tacos-112-1553283299.jpg?crop=0.770xw:0.651xh;0.121xw,0.0179xh&resize=768:*"></img>
                        </div>   
                    </div>  

                    <div className="col-lg-6 recipe-dashboard-optional">
                        <div className="form-group row g-0">
                            <label style={{verticalAlign:"middle", fontWeight:"bold"}} className="form-label col-lg-3">Prep Time</label>
                            <div className="col-lg-7">
                                <p>{testRecipe.prepTime}</p>
                            </div>
                        </div> 
                        <div className="form-group row g-0">
                            <label style={{verticalAlign:"middle", fontWeight:"bold"}} className="form-label col-lg-3">Cook Time</label>
                            <div className="col-lg-7">
                                <p>{testRecipe.cookTime}</p>
                            </div>
                        </div>  
                        <div className="form-group row g-0">
                            <label style={{verticalAlign:"middle", fontWeight:"bold"}} className="form-label col-lg-3">Servings</label>
                            <div className="col-lg-7">
                                <p>{testRecipe.servings}</p>
                            </div>
                        </div>  
                        <div className="form-group row g-0">
                            <label style={{verticalAlign:"middle", fontWeight:"bold"}} className="form-label col-lg-3">Description</label>
                            <div className="col-lg-7">
                                <p>{testRecipe.description}</p>
                            </div>
                        </div>
                        <div className="form-group row g-0">
                            <label style={{verticalAlign:"middle", fontWeight:"bold"}} className="form-label col-lg-3">Category</label>
                            <div className="col-lg-7">
                                <p>{testRecipe.category}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{paddingTop:"2rem"}} className="row">
                    <div id="ingredients-section" className="col-lg-5">
                        <h5 style={{marginBottom:"1.5rem"}}>Ingredients</h5>
                        <ul>
                        {testRecipe.ingredients.map((ingredient, index)=>{
                            return(<li key={index} style={{listStyleType:"initial", paddingBottom:".75rem"}}>{ingredient}</li>)
                        })}
                        </ul>  
                    </div>
                    <div className="col-lg-7">
                        <h5 style={{marginBottom:"1.5rem"}}>Directions</h5>
                        <ol>
                        {testRecipe.directions.map((direction, index) =>{
                            return(<li key={index} style={{paddingLeft:"1rem",paddingBottom:".75rem"}}>{direction}</li>)
                        })}    
                        </ol>
                    </div>
                </div>    
            </form>
    </div>
  )
})

export default RecipeDashboard