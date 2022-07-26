import React from "react"
import JoinFamProfileDashboard from "../JoinFamProfileDashboard"

function JoinFamProfileModal({closeModal, openChange}) {
  return (
    <div className="modal-bg">
        <div className="share-modal-container">
            <JoinFamProfileDashboard closeModal={closeModal} openChange={openChange} />
        </div>
    </div>
  )
}

export default JoinFamProfileModal