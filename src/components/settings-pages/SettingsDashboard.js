import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPeopleGroup, faUsers, faUserPen, faPersonCirclePlus, faPeopleArrowsLeftRight} from "@fortawesome/free-solid-svg-icons"
import SettingsHeader from "./settings-sections/SettingsHeader";


function SettingsDashboard() {
  return (
    <div className="col-lg-10 user-dashboard">
       <SettingsHeader title="Settings"/>
       <hr></hr>
        <div className="container-fluid">
            <div className="row settings-row">
                <div className="col-lg-4 options-div">
                    <a className="settings-option"><FontAwesomeIcon className="fa-icon fa-fw settings-icon" icon={faUsers} /> Change Family Profile View</a>
                </div>
                <div className="col-lg-4 options-div">
                    <a className="settings-option"><FontAwesomeIcon className="fa-icon fa-fw settings-icon" icon={faPeopleGroup} /> Create New Family Profile</a>
                </div>
                <div className="col-lg-4 options-div">
                <a className="settings-option"><FontAwesomeIcon className="fa-icon fa-fw settings-icon" icon={faPeopleArrowsLeftRight} /> Join Existing Family Profile</a>
                </div>
                
            </div>
            <div className="row settings-row">
            <div className="col-lg-4 options-div">
                    <a className="settings-option"><FontAwesomeIcon className="fa-icon fa-fw settings-icon" icon={faPersonCirclePlus} /> Share Family Profile</a>
                </div>
                <div className="col-lg-4 options-div">
                    <a className="settings-option"><FontAwesomeIcon className="fa-icon fa-fw settings-icon" icon={faUserPen} /> Edit Your Profile</a>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default SettingsDashboard