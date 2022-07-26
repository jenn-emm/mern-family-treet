import React, {useState} from "react"

function CreateFamProfileDashboard({closeModal, openChange}) {

    const [familyNameEntered, setFamilyNameEntered] = useState("")
    const [isBlank, setIsBlank] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
  
  const changeHandler = (event) =>{
    const {value} = event.target

    setFamilyNameEntered(value)
  }
  
  const submitHandler = (event) =>{
    event.preventDefault()
    setIsBlank(false)
    //Here we will need to create a new family profile from the name in the DB and also tie
    //that profile to the individual who created the profile so that it now shows up on their 
    //change family profile view list.

    if(familyNameEntered === ""){
        setIsBlank(true)
    }
    else{
    setIsSubmitted(true)
    console.log(familyNameEntered)

    }
  }
  const xButtonCloseHandler = () =>{
      setIsSubmitted(false)
      closeModal()
  }

  const modalChangeHandler = () =>{
    closeModal()
    openChange()
}
  return (
    <div>
      <div className="close-modal-btn" >
        <button className="close-modal-btn" onClick={xButtonCloseHandler}> X </button>
      </div>
      {!isSubmitted && <h2 className="share-modal-title">Create a New Family Profile</h2>}
      {isSubmitted && <h2 className="share-modal-title">{familyNameEntered} family profile created </h2>}

        <form>
        {isSubmitted? null : <input type="name" onChange={changeHandler} className="form-control modal-createFam" placeholder="Enter a family name" value={familyNameEntered} ></input>}
        {isBlank && <p className="invalid-msg">please enter a family name</p>}
        {isSubmitted && <a onClick={modalChangeHandler} className="create-modal-redirect-link">Would you like to change the family profile view?</a>}
      <div className="container-fluid">
        <div className="row">
          <div className="modal-btn-section">
            <button className="btn btn-secondary change-fp-btn" onClick={() => closeModal()}>{isSubmitted? "Close" : "Cancel"}</button>
            {!isSubmitted && <button className="btn btn-success change-fp-btn modal-submit-btn" onClick={submitHandler} type="submit">Create Profile</button>}
          </div>
        </div> 
      </div>
      </form>
    </div>
  )
}

export default CreateFamProfileDashboard