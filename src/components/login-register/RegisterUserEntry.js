import React, {useState} from 'react'
import Button from '../multi-use/LightButton'


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
          <div className='login-bg'>
          <div className='container'>
        <form onSubmit={submitHandler} className='login-user-entry'>
          <h1 className="login-header">Register</h1>
          
          <div className='row'>
                <div className="form-group email-section col-lg-6 col-md-12">
                <label className='entry login-label'>First Name<span>*</span></label>
                <input onChange={changeHandler} name="fname" value={userRegistration.fname} className="form-control entry login-entry" placeholder="First Name" />   
                </div>
                <div className="form-group email-section col-lg-6 col-md-12">
                <label className='entry login-label'>Last Name<span>*</span></label>
                <input onChange={changeHandler} name="lname" value={userRegistration.lname} className="form-control entry login-entry" placeholder="Last Name" />   
                </div>
            </div>

            <div className="form-group email-section">
              <label className='entry login-label'>Email Address<span>*</span></label>
              <input type="email" onChange={changeHandler} name="email" value={userRegistration.email} className="form-control entry login-entry" placeholder="name@example.com" />   
            </div>
            
            <div className="form-group password-section">
              <label className="entry login-label">Password<span>*</span></label>
              <input type="password" onChange={changeHandler} name="password" value={userRegistration.password} className="form-control entry login-entry" placeholder="Password" />
              <label className="entry login-label">Confirm Password<span>*</span></label>
              <input type="password" onChange={changeHandler} name="confirmPassword" value={userRegistration.confirmPassword} className="form-control entry login-entry" placeholder="Confirm Password" />
              {passwordUnmatched && <p className="invalid-msg">Passwords do not match</p>}
              {isInvalid && <p className="invalid-msg">Please enter a valid email & password</p>}
            </div>
            <div className="form-group password-section">
              
            </div>
          <Button label="Sign Up" />
          <div className='login-register-section'>
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