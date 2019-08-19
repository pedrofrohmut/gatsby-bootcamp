import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = (props) => {
  const { html } = props.data.markdownRemark
  const { title, date } = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1>{title}</h1>
      <div className="date">{date}</div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default Blog
