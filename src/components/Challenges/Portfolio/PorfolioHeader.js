import React from "react"

const PortfolioHeader = () => (
  <div
    id="header"
    className="fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l"
    style={{ backgroundColor: "#394e63", height: "6rem" }}
  >
    <nav id="navbar" className="fixed top-0 f6 fw6 ttu tracked">
      <div className="dtc v-mid tr pa3">
        <a className="link dim white dib mr3 nav-link" href="#fcc_desc">
          Description
        </a>
        <a className="link dim white dib mr3 nav-link" href="#projects">
          Some projects
        </a>
        <a className="link dim white dib mr3 nav-link" href="#contacts">
          Where i&#39;m at
        </a>
      </div>
    </nav>
  </div>
)

export default PortfolioHeader
