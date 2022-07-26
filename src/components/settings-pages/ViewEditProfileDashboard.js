import React, { useState } from "react"
import SettingsHeader from "./settings-sections/SettingsHeader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons"
import ChangePasswordModal from "./settings-sections/ChangePasswordModal";
import ChangeProfileModal from "./settings-sections/ChangeProfileModal";
import ForgotPasswordEmailSentModal from "./settings-sections/ForgotPasswordEmailSentModal";

//to mimic pulling the user info from the database.
const mockProfileInfo = {
    firstName: "Jennifer",
    lastName: "O'Meara",
    username:"jenn_emm@live.com",
    password:"iloveroo"
}
function ViewEditProfileDashboard() {

    const [editIsHovered, setEditIsHovered] = useState(false)
    const [changePWModal, setChangePWModal] = useState(false)
    const [passwordModal, setPasswordModal] = useState(false)
    const [changeProfileModal, setChangeProfileModal] = useState(false)
    const [userProfileInfo, setUserProfileInfo] = useState({
        fName: mockProfileInfo.firstName,
        lName: mockProfileInfo.lastName,
    })

    const hoverOnHandler = () =>{
        setEditIsHovered(true)
    } 
    const hoverOffHandler = () =>{
        setEditIsHovered(false)
    }

    const changePWModalHandler = () =>{
        setChangePWModal(!changePWModal)
    }

    const changeProfileModalHandler = () =>{
        setChangeProfileModal(!changeProfileModal)
    }

    const forgotPasswordModalHandler = () =>{
        setPasswordModal(!passwordModal)
    }
    //here, we are replacing the state on the user page. not sure if this will be necessary.
    //at some point one of the steps will be to send the data to the database on submission.
    //at the point of submission. the page may automatically show a new name OR
    //this state change below might still be necessary. TBD!
    const userProfileInfoSubmit = (userInfo) =>{
        setUserProfileInfo(userInfo)
    }
    
  return (
    <div className="col-lg-10 user-dashboard">
        {changePWModal && <ChangePasswordModal openPWModal={forgotPasswordModalHandler} username={mockProfileInfo.username} closeModal={changePWModalHandler} />}
        {changeProfileModal && <ChangeProfileModal profileSubmit={userProfileInfoSubmit} fName={userProfileInfo.fName} lName={userProfileInfo.lName} closeModal={changeProfileModalHandler} />}
        {passwordModal && <ForgotPasswordEmailSentModal username={mockProfileInfo.username} closeModal={forgotPasswordModalHandler} />}
       <SettingsHeader title="Your Profile"/>
       <hr></hr>
       <div className="container-fluid user-card-section">
            <div className="row">
                <div className="col-lg-6 user-profile-card-header">
                    <p>Profile Info</p>
                </div>
                <div className="col-lg-6 user-profile-card-edit">
                    <a onClick={changeProfileModalHandler}><FontAwesomeIcon value={editIsHovered} style={{color: editIsHovered && "#9cb59c"}} onMouseEnter={hoverOnHandler} onMouseLeave={hoverOffHandler} className="fa-icon fa-fw" icon={faPenToSquare} /></a>
                </div>
                <hr className="card-hr"></hr>
            </div>
            <div className="row">
                <div className="col-lg-3 card-item-label">
                <label>First Name:</label>
                </div>
                <div className="col-lg-3 user-name">
                <p>{userProfileInfo.fName}</p>
                </div>
                <div className="col-lg-3 card-item-label">
                <label>Last Name:</label>
                </div>
                <div className="col-lg-3 user-name">
                <p>{userProfileInfo.lName}</p>
                </div>
            </div>
        </div>

        <div className="container-fluid user-card-section">
            <div className="row">
                <div className="col-lg-6 user-profile-card-header">
                    <p>Account Info</p>
                </div>
                <div className="col-lg-6 user-profile-card-link">
                    <a onClick={changePWModalHandler}>Change Password</a>
                </div>
                <hr className="card-hr"></hr>
            </div>
            <div className="row">
                <div className="col-lg-3 card-item-label">
                <label>Email / Username:</label>
                </div>
                <div className="col-lg-3 user-name">
                <p>{mockProfileInfo.username}</p>
                </div>
                <div className="col-lg-3 card-item-label">
                <label>Password:</label>
                </div>
                <div className="col-lg-3 user-name">
                <p>*****</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewEditProfileDashboard