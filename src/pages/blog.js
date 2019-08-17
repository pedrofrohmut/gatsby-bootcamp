import React from "react"
import Layout from "../components/layout/Layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = function () {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will be show here later on.</p>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          const { title, date } = edge.node.frontmatter
          return (
            <li key={title}>
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
