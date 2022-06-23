import React, {useState} from "react"
import DashboardHeader from "./user-sections/DashboardHeader"
import Placeholder from "../../images/img-placeholder.png"

function EditDashboard() {

    const [uploadImage, setUploadImage] = useState(Placeholder)
    const [imageText, setImageText] = useState("no image selected")

    const [recipeIngredients, setRecipeIngredients] = useState([
        {ingredient:""},
        {ingredient:""},
        {ingredient:""},
        {ingredient:""},
        {ingredient:""},
    ])

    const [recipeDirections, setRecipeDirections] = useState([
        {direction:""},
        {direction:""},
        {direction:""},
        {direction:""},
    ])
    
    const submitHandler = (event) =>{
        event.preventDefault()
        console.log(recipeValues)
    }

    const [recipeValues, setRecipeValues] = useState({
        name:"",
        img:"",
        prepTime:"",
        cookTime:"",
        servings:"",
        description:"",
        category:"",
        ingredients:recipeIngredients,
        directions:recipeDirections
    })

    const directionAdd = (event) =>{
        event.preventDefault()
        setRecipeDirections([...recipeDirections, {direction:""}])
    }

    const ingredientAdd = (event) =>{
        event.preventDefault()
        setRecipeIngredients([...recipeIngredients, {ingredient:""}])
    }

    const ingredientRemove = (event, index) =>{
        event.preventDefault()
        const ingredientList = [...recipeIngredients]

        ingredientList.splice(index, 1)

        setRecipeIngredients(ingredientList)
    }

    const directionRemove = (event, index) =>{
        event.preventDefault()
        const directionList = [...recipeDirections]

        directionList.splice(index, 1)

        setRecipeDirections(directionList)
    }

    
    const ingredientChangeHandler = (event, index) =>{
        const {name, value} = event.target

        const ingredientList = [...recipeIngredients]
        ingredientList[index][name] = value
        setRecipeIngredients(ingredientList)

    }

    const directionChangeHandler = (event, index) =>{
        const {name, value} = event.target

        const directionList = [...recipeDirections]
        directionList[index][name] = value
        setRecipeDirections(directionList)

    }

    const changeHandler = (event) => {  
        const {name, value} = event.target
        if (name === "img"){
            setUploadImage(URL.createObjectURL(event.target.files[0]))
            setImageText(event.target.files[0].name)         
        }
        
        setRecipeValues((prevValue) =>{

                return {
                    ...prevValue,
                    [name]:value
                }
            
        })
        console.log(recipeValues)
    }

  return (
    <div className="col-lg-10 user-dashboard">

        <div className="container add-edit-dashboard-section">
        <DashboardHeader greeting="Add Recipe" />
            <form onSubmit={submitHandler} className="form-horizontal add-edit-form">
            
            <div className="row recipe-name-section">
                <div className="col-lg-4">
                    <div className="form-group recipe-name-form">
                        <label className="form-label">Recipe Name</label>
                        <input name="name" onChange={changeHandler} value={recipeValues.name} className="form-control" placeholder="Enter Recipe Name"></input>
                    </div>   
                </div>  
            </div>

            <div className="row">
                <div  className="col-lg-4">
                    <div className="form-group">
                        <label className="form-label btn btn-success">Upload Image
                        <input name="img" value={recipeValues.img} onChange={changeHandler} type="file" className="form-control-file" hidden></input>
                        </label>
                        <span className="recipe-img-text">{imageText}</span>
                        <br></br>
                        <img alt="upload-img" className="recipe-upload-img" src={uploadImage}></img>
                    </div>   
                </div>  

                <div className="col-lg-6 recipe-optional-section">
                    <h5 className="col-lg-6 recipe-optional-header">Optional Section</h5>
                    <div className="form-group row g-0">
                        <label className="form-label col-lg-3 optional-section-label">Prep Time</label>
                        <div className="col-lg-7">
                            <input name="prepTime" onChange={changeHandler} value={recipeValues.prepTime} type="text" className="optional-section-input form-control" placeholder="Enter Prep Time"></input>
                        </div>
                    </div> 
                    <div className="form-group row g-0">
                        <label className="form-label col-lg-3 optional-section-label">Cook Time</label>
                        <div className="col-lg-7">
                            <input name="cookTime" onChange={changeHandler} value={recipeValues.cookTime} type="text" className="optional-section-input form-control" placeholder="Enter Cook Time"></input>
                        </div>
                    </div>  
                    <div className="form-group row g-0">
                        <label className="form-label col-lg-3 optional-section-label">Servings</label>
                        <div className="col-lg-7">
                            <input name="servings" onChange={changeHandler} value={recipeValues.servings} type="text" className="optional-section-input form-control" placeholder="Enter Number of Servings"></input>
                        </div>
                    </div>  
                    <div className="form-group row g-0">
                        <label className="form-label col-lg-3 optional-section-label">Description</label>
                        <div className="col-lg-7">
                            <input name="description" onChange={changeHandler} value={recipeValues.description} type="text" className="optional-section-input form-control" placeholder="Enter Recipe Description"></input>
                        </div>
                    </div>
                    <div className="form-group row g-0">
                        <label className="form-label col-lg-3 optional-section-label">Category</label>
                        <div className="col-lg-7">
                            <input name="category" onChange={changeHandler} value={recipeValues.category} type="text" className="optional-section-input form-control" placeholder="Italian, Mexican, Dessert, etc."></input>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row ingredients-section">
                <div className="col-lg-5">
                    <h5 className="ingredients-directions-section-header">Ingredients</h5>
                    
                    {recipeIngredients.map((recipeIngredient, index) =>{
                       return( 
                        <div key={index}>
                            <input value={recipeIngredient.ingredient} onChange={(event) => ingredientChangeHandler(event, index)} name="ingredient" type="text" className="form-control mb-3 recipe-ingredient-input"></input>
                            {recipeIngredients.length > 1 && <button onClick={(event) => ingredientRemove(event, index)} className="recipe-ingredient-directions-btn btn btn-outline-success">-</button> }
                        </div>  
                       )
                    })}
  
                    <button onClick={ingredientAdd} className="btn btn-success">+</button>
                </div>
                <div className="col-lg-7">
                    <h5 className="ingredients-directions-section-header">Directions</h5>
                    
                    {recipeDirections.map((recipeDirection, index) =>{
                        return(  
                    <div key={index}>
                        <textarea onChange={(event) => directionChangeHandler(event, index)}  name="direction" value={recipeDirection.direction} type="text" className="recipe-directions-textarea form-control mb-3" placeholder={index+1+"."}></textarea>
                        {recipeDirections.length > 1 && <button onClick={(event) => directionRemove(event, index)} className="recipe-ingredient-directions-btn btn btn-outline-success">-</button> }
                    </div>
                    )
                    })}            
                    <button onClick={directionAdd} className="btn btn-success">+</button>
                </div>
            </div>  
            <div className="row">
                <div className="col-lg-6"></div>
                <div className="add-edit-recipe-submit-section col-lg-6">
                    <button type="submit" class="add-edit-recipe-submit-btn btn btn-success">Submit</button>
                </div>
            </div>  
                
            </form>
        </div>
    </div>
  )
}

export default EditDashboard