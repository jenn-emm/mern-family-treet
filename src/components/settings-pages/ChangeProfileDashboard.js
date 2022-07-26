import React, {useState} from "react"

function ChangeProfileDashboard({closeModal, fName, lName, profileSubmit}) {

    const [userInfo, setUserInfo] = useState({
        fName:fName,
        lName:lName
    })
    const submitHandler = (event) => {
        event.preventDefault()
        profileSubmit(userInfo)
        closeModal()
    }

    const changeHandler = (event) => {
        const {value, name} = event.target

        setUserInfo( (prevValue) =>{
            return {
                ...prevValue,
                [name]:value
            }
        })
    }

  return (
    <div>
      <div className="close-modal-btn" >
        <button className="close-modal-btn" onClick={closeModal}> X </button>
      </div>
      <h2 className="share-modal-title">Edit Profile Info</h2>
        <form>
        <div className="form-group change-profile-label">
            <label className="form-label">First Name</label>
            <input name="fName" value={userInfo.fName} onChange={changeHandler} type="text" className="form-control"></input>
        </div>
        <div className="form-group change-profile-label">
            <label className="form-label">Last Name</label>
            <input name="lName" value={userInfo.lName} onChange={changeHandler} type="text" className="form-control"></input>
        </div>
        
      <div className="container-fluid">
        <div className="row">
          <div className="modal-btn-section change-user-modal-btn-section">
            <button className="btn btn-secondary change-fp-btn" onClick={closeModal}>Cancel</button>
            <button className="btn btn-success change-fp-btn modal-submit-btn" onClick={submitHandler} type="submit">Submit</button>
          </div>
        </div> 
      </div>
      </form>
    </div>
  )
}

export default ChangeProfileDashboard