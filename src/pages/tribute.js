import React from "react"
import Tribute from "../components/Challenges/Tributes/Tribute"
import SEO from "../components/SEO"

const TributePage = () => (
  <div>
    <SEO
      title="Tribute"
      keywords={[`gatsby`, `tribute page`, `react`, `freecodecamp`]}
    />
    <Tribute />
  </div>
)

export default TributePage
