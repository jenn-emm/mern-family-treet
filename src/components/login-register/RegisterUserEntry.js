import React, {useState} from "react"
import Button from "../multi-use/LightButton"


function RegisterUserEntry() {
    const [userRegistration, setUserRegistration] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        confirmPassword:""
      })
      
    const [isInvalid, setIsInvalid] = useState(false)

    const [passwordUnmatched, setPasswordUnmatched] = useState(false)
      
    const changeHandler = (event) =>{
      const {name, value} = event.target
      
      setUserRegistration((prevValue) =>{
        return {
          ...prevValue,
          [name]: value
        }
      })
    }
      
    const submitHandler = (event) => {
      event.preventDefault()
    
      if(userRegistration.email.length != 0 || userRegistration.password.length != 0 || userRegistration.fname.length != 0 || userRegistration.lname.length != 0 || userRegistration.confirmPassword.length != 0){
        if(userRegistration.password === userRegistration.confirmPassword){
          console.log("This is where we would send the data off to the database & redirect to user home page!")
          console.log(userRegistration)
          setIsInvalid(false)
        }else{
            setIsInvalid(false)
          setPasswordUnmatched(true)
        }
      }else{
        setIsInvalid(true)
      }
    }
        
    return (
      <div className="login-register-password-bg">
        <div className="container">
          <form onSubmit={submitHandler} className="login-register-password-user-entry">
            <h1 className="login-register-password-header">Register</h1>
          
            <div className="row">
              <div className="form-group col-lg-6 col-md-12">
              <label className="entry">First Name<span className="required-span">*</span></label>
              <input onChange={changeHandler} name="fname" value={userRegistration.fname} className="form-control entry login-register-entry" placeholder="First Name" />   
              </div>
              <div className="form-group col-lg-6 col-md-12">
              <label className="entry">Last Name<span className="required-span">*</span></label>
              <input onChange={changeHandler} name="lname" value={userRegistration.lname} className="form-control entry login-register-entry" placeholder="Last Name" />   
              </div>
            </div>

            <div className="form-group">
              <label className="entry">Email Address<span className="required-span">*</span></label>
              <input type="email" onChange={changeHandler} name="email" value={userRegistration.email} className="form-control entry login-register-entry" placeholder="name@example.com" />   
            </div>
            
            <div className="form-group">
              <label className="entry">Password<span className="required-span">*</span></label>
              <input type="password" onChange={changeHandler} name="password" value={userRegistration.password} className="form-control entry login-register-entry" placeholder="Password" />
              <label className="entry">Confirm Password<span className="required-span">*</span></label>
              <input type="password" onChange={changeHandler} name="confirmPassword" value={userRegistration.confirmPassword} className="form-control entry login-register-entry" placeholder="Confirm Password" />
              {passwordUnmatched && <p className="invalid-msg">Passwords do not match</p>}
              {isInvalid && <p className="invalid-msg">Please enter a valid email & password</p>}
            </div>

            <Button label="Sign Up" />

            <div className="login-register-section">
              <p className="login-register-link mt-3">Already have an account?</p>
              {/* Here you will need to link to the Login page */}
              <a className="login-register-link">Sign In</a> 
            </div>
          </form>
        </div>
      </div>
    )
  }
      
      export default RegisterUserEntry 