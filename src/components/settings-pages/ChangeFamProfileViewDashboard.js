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

function FamProfileViewDashboard() {

  const [currentFamProfile, setCurrentFamProfile] = useState(mockUserProfile)
  
  const changeHandler = (event, index) =>{
    const {value} = event.target

    const famProfileList = [...currentFamProfile]
    
    if(famProfileList[index].isDefault === true){
      famProfileList[index].isDefault = false
    }
    else if(famProfileList[index].isDefault === false){
      famProfileList[index].isDefault = true
    }
        setCurrentFamProfile(famProfileList)
        console.log(currentFamProfile)
  }
  
  const submitHandler = (event) =>{
    event.preventDefault()
    //Here we could do some sort of search in the database to find the profile with the same
    //name as the name const and replace with true?
    //we would still also need to find the one that is currently true and change it to false.
    console.log(currentFamProfile)
  }

  return (
    <div className="col-lg-10 user-dashboard">
    <SettingsHeader title="Change Family Profile View"/>
    <hr></hr>
    <div className="container-fluid">
      <div className="row">
      <form>
        {currentFamProfile.map((famProfile, index) =>{
          return (<div key={index} className="col-lg-12">
          <input onChange={(event) => changeHandler(event, index)} checked={famProfile.isDefault} value={famProfile.isDefault} name={famProfile.familyName} type="checkbox"></input>
          <label>{famProfile.familyName}</label>
        </div>)
        })}
        <button onClick={submitHandler} type="submit">Submit</button>
        </form>
      </div> 
    </div>
    </div>
  )
}

export default FamProfileViewDashboard