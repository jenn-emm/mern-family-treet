import React, { useState } from "react"

function ConfirmDeleteModal({closeModal}) {

    const [isConfirmedDelete, setIsConfirmedDelete] = useState(false)

    const submitHandler = (event) =>{
        event.preventDefault()
        setIsConfirmedDelete(true)
        //Here is where we will go through the DB and find the recipe to delete.
        //Once the recipe is deleted, then we will pop up one more modal to confirm deletion and
        //we need to redirect to the home page.

        //also, we need to pass through the id of the recipe that was iniitally rendered 
    }

  return (
    <div className="delete-modal-bg">
        <div className="confirm-delete-modal-container">
            <div className="close-modal-btn" >
                <button className="close-modal-btn" onClick={closeModal}> X </button>
            </div>
        {!isConfirmedDelete && <form>
            <h2 className="confirm-delete-header">Confirm Deleting Recipe</h2>
            <p className="forgot-pw-subheader">Are you sure you want to permanently delete this recipe from the family profile?</p>
            <p className="confirm-delete-sm">Deleting this recipe will also delete the recipe for all other family members.</p>
            <button onClick={closeModal} className="btn btn-secondary forgot-pw-btn">Cancel</button>
            <button onClick={submitHandler} className="btn btn-success forgot-pw-btn">Delete Recipe</button>
            
        </form>}
        {isConfirmedDelete && <div className="recipe-deleted-close-btn">
            <h2 className="confirm-delete-header">Recipe Deleted!</h2>
            <button onClick={closeModal} className="btn btn-secondary">Close</button>
        </div>}
        </div>
    </div>
  )
}

export default ConfirmDeleteModal