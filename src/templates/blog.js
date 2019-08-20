import React from "react"
import { graphql } from "gatsby"

// https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

import Layout from "../components/layout/Layout"
import blogStyles from "./blog.module.scss"

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedAt(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = (props) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <img
          alt={node.data.target.fields.title["en-US"]}
          src={node.data.target.fields.file["en-US"].url}
        />
      )
    }
  }
  const { title, publishedAt, body } = props.data.contentfulBlogPost
  const { json } = body
  return (
    <Layout>
      <h1>{title}</h1>
      <div className={blogStyles.date}>{publishedAt}</div>
      <div className={blogStyles.body}>
        {documentToReactComponents(json, options)}
      </div>
    </Layout>
  )
}

export default Blog
