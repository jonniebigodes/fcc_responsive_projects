import React from "react"
import SurveyForm from "../components/Challenges/Survey/SurveyForm"
import Layout from "../components/layout"

import SEO from "../components/SEO"

const Survey = () => (
  <div>
    <Layout>
      <SEO
        title="Survey"
        keywords={[`gatsby`, `survey form page`, `react`, `freecodecamp`]}
      />
      <SurveyForm />
    </Layout>
  </div>
)

export default Survey
