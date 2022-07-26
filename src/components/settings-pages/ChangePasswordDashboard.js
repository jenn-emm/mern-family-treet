import React, { useState } from "react"

const mockDBPassword = "iloveroo"

function ChangePasswordDashboard({closeModal, username, openPWModal}) {

  const [mismatchedPw, setMismatchedPw] = useState(false)
  const [oldAndNewMatch, setOldAndNewMatch] = useState(false)
  const [oldPwIncorrect, setOldPwIncorrect] = useState(false)
  const [oldIsBlank, setOldIsBlank] = useState(false)
  const [firstIsBlank, setFirstIsBlank] = useState(false)
  const [confirmIsBlank, setConfirmIsBlank] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [oldPw, setOldPw] = useState("")
  const [newPw, setNewPw] = useState({
    firstEntry:"",
    confirmEntry:""
  })

  const oldPwChangeHandler = (event) =>{
    setOldPw(event.target.value)
  }

  const newPwChangeHandler = (event) =>{
    const {name, value} = event.target

    setNewPw((prevValue) =>{
      return {
        ...prevValue,
        [name]:value
      }
    })
  }

  const forgotPwHandler = () =>{
    closeModal()
    openPWModal()
  }

  const submitHandler = (event) =>{
    event.preventDefault()
    setMismatchedPw(false)
    setOldPwIncorrect(false)
    setOldIsBlank(false)
    setOldAndNewMatch(false)
    setFirstIsBlank(false)
    setConfirmIsBlank(false)

    if(oldPw === ""){
      //if the old pw is blank
      setOldIsBlank(true)
    }
    else if(oldPw === newPw.firstEntry){
      //if the old password is the same as the new one
      setOldAndNewMatch(true)
    }
    else if(newPw.firstEntry === ""){
      //if the first entry is blank
      setFirstIsBlank(true)
    }
    else if(newPw.confirmEntry === ""){
      //if the second entry is blank
      setConfirmIsBlank(true)
    }
    //if the old password matches the 
    else if(oldPw === mockDBPassword){
      if(newPw.firstEntry === newPw.confirmEntry){
        console.log(newPw)
        setIsSubmitted(true)
        setOldPw("")
        setNewPw({
          firstEntry:"",
          confirmEntry:""
        })
        //here is where the password is changed and confirmed in the db. then is submitted = true
      }
      else if (newPw.firstEntry != newPw.confirmEntry){
        setMismatchedPw(true)
      }
    }
    else if(oldPw != newPw.firstEntry){
      //if the old pw and old pw entered doesnt match
      setOldPwIncorrect(true)
    }
  }

  return (
    <div>
      <div className="close-modal-btn" >
        <button className="close-modal-btn" onClick={closeModal}> X </button>
      </div>
      <h2 className="share-modal-title">Change Password</h2>
        <form>
        <div className="form-group change-profile-label">
            <label className="form-label">Current Password</label>
            <input name="oldPw" value={oldPw} onChange={oldPwChangeHandler} type="password" className="form-control"></input>
            <a onClick={forgotPwHandler} className="user-profile-card-link">Forgot your password?</a>
            {/* here on click of a tag, we need to open modal for password reset */}
            {oldIsBlank && <p className="invalid-msg">The current password field is required.</p>}
            
        </div>
        <div className="form-group change-profile-label">
            <label className="form-label">New Password</label>
            <input name="firstEntry" value={newPw.firstEntry} onChange={newPwChangeHandler} type="password" className="form-control"></input>
            {firstIsBlank && <p className="invalid-msg">The new password field is required.</p>}
        </div>
        <div className="form-group change-profile-label">
            <label className="form-label">Confirm New Password</label>
            <input name="confirmEntry" value={newPw.confirmEntry} onChange={newPwChangeHandler} type="password" className="form-control"></input>
            {confirmIsBlank && <p className="invalid-msg">The confirm password field is required.</p>}
        </div>
        {mismatchedPw && <p className="invalid-msg">The new passwords do not match.</p>}
        {oldPwIncorrect && <p className="invalid-msg">Current password is incorrect.</p>}
        {oldAndNewMatch && <p className="invalid-msg">New password cannot be the same as current password.</p>}
        {isSubmitted && <p className="pw-success-msg">Password successfully changed.</p>}
      <div className="container-fluid">
        <div className="row">
          <div className="modal-btn-section change-user-modal-btn-section">
            <button className="btn btn-secondary change-fp-btn" onClick={closeModal}>{isSubmitted? "Close" : "Cancel"}</button>
            {!isSubmitted && <button className="btn btn-success change-fp-btn modal-submit-btn" onClick={submitHandler} type="submit">Submit</button>}
          </div>
        </div> 
      </div>
      </form>
    </div>
  )
}

export default ChangePasswordDashboard