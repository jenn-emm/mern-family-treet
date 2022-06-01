import React, {useState} from 'react'
import Button from '../multi-use/LightButton'

function ResetPasswordUserEntry() {
    const [passwordEntered, setPasswordEntered] = useState({
        password:"",
        confirm:""
    })
  
    const [isInvalid, setIsInvalid] = useState(false) 
    const [isBlank, setIsBlank] = useState(false)  
    const [submitted, setSubmitted] = useState(false)
  
    const changeHandler = (event) =>{
      const {value, name} = event.target
    
      setPasswordEntered((prevValue) =>{
          return {
              ...prevValue,
              [name]:value
          }
      })
    }
    
    const submitHandler = (event) => {
      event.preventDefault()
    
      if(passwordEntered.password.length != 0 && passwordEntered.confirm.length != 0){
          if(passwordEntered.password === passwordEntered.confirm){
            console.log("This is where we would verify the validity of the entry against the DB and redirect accordingly")
            console.log(passwordEntered)
            setIsInvalid(false)
            setIsBlank(false)
            setSubmitted(true)
            setPasswordEntered({
                password:"",
                confirm:""
            })
          }
        else{
            setIsBlank(false)
            setIsInvalid(true)
        }
      }else{
        setIsBlank(true)
      }
    
    }
      return (
        <div className='login-bg'>
        <div className='container'>
      <form onSubmit={submitHandler} className='login-user-entry'>
        <h1 className="login-header">Reset Password</h1>
        
        <div className="form-group password-section">
        <label className="entry login-label">Password</label>
        <input type="password" onChange={changeHandler} name="password" value={passwordEntered.password} className="form-control entry login-entry" placeholder="Password" />
      </div>
      <div className="form-group password-section">
        <label className="entry login-label">Confirm Password</label>
        <input type="password" onChange={changeHandler} name="confirm" value={passwordEntered.confirm} className="form-control entry login-entry" placeholder="Confirm Password" />
        {isInvalid && <p className="invalid-msg">Passwords do not match.</p>}
        {isBlank && <p className="invalid-msg">Please enter a valid password.</p>}
        {submitted && <p className="confirm-msg">Your password has been reset.<a className="login-register-link"> Login</a></p>}
      </div>
        <Button label="Reset Password" />
        
      </form>
      </div>
      </div>
  )}

export default ResetPasswordUserEntry