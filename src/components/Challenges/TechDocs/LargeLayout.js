import React from 'react';
import HeaderLeft from "./TechDocHeaderLeft"
import DocsContents from "./TechDocContent"

const LargeLayout=()=>(
    <div className="cf bg-near-white">
      <div className="fl w-50">
         <HeaderLeft/>
       </div>
      <div className="fl w-50">
         <DocsContents/>
       </div>
     </div>
)

export default LargeLayout