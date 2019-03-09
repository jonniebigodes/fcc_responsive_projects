import React from "react"
import Landing from "../components/Challenges/LandingPage/Landing"
import LandingBody from "../components/Challenges/LandingPage/LandingBody"

import SEO from "../components/SEO"
// import "../assets/css/Landing.css" // enable to see the landing page

export default () => (
  <div style={{ background: "#f1f1f2" }} id="wrapper">
    <SEO
      title="Home"
      keywords={[`gatsby`, `landing page`, `react`, `freecodecamp`]}
    />
    <Landing />
    <div id="main">
      <LandingBody />
    </div>
  </div>
)
