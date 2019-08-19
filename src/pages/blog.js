import React from "react"
import Layout from "../components/layout/Layout"
import { graphql, Link, useStaticQuery } from "gatsby"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedAt(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const { edges } = data.allContentfulBlogPost
  return (
    <Layout>
      <h1>Blog</h1>
      {edges.length === 0 && <p>No posts to display at the moment.</p>}
      {edges.length > 0 && (
        <ol className={blogStyles.posts}>
          {edges.map((edge) => {
            const { title, slug, publishedAt } = edge.node
            return (
              <li key={slug}>
                <div className={blogStyles.post}>
                  <Link to={`/blog/${slug}`}>
                    <h2>{title}</h2>
                  </Link>
                  <p className="date">{publishedAt}</p>
                </div>
              </li>
            )
          })}
        </ol>
      )}
    </Layout>
  )
}

export default BlogPage
