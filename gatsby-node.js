const path = require("path")

// Method call as it is in the Node API Docs
module.exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions
  // 1. Get path to template page
  const blogTemplate = path.resolve("./src/templates/blog.js")
  // 2. Get Markdown data
  const response = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // 3. Create new pages
  response.data.allContentfulBlogPost.edges.forEach((edge) => {
    const { slug } = edge.node
    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug
      }
    })
  })
}
