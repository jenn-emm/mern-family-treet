import { faCheckDouble, faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react"
import SettingsHeader from "./settings-sections/SettingsHeader";


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

function FamProfileViewDashboard({closeModal}){

  const [currentFamProfile, setCurrentFamProfile] = useState(mockUserProfile)
  
  const changeHandler = (event, index) =>{
    const {value} = event.target

    const famProfileList = [...currentFamProfile]

    famProfileList.forEach((profile)=>{
      profile.isDefault = false
        
    }) 
    
    if(famProfileList[index].isDefault === false){
      famProfileList[index].isDefault = true
    }
        setCurrentFamProfile(famProfileList)
        console.log(currentFamProfile)
  }
  
  const submitHandler = (event) =>{
    event.preventDefault()
    //Here we could do some sort of search in the database to push the updated user profile to that 
    //database with the correct is default property. We also need to double check that if we exit out
    //of the modal prior to clicking the submit btn (once the db is set up), then we should
    //still have the same original default fam profile and not one selected.
    console.log(currentFamProfile)
    closeModal()
  }

  return (
    <div>
      <div className="close-modal-btn" >
        <button className="close-modal-btn" onClick={() => closeModal()}> X </button>
      </div>
      <h2 className="modal-title">Change Family Profile View</h2>
    
      <div className="container-fluid">
        <div className="row">
        <form>
          {currentFamProfile.map((famProfile, index) =>{
            return (<div key={index} className="change-fp-list-item col-lg-12">
            <input className="change-fp-label" onChange={(event) => changeHandler(event, index)} checked={famProfile.isDefault} name="radio-group" type="radio"></input>
            <label>{famProfile.familyName}</label>
          </div>)
          })}
          <div className="modal-btn-section">
            <button className="btn btn-secondary change-fp-btn" onClick={() => closeModal()}>Cancel</button>
            <button className="btn btn-success change-fp-btn modal-submit-btn" onClick={submitHandler} type="submit">Submit</button>
          </div>
          </form>
        </div> 
      </div>
    </div>
  )
}

export default FamProfileViewDashboard