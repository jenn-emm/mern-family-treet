import React, { useEffect, useState } from "react"


// Here, we are pretending that we pulled this user data from the database as the current
// family profile selected on load. We will need to utilize use effect on load at some point to 
// pull the data and current selected database on load so that one is checked. For now, it 
// the below const mockUserProfile is a placeholder for that. 
const mockUserProfile=[
    {
    familyName:"O'Meara",
    FamilyId:92417,
    isDefault:true
    }, 
    {
      familyName:"Flipperton",
      FamilyId:666,
      isDefault:false
    },
    {
      familyName:"Howard",
      FamilyId:117,
      isDefault:false
    }
  ]
  
{/* Here, in the backend, we need to have a currentView property for the user profile object 
      and when one other family profile is selected, then the currentView property
      changes to that view. And then on the home page we need to render the items in THAT family profile.*/}

function ShareFamProfileDashboard({closeModal, openChange}){

    useEffect( ()=>{
        mockUserProfile.forEach((profile) =>{
            if(profile.isDefault === true){
                setCurrentFamProfile(profile)
            }
        })
    }, [])

  const [currentFamProfile, setCurrentFamProfile] = useState({})
  const [emailEntered, setEmailEntered] = useState("")
  const [isBlank, setIsBlank] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const changeHandler = (event) =>{
    const {value} = event.target

    setEmailEntered(value)
  }
  
  const submitHandler = (event) =>{
    event.preventDefault()
    setIsBlank(false)
    //Here we will need to set up some functionality to use the familyID value, encrypt it
    //then send out that encrypted value to the email entered, with a link to prompt to login or join for free?
    //maybe have instructions on email to go to settings>join existing family profile and that is where you.
    //enter the id...
    if(emailEntered === ""){
        setIsBlank(true)
    }
    else{
    setIsSubmitted(true)
    console.log(emailEntered)
    console.log(currentFamProfile.FamilyId)
    emailEntered("")
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
      <h2 className="share-modal-title">Share the {currentFamProfile.familyName} Family Profile</h2>
        <p>Enter their email, and we will send an access code to join.</p>
        <form>
        {isSubmitted? null : <input type="email" onChange={changeHandler} className="form-control modal-email" placeholder="email address" value={emailEntered} autoComplete></input>}
        {isBlank && <p className="invalid-msg">please enter an email</p>}
        {isSubmitted && <p className="modal-confirm">Email sent! Please have your family member check their email.</p>}
        <a onClick={modalChangeHandler} className="modal-redirect-link">not the right family profile?</a>
      <div className="container-fluid">
        <div className="row">
          <div className="modal-btn-section">
            <button className="btn btn-secondary change-fp-btn" onClick={() => closeModal()}>{isSubmitted? "Close" : "Cancel"}</button>
            <button className="btn btn-success change-fp-btn modal-submit-btn" onClick={submitHandler} type="submit">Submit</button>
          </div>
        </div> 
      </div>
      </form>
    </div>
  )
}

export default ShareFamProfileDashboard