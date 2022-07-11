import React from "react"
import ChangeFamProfileViewDashboard from "../ChangeFamProfileViewDashboard"

function ChangeFamProfileViewModal({closeModal}) {
  return (
    <div className="modal-bg">
        <div className="modal-container">
            <ChangeFamProfileViewDashboard closeModal={closeModal} />
        </div>
    </div>
  )
}

export default ChangeFamProfileViewModal