import React from "react"
import PersonalPorfolio from "../components/Challenges/Portfolio/PortfolioContent"
import PortfolioHeader from "../components/Challenges/Portfolio/PorfolioHeader"
import SEO from "../components/SEO"

export default () => (
  <div>
    <SEO
      title="portfolio"
      keywords={[`gatsby`, `portfolio`, `react`, `freecodecamp`]}
    />
    <PortfolioHeader />
    <PersonalPorfolio />
  </div>
)
