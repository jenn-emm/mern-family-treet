import React, {useState} from "react"
import Button from "../multi-use/LightButton"

function LoginUserEntry() {
const [userLogin, setUserLogin] = useState({
  email:"",
  password:""
})

const [isInvalid, setIsInvalid] = useState(false)

const changeHandler = (event) =>{
  const {name, value} = event.target

  setUserLogin((prevValue) =>{
    return {
      ...prevValue,
      [name]: value
    }
  })
}

const submitHandler = (event) => {
  event.preventDefault()

  if(userLogin.email.length != 0 || userLogin.password.length != 0 ){
    console.log("This is where we would verify the validity of the entry against the DB and redirect accordingly")
    console.log(userLogin)
  }else{
    setIsInvalid(true)
  }

}
  return (
    <div className="login-register-password-bg">
      <div className="container">
        <form onSubmit={submitHandler} className="login-register-password-user-entry">
          <h1 className="login-register-password-header">Login</h1>
    
          <div className="form-group">
            <label className="entry">Email Address</label>
            <input type="email" onChange={changeHandler} name="email" value={userLogin.email} className="form-control entry login-register-entry" placeholder="name@example.com" />   
          </div>

          <div className="form-group">
            <label className="entry">Password</label>
            <input type="password" onChange={changeHandler} name="password" value={userLogin.password} className="form-control entry login-register-entry" placeholder="Password" />
            {isInvalid && <p className="invalid-msg">Please enter a valid email & password</p>}
          </div>

          <Button label="Log In" />
          {/* Here you will need to link to the Forgot Password page */}
          <a className="login-forgot-password">Forgot Password</a>

          <div className="login-register-section">
            <p className="login-register-link">Don't have an account?</p>
            {/* Here you will need to link to the Register page */}
            <a className="login-register-link">Sign Up</a> 
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default LoginUserEntry