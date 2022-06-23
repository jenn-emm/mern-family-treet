import React from "react"
import ContactUsHeader from "./contact-us/ContactUsHeader"
import Copyright from "./multi-use/Copyright"
import Navbar from "./multi-use/Navbar"
import ContactUsUserEntry from "./contact-us/ContactUsUserEntry"

function ContactUs() {
  return (
    <div>
        <Navbar />
        <ContactUsHeader />
        <ContactUsUserEntry />
        <Copyright />
    </div>
  )
}

export default ContactUs