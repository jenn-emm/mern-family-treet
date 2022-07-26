import React from "react";
import ShareFamProfileDashboard from "../ShareFamProfileDashboard"

function ShareFamProfileModal({closeModal, openChange}) {
  return (
<div className="modal-bg">
    <div className="share-modal-container">
        <ShareFamProfileDashboard closeModal={closeModal} openChange={openChange} />
    </div>
</div>
  )
}

export default ShareFamProfileModal