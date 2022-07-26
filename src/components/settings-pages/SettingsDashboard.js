import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPeopleGroup, faUsers, faUserPen, faPersonCirclePlus, faPeopleArrowsLeftRight} from "@fortawesome/free-solid-svg-icons"
import SettingsHeader from "./settings-sections/SettingsHeader";
import ChangeFamProfileViewModal from "./settings-sections/ChangeFamProfileViewModal";
import ShareFamProfileModal from "./settings-sections/ShareFamProfileModal";
import CreateFamProfileModal from "./settings-sections/CreateFamProfileModal";
import JoinFamProfileModal from "./settings-sections/JoinFamProfileModal";


function SettingsDashboard() {

    const [famViewModal, setFamViewModal] = useState(false)
    const [famShareModal, setFamShareModal] = useState(false)
    const [famCreateModal, setFamCreateModal] = useState(false)
    const [joinFamModal, setJoinFamModal] = useState(false)

    const famViewModalHandler = () =>{
        setFamViewModal(!famViewModal)
    }

    const shareFamilyProfileHandler = () =>{
        setFamShareModal(!famShareModal)
    }

    const createFamilyProfileHandler = () =>{
        setFamCreateModal(!famCreateModal)
    }

    const joinFamilyProfileHandler = () =>{
        setJoinFamModal(!joinFamModal)
    }

  return (
    <div className="col-lg-10 user-dashboard">
       <SettingsHeader title="Settings"/>
       {famViewModal && <ChangeFamProfileViewModal closeModal={famViewModalHandler} />}
       {famShareModal && <ShareFamProfileModal openChange={famViewModalHandler} closeModal={shareFamilyProfileHandler} />}
       {famCreateModal && <CreateFamProfileModal openChange={famViewModalHandler} closeModal={createFamilyProfileHandler} />}
       {joinFamModal && <JoinFamProfileModal openChange={famViewModalHandler} closeModal={joinFamilyProfileHandler} />}

       <hr></hr>
        <div className="container-fluid">
            <div className="row settings-row">
                <div className="col-lg-4 options-div">
                    <a className="settings-option" onClick={famViewModalHandler}><FontAwesomeIcon className="fa-icon fa-fw settings-icon" icon={faUsers} /> Change Family Profile View</a>
                </div>
                <div className="col-lg-4 options-div">
                    <a className="settings-option" onClick={createFamilyProfileHandler}><FontAwesomeIcon className="fa-icon fa-fw settings-icon" icon={faPeopleGroup} /> Create New Family Profile</a>
                </div>
                <div className="col-lg-4 options-div">
                <a className="settings-option" onClick={joinFamilyProfileHandler}><FontAwesomeIcon className="fa-icon fa-fw settings-icon" icon={faPeopleArrowsLeftRight} /> Join Existing Family Profile</a>
                </div>
                
            </div>
            <div className="row settings-row">
            <div className="col-lg-4 options-div">
                    <a className="settings-option" onClick={shareFamilyProfileHandler}><FontAwesomeIcon className="fa-icon fa-fw settings-icon" icon={faPersonCirclePlus} /> Share Family Profile</a>
                </div>
                <div className="col-lg-4 options-div">
                    <a className="settings-option"><FontAwesomeIcon className="fa-icon fa-fw settings-icon" icon={faUserPen} /> View / Edit Your Profile</a>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default SettingsDashboard