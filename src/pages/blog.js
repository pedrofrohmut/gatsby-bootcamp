import React from "react"
import Layout from "../components/layout/Layout"
import { graphql, Link, useStaticQuery } from "gatsby"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
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
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          const { title, date } = edge.node.frontmatter
          const { slug } = edge.node.fields
          return (
            <li key={title}>
              <div className={blogStyles.post}>
                <Link to={`/blog/${slug}`}>
                  <h2>{title}</h2>
                </Link>
                <p className="date">{date}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
