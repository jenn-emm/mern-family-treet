import React, {useState} from "react"
import Button from "../multi-use/LightButton"

function ForgotPasswordUserEntry() {
  const [emailEntered, setEmailEntered] = useState("")
  
  const [submitted, setSubmitted] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)  

  const changeHandler = (event) =>{
    const {value} = event.target
  
    setEmailEntered(value)
  }
  
  const submitHandler = (event) => {
    event.preventDefault()
  
    if(emailEntered.length != 0){
      console.log("This is where we would verify the validity of the entry against the DB and redirect accordingly")
      console.log(emailEntered)
      setIsInvalid(false)
      setSubmitted(true)
      setEmailEntered("")
    }else{
      setIsInvalid(true)
    }
  
  }
    return (
      <div className="login-register-password-bg">
        <div className="container">
          <form onSubmit={submitHandler} className="login-register-password-user-entry">
            <h1 className="login-register-password-header">Forgot Password</h1>
            <p className="fp-subheading">Please enter your email address, and a password reset link will be sent to you.</p>
              <div className="form-floating">
                <input name="email" type="email" onChange={changeHandler} value={emailEntered} className="fp-input form-control" placeholder="name@example.com"></input>
                <label className="fp-input">Email address</label>
              </div>
            {submitted && <p className="confirm-fp-msg">Thanks! Please check your inbox for the reset link.</p>} 
            {isInvalid && <p className="invalid-msg">Please enter a valid email.</p>}
            <Button label="Send Reset Link" />
          </form>
        </div>
      </div>
)}

export default ForgotPasswordUserEntry