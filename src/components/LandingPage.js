import React from "react"
import Navbar from "./multi-use/Navbar";
import Intro from "./landing-page/Intro";
import Features from "./landing-page/Features";
import CallToAction from "./landing-page/CallToAction";
import Copyright from "./multi-use/Copyright";

function LandingPage() {
  return (
    <div>
        <Navbar />
        <Intro />
        <Features />
        <CallToAction />
        <Copyright />
    </div>
  )
}

export default LandingPage