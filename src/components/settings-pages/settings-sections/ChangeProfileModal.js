import React from "react"
import ChangeProfileDashboard from "../ChangeProfileDashboard"

function ChangeProfileModal({closeModal, fName, lName, profileSubmit}) {
  return (
    <div className="modal-bg">
        <div className="user-profile-modal-container">
            <ChangeProfileDashboard closeModal={closeModal} profileSubmit={profileSubmit} fName={fName} lName={lName} />
        </div>
    </div>
  )
}

export default ChangeProfileModal