import React, { Component } from "react"
// import "../../../assets/css/Landing.css" uncomment for ladning page viewing correctly.

class Landing extends Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.resizeHeaderOnScroll)
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", this.resizeHeaderOnScroll)
    }
  }

  resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop
    const shrinkOn = 200
    const headerEl = document.getElementById("header")
    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller")
    } else {
      headerEl.classList.remove("smaller")
    }
  }

  render() {
    return (
      <div>
        <header className="sans-serif" id="header">
          <h1 id="logo">Dummy Corp</h1>
          <img
            id="header-img"
            alt="a dummy corp"
            src="http://www.gtgraphics.org/generics/99gen_satisf.jpg"
          />
          <nav id="nav-bar">
            <div className="dtc v-mid tr pa3">
              <a className=" nav-link" href="#fcc_desc">
                Description
              </a>
              <a className="nav-link" href="#why_tach">
                Why
              </a>

              <a className="nav-link" href="#fcc_pens">
                Pens
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default Landing
