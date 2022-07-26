import React, {useState} from "react"
import background from "../../images/salad-food.jpg";
import LightButton from "../multi-use/LightButton";

function ContactUsUserEntry() {

  const [userEntry, setUserEntry] = useState({
    email:"",
    message:""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const changeHandler = (event) =>{
    const {name, value} = event.target;
    setUserEntry((prevValue) =>{
      return {
        ...prevValue,
        [name]: value
      }
    })
  } 

{/*Here we need to instead of console logging, need to either send it to an email or to an
admin interface.*/}
  const submitHandler = (event) =>{
    event.preventDefault()

    setIsSubmitted(true)
    console.log(userEntry)
    setUserEntry({
      email:"",
      message:""
    })
  }

  return (
  <div>
    <form className="needs-validation user-entry-section" style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"}} 
        onSubmit={submitHandler}>
      <div className="col-lg-6 col-md-12">
          <div className="form-group mb-3">
              <label className="entry">Your Email Address</label>
              <input onChange={changeHandler} value={userEntry.email} name="email" className="entry form-control mt-1" placeholder="name@example.com" required></input>
          </div>
      </div>
      
      <div className="col-lg-6 col-md-12">
        <div className="form-group mb-3">
          <label className="entry">Message</label>
          <textarea onChange={changeHandler} value={userEntry.message} name="message" className="entry form-control mt-1" maxLength={400} rows="4" placeholder="(maximum 400 characters)" required></textarea>
        </div>
        {isSubmitted && <p className="confirm-msg">Thanks! We will reach out to you soon.</p>}
        <LightButton label="Submit" />
      </div>
    </form>
  </div>
  )
}

export default ContactUsUserEntry