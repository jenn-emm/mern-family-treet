import React from "react"
import CreateFamProfileDashboard from '../CreateFamProfileDashboard'

function CreateFamProfileModal({closeModal, openChange}) {
  return (
  <div className="modal-bg">
      <div className="share-modal-container">
          <CreateFamProfileDashboard closeModal={closeModal} openChange={openChange} />
      </div>
  </div>
  )
}

export default CreateFamProfileModal