import React, { Component } from "react"
import SEO from "../components/SEO"
import SmallLayout from "../components/Challenges/TechDocs/SmallLayout";
import LargeLayout from "../components/Challenges/TechDocs/LargeLayout";
import "../assets/css/DocsTheme.css"

class Docs extends Component {
  
  state = {
    width: 0,
    small:false,
  }

  constructor(props){
    super(props)
    this.Container= React.createRef();
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.onHandleResize)
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.onHandleResize)
    }
  }

  onHandleResize = () => {
    const {width}= this.state
    let currentWidth = 0
    if (this.Container){
      currentWidth= this.Container.current.getBoundingClientRect().width
      console.log('====================================');
      console.log(`currnet width:${currentWidth}`);
      console.log('====================================');
      
      if (currentWidth!==width){
        this.setState({width:currentWidth,small:currentWidth<600})
      }
    }
  }

  render() {
    const { small } = this.state
    
    return (
      <div className="mt0" ref={this.Container}>
        <SEO
          title="Docs"
          keywords={[`gatsby`, `docs`, `react`, `freecodecamp`]}
        />
        {small?<SmallLayout/>:<LargeLayout/>}
      </div>
    )
  }
}
// const Docs = () => (
//   <div className="mt0">
//     <SEO title="Docs" keywords={[`gatsby`, `docs`, `react`, `freecodecamp`]} />
//     {/* <HeaderTop /> */}
//     <div className="cf bg-near-white">
//       <div className="fl w-50">
//         <HeaderLeft/>
//       </div>
//       <div className="fl w-50">
//         <DocsContents/>
//       </div>
//     </div>
//   </div>
// )

export default Docs
