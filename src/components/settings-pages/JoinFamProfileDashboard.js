import React, {useState} from "react"

function JoinFamProfileDashboard({closeModal, openChange}) {
    
    const [familyCodeEntered, setFamilyCodeEntered] = useState("")
    const [isBlank, setIsBlank] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isInvalid, setIsInvalid] = useState(false)
  
  const changeHandler = (event) =>{
    const {value} = event.target

    setFamilyCodeEntered(value)
  }
  
  const submitHandler = (event) =>{
    event.preventDefault()
    setIsBlank(false)
    setIsInvalid(false)
    //Here we will need to check to confirm if the profile exists from the code

    if(familyCodeEntered === ""){
        setIsBlank(true)
    }
    //this else if is just to test if the entry is valid or not.
    else if (familyCodeEntered != "iloveroo") {
        setIsInvalid(true)
    }
    else{
        setIsSubmitted(true)
        console.log(familyCodeEntered)
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
      {!isSubmitted && <h2 className="share-modal-title">Join an Existing Family Profile</h2>}
      {isSubmitted && <h2 className="share-modal-title"> Family profile joined </h2>}

        <form>
        {isSubmitted? null : <input type="name" onChange={changeHandler} className="form-control modal-createFam" placeholder="Enter family profile code" value={familyCodeEntered} ></input>}
        {isBlank && <p className="invalid-msg">please enter a family profile code</p>}
        {isInvalid && <p className="invalid-msg"> invalid family code</p>}
        {isSubmitted && <a onClick={modalChangeHandler} className="create-modal-redirect-link">Would you like to change the family profile view?</a>}
      <div className="container-fluid">
        <div className="row">
          <div className="modal-btn-section">
            <button className="btn btn-secondary change-fp-btn" onClick={() => closeModal()}>{isSubmitted? "Close" : "Cancel"}</button>
            {!isSubmitted && <button className="btn btn-success change-fp-btn modal-submit-btn" onClick={submitHandler} type="submit">Join Profile</button>}
          </div>
        </div> 
      </div>
      </form>
    </div>
  )
}

export default JoinFamProfileDashboard