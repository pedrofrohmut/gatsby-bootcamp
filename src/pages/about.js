import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/Layout"

const AboutPage = function() {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I currently learning full-time react + c#</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
