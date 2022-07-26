import React from "react"
import ChangePasswordDashboard from "../ChangePasswordDashboard"

function ChangePasswordModal({closeModal, username, openPWModal}) {
  return (
    <div className="modal-bg">
        <div className="user-profile-modal-container">
            <ChangePasswordDashboard username={username} openPWModal={openPWModal} closeModal={closeModal} />
        </div>
    </div>
  )
}

export default ChangePasswordModal