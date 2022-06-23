import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUtensils} from "@fortawesome/free-solid-svg-icons"
import RecipeItem from "./RecipeItem";

// Temporary array to hold example recipe names until database is connected
const tempRecipeList = ["Chicken Noodle Soup", "Salmon Pinwheels", "Jambalaya", "Rice Pilaf", "Chicken Parmesan", "Fish Tacos"]


function RecipeCard() {
  return (
    <div className="col-lg-7 recipe-card-text">
                            <div className="card user-main-card">
                                <div className="card-body">
                                    <h4 className="card-title recipe-card-title">O'Meara Shared Family Recipes <FontAwesomeIcon className="fa-icon fa-fw" icon={faUtensils} /></h4>
                                        <ul className="fam-recipe-list">

                                        {tempRecipeList.map((name)=>{
                                            return(
                                                <RecipeItem title={name}/>
                                            )
                                        })}

                                        </ul>
                                    </div>
                            </div>  
                        </div>
  )
}

export default RecipeCard