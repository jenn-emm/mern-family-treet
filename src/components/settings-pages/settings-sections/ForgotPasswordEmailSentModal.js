import React, {useState} from "react"

function ForgotPasswordEmailSentModal({username, closeModal}) {

    const [isSubmitted, setIsSubmitted] = useState(false)

    const submitHandler = (event) =>{
        event.preventDefault()
        //Here we will set up an automated email on click to reset password.
        setIsSubmitted(true)
    } 
  return (
    <div className="modal-bg">
        <div className="forgot-pw-modal-container">
            <div className="close-modal-btn" >
                <button className="close-modal-btn" onClick={closeModal}> X </button>
            </div>
        {!isSubmitted && <form>
            <h2 className="forgot-pw-header">Forgot your Password?</h2>
            <p>We can send you a reset password email to: <br></br> {username}.</p>
            <button onClick={submitHandler} className="btn btn-success forgot-pw-btn">Send Reset Email</button>
        </form>}
        {isSubmitted && <div>
            <h2 className="forgot-pw-header">Password Reset Email Sent</h2>
            <p className="forgot-pw-subheader">We sent you an email with instructions on how to reset your password.</p>
            <p className="forgot-pw-sm">If you haven't received this email within a few minutes, please check your spam folder.</p>
            <button onClick={closeModal} className="btn btn-secondary forgot-pw-btn">Close</button>
        </div>}
        </div>
    </div>
        
  )
}

export default ForgotPasswordEmailSentModal