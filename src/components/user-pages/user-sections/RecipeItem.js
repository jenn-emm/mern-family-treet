import React from "react"

function RecipeItem({title}) {
  return (
    <li className="recipe-item">
        <a className="card-text">{title}</a>
    </li>
  )
}

export default RecipeItem